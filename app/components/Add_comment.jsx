import { useState, useEffect, useContext } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import React from "react";

export default function Comment({ id, session }) {
  const supabase = useSupabaseClient();
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [uid, setUid] = useState(null);
  const [loading, setLoading] = useState(false);

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
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    }
  }
  if (id === undefined) {
    console.log("undefined");
  } else {
    console.log("mon id:" + id);
  }

  const addComment = async (e) => {
    e.preventDefault();
    if (!comment) {
      alert("Tapez un commentaire avant de valider");
      return;
    }
    try {
      const { error2 } = await supabase.from("comment").insert({
        created_at: new Date().toISOString(),
        u_id: uid,
        comment: comment,
        projet_id: id,
        author: name,
      });
      if (error2) {
        throw error2;
      }
      alert("Votre commentaire a été ajouté " + name);
    } catch (e) {
      alert("Erreur lors de l'ajout du commentaire");
      throw e;
    }
  };

  return (
    <div>
      <div className="text-center justify-center items-center">
        <h2 className="underline italic text-2xl">Nouveau Commentaire </h2>
        <div className="form-control gap-4 text-lg ">
          <br></br>
          <br></br>
          <form onSubmit={addComment}>
            <div>
              Votre nouveau commentaire
              <br></br>
              <input
                className="input input-bordered"
                type="text"
                id="comment"
                placeholder="Commentaire"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
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
