import prisma from "@/libs/prismadb";
import bcrypt from 'bcrypt'; 

type UserLoginResponse = {
    id_user: number;
  name: string;
  last_name: string;
  email: string;
};

export async function loginUser(email: string, password: string): Promise<UserLoginResponse | null> {
  try {
    const userCustomer = await prisma.user_Customer.findFirst({
      where: {
        email: email,
      },
    });

    // Vérification si l'utilisateur existe et si le mot de passe correspond
    if (userCustomer && await bcrypt.compare(password, userCustomer.password)) {
      // Le mot de passe est correct, préparer les données de réponse sans inclure le mot de passe
      const { password: _, ...userResponseData } = userCustomer;
      return userResponseData;
    } else {
      // Soit l'utilisateur n'existe pas, soit le mot de passe ne correspond pas
      console.log("L'adresse e-mail ou le mot de passe est incorrect.");
      return null;
    }
  } catch (error) {
    console.error("Erreur lors de la tentative de connexion de l'utilisateur :", error);
    return null;
  }
}
