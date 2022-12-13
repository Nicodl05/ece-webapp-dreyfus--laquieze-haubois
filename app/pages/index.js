import React from "react";
import Link from "next/link";
import nodejs from "../public/nodejs.png";
import react from "../public/react.png";
import tailwind from "../public/tailwind.png";
import nextjs from "../public/nextjs.png";
import About from "./about";
import Image from "next/image";

import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function Home() {
  return (
    <div className=" dark:dark">
      <br></br>
      <h1 className="text-4xl text-center ">Home</h1>
      <br></br>
      <h2 className="text-2xl">Bienvenue à vous cher visiteur !!</h2>
      <br></br>

      <div id="animation-carousel" className="relative" data-carousel="static">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="hidden duration-200 ease-linear" data-carousel-item>
            <img
              src="app/public/carou1.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-200 ease-linear" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-2.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div
            className="hidden duration-200 ease-linear"
            data-carousel-item="active"
          >
            <img
              src="/docs/images/carousel/carousel-3.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-200 ease-linear" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-4.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-200 ease-linear" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-5.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className="text-lg">
        <p>
          {" "}
          Vous êtes sur la page principale de cette application qui est un
          projet Web de 4ème année d'école d'ingénieurs{" "}
        </p>
        Vous pouvez naviguer sur le site en utilisant la barre de navigation.
        <br></br>
        Si vous cliquez sur About, vous en apprendrez plus sur les créateurs de
        ce site. Vous aurez aussi la possibilité d'accéder à leur CV. <br></br>
        Si vous cliquez sur Articles, vous pourrez voir les articles disponibles
        dans notre base de données <br></br>
        Si vous cliquez sur Contacts, vous pourrez contacter les créateurs de ce
        site mais aussi vous connecter. <br></br>
      </div>
      <br></br>
      <div className="text-lg ">
        <p> Vous êtes désormais sur la page principale de cette application </p>
        <div>
          Ce site internet a été crée dans le but d'un projet semestriel à ECE
          Paris en cours de Web suivi par notre professeur:
          <div className="text-[#007178] dark:text-blue-500 font-italic">
            <a
              href=" https://github.com/PaulFarault"
              target="_blank"
              rel="noopener noreferrer"
            >
              Monsieur Paul Farault.
            </a>
          </div>
        </div>
        <br></br>
        <p>
          Vous pouvez naviguer sur le site en utilisant la barre de navigation
          située juste au dessus.
          <br></br>
          Si vous cliquez sur About, vous en apprendrez plus sur les créateurs
          de ce site et avoir accès à de nombreuses informations. <br></br>
          Si vous cliquez sur Articles, vous pourrez voir les articles
          disponibles. L'objectif est de pouvoir afficher des articles sans
          avoir précisemment le nombre d'articles ou de cliquer sur un article
          pour avoir sa page<br></br>
          Si vous cliquez sur Contacts, vous pourrez contacter les créateurs de
          ce site en leur envoyant un mail. Vous avez aussi accès à leur Github{" "}
          <br></br>
        </p>
        <br></br>
        <div className="italic text-xl text-center">
          L'objectif de ce projet est d'apprendre à utiliser les techno
          suivantes :<br></br>
          <br></br>
          <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10  ">
              <a href="https://nextjs.org/" className="hover:scale-75">
                <Image src={nextjs} />
              </a>
              <a href="https://fr.reactjs.org/" className="hover:scale-75">
                <Image src={react} />
              </a>
              <a href="https://tailwindcss.com/" className="hover:scale-75">
                <Image src={tailwind} />
              </a>
              <a href="https://nodejs.org/en/docs/" className="hover:scale-75">
                <Image src={nodejs} />
              </a>
            </div>
          </div>
        </div>
        <br></br>
      </div>

      <br></br>
      <About />
    </div>
  );
}

export default Home;
