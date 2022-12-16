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
function ListProjets({ projet }) {
  return (
    <div>
      <h1 className=" gap-y-6 justify-center text-center wt-title">
        <br></br>
        Nos Projets
      </h1>
      <All_projects project={projet} />
      <div className="justify-between items-center text-center">
        <a href="/add_project">
          <button className="items-center justify-center text-center  text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            Ajouter un projet
          </button>
        </a>
      </div>
      <br></br>
    </div>
  );
}

export default ListProjets;
