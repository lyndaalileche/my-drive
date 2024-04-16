"use client";

import React, { useState } from "react";
const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Ajouté pour inclure les cookies dans la requête et la réponse
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(
          "Échec de la connexion. Vérifiez votre email et votre mot de passe."
        );
      }

      // Aucun besoin de traiter le token JWT ici, car il est géré par les cookies HttpOnly
      console.log("Connexion réussie");
      // Gérer ici la logique post-connexion (comme la redirection ou la mise à jour de l'état de l'application)
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erreur de connexion:", error.message);
        setErrorMessage(error.message);
      } else {
        console.error("Erreur de connexion", error);
        setErrorMessage(
          "Une erreur s'est produite lors de la tentative de connexion."
        );
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-LucioleBold text-2xl -mt-2 mb-3">Connexion</h2>
      <div className="w-full flex justify-center lg:justify-end ">
        <a href="/mdpOublier" className="text-sm">Mot de passe oublier ?</a>
      </div>
      <form
        className="flex flex-col items-center justify-center mt-3 md:w-full"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col items-start mb-5 md:mb-14 w-full">
          <label className="font-LucioleBold" htmlFor="email">
            Adresse mail :
          </label>
          <input
            className="w-full px-2 py-1 bg-white border-2 rounded-full shadow-gray-700 shadow-[3px_3px_0_1px_rgba(0,0,0,0.5)]"
            placeholder="Adresse mail"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col items-start mb-5 md:mb-14 w-full">
          <label className="font-LucioleBold" htmlFor="password">
            Mot de passe :
          </label>
          <input
            className="w-full px-2 py-1 bg-white border-2 rounded-full shadow-gray-700 shadow-[3px_3px_0_1px_rgba(0,0,0,0.5)]"
            placeholder="Mot de passe"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        <div className="flex flex-col md:flex md:flex-row-reverse w-full justify-center items-center md:justify-between">
          <button
            className="w-full bg-vert text-white px-2 py-1 md:ml-4 rounded-2xl shadow-gray-700 shadow-[3px_3px_0_1px_rgba(0,0,0,0.5)]"
            type="submit"
          >
            Connexion
          </button>
          <a
            className="font-LucioleRegular w-full mt-4 md:mt-0 px-2 py-1 md:mr-4 bg-white text-bleuFonce rounded-full shadow-gray-700 shadow-[3px_3px_0_1px_rgba(0,0,0,0.5)]"
            href="/inscription"
          >
            Inscription
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
