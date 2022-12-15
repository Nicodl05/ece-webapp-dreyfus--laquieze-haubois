import React, { useState } from "react";
import ski from "/public/ski.png";
import java_nico from "/public/java_nico.png";
import echec from "/public/echec.png";
import All_projects from "../components/All_projects";
import { supabase } from "../utils/supabase";

export const getStaticProps = async () => {
  const { data: projet } = await supabase.from("projet").select("*");
  return {
    props: {
      projet,
    },
  };
};

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
    [
      "https://github.com/Nicodl05/Project_Chess_Game",
      echec,
      "Projet de création numérique (Java)",
      "Ce projet a été réalisé en 4ème année",
      "Java",
      "Java Fx",
    ],
  ];

  return (
    <div>
      <h1 className=" gap-y-6 justify-center text-center wt-title">
        Nos différents projets
      </h1>
      <All_projects project={project} />
    </div>
  );
}

export default projets;
