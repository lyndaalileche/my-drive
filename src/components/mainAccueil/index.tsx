import Link from "next/link";
import getProduitWithMarqueAndCategorie from "@/api/getProduitWithMarqueAndCategorie";
import CarteProduitListe from "../carteProduitListe";

export default async function MainAccueil() {
    const productsData = await getProduitWithMarqueAndCategorie();
    const productsWithParsedDecimal = productsData.map((product: any) => ({
        ...product,
        marque: product.Marque.titre,
        prix: (product.prix + " € ").replace(".",","),
        poids: product.poids + " g ",
        prix_kg_ou_litre: product.price_kg
            ? (product.price_kg + " €/kg ").replace(".",",")
            : (product.price_liter + " €/l").replace(".",","),
        piece: " 1 pièce",
        categorie_1: product.Produit_Categorie.map((item: any) =>
            item.Categorie.type === 1 ? item.Categorie.name : null
        ),
        categorie_2: product.Produit_Categorie.map((item: any) =>
            item.Categorie.type === 2 ? item.Categorie.name : null
        ),
    }));

    const shuffledProducts = productsWithParsedDecimal.sort(
        () => Math.random() - 0.5
    );

    const randomProductsPromotionList = shuffledProducts.slice(0, 4);

    const randomProductsList = shuffledProducts.slice(0, 8);

    return (
        <div className="flex flex-col justify-center">
            <div
                className="bg-cover bg-center bg-no-repeat h-32 sm:bg-cover sm:bg-center sm:h-60 lg:bg-top lg:h-96 2xl:bg-cover"
                style={{ backgroundImage: `url(/img/backgroundRabbit.png)` }}
            ></div>
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
            <div className="my-10 ">
                <p className="text-red-700 text-center text-lg uppercase lg:text-xl xl:text-2xl">
                    !!! Promo !!!
                </p>
                <div className="flex flex-col items-center bg-bleuFonce p-6">
                    <div className="flex flex-wrap justify-center items-center mb-2">
                        {randomProductsPromotionList.map((item: any) => (
                            <CarteProduitListe
                                id={item.id_produit}
                                marque={item.marque}
                                title={item.titre}
                                image={item.image}
                                piece={item.piece}
                                poids={item.poids}
                                prix_kg_ou_litre={item.prix_kg_ou_litre}
                                categorie_1={item.categorie_1}
                                categorie_2={item.categorie_2}
                                prix={item.prix}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center my-4 sm:hidden">
                        <Link
                            href={"./promotions"}
                            className="bg-white text-bleuFonce rounded-full shadow-gray-700 shadow-[5px_5px_5px_2px_rgba(0,0,0,0.5)] cursor-pointer p-2 text-center hover:scale-105 hover:transition duration-700 ease-linear"
                        >
                            Voir toutes les promotions
                        </Link>
                    </div>
                    <div className="hidden sm:flex sm:justify-end">
                        <Link
                            href={"./promotions"}
                            className=" text-white p-2 hover:bg-white hover:text-bleuFonce hover:rounded-full hover:shadow-gray-700 hover:shadow-[5px_5px_5px_2px_rgba(0,0,0,0.5)] hover:transition duration-700 ease-linear"
                        >
                            Voir toutes les promotions
                        </Link>
                    </div>
                </div>
            </div>
            <div className="my-10">
                <p className="text-center text-lg lg:text-xl xl:text-2xl">Tous les articles</p>
                <div className="flex flex-col items-center bg-bleuClaire p-6">
                    <div className="flex flex-wrap justify-center items-center mb-2 max-w-screen-2xl">
                        {randomProductsList.map((item: any) => (
                            <CarteProduitListe
                                id={item.id_produit}
                                marque={item.marque}
                                title={item.titre}
                                image={item.image}
                                piece={item.piece}
                                poids={item.poids}
                                prix_kg_ou_litre={item.prix_kg_ou_litre}
                                categorie_1={item.categorie_1}
                                categorie_2={item.categorie_2}
                                prix={item.prix}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center my-4 sm:hidden">
                        <Link
                            href={"./produits"}
                            className="bg-white text-bleuFonce rounded-full shadow-gray-700 shadow-[5px_5px_5px_2px_rgba(0,0,0,0.5)] cursor-pointer p-2 text-center hover:scale-105 hover:transition duration-1000 ease-linear"
                        >
                            Voir tous les articles
                        </Link>
                    </div>
                    <div className="hidden sm:flex justify-end">
                        <Link
                            href={"./produits"}
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
