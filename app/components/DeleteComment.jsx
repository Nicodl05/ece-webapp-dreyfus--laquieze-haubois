import React from "react";
import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function updateComment({ session }) {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
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
  async function update() {
    try {
      // setLoading(true);
      const { data, error } = await supabase
        .from("comment")
        .delete()
        .eq("id", id);
      if (error) throw error;
      else
        alert(
          "Si vous étiez l'auteur de ce commentaire, il a bien été supprimé, vous pouvez rafraichir la page"
        );
    } catch (error) {
      alert("Error updating comment!");
      console.log(error);
    }
  }

  return (
    <div>
      <div className="text-center justify-center items-center">
        <div className="underline italic text-2xl">
          Supprimer un commentaire{" "}
        </div>
        <div className="form-control gap-4 text-lg ">
          <br></br>
          <br></br>
          <h3>
            Sélectionnez l'id du commentaire à supprimer
            <input
              className="input input-bordered"
              type="text"
              id="id"
              placeholder="Id du commentaire"
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
