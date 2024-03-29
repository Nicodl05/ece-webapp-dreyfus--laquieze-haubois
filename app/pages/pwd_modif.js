import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

function pwd_modif({ session }) {
  // Valeurs pour définir user pwd et supa
  const [oldpwd, setOldPwd] = useState("");
  const [formError, setFromError] = useState(null);
  const supabase = useSupabaseClient();
  const [name, setName] = useState("");
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(null);
  const [pwd, setPwd] = useState(null);
  const [id, setId] = useState(null);

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

  // Permet de get les infos user a partir de la table
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
        setOldPwd(data.password);
        setId(data.id);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    }
  }
  // Modif pwd
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pwd) {
      setFromError("Remplissez correctement le champ");
      return;
    }
    if (pwd.length <= 5) {
      setFromError("Votre mot de passe doit contenir au moins 6 caractères");
      return;
    }

    const { error2 } = await supabase
      .from("user")
      .update([{ password: pwd }])
      .eq("name", name);
    alert(
      "Votre mot de passe a été modifié, votre nouveau mot de passe est " + pwd
    );

    if (error2) {
      console.log(error);
      setFromError("Problème de mise à jour");
    }
  };
  return (
    <div>
      <div className="text-center justify-center items-center">
        <div className="wt-title">Modification de votre mot de passe: </div>
        <div className="form-control gap-4 text-lg ">
          <br></br>
          <br></br>
          <h3>
            Votre ancien mot de passe était :
            <div className="font-bold">{oldpwd}</div>{" "}
          </h3>
          <br></br>
          <h3>Votre nouveau mot de passe est :</h3>
          <form onSubmit={handleSubmit}>
            <label className="input-group input-group-vertical">
              <input
                className="input input-bordered"
                type="text"
                id="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
            </label>
            <br></br>
            <br></br>

            <button
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              type="submit"
              name="submit modif button"
            >
              Valider
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async () => {
  let { data: user, error } = await supabase
    .from("user")
    .select("*")
    .eq("name", "Nicolas");
  return {
    props: {
      user,
    },
  };
};
export default pwd_modif;
