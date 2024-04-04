import React from 'react';
import Image from 'next/image';

interface CategoryProps {
  id: number;
  type: number; // Peut-être un identifiant pour le type de catégorie
  image: string; // L'URL de l'image représentant la catégorie
  name: string; // Le nom de la catégorie
}

const Category: React.FC<CategoryProps> = ({ image, name }) => {
  return (
    <div className="category">
      <h2>{
      name}</h2>
      <Image src={image} alt={name} width={300} height={200} />
    </div>
  );
};

export default Category;