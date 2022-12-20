import Image from "next/image";
import { supabase } from "../utils/supabase";
import { useEffect, useState } from "react";
function getcorresponding({ projet }, { id }) {
  if (projet.user_id === id) {
    return (
      <div className=" font-bold hover:scale-125   ">
        <div className="text-center items-center justify-between">
          <a href={projet.path}>
            <img src={projet.image} />
          </a>
          <div className="text-xl"> {projet.name} </div>

          <br></br>
          {projet.languages}
          <br></br>
          {projet.description}
        </div>
      </div>
    );
  }
  return projet.user_id + " NICOLAS   " + id + "CYRIL";
}
export default function Projects({ projet }) {
  return (
    <div className="px-6 py-4 ">
      <div className="wt-title">Mes projets réalisés</div>
      <br></br>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  ">
        <div className=" font-bold hover:scale-125   ">
          <div className="text-center items-center justify-between">
            <a href={projet.path}>
              <img src={projet.image} />
            </a>
            <div className="text-xl"> {projet.name} </div>

            <br></br>
            {projet.languages}
            <br></br>
            {projet.description}
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}
