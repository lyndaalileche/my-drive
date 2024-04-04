import prisma from "@/libs/prismadb";


export async function getAllPaniers() {
    try {
        const allPaniers = await prisma.panier.findMany({});
        return allPaniers;
     
    }
    catch (error) {
        console.error(error);
        return []
        
    }
}