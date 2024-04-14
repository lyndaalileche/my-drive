"use client"
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Supprimer le jeton d'authentification stocké
    localStorage.removeItem('authToken');

    // Rediriger vers la page de votre choix après la déconnexion
    router.push('/produit');
  };

  return (
    <button onClick={handleLogout}>Déconnexion</button>
  );
};

export default LogoutButton;

