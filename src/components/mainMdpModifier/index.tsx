"use client";
import React, { useState } from "react";

interface UserDataPassword {
    password: string;
    confirmPassword: string;
}

const MainMdpModifier: React.FC = () => {
    const initialUserDataPassword: UserDataPassword = {
        password: "",
        confirmPassword: "",
    };

    const [userDataPassword, setUserDataPassword] = useState<UserDataPassword>(
        initialUserDataPassword
    );
    const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
    const [passwordError, setPasswordError] = useState<string>("");
    const [message, setMessage] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserDataPassword({ ...userDataPassword, [name]: value });
    };
    const validatePassword = (confirmPassword: string) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        return regex.test(confirmPassword);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setPasswordsMatch(true);
        setPasswordError("");
        if (userDataPassword.password !== userDataPassword.confirmPassword) {
            setPasswordsMatch(false);
            return;
        }

        if (!validatePassword(userDataPassword.confirmPassword)) {
            setPasswordError(
                "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre."
            );
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:3001/request-reset-password",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userDataPassword.confirmPassword),
                }
            );
            if (!response.ok)
                throw new Error(
                    " Quelque chose s'est mal passé lors de l'envoi de la demande."
                );

            // Message de succès ou de traitement
            setMessage("Votre mot de passe a bien été modifié.");
        } catch (error) {
            console.error(
                "Fetch : Erreur lors de la demande de réinitialisation de mot de passe: ok",
                error
            );
            setMessage(
                "Une erreur est survenue. Veuillez réessayer plus tard."
            );
        }
    };

    return (
        <div className="flex flex-col justify-center items-center mt-24">
            <h1 className="font-LucioleBold ">
                Réinitialisation du mot de passe
            </h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center mt-3 md:w-96 "
            >
                <div className="flex flex-col items-start mb-5 md:mb-14 w-full">
                    <label htmlFor="password" className=" font-LucioleBold">
                        Nouveau mot de passe:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userDataPassword.password}
                        onChange={handleChange}
                        required
                        className="w-full px-2 py-1 bg-white border-2 rounded-full shadow-gray-700 shadow-[3px_3px_0_1px_rgba(0,0,0,0.5)]"
                    />
                </div>
                <div className="flex flex-col items-start mb-5 md:mb-14 w-full">
                    <label
                        htmlFor="confirmPassword"
                        className=" font-LucioleBold"
                    >
                        Confirmer le nouveau mot de passe:
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={userDataPassword.confirmPassword}
                        required
                        onChange={handleChange}
                        className="w-full px-2 py-1 bg-white border-2 rounded-full shadow-gray-700 shadow-[3px_3px_0_1px_rgba(0,0,0,0.5)]"
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

                <div className="flex flex-col md:flex-row w-full justify-center items-center md:justify-between">
                    <a
                        className="font-LucioleRegular text-center w-full px-2 py-1 bg-white text-bleuFonce rounded-full shadow-gray-700 shadow-[3px_3px_0_1px_rgba(0,0,0,0.5)]"
                        href="/"
                    >
                        Annuler
                    </a>
                    <button
                        className="w-full bg-vert text-white mt-4 md:mt-0 px-2 py-1 md:ml-4 rounded-2xl shadow-gray-700 shadow-[3px_3px_0_1px_rgba(0,0,0,0.5)]"
                        type="submit"
                    >
                        Valider
                    </button>
                </div>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default MainMdpModifier;
