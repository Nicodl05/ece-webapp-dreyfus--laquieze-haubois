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

  async function deleteComment() {
    let { data: id } = await supabase.from("comment").select("id");
    const { data, error } = await supabase
      .from("comment")
      .delete()
      .eq("id", id);
  }

  async function updateComment() {
    try {
      setLoading(true);
      let { data: id } = await supabase.from("comment").select("id");
      let { error } = await supabase
        .from("comment")
        .update({ comment: comment })
        .eq("id", id);
      if (error) throw error;
      alert("comment updated!");
    } catch (error) {
      alert("Error updating comment!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-10">
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
      <div className="pt-16 flex justify-center">
        <div className="min-w-[600px]">
          <h1 className="text-4xl font-bold ">Comments</h1>
          <form className="mt-4 flex gap-2" onSubmit={addComment}>
            <input
              type="text"
              placeholder="Add a comment"
              className="p-2 border-b focus:border-b-gray-700 w-full outline-none"
              value={comment || ""}
              onChange={(e) => setComment(e.target.value)}
            />
            <input
              type="text"
              placeholder="Add the name of the author"
              className="p-2 border-b focus:border-b-gray-700 w-full outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <button className="px-4 py-2 bg-green-500 rounded-lg text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
