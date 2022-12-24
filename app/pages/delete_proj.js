import { useContext, useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";
import Context from "../components/UserContext";
export default function delete_proj() {
  const [projet, setProjet] = useState([]);
  const supabase = useSupabaseClient();
  const { user } = useContext(Context);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getProjet() {
      setLoading(true);

      const { data: projet, error } = await supabase.from("projet").select("*");

      console.log("Mon projet est : " + projet);
      setProjet(projet);
    }
    getProjet();
  }, []);
  const delete_confirm = async function (e) {
    e.preventDefault();
    const { error } = await supabase.from("projet").delete().eq("id", id);
    alert("Projet supprimé, vous pouvez rafraichir la page");
  };
  return (
    <div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
        {projet.map((project) => (
          <div
            className="rounded overflow-hidden shadow-lg dark:bg-gray-900 "
            key={project.id}
          >
            <div className="justify-between items-center text-center gap-4 ">
              <img
                className="w-full h-full"
                src={project.image}
                alt="Image du projet"
              />

              <div className="px-6 py-4 justify-center text-center">
                <div className="font-bold text-xl mb-2"> {project.name}</div>
                <p className="text-black dark:text-white text-base ">
                  <div className="text-sm underline">
                    Projet n° {project.id}
                  </div>

                  <br></br>
                  {project.description}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 justify-center text-center items-center round gap-4">
                <span className="inline-flex items-center justify-center  font-bold leading-none text-red-100 bg-[#20c9d5] rounded-full">
                  <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    {project.languages}
                  </span>
                </span>
              </div>
              <br></br>
            </div>
          </div>
        ))}
      </div>
      <div className="justify-between items-center text-center">
        <input
          className=""
          type="text"
          id="id"
          placeholder="Projet ID ?"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br></br>
        <br></br>
        <button
          className="hover:scale-90 min-h-min items-center justify-center text-center  text-gray-700 bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded text-lg"
          onClick={delete_confirm}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}