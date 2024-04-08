import React from "react";
import Image from "next/image";

interface ProductProps {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    weight: number;
    pricePerKg: number;
    pricePerLiter: number;
    brandId: number;
    onAddToCart: (productId: number) => void;
}

const Product: React.FC<ProductProps> = ({
    id,
    title,
    description,
    image,
    price,
    weight,
    pricePerKg,
    pricePerLiter,
    brandId,
    onAddToCart,
}) => {
    const handleAddToCart = () => {
        onAddToCart(id);
    };

    return (
        <div className="product">
            <Image src={image} alt={title} width={300} height={200} />
            <div className="product-details">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>Prix: {price} €</p>
                <p>Poids: {weight} kg</p>
                <p>Prix par kg: {pricePerKg} €</p>
                <p>Prix par litre: {pricePerLiter} €</p>
                <button onClick={handleAddToCart}>Ajouter au panier</button>
            </div>
        </div>
    );
};

export default Product;
