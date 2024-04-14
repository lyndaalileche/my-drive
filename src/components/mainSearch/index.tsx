"use client";

import { Categorie, Marque, Produit, Produit_Categorie } from "@prisma/client";
import CarteProduitListe from "../carteProduitListe";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../context/categorieFilterContext";

type Products = {
    produits: Produit[];
    marque: Marque[];
    produit_categorie: Produit_Categorie[];
    categorie: Categorie[];
};

export default function MainSearch() {
    const [produits, setProduits] = useState<Products[]>([]);
    const [index, setIndex] = useState<any>(0);

    const { filter }: any = useContext(FilterContext);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/products");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setProduits(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    console.log(filter);
    
    const filteredData = filter
    ? (filter === "Tout les produits" ? produits : produits.filter((item: any) => {
        return item.Produit_Categorie.some((pc : any) => pc.Categorie.name === filter);
        //   return item.Produit_Categorie.map((pc : any) => pc.Categorie.type === 2 ? pc.Categorie.name.some((type: any) => type.type.name === filter);
      }))
    : produits;

    // console.log(filteredData);

    const colors = ["bg-bleuClaire", "bg-bleuFonce"];

    return (
        <div className="flex flex-col justify-center">
            <div></div>
            <div className="my-10">
                <div className="flex flex-wrap">
                    {filteredData.map((item: any, index: number) => ( 
                        <div
                            key={index}
                            className={`${colors[Math.floor(index / 4) % 2]} p-4 m-2 `}
                        >
                            <CarteProduitListe
                                key={item.id_produit}
                                id={item.id_produit}
                                marque={item.Marque.titre}
                                title={item.titre}
                                piece={"1 pièce"}
                                image={item.image}
                                poids={item.poids + " g"}
                                prix_kg_ou_litre={
                                    item.price_kg
                                        ? item.price_kg.replace(".", ",") +
                                          " €/kg"
                                        : item.price_liter.replace(".", ",") +
                                          " €/l"
                                }
                                categorie_1={item.Produit_Categorie.map(
                                    (item: any) =>
                                        item.Categorie.type === 1
                                            ? item.Categorie.name
                                            : null
                                )}
                                categorie_2={item.Produit_Categorie.map(
                                    (item: any) =>
                                        item.Categorie.type === 2
                                            ? item.Categorie.name
                                            : null
                                )}
                                prix={item.prix.replace(".", ",") + " €"}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
