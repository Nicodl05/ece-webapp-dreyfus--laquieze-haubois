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
import php from "/public/php.png";
import ski from "/public/ski.png";
import java_nico from "/public/java_nico.png";
import echec from "/public/echec.png";
import profile_image from "/public/Nicolas.jpg";
import cer from "/public/cer.png";
import renov from "/public/renov.png";
import ece from "/public/ece.png";
import { supabase } from "../utils/supabase";

export default function test() {
  const user = {
    picture: profile_image,
    name: "Nicolas",
    info: " Nicolas est un étudiant sérieux et motivé, passionné par le développement logiciel et les nouvelles technologies. Il est en deuxième année du cycle ingénieur à l’ECE Paris, spécialisé en Systèmes d’Informations. Il est à la recherche d’un stage d’une durée de 4-5 mois à partir du 11 avril dans le domaine du développement informatique.",
    linkd: "https://www.linkedin.com/in/nicolas-dreyfus-laquièze-024532169",
    git: "https://github.com/Nicodl05",
  };
  const lang = [
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
      "https://www.cer-bercy.com/",
      "Site du CER Bercy",
      cer,
      "CER Bercy",
      "Assistant administratif",
      "Stage de 2 mois et CDD de 6 mois",
      "Remise à niveau du site internet",
      "Développement applications de bureau",
    ],
    [
      "https://www.societe.com/societe/renov-r-bati-790412357.html",
      "Site de Renov'R Bati",
      renov,
      "Renov'R Bati",
      "Développeur Logiciel",
      "Stage de 2 mois",
      "Développement application console pour la gestion des matériaux de chantiers",
    ],
    [
      "https://www.ece.fr/",
      "Site de l'ECE Paris",
      ece,
      "ECE Paris",
      "Ambassadeur",
      "CDD renouvelé sur 4 ans",
      "Responsable de la promotion école",
      "Responsable lors de salons étudiants",
    ],
  ];

  const user_id = "21ef1270-5eae-4b48-8f40-6e07915a0f90";
  return (
    <div className="overflow-hidden shadow-lg ">
      <Presentation {...user} />
      <Programming_Languages lang={lang} />

      <Projects id={user_id} />
      <Compagny jobs={jobs} />
    </div>
  );
}
// autrement envoyer le nom de user
// par la suite faire la requete directement dans projects en utilisant en dur l'id de la personne
