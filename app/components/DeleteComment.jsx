import React from "react";
import { useState, useEffect, useContext } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { supabase } from "../utils/supabase";

export default function updateComment() {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");

  async function update() {
    try {
      // setLoading(true);
      const { data, error } = await supabase
        .from("comment")
        .delete()
        .eq("id", id);
      if (error) throw error;
      else alert("Commentaire supprimé");
    } catch (error) {
      alert("Error updating comment!");
      console.log(error);
    }
  }

  return (
    <div>
      <div className="text-center justify-center items-center">
        <h2 className="underline italic">Supprimer un commentaire </h2>
        <div className="form-control gap-4 text-lg ">
          <br></br>
          <br></br>
          <h3>
            Sélectionnez l'id du commentaire à supprimer
            <input
              className="input input-bordered"
              type="text"
              id="id"
              placeholder="id du commentaire"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </h3>
          <br></br>
          <form onSubmit={update}>
            <button
              className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg"
              type="submit"
            >
              Supprimer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
