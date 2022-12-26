import { useState, useEffect, useContext } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import React from "react";
import { useRouter } from "next/router";

export default function Comment({ id, session }) {
  // Valeurs pour supa et définir le comment
  const supabase = useSupabaseClient();
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [uid, setUid] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Permet de get le user
  useEffect(() => {
    getUser();
  }, [session]);

  // Permet de get le user en fonction de la session
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

  // Permet de get les infos du user sur la table
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

  // Permet d'ajouter un commentaire sur supa
  const addComment = async (e) => {
    e.preventDefault();
    if (!comment) {
      alert("Tapez un commentaire avant de valider");
      return;
    }
    try {
      if (name === null) {
        const { error3 } = await supabase.from("comment").insert({
          created_at: new Date().toISOString(),
          u_id: uid,
          comment: comment,
          projet_id: id,
        });
        if (error3) {
          throw error3;
        } else {
          alert("Votre commentaire a été ajouté");
          router.push("/projets/[id]");
        }
      } else {
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
        router.push("/projets/[id]");
      }
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
              name="Bouton add"
            >
              Valider
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
