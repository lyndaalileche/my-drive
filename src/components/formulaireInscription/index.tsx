"use client"
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    // Vérifier si les mots de passe correspondent
    if (userData.password !== userData.confirmPassword) {
        setPasswordsMatch(false);
        return;
      }else{
        setPasswordsMatch(true);
    try {
      const response = await fetch('http://localhost:3001/create-user ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error('La création de l’utilisateur a échoué');
      }
      const newUser: UserData = await response.json();
      console.log('Utilisateur créé avec succès :', newUser);
      alert('Inscription réussie!');
    } catch (error) {
      console.error(error);
      alert('Erreur lors de la création de l’utilisateur.');
    }
  };
  
}
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Formulaire d'inscription</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1">Nom :</label>
        <input type="text" id="name" name="name" value={userData.name} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
      </div>
      <div>
        <label htmlFor="last_name" className="block mb-1">Nom de famille :</label>
        <input type="text" id="last_name" name="last_name" value={userData.last_name} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
      </div>
      <div>
        <label htmlFor="email" className="block mb-1">Email :</label>
        <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} required  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
      </div>
      <div>
        <label htmlFor="password" className="block mb-1">Mot de passe :</label>
        <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
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
            className="w-full px-4 py-1 rounded-2xl  focus:outline-none focus:border-blue-500"
          />
          {!passwordsMatch && (
            <p className="text-red-500">Les mots de passe ne correspondent pas.</p>
          )}
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="w-full bg-vert text-white px-4 py-1 rounded-2xl  hover:bg-green-600"
          >
            Valider votre inscription
          </button>
          <div className="w-20"></div> {/* Espace entre les boutons */}
          <button
            type="button"
            className="bg-white text-black px-4 py-1 rounded-2xl border border-black hover:bg-gray-200 "
          >
            Annuler
          </button>
        </div>
    </form>
    </div>
  );
};

export default Inscription;
