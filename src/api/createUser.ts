import prisma from "@/libs/prismadb";
import { User_Customer } from '@prisma/client'; 

type UserData = {
    name: string;
    last_name: string;
    email: string;
    password: string; // Le mot de passe est optionnel dans votre modèle
  };
export async function createUserCustomer(userData: UserData): Promise<User_Customer | null> {
    try {
        const newUserCustomer = await prisma.user_Customer.create({
            data: userData,
        });
        return newUserCustomer;
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur :", error);
        return null;
    }
}