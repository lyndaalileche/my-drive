import React, { useState, FormEvent, ChangeEvent } from "react";

interface UserData {
  name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Inscription: React.FC = () => {
  const initialUserData: UserData = {
    name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [userData, setUserData] = useState<UserData>(initialUserData);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
  const [passwordError, setPasswordError] = useState<string>("");
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);

  const handleTermsChange = () => {
    setAcceptedTerms(!acceptedTerms); // Inverse l'état du bouton lorsque cliqué
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const validatePassword = (password: string) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setPasswordsMatch(true);
    setPasswordError("");

    if (userData.password !== userData.confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    if (!validatePassword(userData.password)) {
      setPasswordError(
        "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre."
      );
      if (!acceptedTerms) {
        alert("Veuillez accepter les conditions générales d'utilisation.");
        return;
      }
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("La création de l’utilisateur a échoué");
      }
      const newUser: UserData = await response.json();
      console.log("Utilisateur créé avec succès :", newUser);
      alert("Inscription réussie!");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la création de l’utilisateur.");
    }
  };

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-xl font-semibold mb-4 text-center text-turquoise">
        Votre inscription
      </h1>
      <p className="text-gray-700 text-center mt-4">
        Déjà inscrit ?{" "}
        <a href="/" className="text-turquoise">
          Cliquez ici
        </a>
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Autres champs de formulaire ici */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="acceptTerms"
            checked={acceptedTerms}
            onChange={handleTermsChange}
            className="mr-2"
          />
          <label htmlFor="acceptTerms" className="text-sm text-gray-700">
            {acceptedTerms
              ? "Utiliser client"
              : "Ne pas utiliser client"}{" "}
            {/* Texte inversé du bouton */}
            <a href="/conditions-generales" className="text-turquoise">
              conditions générales d&apos;utilisation
            </a>
          </label>
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="w-full bg-vert text-white px-4 py-1 rounded-2xl shadow-md"
          >
            Valider votre inscription
          </button>
          <div className="w-20"></div>
          <button
            type="button"
            className="bg-white text-black px-4 py-1 rounded-2xl border border-black shadow-md"
          >
            Annuler
          </button>
        </div>
      </form>
    </main>
  );
};

export default Inscription;
