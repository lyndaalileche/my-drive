import React, { useState, useEffect, ChangeEvent } from 'react';
import { Categorie, Marque, Produit, Produit_Categorie } from '@prisma/client';

// Définir le type Product
interface Product {
  id_produit: number;
  titre: string;
  description: string;
  // Ajouter d'autres propriétés au besoin
}
type Products = {
  produits: Produit[];
  marque: Marque[];
  produit_categorie: Produit_Categorie[];
  categorie: Categorie[];
};

// Définir le composant BarSearch
const BarSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [produits, setProduits] = useState<Products[]>([]);

  // Récupérer les produits côté client
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

  // useEffect(() => {

  //   const filteredProducts = produits.filter((product : any) =>
  //     product.titre.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setSearchResults(filteredProducts);
  // }, [produits, searchTerm]);

 


  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); // Mettre à jour le terme de recherche
  };

  return (
    <div className="container mx-auto mt-20 text-center">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Rechercher un produit..."
        className="px-2 py-1 text-sm border rounded-2xl mb-4"
      />
      <ul>
        {searchResults.map((product) => (
          <li key={product.id_produit} className="border rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold">{product.titre}</h2>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BarSearch;
