import React from "react";
import { useState, useEffect, useContext } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { supabase } from "../utils/supabase";

export default function updateComment() {
  const [ncomment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");

  async function update() {
    try {
      // setLoading(true);
      let { error } = await supabase
        .from("comment")
        .update({ comment: ncomment })
        .eq("id", id);
      if (error) throw error;
    } catch (error) {
      alert("Error updating comment!");
      console.log(error);
    }
  }

  return (
    <div>
      <div className="text-center justify-center items-center">
        <h2 className="underline italic">Modification de commentaires </h2>
        <div className="form-control gap-4 text-lg ">
          <br></br>
          <br></br>
          <h3>
            Sélectionnez l'id du commentaire à modifier
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
          <h3>Votre nouveau commentaire est :</h3>
          <form onSubmit={update}>
            <label className="input-group input-group-vertical">
              <input
                className="input input-bordered"
                type="text"
                id="comment"
                placeholder="Votre commentaire"
                value={ncomment}
                onChange={(e) => setComment(e.target.value)}
              />
            </label>
            <br></br>
            <br></br>

            <button
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              type="submit"
            >
              Modifier
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
