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
    info: " Nicolas est un étudiant sérieux et motivé, passionné par le développement logiciel et les nouvelles technologies.<br></br>Il est en deuxième année du cycle ingénieur à l’ECE Paris, spécialisé en Systèmes d’Informations. <br></br>Il est à la recherche d’un stage d’une durée de 4-5 mois à partir du 11 avril dans le domaine du développement informatique.",
    linkd: "https://www.linkedin.com/in/nicolas-dreyfus-laquièze-024532169",
    git: "https://github.com/Nicodl05",
  };
  const lang = [
    { name_lan: "C++", link_lan: "https://cplusplus.com/", ico: cplus },
    {
      name_lan: "C#",
      link_lan: "https://docs.microsoft.com/fr-fr/dotnet/csharp/",
      ico: csharp,
    },
    { name_lan: "Java", link_lan: "https://www.java.com/fr/", ico: java },
    {
      name_lan: "Javascript",
      link_lan: "https://www.javascript.com/",
      ico: js,
    },
    { name_lan: "Python", link_lan: "https://www.python.org/", ico: python },
    { name_lan: "PHP", link_lan: "https://www.php.net/", ico: php },
    {
      name_lan: "HTML",
      link_lan: "https://developer.mozilla.org/fr/docs/Web/HTML",
      ico: html,
    },
    {
      name_lan: "CSS",
      link_lan: "https://developer.mozilla.org/fr/docs/Web/CSS",
      ico: css,
    },
    {
      name_lan: "SQL",
      link_lan: "https://fr.wikipedia.org/wiki/Structured_Query_Language",
      ico: sql,
    },
    {
      name_lan: "NoSQL",
      link_lan: "https://fr.wikipedia.org/wiki/NoSQL",
      ico: nosql,
    },
    { name_lan: "React", link_lan: "https://fr.reactjs.org/", ico: react },
    {
      name_lan: "Tailwind",
      link_lan: "https://tailwindcss.com/",
      ico: tailwind,
    },
  ];

  return (
    <div>
      <Presentation {...user} />
      <Programming_Languages {...{ lang }} />
      truc
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
