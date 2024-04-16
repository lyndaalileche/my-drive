"use client";


import CarteProduitListe from "../carteProduitListe";
import { useContext, useEffect, useState } from "react";
import { Categorie, Marque, Produit, Produit_Categorie } from "@prisma/client";
import { FilterContext } from "../context/categorieFilterContext";
import Pagination from "../pagination";

type Products = {
    produits: Produit[];
    marque: Marque[];
    produit_categorie: Produit_Categorie[];
    categorie: Categorie[];
};

export default function MainProduits({ urlValue }: any) {
    const [produits, setProduits] = useState<Products[]>([]);
    const [allProducts, setAllProducts] = useState<Products[]>([]);
    const { filter }: any = useContext(FilterContext);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [productsPerPage] = useState<number>(16);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/products");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                
                setAllProducts(data)

                const filteredByCategorie = data.filter((item: any) =>
                    item.Produit_Categorie.some(
                        (pc: Produit_Categorie) => pc.id_categorie == urlValue
                    )
                );
                const filteredByTitle = data.filter((item: any) =>
                    item.titre.toLowerCase().includes(urlValue.toLowerCase())
                );
                if (filteredByCategorie.length > 0) {
                    setProduits(filteredByCategorie);
                } else if (filteredByTitle.length > 0) {
                    setProduits(filteredByTitle);
                }
                else if (filter) {
                    console.log(filter);
                    setProduits(allProducts)
                }

            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [urlValue]);



    function showTitlePages({ value }: any) {
        if (urlValue === "25") {
            return (
                <h1 className="text-xl lg:text-2xl xl:text-3xl">
                    Tous les articles
                </h1>
            );
        }
        if (urlValue === "22") {
            return (
                <h1 className="text-red-700 uppercase text-xl lg:text-2xl xl:text-3xl">
                    !!! Promo !!!
                </h1>
            );
        }
        return null;
    }

    const filteredData = filter
        ? filter === "Tout les produits"
            ? produits
            : produits.filter((item: any) => {
                  return item.Produit_Categorie.some(
                      (pc: any) => pc.Categorie.name === filter
                  );
              })
        : produits;


    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredData.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="flex flex-col justify-center items-center mt-10 w-full">
            <div className="flex justify-center my-6">
                {urlValue && <div>{showTitlePages({ urlValue })}</div>}
            </div>
            <div className="flex flex-wrap justify-center items-center max-w-screen-2xl">
                {currentProducts.map((item: any, index: number) => (
                    <div
                        key={item.id_produit}
                        className={`flex my-4
                        ${
                            (index % 8 < 4
                                ? "bg-bleuClaire "
                                : "bg-bleuFonce ") +
                            (index % 4 < 2
                                ? "min-[664px]:bg-bleuClaire "
                                : "min-[664px]:bg-bleuFonce ") +
                            (index % 6 < 3
                                ? "min-[996px]:bg-bleuClaire "
                                : "min-[996px]:bg-bleuFonce ") +
                            (index % 8 < 4
                                ? "min-[1328px]:bg-bleuClaire "
                                : "min-[1328px]:bg-bleuFonce ")
                        }`}
                    >
                        <CarteProduitListe
                            id={item.id_produit}
                            marque={item.Marque.titre}
                            title={item.titre}
                            piece={"1 pièce"}
                            image={item.image}
                            poids={item.poids + " g"}
                            prix_kg_ou_litre={
                                item.price_kg
                                    ? item.price_kg.replace(".", ",") + " €/kg"
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
            <Pagination
                itemsPerPage={productsPerPage}
                totalItems={filteredData.length}
                paginate={paginate}
            />
        </div>
    );
}
