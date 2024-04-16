import prisma from "@/libs/prismadb";

export default async function getProduitWithMarqueAndCategorieDetail(
  id_produit: number
) {
  try {
    const produits = await prisma.produit.findFirst({
      where: {
        id_produit: id_produit,
      },
      include: {
        Marque: true,
        Produit_Categorie: {
          include: {
            Categorie: true,
          },
        },
      },
    });
    console.log("Get", produits);
    return produits;
  } catch (error) {
    console.error(error);
    return [];
  }
}
