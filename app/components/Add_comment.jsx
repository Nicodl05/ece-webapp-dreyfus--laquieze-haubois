import { useState, useEffect, useContext } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import Context, { UserContext } from "./UserContext";
import React from "react";
import { supabase } from "../utils/supabase";

export default function Comment({ id }) {
  const [user, setUser] = useState([]);
  const [comment, setComment] = useState("");
  let [u_id, setU_id] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  if (id === undefined) {
    console.log("undefined");
  } else {
    console.log("mon id:" + id);
  }
  async function getallUsers() {
    const { data: user } = await supabase.from("user").select("name,id");
    setUser(user);
  }
  async function getIdAuthor() {
    const { data: id } = await supabase
      .from("user")
      .select("id")
      .eq("name", name);
    if (id) {
      console.log("data.id: " + JSON.stringify(id.id));
      alert("Utilisateur non trouvé");
    } else {
      console.log("non trouvé");
    }

    return id.id;
  }
  useEffect(() => {
    getallUsers();
  }, []);

  const addComment = async (e) => {
    e.preventDefault();
    if (!comment) {
      alert("Tapez un commentaire avant de valider");
      return;
    }

    console.log("in add comment");
    const tosave = getIdAuthor();
    setU_id(tosave);
    // try {
    //   const { data: fid } = await supabase
    //     .from("user")
    //     .select("id")
    //     .eq("name", name);
    //   console.log("founded");
    //   setU_id(fid);
    // } catch (errorname) {
    //   console.log(errorname);
    // }
    try {
      const { error2 } = await supabase.from("comment").insert({
        // created_at: new Date().toISOString(),
        u_id: "32a51743-cebf-4fdd-9915-0b76da038d6e",
        comment: comment,
        projet_id: id,
        //
      });
      if (error2) {
        throw error2;
      }
      if (!error2 && u_id != undefined) {
        alert("Commentaire ajouté");
      }
    } catch (e) {
      alert("Erreur lors de l'ajout du commentaire");
      throw e;
    }
  };

  return (
    <div>
      <div>
        <h2 className="underline italic">
          La liste des différents utilisateurs
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {user.map((user) => (
          <div className="rounded-xl bg-gray-900" key={user.id}>
            {" "}
            {user.name}
          </div>
        ))}
      </div>
      <div className="text-center justify-center items-center">
        <h2 className="underline italic">Nouveau Commentaire </h2>
        <div className="form-control gap-4 text-lg ">
          <br></br>
          <br></br>
          <h3>
            Votre nouveau commentaire
            <br></br>
            <input
              className="input input-bordered"
              type="text"
              id="comment"
              placeholder="commentaire"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </h3>
          <br></br>
          <h3>Name author</h3>
          <form onSubmit={addComment}>
            <label className="input-group input-group-vertical">
              <input
                className="input input-bordered"
                type="text"
                id="name"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br></br>
            <br></br>

            <button
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              type="submit"
            >
              Valider
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}