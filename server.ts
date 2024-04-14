import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv-safe';
import 'dotenv/config'; 

dotenv.config();

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in .env file");
}

const app = express();
const prisma = new PrismaClient();

app.use(cors({
  origin: ['http://localhost:3000'], 
  credentials: true,
}));
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
      return res.status(400).send("Un utilisateur avec cet email existe déjà.");
    }

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

app.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user_Customer.findFirst({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send("Email ou mot de passe incorrect.");
    }

    const token = jwt.sign(
      { userId: user.id_user },
      process.env.JWT_SECRET as string,
      { expiresIn: '1d' }
    );

    // Envoyer le token dans un cookie HttpOnly
    res.cookie('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000,
    }).send('Connexion réussie');

  } catch (error) {
    console.error("Erreur lors de la tentative de connexion:", error);
    res.status(500).send("Erreur interne du serveur");
  }
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
