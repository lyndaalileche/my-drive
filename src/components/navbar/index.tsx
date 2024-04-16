"use client";
import { useState } from "react";
import NavBarCategorie from "../navBarCategorie";
import LoginForm from "../formulaireConnexion";

export default function Navbar() {
  const [menuOpenRayon, setMenuOpenRayon] = useState(false);
  const [menuOpenConnexion, setMenuOpenConnexion] = useState(false);

  const toggleMenuRayon = () => {
    setMenuOpenRayon((prevState) => !prevState);
  };
  const toggleMenuConnexion = () => {
    setMenuOpenConnexion((prevState) => !prevState);
  };

  return (
    <nav className="relative p-4 bg-turquoise">
      {menuOpenRayon && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenuRayon}
        ></div>
      )}
      {menuOpenConnexion && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenuConnexion}
        ></div>
      )}
      <div className="flex items-center justify-between">
        <div className="">
          <button
            onClick={toggleMenuRayon}
            className="text-white focus:outline-none flex items-center"
            aria-label={menuOpenRayon ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpenRayon ? "true" : "false"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="20"
              viewBox="0 0 32 20"
              fill="none"
            >
              <rect y="0.769287" width="32" height="1.23077" fill="white" />
              <rect y="9.38477" width="32" height="1.23077" fill="white" />
              <rect y="18" width="32" height="1.23077" fill="white" />
            </svg>
            <span className=" font-LucioleRegular hidden lg:block">Rayons</span>
          </button>
        </div>
        <a href="/favori" className="flex items-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="24"
            viewBox="0 0 28 24"
            fill="none"
          >
            <path
              d="M20.25 0.5C17.57 0.5 15.26 1.77375 14 3.88375C12.74 1.77375 10.43 0.5 7.75 0.5C5.82789 0.502316 3.98517 1.2669 2.62603 2.62603C1.2669 3.98517 0.502316 5.82789 0.5 7.75C0.5 11.3237 2.75 15.0587 7.175 18.8487C9.21813 20.5874 11.4242 22.1249 13.7625 23.44C13.8355 23.4794 13.9171 23.5 14 23.5C14.0829 23.5 14.1645 23.4794 14.2375 23.44C16.5758 22.1249 18.7819 20.5874 20.825 18.8487C25.25 15.0587 27.5 11.3237 27.5 7.75C27.4977 5.82789 26.7331 3.98517 25.374 2.62603C24.0148 1.2669 22.1721 0.502316 20.25 0.5ZM14 22.4275C12.25 21.4325 1.5 15.0087 1.5 7.75C1.50198 6.09301 2.1611 4.50445 3.33277 3.33277C4.50445 2.1611 6.09301 1.50198 7.75 1.5C10.3888 1.5 12.6063 2.91375 13.5375 5.18875C13.5752 5.28046 13.6393 5.35889 13.7216 5.41409C13.804 5.46929 13.9009 5.49877 14 5.49877C14.0991 5.49877 14.196 5.46929 14.2784 5.41409C14.3607 5.35889 14.4248 5.28046 14.4625 5.18875C15.3937 2.91375 17.6112 1.5 20.25 1.5C21.907 1.50198 23.4956 2.1611 24.6672 3.33277C25.8389 4.50445 26.498 6.09301 26.5 7.75C26.5 15 15.75 21.4325 14 22.4275Z"
              fill="white"
            />
          </svg>
          <span className=" font-LucioleRegular hidden lg:block">Favoris</span>
        </a>
        <a href="/">
          <div className="flex items-center">
            <img
              src="image/Logo.png"
              alt="Logo de PerfectDrive"
              className="h-8 w-8"
            />
          </div>
        </a>
        <button
          onClick={toggleMenuConnexion}
          className="text-white focus:outline-none flex items-center"
          aria-label={menuOpenConnexion ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpenConnexion ? "true" : "false"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M31.9143 30.65C29.27 26.0014 25.0313 22.8275 20.1203 21.6833C22.4539 20.7111 24.3831 18.9451 25.5783 16.6871C26.7736 14.4291 27.1606 11.8192 26.6734 9.3032C26.1862 6.78721 24.8549 4.52131 22.907 2.89263C20.9591 1.26394 18.5155 0.373535 15.9936 0.373535C13.4718 0.373535 11.0281 1.26394 9.08025 2.89263C7.13236 4.52131 5.80108 6.78721 5.31386 9.3032C4.82664 11.8192 5.21371 14.4291 6.40894 16.6871C7.60417 18.9451 9.53339 20.7111 11.867 21.6833C6.96241 22.8226 2.71732 26.0014 0.0729398 30.65C-0.00360844 30.7988 -0.0206571 30.9719 0.0253554 31.1331C0.071368 31.2944 0.176883 31.4314 0.319859 31.5154C0.462836 31.5994 0.632215 31.6241 0.792617 31.5841C0.953019 31.5442 1.09204 31.4427 1.18063 31.301C4.30843 25.7979 9.8501 22.5117 15.9936 22.5117C22.1372 22.5117 27.6788 25.7979 30.8066 31.301C30.8628 31.3999 30.9435 31.482 31.0407 31.5392C31.1379 31.5963 31.2482 31.6264 31.3605 31.6265C31.473 31.6269 31.5836 31.5965 31.6806 31.5387C31.8274 31.4522 31.9344 31.3101 31.9783 31.1435C32.0221 30.9768 31.9991 30.7994 31.9143 30.65ZM6.38936 11.4437C6.38936 9.51224 6.95264 7.62411 8.00797 6.01812C9.0633 4.41213 10.5633 3.16042 12.3182 2.42126C14.0732 1.68211 16.0043 1.48871 17.8673 1.86553C19.7304 2.24235 21.4417 3.17246 22.7849 4.53824C24.1281 5.90402 25.0428 7.64413 25.4134 9.53852C25.784 11.4329 25.5938 13.3965 24.8668 15.181C24.1399 16.9655 22.9089 18.4907 21.3295 19.5638C19.7501 20.6369 17.8932 21.2096 15.9936 21.2096C13.4473 21.2066 11.0062 20.1767 9.20566 18.3459C7.40515 16.5151 6.39232 14.0329 6.38936 11.4437Z"
              fill="white"
            />
          </svg>
          <span className=" font-LucioleRegular hidden lg:block">
            Connexion
          </span>
        </button>
        <a href="/panier" className="flex items-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M31.8564 6.59941C31.7987 6.53177 31.7265 6.47733 31.6448 6.43994C31.5632 6.40256 31.4742 6.38314 31.3841 6.38307H6.0522L5.20914 1.85338C5.13167 1.43799 4.90737 1.06232 4.57534 0.79188C4.2433 0.521441 3.82461 0.373388 3.39225 0.373535H0.615374C0.452166 0.373535 0.295644 0.43685 0.180239 0.54955C0.0648338 0.662251 0 0.815106 0 0.974488C0 1.13387 0.0648338 1.28673 0.180239 1.39943C0.295644 1.51213 0.452166 1.57544 0.615374 1.57544H3.38455C3.53027 1.57312 3.6721 1.62138 3.78479 1.71162C3.89748 1.80186 3.97372 1.92823 3.99993 2.06822L7.92293 23.1467C8.0602 23.8796 8.47142 24.5366 9.07676 24.9901C8.44199 25.3896 7.94794 25.9696 7.66123 26.6519C7.37452 27.3342 7.30894 28.0859 7.47334 28.8057C7.63773 29.5255 8.02419 30.1788 8.58061 30.6775C9.13702 31.1761 9.83663 31.4961 10.5851 31.5944C11.3336 31.6927 12.0949 31.5644 12.7664 31.227C13.4379 30.8896 13.9873 30.3591 14.3405 29.7073C14.6937 29.0554 14.8338 28.3135 14.7418 27.5815C14.6497 26.8495 14.3301 26.1626 13.8259 25.6136H23.0965C22.5328 26.229 22.2025 27.0147 22.1608 27.8394C22.1191 28.6642 22.3685 29.4779 22.8673 30.1446C23.3661 30.8113 24.0841 31.2906 24.9013 31.5024C25.7186 31.7143 26.5855 31.6457 27.3572 31.3084C28.1289 30.971 28.7587 30.3852 29.1412 29.6488C29.5238 28.9124 29.636 28.0702 29.459 27.2627C29.2821 26.4553 28.8267 25.7317 28.169 25.2127C27.5113 24.6938 26.6912 24.411 25.8457 24.4117H10.949C10.5169 24.4115 10.0986 24.2632 9.76689 23.9928C9.43518 23.7224 9.2111 23.347 9.13368 22.9318L8.51831 19.604H27.0918C27.8124 19.6041 28.5102 19.3573 29.0635 18.9064C29.6168 18.4556 29.9905 17.8295 30.1195 17.1371L31.9902 7.09219C32.0062 7.00549 32.0026 6.91641 31.9794 6.83125C31.9563 6.74609 31.9143 6.66694 31.8564 6.59941ZM13.5382 28.0174C13.5382 28.4928 13.3939 28.9576 13.1234 29.3529C12.8529 29.7482 12.4685 30.0563 12.0187 30.2382C11.5689 30.4201 11.074 30.4678 10.5965 30.375C10.119 30.2822 9.68043 30.0533 9.33619 29.7171C8.99194 29.3809 8.7575 28.9526 8.66253 28.4863C8.56755 28.02 8.6163 27.5367 8.8026 27.0975C8.9889 26.6582 9.3044 26.2828 9.70919 26.0187C10.114 25.7545 10.5899 25.6136 11.0767 25.6136C11.7296 25.6136 12.3556 25.8668 12.8173 26.3176C13.2789 26.7684 13.5382 27.3798 13.5382 28.0174ZM28.3072 28.0174C28.3072 28.4928 28.1628 28.9576 27.8923 29.3529C27.6219 29.7482 27.2374 30.0563 26.7877 30.2382C26.3379 30.4201 25.843 30.4678 25.3655 30.375C24.888 30.2822 24.4494 30.0533 24.1052 29.7171C23.7609 29.3809 23.5265 28.9526 23.4315 28.4863C23.3365 28.02 23.3853 27.5367 23.5716 27.0975C23.7579 26.6582 24.0734 26.2828 24.4782 26.0187C24.8829 25.7545 25.3589 25.6136 25.8457 25.6136C26.4985 25.6136 27.1246 25.8668 27.5862 26.3176C28.0478 26.7684 28.3072 27.3798 28.3072 28.0174ZM28.9087 16.9223C28.8312 17.3377 28.6069 17.7133 28.2749 17.9838C27.9429 18.2542 27.5242 18.4023 27.0918 18.4021H8.28908L6.27527 7.58497H30.6471L28.9087 16.9223Z"
              fill="white"
            />
          </svg>
          <span className="font-LucioleRegular hidden lg:block">Panier</span>
        </a>
      </div>

      {/* Menu déroulant */}
      <div
        className={`font-LucioleRegular absolute z-50 left-0 right-0 mt-8 mx-5 p-10 top-full text-center rounded-2xl bg-white border-turquoise border-4 ${
          menuOpenRayon ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-end -mr-6 -mt-6">
          <button
            onClick={toggleMenuRayon}
            className="text-white focus:outline-none"
            aria-label={menuOpenRayon ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpenRayon ? "true" : "false"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 35 35"
              fill="none"
            >
              <circle cx="17.5" cy="17.5" r="17.5" fill="black" />
              <line
                x1="10"
                y1="10"
                x2="25"
                y2="25"
                stroke="white"
                strokeWidth="2"
              />
              <line
                x1="10"
                y1="25"
                x2="25"
                y2="10"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
        <h2 className=" font-LucioleBold text-2xl">Nos Rayons</h2>
        <NavBarCategorie />
      </div>
      <div
        className={`font-LucioleRegular absolute z-50 left-[5%] right-[5%] md:left-[25%] md:right-[25%] mt-8 p-5 md:px-32 md:pb-20 top-full text-center rounded-2xl bg-white border-turquoise border-4 ${
          menuOpenConnexion ? "block" : "hidden"
        }`}
      >
        <LoginForm />
      </div>
    </nav>
  );
}
