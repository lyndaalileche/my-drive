"use client";
import { useEffect, useState } from "react";
import { Produit } from "@prisma/client";
import CarteProduitDetail from "../carteProduitDetail";
import CarteProduitListe from "../carteProduitListe";

export default function MainProduitDetail({
  params,
}: {
  params: { id_produit: number };
}) {
  const [produit, setProduit] = useState<any>([]);
  const [produitSimilaire, setProduitSimilaire] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const filteredProduits = data.filter(
          (produit: Produit) => produit.id_produit === params.id_produit
        );
        setProduit(filteredProduits);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [params.id_produit]);

  useEffect(() => {
    if (produit.length > 0) {
      const fetchData = async () => {
        try {
          const response = await fetch("/api/products");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          const categorie2ProduitActuel = produit[0].Produit_Categorie.map(
            (pc: any) => pc.Categorie.type === 2 ? pc.Categorie.name : null
          );
          const produitsSimilaires = data.filter((p: any) => {
            const categorie2Produit = p.Produit_Categorie.map(
              (pc: any) => pc.Categorie.type === 2 ? pc.Categorie.name : null
            );
            return (
              p.id_produit !== params.id_produit &&
              JSON.stringify(categorie2Produit) === JSON.stringify(categorie2ProduitActuel)
            );
          });
          setProduitSimilaire(produitsSimilaires);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [produit]);
  

  return (
    <div className="mt-10">
      {produit.map((prod: any) => (
        <CarteProduitDetail
          key={prod.id_produit}
          id_produit={prod.id_produit}
          marque={prod.Marque.titre}
          title={prod.titre}
          piece={"1 pièce"}
          description={prod.description}
          image={prod.image}
          poids={prod.poids + " g"}
          prix_kg={prod.price_kg + " €/kg"}
          prix_litre={prod.prix_litre}
          categorie_1={prod.Produit_Categorie.map((prodCat: any) =>
            prodCat.Categorie.type === 1 ? prodCat.Categorie.name : null
          )}
          categorie_2={prod.Produit_Categorie.map((prodCat: any) =>
            prodCat.Categorie.type === 2 ? prodCat.Categorie.name : null
          )}
          prix={prod.prix.replace(".", ",") + " €"}
        />
      ))}
     {produitSimilaire.length > 0 && (
      <div className="flex flex-col items-center bg-bleuFonce p-6 mt-10">
        <h3 className="font-LucioleBold text-xl text-white -mt-2 md:text-2xl">
          Articles Similaires
        </h3>
        <div className="flex flex-wrap justify-center items-center mb-2">
          {produitSimilaire.map((item: any) => (
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
                  ? item.price_kg.replace(".", ",") + " €/kg"
                  : item.price_liter.replace(".", ",") + " €/l"
              }
              categorie_1={item.Produit_Categorie.map((item: any) =>
                item.Categorie.type === 1 ? item.Categorie.name : null
              )}
              categorie_2={item.Produit_Categorie.map((item: any) =>
                item.Categorie.type === 2 ? item.Categorie.name : null
              )}
              prix={item.prix.replace(".", ",") + " €"}
            />
          ))}
        </div>
      </div>
    )}
    </div>
  );
}
