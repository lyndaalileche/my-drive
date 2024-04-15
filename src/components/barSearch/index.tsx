import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';

const BarSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Gère le changement du terme de recherche dans l'input
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value.trim();
    setSearchTerm(newSearchTerm);
  };

  // Gère la recherche lorsqu'on appuie sur la touche "Entrée"
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClickSearch();
    }
  };

  // Redirection vers la page de produits avec le terme de recherche
  const handleClickSearch = () => {
    if (searchTerm !== '') {
      const encodedSearchTerm = encodeURIComponent(searchTerm);
      window.location.href = `/produits/${encodedSearchTerm}`;
    }
  };

  return (
    <div className="container mx-auto mt-20 text-center">
      {/* Input de recherche contrôlé par l'état searchTerm */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress} // Appeler handleClickSearch sur "Entrée"
        placeholder="Rechercher un produit..."
        className="px-2 py-1 text-sm border rounded-2xl mb-4"
      />
      <button
        className="-mt-1.5"
        onClick={handleClickSearch}
      >
        <img src="/svg/loupe.svg" alt="" />
      </button>
    </div>
  );
};

export default BarSearch;
