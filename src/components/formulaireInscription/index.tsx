'use client'
import React, { useState, FormEvent, ChangeEvent } from 'react';

// Définition du type pour le state de l'utilisateur
interface UserData {
  name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const Inscription: React.FC = () => {
    const initialUserData: UserData = {
      name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

  const [userData, setUserData] = useState<UserData>(initialUserData);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const handleTermsChange = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    // Vérifier si les mots de passe correspondent
    if (userData.password !== userData.confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    // Vérifier si les conditions générales sont acceptées
    if (!acceptedTerms) {
      alert('Veuillez accepter les conditions générales d\'utilisation.');
      return;
    }

    // Réinitialiser le message d'erreur des mots de passe
    setPasswordsMatch(true);

    // Ajouter ici la logique pour gérer la soumission du formulaire
    console.log('Données utilisateur soumises :', userData);

    // Réinitialiser les données du formulaire après la soumission
    setUserData(initialUserData);
    setAcceptedTerms(false); // Réinitialiser l'acceptation des conditions
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      
      <h2 className="text-xl font-semibold mb-4 text-center text-turquoise">Votre inscription</h2>
      <p className="text-gray-700 text-center mt-4">
        Déjà inscrit ? <a href="/connexion" className="text-turquoise">Cliquez ici</a>
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Prenom:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:border-vert bordure to-black"
          />
        </div>
        <div>
          <label htmlFor="last_name" className="block mb-1">Nom de famille :</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={userData.last_name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:border-vert bordure to-black"
            />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:border-vert bordure to-black"
            />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:border-vert bordure to-black"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block mb-1">Confirmer le mot de passe :</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:border-vert bordure to-black"
          />
          {!passwordsMatch && (
            <p className="text-red-500">Les mots de passe ne correspondent pas.</p>
          )}
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="acceptTerms"
            checked={acceptedTerms}
            onChange={handleTermsChange}
            className="mr-2"
          />
          <label htmlFor="acceptTerms" className="text-sm text-gray-700">
            J&apos;accepte les <a href="/conditions-generales" className="text-turquoise">conditions générales d&apos;utilisation</a>
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
    </div>
  );
};

export default Inscription;
