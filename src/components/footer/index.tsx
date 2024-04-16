import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#15052A] text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>
          <a href="/cgv">Conditions Générales de Vente</a>
        </p>
        <p>
          <a href="/CharteDesDonnees">Charte des données</a>
        </p>
        <p>
          <a href="/mentionLegal">Mentions Légales</a>
        </p>
        <p className="mt-4">Tous droits réservés © 2024 PerfectDriver</p>
      </div>
    </footer>
  );
};

export default Footer;
