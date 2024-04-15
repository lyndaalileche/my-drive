"use client";

import Link from "next/link";
import CarteProduitListe from "../carteProduitListe";
import { useEffect, useState } from "react";
import { Categorie, Marque, Produit, Produit_Categorie } from "@prisma/client";
import BarSearch from "../barSearch";

type Products = {
    produits: Produit[];
    marque: Marque[];
    produit_categorie: Produit_Categorie[];
    categorie: Categorie[];
};

export default function MainAccueil() {
    const [produits, setProduits] = useState<Products[]>([]);
    const [dataAllCategories, setDataAllCategories] = useState<any>([]);


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

        useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/categories");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setDataAllCategories(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    // console.log(dataAllCategories.map((item : any) => item.id_categorie));

    const idCatageories = dataAllCategories.map((item : any) => item.id_categorie);

    const idAllProducts = idCatageories.filter((item : any) => item === 25);

    const idAllProductsPromotion = idCatageories.filter((item : any) => item === 22);

    const shuffledProducts = produits.sort(() => Math.random() - 0.5);

    const randomProductsPromotionList = shuffledProducts.slice(0, 4);

    const randomProductsList = shuffledProducts.slice(0, 8);

    return (
        <div className="flex flex-col justify-center">
            <div
                className="bg-cover bg-center bg-no-repeat h-32 sm:bg-cover sm:bg-center sm:h-60 lg:bg-top lg:h-96 2xl:bg-cover"
                style={{ backgroundImage: `url(/img/backgroundRabbit.png)` }}
            ><BarSearch/></div>
            <div>
                <div className="flex justify-center items-center text-bleuClaire text-center uppercase my-4 min-w-440">
                    <div className="w-16 lg:w-20 xl:w-24">
                        <img className="rotate-45" src="/img/cloche.png" />
                    </div>
                    <h1 className="text-xl min-w-440 lg:text-2xl xl:text-3xl">
                        C'est Paques !
                        <br />
                        Chocolat en folie!
                    </h1>
                    <div className="w-16 lg:w-20 xl:w-24">
                        <img className="rotate+45" src="/img/cloche.png" />
                    </div>
                </div>
            </div>
            <div className="my-10">
                <p className="text-red-700 text-center text-lg uppercase lg:text-xl xl:text-2xl">
                    !!! Promo !!!
                </p>
                <div className="flex flex-col items-center bg-bleuFonce p-6">
                    <div className="flex flex-wrap justify-center items-center mb-2">
                        {randomProductsPromotionList.map((item: any) => (
                            <CarteProduitListe
                                key={item.id_produit}
                                id_produit={item.id_produit}
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
                        ))}
                    </div>
                    <div className="flex justify-center my-4 sm:hidden">
                        <Link
                            href={`/produits/${idAllProductsPromotion}`}
                            className="bg-white text-bleuFonce rounded-full shadow-gray-700 shadow-[5px_5px_5px_2px_rgba(0,0,0,0.5)] cursor-pointer p-2 text-center hover:scale-105 hover:transition duration-700 ease-linear"
                        >
                            Voir toutes les promotions
                        </Link>
                    </div>
                    <div className="hidden sm:flex sm:justify-end">
                        <Link
                            href={`/produits/${idAllProductsPromotion}`}
                            className=" text-white p-2 hover:bg-white hover:text-bleuFonce hover:rounded-full hover:shadow-gray-700 hover:shadow-[5px_5px_5px_2px_rgba(0,0,0,0.5)] hover:transition duration-700 ease-linear"
                        >
                            Voir toutes les promotions
                        </Link>
                    </div>
                </div>
            </div>
            <div className="my-10">
                <p className="text-center text-lg lg:text-xl xl:text-2xl">
                    Tous les articles
                </p>
                <div className="flex flex-col items-center bg-bleuClaire p-6">
                    <div className="flex flex-wrap justify-center items-center mb-2 max-w-screen-2xl">
                        {randomProductsList.map((item: any) => (
                            <CarteProduitListe
                                key={item.id_produit}
                                id_produit={item.id_produit}
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
                        ))}
                    </div>
                    <div className="flex justify-center my-4 sm:hidden">
                        <Link
                            href={`/produits/${idAllProducts}`}
                            className="bg-white text-bleuFonce rounded-full shadow-gray-700 shadow-[5px_5px_5px_2px_rgba(0,0,0,0.5)] cursor-pointer p-2 text-center hover:scale-105 hover:transition duration-1000 ease-linear"
                        >
                            Voir tous les articles
                        </Link>
                    </div>
                    <div className="hidden sm:flex justify-end">
                        <Link
                            href={`/produits/${idAllProducts}`}
                            className=" text-white p-2 hover:bg-white hover:text-bleuFonce hover:rounded-full hover:shadow-gray-700 hover:shadow-[5px_5px_5px_2px_rgba(0,0,0,0.5)] hover:transition duration-1000 ease-linear"
                        >
                            Voir tous les articles
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
