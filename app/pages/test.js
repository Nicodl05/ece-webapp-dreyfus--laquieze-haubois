import Presentation from "../components/Presentation";
export default function test() {
  const user = {
    name: "Nicolas",
    info: " Nicolas est un étudiant sérieux et motivé, passionné par le développement logiciel et les nouvelles technologies.<br></br>Il est en deuxième année du cycle ingénieur à l’ECE Paris, spécialisé en Systèmes d’Informations. <br></br>Il est à la recherche d’un stage d’une durée de 4-5 mois à partir du 11 avril dans le domaine du développement informatique.",
    linkd: "https://www.linkedin.com/in/nicolas-dreyfus-laquièze-024532169",
    git: "https://github.com/Nicodl05",
  };

  return (
    <div>
      <Presentation {...user} />
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
