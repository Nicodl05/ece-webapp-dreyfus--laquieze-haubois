import React from "react";
import Link from "next/link";
import nodejs from "../public/nodejs.png";
import react from "../public/react.png";
import tailwind from "../public/tailwind.png";
import nextjs from "../public/nextjs.png";
import Image from "next/image";
import Carousel from "../components/Carousel";
// Page Home
function Home() {
  return (
    <div className=" dark:dark">
      <br></br>
      <div className="wt-title text-center ">Home</div>
      <br></br>
      <h2 className="text-3xl">Bienvenue à vous cher visiteur !!</h2>
      <br></br>
      {/* <Carousel /> */}
      <div className="text-2xl">
        <p>
          {" "}
          Vous êtes sur la page principale de cette application qui est un
          projet Web de 4ème année d'école d'ingénieurs{" "}
        </p>
        <div className="flex flex-wrap">
          Ce site internet a été crée dans le but d'un projet semestriel à ECE
          Paris en cours de Web suivi par notre professeur:{"   "}
          <div className="text-[#007178] dark:text-blue-300 font-italic gap-2">
            <a
              href=" https://github.com/PaulFarault"
              target="_blank"
              rel="noopener noreferrer"
            >
              Monsieur Paul Farault.
            </a>
          </div>
        </div>
        Vous pouvez naviguer sur le site en utilisant la barre de navigation
        ainsi que les boutons situés en haut à droite de votre écran.
        <br></br>
        <br></br>
        <ul>
          <li>
            Si vous cliquez sur About, vous avez une rapide présentation des
            deux auteurs de la page qui sont Nicolas et Cyril, vous avez un
            bouton qui vous permet d'accéder à leur CV, récapitulant leurs
            différentes maitrises ainsi que leurs expériences professionnelles
            passées.
          </li>
          <br></br>
          <li>
            Si vous cliquez sur Contacts, vous avez les cartes de contact des
            deux créateurs de ce site, vous pouvez les suivre sur Github et les
            contacter par mail
          </li>
          <br></br>
          <li>
            Si vous cliquez sur Projets, vous avez la possibilité d'observer
            tous les projets (que nous considérons commme des articles) stockés
            dans la base de données de Supabase. L'utilisateur si, il est
            connecté a la possibilité de rajouter un de ces projets en
            définissant: nom du projet, languages utilisés son Github une
            description du projet , une image.
          </li>
          <br></br>
          <li>
            Si vous cliquer le premier bouton en haut à droite, vous avez la
            possibilité de vous connecter à votre compte Supabase, si vous
            n'avez pas de compte, vous pouvez vous inscrire en cliquant sur le
            bouton "Sign up" en bas de la page de connexion.
          </li>
          <br></br>
          <li>
            Si vous cliquez sur le deuxième bouton en haut à droite, vous avez
            la possibilité d'accéder à vos paramètres. Vous pouvez modifier un
            de vos projets, supprimer un de vos projets, modifier votre nom
            d'utilisateur ET si vous êtes admin, vous pouvez supprimer un
            utilisateur
          </li>
        </ul>
      </div>
      <br></br>
      <div className="text-lg ">
        <br></br>

        <br></br>
        <div className="italic text-xl text-center">
          L'objectif de ce projet est d'apprendre à utiliser les technologies
          suivantes (vous pouvez cliquez sur les images pour accéder à leurs
          documentation):<br></br>
          <br></br>
          <div>
            {/* Liens doc */}
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
