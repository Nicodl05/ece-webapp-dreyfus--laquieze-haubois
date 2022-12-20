import Image from "next/image";
import { supabase } from "../utils/supabase";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Projects({ id }) {
  console.log(id);
  const [projet, setProjet] = useState([]);
  useEffect(() => {
    async function getProjet() {
      const { data: projet, error } = await supabase
        .from("projet")
        .select("*")
        .eq("user_id", id);
      console.log(projet);
      setProjet(projet);
    }
    getProjet();
  }, []);
  return (
    <div className="px-6 py-4 ">
      <div className="wt-title">Mes projets réalisés</div>
      <br></br>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  ">
        {projet.map((projet) => (
          <div className=" font-bold hover:scale-125   ">
            <div className="text-center items-center justify-between">
              <Link href={projet.path}>
                <img src={projet.image} />
              </Link>
              <div className="text-xl"> {projet.name} </div>

              <br></br>
              {projet.languages}
              <br></br>
              {projet.description}
            </div>
          </div>
        ))}
      </div>
      <br></br>
    </div>
  );
}
