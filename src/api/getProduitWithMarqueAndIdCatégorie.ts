import prisma from "@/libs/prismadb";

export default async function getProduitWithMarqueAndIdCategorie(id_categorie?: number) {
  let queryOptions = {};

  if (id_categorie) {
    queryOptions = {
      where: {
        Produit_Categorie: {
          some: {
            id_categorie: id_categorie,
          },
        },
      },
    };
  }

  try {
    const produits = await prisma.produit.findMany({
      ...queryOptions,
      include: {
        Marque: true,
        Produit_Categorie: {
          include: {
            Categorie: true,
          },
        },
      },
    });
    return produits;
  } catch (error) {
    console.error(error);
    return [];
  }
}