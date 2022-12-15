import React from "react";
import Link from "next/link";
import Image from "next/image";
import projets from "../projets";
//https://github.com/Nicodl05/Project_Chess_Game
function Page_Projet({ project }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 p-10">
      {project.map((project) => (
        <h1>{project[2]}</h1>
      ))}
    </div>
  );
}
export async function getStaticPaths() {
  const paths = projets.project.map((proje) => ({
    params: { id: proje[8] },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const res = projets.project.find((project) => project[8] === params.id);
  return { props: { res } };
}
export default Page_Projet;
