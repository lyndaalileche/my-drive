"use client"

import React, { useState } from 'react';
import Deco from '../deconnexion';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Ajouté pour inclure les cookies dans la requête et la réponse
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Échec de la connexion. Vérifiez votre email et votre mot de passe.');
      }

      // Aucun besoin de traiter le token JWT ici, car il est géré par les cookies HttpOnly
      console.log('Connexion réussie');
      // Gérer ici la logique post-connexion (comme la redirection ou la mise à jour de l'état de l'application)
    } catch (error) {
      if (error instanceof Error) {
        console.error('Erreur de connexion:', error.message);
        setErrorMessage(error.message);
      } else {
        console.error('Erreur de connexion', error);
        setErrorMessage("Une erreur s'est produite lors de la tentative de connexion.");
      }
    }
  };


  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit">Connexion</button>
    </form>
  );
};

export default LoginForm;
