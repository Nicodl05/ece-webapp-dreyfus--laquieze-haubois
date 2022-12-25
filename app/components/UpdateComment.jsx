import React from "react";
import { useState, useEffect, useContext } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { supabase } from "../utils/supabase";

export default function updateComment({ session }) {
  const [ncomment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [id_comment, setIdComment] = useState("");
  const supabase = useSupabaseClient();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [uid, setUid] = useState("");

  useEffect(() => {
    getUser();
  }, [session]);

  async function getCurrentUser() {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();
    if (error) {
      throw error;
    }

    if (!session?.user) {
      throw new Error("User not logged in");
    }

    return session.user;
  }

  async function getUser() {
    try {
      setLoading(true);
      const user = await getCurrentUser();
      let { data, error, status } = await supabase
        .from("user")
        .select(`id,name, email, password`)
        .eq("id", user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setName(data.name);
        setEmail(data.email);
        setPwd(data.password);
        setUid(data.id);
        // alert("Bienvenue:" + data.name);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getCommentAuthor(id_com) {
    try {
      setLoading(true);
      const { data: comment, error } = await supabase
        .from("comment")
        .select()
        .eq(`id`, id_com);
      if (error) {
        throw error;
      }
      if (comment) {
        // alert("ID Connecté" + comment.author + " " + name);
        // alert("Auteur du commentaire:" + comment.u_id);
        // alert("Id du commentaire" + id_comment);
        return comment;
      }
    } catch (error) {
      console.log("l'erreur est :" + error);
      alert("Error loading comment author!");
    }
  }
  async function update() {
    try {
      setLoading(true);
      let { error } = await supabase
        .from("comment")
        .update({ comment: ncomment })
        .eq("id", id_comment);
      if (error) throw error;
      alert("Commentaire modifié");
    } catch (error) {
      alert(
        "Erreur lors de la modification, ce n'est peut être pas votre commentaire !"
      );
      console.log(error);
    }
  }

  return (
    <div>
      <div className="text-center justify-center items-center">
        <h2 className="underline italic text-2xl">
          Modification de commentaires{" "}
        </h2>
        <div className="form-control gap-4 text-lg ">
          <br></br>
          <br></br>
          <h3>
            Sélectionnez l'id du commentaire à modifier
            <input
              className="input input-bordered"
              type="text"
              id="id"
              placeholder="Id du commentaire"
              value={id_comment}
              onChange={(e) => setIdComment(e.target.value)}
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
