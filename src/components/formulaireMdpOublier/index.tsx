


  return (
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-500"
          >
            Valider votre inscription
          </button>
          <div className="w-4"></div>
          <button
            type="button"
            className="bg-white text-black px-4 py-2 rounded-lg border border-black hover:bg-gray-200"
          >
            Annuler
          </button>
        </div>
      </form>
  );
};

export default Inscription;
