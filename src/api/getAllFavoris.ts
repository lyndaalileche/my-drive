import prisma from "@/libs/prismadb";


export async function getAllFavoris() {
    try {
        const allFavoris = await prisma.favori.findMany({});
        return allFavoris;
     
    }
    catch (error) {
        console.error(error);
        return []
        
    }
}