import React, { useState } from "react";
import ski from "/public/ski.png";
import java_nico from "/public/java_nico.png";
import echec from "/public/echec.png";
import All_projects from "../components/All_projects";
import { supabase } from "../utils/supabase";
import Link from "next/link";
// Display de chaque proj en envoyant le proj sur all_proj
export default function ListProjets({ projet }) {
  return (
    <div>
      <h1 className=" gap-y-6 justify-center text-center wt-title">
        <br></br>
        Nos Projets
      </h1>
      <All_projects project={projet} />
      <div className="justify-between items-center text-center">
        <Link href="/add_project">
          <button className="items-center justify-center text-center bg-[#007178] dark:bg-gray-900 dark:hover:bg-indigo-800 text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:scale-150 rounded text-lg">
            Ajouter un projet
          </button>
        </Link>
      </div>
      <br></br>
    </div>
  );
}
// Récupération des projets
export const getServerSideProps = async () => {
  const { data: projet } = await supabase.from("projet").select("*");

  return {
    props: {
      projet,
    },
  };
};
