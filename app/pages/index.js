import React from "react";
import Link from "next/link";
import nodejs from "../public/nodejs.png";
import react from "../public/react.png";
import tailwind from "../public/tailwind.png";
import nextjs from "../public/nextjs.png";
import About from "./about";
import Image from "next/image";
import Carousel from "../components/Carousel";
// import script from "../node_modules/tw-elements/dist/js/index.min.js";

function Home() {
  return (
    <div className=" dark:dark">
      <br></br>
      <h1 className="wt-title text-center ">Home</h1>
      <br></br>
      <h2 className="text-2xl">Bienvenue à vous cher visiteur !!</h2>
      <br></br>
      {/* <script src={script}> </script> */}
      <Carousel />
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
          suivantes (vous pouvez cliquez sur les images pour accéder à leurs
          documentation):<br></br>
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
    </div>
  );
}

export default Home;
