import React from "react";
import ski from "/public/ski.png";
import java_nico from "/public/java_nico.png";
import All_projects from "../components/All_projects";
function projets() {
  const project = [
    [
      "https://github.com/Nicodl05/Cinema_Projet",
      java_nico,
      " Projet Cinéma (Java, MySQL)",
      " Ce projet a été réalisé en 3ème année.",
      "Java",
      "JavaFX",
      "SQL",
    ],
    [
      "https://github.com/Nicodl05/TdG-Projet",
      ski,
      "Projet Théorie des Graphes (C++) ",
      " Ce projet a été réalisé en 2ème année",
      "C++",
    ],

    [
      "https://github.com/Nicodl05/Cinema_Projet",
      java_nico,
      " Projet Cinéma (Java, MySQL)",
      " Ce projet a été réalisé en 3ème année.",
      "Java",
      "JavaFX",
      "SQL",
    ],
    [
      "https://github.com/Nicodl05/TdG-Projet",
      ski,
      "Projet Théorie des Graphes (C++) ",
      " Ce projet a été réalisé en 2ème année",
      "C++",
    ],
  ];

  return (
    <div>
      <h1>Projets</h1>
      <All_projects project={project} />
    </div>
  );
}

export default projets;
