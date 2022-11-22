import Presentation from "../components/Presentation";
import Programming_Languages from "../components/Programming_Languages";
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

export default function test() {
  const user = {
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

  return (
    <div>
      <Presentation {...user} />
      <Programming_Languages lang={lang} />
    </div>
  );
}
/*
export default function test2({ machin }) {
  return (
    <div>
      <h1>Test</h1>
      {machin}
    </div>
  );
}
*/
