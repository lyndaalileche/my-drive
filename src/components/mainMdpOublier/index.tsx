"use client"
import React, { useState, FormEvent } from 'react';

const PasswordRecoveryForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/request-reset-password', {


        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error(' Quelque chose s\'est mal passé lors de l\'envoi de la demande.');

      // Message de succès ou de traitement
      setMessage('Si un compte avec cet email est trouvé, un email de réinitialisation a été envoyé.');
    } catch (error) {
      console.error('Fetch : Erreur lors de la demande de réinitialisation de mot de passe: ok', error);
      setMessage('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center mt-24'>
      <h1 className="font-LucioleBold ">Récupération de Mot de Passe</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mt-3 md:w-96 ">
        <div className='flex flex-col items-start mb-5 md:mb-14 w-full'>
          <label htmlFor="email" className=" font-LucioleBold">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-2 py-1 bg-white border-2 rounded-full shadow-gray-700 shadow-[3px_3px_0_1px_rgba(0,0,0,0.5)]"
            placeholder="Adresse mail"
          />
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center items-center md:justify-between">
        <a className="font-LucioleRegular text-center w-full px-2 py-1 bg-white text-bleuFonce rounded-full shadow-gray-700 shadow-[3px_3px_0_1px_rgba(0,0,0,0.5)]" href='/'>Annuler</a>
        <button className="w-full bg-vert text-white mt-4 md:mt-0 px-2 py-1 md:ml-4 rounded-2xl shadow-gray-700 shadow-[3px_3px_0_1px_rgba(0,0,0,0.5)]" type="submit">Valider</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PasswordRecoveryForm;