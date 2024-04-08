import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import cors from 'cors';

const app = express();
const prisma = new PrismaClient();
app.use(cors());
app.use(express.json());

app.post('/create-user', async (req: Request, res: Response) => {
  const { name, last_name, email, password } = req.body;

  try {
    const existingUser = await prisma.user_Customer.findFirst({
      where: {
        email: email,
      },
    });
    if (existingUser) {
      // Si l'utilisateur existe déjà, renvoyer une erreur
      return res.status(400).send("Un utilisateur avec cet email existe déjà.");
    }

    // Si non, hasher le mot de passe et créer un nouvel utilisateur
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user_Customer.create({
      data: {
        name,
        last_name,
        email,
        password: hashedPassword,
      },
    });

    // Exclure le mot de passe de la réponse pour des raisons de sécurité
    const { password: _, ...userWithoutPassword } = newUser;
    res.json(userWithoutPassword);
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
    res.status(500).send("Erreur interne du serveur");
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
