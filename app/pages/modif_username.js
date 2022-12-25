import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

// import { Link, Redirect } from "react-router-dom";
// export const getStaticProps = async () => {
//   let { data: user, error } = await supabase
//     .from("user")
//     .select("*")
//     .eq("name", "Nicolas");
//   return {
//     props: {
//       user,
//     },
//   };
// };

function modif_username({ session }) {
  const [oldname, setOldName] = useState("");
  const [formError, setFromError] = useState(null);
  const supabase = useSupabaseClient();
  const [name, setName] = useState("");
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPwd] = useState(null);
  const [id, setId] = useState(null);

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
        setOldName(data.name);
        setEmail(data.email);
        setPwd(data.password);
        setId(data.id);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setFromError("Remplissez correctement le champ");
      return;
    }
    if (name.length <= 2) {
      setFromError("Votre nom doit contenir au moins 3 caractères");
      return;
    }

    const { error } = await supabase
      .from("user")
      .update([{ name: name }])
      .eq("email", email);
    alert(
      "Votre nom d'utilisateur a été modifié, votre nouveau nom est " + name
    );
    const { error2 } = await supabase
      .from("comment")
      .update([{ author: name }])
      .eq("u_id", id);
    alert(
      "Votre nom d'utilisateur a été modifié, votre nouveau nom est " + name
    );

    if (error) {
      console.log(error);
      setFromError("Problème de mise à jour");
    }
  };
  return (
    <div>
      {/* {user.map((user) => ( */}
      <div className="text-center justify-center items-center">
        <div className="wt-title">Modification de votre nom: </div>
        <div className="form-control gap-4 text-lg ">
          <br></br>
          <br></br>
          <h3>
            Votre ancien nom était :<div className="font-bold">{oldname}</div>
          </h3>
          <br></br>
          <h3>Votre nouveau nom est :</h3>
          <form onSubmit={handleSubmit}>
            <label className="input-group input-group-vertical">
              <input
                className="input input-bordered"
                type="text"
                id="email"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br></br>
            <br></br>
            <a hrefLang="/parametres">
              <button
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                type="submit"
              >
                Valider
              </button>
            </a>
          </form>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}

export default modif_username;
