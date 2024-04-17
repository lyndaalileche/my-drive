"use client"
import React, { useState } from "react";

const MonProfil: React.FC = () => {
  const [civility, setCivility] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [confirmEmail, setConfirmEmail] = useState<string>("");

  const handleCivilityChange = (selectedCivility: string) => {
    setCivility(selectedCivility);
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleConfirmEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Civilité sélectionnée :", civility);
    console.log("Prénom :", firstName);
    console.log("Nom :", lastName);
    console.log("Email :", email);
    console.log("Confirmation Email :", confirmEmail);
  };

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-xl font-semibold mb-4 text-center text-black">
        Mon Profil
      </h1>
      <div className="border border-black p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Section 1: Civilité */}
          <div className="mb-4">
            <label htmlFor="civility" className="block mb-1">
              Civilité :
            </label>
            <div className="flex items-center">
              <label htmlFor="madame" className="flex items-center mr-4">
                <input
                  type="radio"
                  id="madame"
                  name="civility"
                  value="Madame"
                  onChange={() => handleCivilityChange("Madame")}
                />
                Madame
              </label>
              <label htmlFor="monsieur" className="flex items-center">
                <input
                  type="radio"
                  id="monsieur"
                  name="civility"
                  value="Monsieur"
                  onChange={() => handleCivilityChange("Monsieur")}
                />
                Monsieur
              </label>
            </div>
          </div>

          {/* Section 2: Prénom */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-1">
              Prénom :
            </label>
            <div className="w-full px-3 py-2 border rounded-3xl focus:outline-none shadow-gray-700 shadow-[5px_5px_5px_2px_rgba(0,0,0,0.5)] text-gray-500">
              <p>Maxime</p>
            </div>
          </div>

          {/* Section 3: Nom */}
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-1">
              Nom :
            </label>
            <div className="w-full px-3 py-2 border rounded-3xl focus:outline-none shadow-gray-700 shadow-[5px_5px_5px_2px_rgba(0,0,0,0.5)] text-gray-500">
              <p>Dupont</p>
            </div>
          </div>

          {/* Section 4: Adresse Email et Confirmation */}
          <div>
            <label htmlFor="email" className="block mb-1">
              Adresse Email :
            </label>
            <div className="w-full px-3 py-2 border rounded-3xl focus:outline-none shadow-gray-700 shadow-[5px_5px_5px_2px_rgba(0,0,0,0.5)] text-gray-500">
              <p>test.dupont@gmail.com</p>
            </div>
          </div>

          {/* Section 5: Mot de passe oublié */}
          <div className="mb-4 ">
            <a href="/mdpModifier" className="text-sm text-red-600">
              Changer mon mot de passe
            </a>
          </div>

          {/* Boutons Annuler et Valider (inversés) */}
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-4 mt-6">
            <button
              type="button"
              className="bg-white text-turquoise px-11 py-1.5 rounded-lg border border-black shadow-md w-full md:w-auto mt-4 md:mt-0"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-vert text-white px-14 py-1.5 rounded-lg shadow-md w-full md:w-auto"
            >
              Valider
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default MonProfil;
