import React, { useState, useEffect, ChangeEvent } from 'react';
import { Produit, Marque, Categorie } from '@prisma/client';

interface Product {
  id_produit: number;
  titre: string;
  description: string;
}

interface Products {
  produits: Produit[];
  marques: Marque[];
  categories: Categorie[];
}

const BarSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [products, setProducts] = useState<Products | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Products = await response.json(); // Assurez-vous que le type de données correspond à Products
        console.log("Données produits récupérées depuis l'API :", data);
        setProducts(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (products && products.produits && searchTerm.trim() !== '') {
      const filteredProducts = products.produits.filter((product) =>
        product.titre.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log("Produits filtrés :", filteredProducts);
      setSearchResults(filteredProducts);
    } else {
      console.log("Réinitialisation des résultats de recherche");
      setSearchResults([]);
    }
  }, [products, searchTerm]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value.trim();
    console.log("Nouveau terme de recherche :", newSearchTerm);
    setSearchTerm(newSearchTerm);
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
