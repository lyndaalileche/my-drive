"use client"
import React, { useState, FormEvent, ChangeEvent } from 'react';

// Définition du type pour le state de l'utilisateur
interface UserData {
  name: string;
  last_name: string;
  email: string;
  password: string;
}

const UserForm: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();



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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={userData.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="last_name">Last Name:</label>
        <input type="text" id="last_name" name="last_name" value={userData.last_name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} />
      </div>
      <button type="submit">Create User</button>
    </form>
  );
};

export default UserForm;
