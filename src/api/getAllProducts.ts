import prisma from "@/libs/prismadb";


export async function getAllProducts() {
    try {
        const allProducts = await prisma.produit.findMany({});
        return allProducts;
     
    }
    catch (error) {
        console.error(error);
        return []
        
    }
}