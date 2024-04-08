import prisma from "@/libs/prismadb";


export default async function getProduitWithMarqueAndCategorie() {
  try {
    const produits = await prisma.produit.findMany({
      include: {
        Marque: true,
        Produit_Categorie: {
          include: {
            Categorie: true
          }
        }
      }
    });
    return produits;
    

  } catch (error) {
    console.error(error);
    return []
  }
}

