import prisma from "@/libs/prismadb";

export async function getAllMarques() {
    try {
        const allMarques = await prisma.marque.findMany({});
        return allMarques;
    } catch (error) {
        console.error(error);
        return [];
    }
}
