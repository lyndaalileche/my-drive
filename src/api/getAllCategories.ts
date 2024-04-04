import prisma from "@/libs/prismadb";


export async function getAllCategories() {
    try {
        const allCategories = await prisma.categorie.findMany({});
        return allCategories;
     
    }
    catch (error) {
        console.error(error);
        return []       
    }
}