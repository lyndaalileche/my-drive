import getProduitWithMarqueAndCategorie from "@/api/getProduitWithMarqueAndCategorie";
import CarteProduitListe from "../carteProduitListe";

export default async function MainProduit(){
    const productsData = await getProduitWithMarqueAndCategorie();
    const productsWithParsedDecimal = productsData.map((product: any) => ({
        ...product,
        marque: product.Marque.titre,
        prix: (product.prix + " € ").replace(".",","),
        poids: product.poids + " kg ",
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

    return (
        <div>
            {productsWithParsedDecimal.map((item: any) => (
                <CarteProduitListe id={item.id_produit} marque={item.marque} title={item.titre} image={item.image}  piece={item.piece} poids={item.poids} prix_kg_ou_litre={item.prix_kg_ou_litre} categorie_1= {item.categorie_1} categorie_2={item.categorie_2} prix={item.prix}/>
            ))}
        </div>
    );
}
