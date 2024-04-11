import React, { useState } from "react";

interface ProductProps {
  id_produit: number;
  marque: string;
  title: string;
  piece: string;
  poids: string;
  description: string;
  image: string;
  prix: string;
  prix_kg: string;
  prix_litre: string;
  categorie_1: string;
  categorie_2: string;
}

const Product: React.FC<ProductProps> = ({
  id_produit,
  marque,
  title,
  piece,
  description,
  image,
  prix,
  poids,
  prix_litre,
  prix_kg,
  categorie_1,
  categorie_2,
}) => {
  const [favori, setFavori] = useState(false);
  const [isFavorite, setIsFavorite] = useState("black");
  const [isVisible, setIsVisible] = useState("hidden");
  const [count, setCount] = useState(0);

  const handleFavori = () => {
    setFavori(!favori)
  }

  const handleFavoriteClick = (event: any) => {
    const favoriteProduct = isFavorite === "black" ? "red" : "black";
    setIsFavorite(favoriteProduct);
  };
  function handleAddClick(event: any) {
    event.target ? setIsVisible("flex") : setIsVisible("hidden");
    setCount(count + 1);
  }

  const handleRemoveClick = (event: any) => {
    event.target ? (count != 0 ? setCount(count - 1) : null) : setCount(0);
    count <= 1 ? setIsVisible("hidden") : null;
  };

  return (
    <div className="flex bg-white rounded-3xl shadow-gray-700 shadow-[5px_5px_5px_2px_rgba(0,0,0,0.5)] m-4 p-2">
      <img src={image} className="w-80 h-80 hidden md:block"></img>
      <div>
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
          <img src={image} className="w-40 h-40 md:hidden"></img>
          <div>
            <p className=" font-LucioleBold text-xl md:hidden">
              {marque + " " + title}
            </p>
            <div className="hidden md:block my-4">
              <p className=" font-LucioleBold text-3xl">
                {marque + " " + title}
              </p>
              <h3 className="text-2xl my-2">Description :</h3>
              <p className="px-1 text-xl">{description}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-evenly items-center md:justify-normal mb-4">
            <p className="border-gray-300 border rounded-full text-center py-0.5 px-3 md:mx-4">
              {piece}
            </p>
            <p className="border-gray-300 border rounded-full text-center py-0.5 px-3 md:mx-4">
              {poids}
            </p>
            <p className="bg-bleuClaire rounded-full text-bleuFonce text-center py-0.5 px-3 md:mx-4">
              {categorie_2}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex justify-around md:justify-between item-center w-full">
            <div className="flex flex-col items-center">
              <p className=" font-LucioleBold text-3xl md:text-4xl">{prix}</p>
              <p className=" text-xs md:text-base">{prix_kg}</p>
            </div>
            <div className="flex justify-end">
              <div className="flex">
                <button className="md:hidden" onClick={handleFavoriteClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill={isFavorite}
                    className="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                    />
                  </svg>
                </button>
                <button
                  className={`hidden md:block bg-${favori ? "red-500" : "black"} rounded-full h-10 px-2 text-white md:mt-5`}
                  onClick={handleFavori}
                >
                  {favori ? "Dans vos favoris" : "Ajouter au favori"}
                </button>
              </div>
              <div className="flex ml-2">
                <button className="-mt-1.5 md:hidden" onClick={handleAddClick}>
                  <img src="/svg/add.svg" alt="" />
                </button>
                <button className="hidden md:block bg-vert rounded-full h-10 px-2 text-white md:mt-5">
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden my-2">
          <h3 className="text-center text-xl my-2">Description :</h3>
          <p className="px-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
