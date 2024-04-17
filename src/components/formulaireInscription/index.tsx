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
        setAcceptedTerms(!acceptedTerms);
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

        // Réinitialiser les messages d'erreur
        setPasswordsMatch(true);
        setPasswordError("");

        // Vérifier si les mots de passe correspondent
        if (userData.password !== userData.confirmPassword) {
            setPasswordsMatch(false);
            return;
        }

        // Vérifier la sécurité du mot de passe
        if (!validatePassword(userData.password)) {
            setPasswordError(
                "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre."
            );
            if (!acceptedTerms) {
                alert(
                    "Veuillez accepter les conditions générales d'utilisation."
                );
                return;
            }

            return;
        }

        // Si tout est valide, soumettre le formulaire
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
        <main className="max-w-md mx-auto p-6 ">
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
                <div>
                    <label htmlFor="name" className="block mb-1">
                        Prénom :
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:border-vert bordure to-black shadow-gray-700 shadow-[5px_5px_5px_2px_rgba(0,0,0,0.5)]"
                    />
                </div>
                <div>
                    <label htmlFor="last_name" className="block mb-1">
                        Nom de famille :
                    </label>
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={userData.last_name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:border-vert bordure to-black  shadow-gray-700 shadow-[5px_5px_5px_2px_rgba(0,0,0,0.5)]"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1">
                        Email :
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:border-vert bordure to-black  shadow-gray-700 shadow-[5px_5px_5px_2px_rgba(0,0,0,0.5)]"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-1">
                        Mot de passe :
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:border-vert bordure to-black  shadow-gray-700 shadow-[5px_5px_5px_2px_rgba(0,0,0,0.5)]"
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword" className="block mb-1">
                        Confirmer le mot de passe :
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={userData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:border-vert bordure to-black  shadow-gray-700 shadow-[5px_5px_5px_2px_rgba(0,0,0,0.5)]"
                    />
                    {!passwordsMatch && (
                        <p className="text-red-500">
                            Les mots de passe ne correspondent pas.
                        </p>
                    )}
                    {passwordError && (
                        <p className="text-red-500">{passwordError}</p>
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
                    <label
                        htmlFor="acceptTerms"
                        className="text-sm text-gray-700"
                    >
                        J&apos;accepte les{" "}
                        <a href="/cgv" className="text-turquoise">
                            conditions générales d&apos;utilisation
                        </a>
                    </label>
                </div>
                <div className="flex justify-between items-center">
                    {/* Inversion des boutons ici */}
                    <button
                        type="button"
                        className="bg-white text-black px-4 py-1 rounded-2xl border border-black shadow-md"
                    >
                        Annuler
                    </button>
                    <div className="w-20"></div>
                    <button
                        type="submit"
                        className="w-full bg-vert text-white px-4 py-1 rounded-2xl shadow-md"
                    >
                        Valider votre inscription
                    </button>
                </div>
            </form>
        </main>
    );
};

export default Inscription;