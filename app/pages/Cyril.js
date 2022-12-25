import Presentation from "../components/Presentation";
import Programming_Languages from "../components/Programming_Languages";
import Projects from "../components/Projects";
import Compagny from "../components/Company";
import cplus from "/public/c++.png";
import css from "/public/css.png";
import html from "/public/html.png";
import sql from "/public/sql.png";
import nosql from "/public/nosql.png";
import csharp from "/public/csharp.png";
import java from "/public/java.png";
import js from "/public/js.png";
import react from "/public/react.png";
import tailwind from "/public/tailwind.png";
import python from "/public/python.png";
import c from "/public/c.png";
import php from "/public/php.png";
import ski from "/public/ski.png";
import java_nico from "/public/java_nico.png";
import profile_image from "/public/Cyril.jpg";
import braintech from "/public/braintech.png";
import lacentralef from "/public/lacentralef.png";
// Définit tout nos obj en dur puis envoie tt pr display
export default function test() {
  const user = {
    picture: profile_image,
    name: "Cyril",
    info: " Cyril est un étudiant de l'ECE Paris, il est en 2ème année de cycle ingénieur spécialisé en SI. Il est passionné par l'informatique et plus particulièrement la cybersécurité. Un de ces exploits : tenir le record du monde d'une pisteTrackMania durant une semaine !! Il est à la recherche d’un stage d’une durée de 4-5 mois à partir du 11 avril dans le domaine de l'informatique et ou de la cybersécurité.",
    linkd: "#",
    git: "https://github.com/teepol",
  };
  const lang = [
    ["C", "https://learn.microsoft.com/en-us/cpp/c-language/?view=msvc-170", c],
    ["C++", "https://cplusplus.com/", cplus],
    ["C#", "https://docs.microsoft.com/fr-fr/dotnet/csharp/", csharp],
    ["Java", "https://docs.oracle.com/en/java/", java],
    ["Javascript", "https://developer.mozilla.org/fr/docs/Web/JavaScript", js],
    ["React", "https://fr.reactjs.org/", react],
    ["Tailwind CSS", "https://tailwindcss.com/", tailwind],
    ["Python", "https://www.python.org/", python],
    ["PHP", "https://www.php.net/", php],
    ["HTML", "https://developer.mozilla.org/fr/docs/Web/HTML", html],
    ["CSS", "https://developer.mozilla.org/fr/docs/Web/CSS", css],
    ["SQL", "https://www.w3schools.com/sql/", sql],
    ["NoSQL", "https://www.mongodb.com/nosql-explained", nosql],
  ];

  const jobs = [
    [
      "https://mybraintech.com/",
      "Site de My BrainTech ",
      braintech,
      "My BrainTech",
      " Assistant support informatique",
      "Stage de 2 mois",
      "Gestion du parc informatique",
      "Mise à jour de la politique interne de sécurité informatique (RGPD)",
    ],
    [
      "https://www.lacentraledefinancement.fr/",
      "Site de La centrale de financement",
      lacentralef,
      "La centrale de financement",
      "Assistant stagiaire",
      "Stage de 2 mois",
      "Vituralisation de Documentation",
    ],
  ];

  const id = "32a51743-cebf-4fdd-9915-0b76da038d6e";
  return (
    <div className="overflow-hidden shadow-lg ">
      <Presentation {...user} />
      <Programming_Languages lang={lang} />
      <Projects id={id} />
      <Compagny jobs={jobs} />
    </div>
  );
}
