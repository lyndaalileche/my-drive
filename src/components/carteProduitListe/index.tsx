"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CarteProduitListe(props: any) {
  const [isFavorite, setIsFavorite] = useState("black");
  const [isVisible, setIsVisible] = useState("hidden");
  const [count, setCount] = useState(0);

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
    <>
      <div className="flex flex-col bg-white text-xs rounded-3xl shadow-gray-700 shadow-[5px_5px_5px_2px_rgba(0,0,0,0.5)] m-4 p-2 h-[180px] w-[300px] hover:scale-105 hover:transition duration-700 ease-linear">
        <div className="flex w-full h-32">
          <div className="flex flex-col items-center w-1/2">
            <Link href={`/produit/${props.id_produit}`}>
              <img src={props.image} className="object-contain"></img>
            </Link>
          </div>
          <div className="flex flex-col ml-4 w-1/2">
            <Link href={`/produit/${props.id_produit}`}>
              <p className="h-10">{props.marque + " " + props.title}</p>
            </Link>
            <div className="flex flex-col">
              <p className="border-gray-300 border rounded-full text-center my-1 w-1/2">
                {props.piece}
              </p>
              <div className="flex items-center my-1">
                <p className="border-gray-300 border rounded-full text-center mr-0.5 px-1 w-1/2 h-auto">
                  {props.poids}
                </p>
                <p className="ml-0.5 my-1 w-1/2">{props.prix_kg_ou_litre}</p>
              </div>
            </div>
            <div className="bg-bleuClaire rounded-full text-bleuFonce text-center my-1 w-3/5">
              {props.categorie_2}
            </div>
          </div>
        </div>
        <div className="flex items-center w-full mt-1">
          <div className="flex justify-center w-1/2">
            <p className="text-sm">{props.prix}</p>
          </div>
          <div className=" flex justify-end w-1/2">
            <div className="flex justify-end">
              <button onClick={handleFavoriteClick}>
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
            </div>
            <div className="flex justify-end ml-1">
              <button
                className={`mr-1 ${isVisible}`}
                onClick={handleRemoveClick}
              >
                <img src="/svg/remove.svg" alt="" />
              </button>
              <div
                className={`border px-2 py-1 w-1/3 text-center ${isVisible}`}
              >
                {count}
              </div>
              <button className="-mt-1.5" onClick={handleAddClick}>
                <img src="/svg/add.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
