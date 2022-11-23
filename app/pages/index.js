import React from "react";
import Link from "next/link";

import About from "./about";

function Home() {
  return (
    <div className=" dark:dark">
      <h1 className="h1">Home</h1>
      <br></br>
      <h2 className="text-2xl">Bienvenue à vous cher visiteur !!</h2>

      <p> Vous êtes sur la page principale de cette application </p>

      <p>
        Vous pouvez naviguer sur le site en utilisant la barre de navigation.
        <br></br>
        Si vous cliquez sur About, vous en apprendrez plus sur les créateurs de
        ce site. <br></br>
        Si vous cliquez sur Articles, vous pourrez voir les articles
        disponibles. <br></br>
        Si vous cliquez sur Contacts, vous pourrez contacter les créateurs de ce
        site. <br></br>
      </p>
      <br></br>
      <div className="text-xl ">
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
        <div className="italic text-xl">
          L'objectif de ce projet est d'apprendre à utiliser les techno
          suivantes :<br></br>
          <br></br>
          <ul>
            <li>Next.js</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
          </ul>
        </div>
        <br></br>
        <div className="flex flex-wrap">
          Documentation de Nextjs:
          <div className="text-gray-800 dark:text-gray-300 dark:hover:text-blue-500 hover:text-[#007178] gap-1">
            <Link href="https://nextjs.org/">ici</Link>
          </div>
        </div>
        <br></br>
        <div className="flex flex-wrap ">
          Documentation de React:
          <div className="dark:hover:text-blue-500 hover:text-[#007178]">
            <Link href="https://fr.reactjs.org/">ici </Link>
          </div>
        </div>
        <br></br>
        <div className="flex flex-wrap">
          Documentation de Tailwind CSS:
          <div className="dark:hover:text-blue-500 hover:text-[#007178]">
            <Link href="https://tailwindcss.com/"> ici</Link>
          </div>
        </div>
      </div>

      <br></br>
      <About />
    </div>
  );
}

export default Home;
