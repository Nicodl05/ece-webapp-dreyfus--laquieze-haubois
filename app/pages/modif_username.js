import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { Link, Redirect } from "react-router-dom";
export const getStaticProps = async () => {
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

function modif_username({ user }) {
  const [name, setName] = useState("");
  const [formError, setFromError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setFromError("Remplissez correctement le champ");
      return;
    }
    if (name.length <= 5) {
      setFromError("Votre mot de passe doit contenir au moins 6 caractères");
      return;
    }

    const { error } = await supabase
      .from("user")
      .update([{ name: name }])
      .eq("email", "nico.dreylaq@gmail.com");
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
      {user.map((user) => (
        <div className="text-center justify-center items-center">
          <div className="wt-title">Modification de votre email: </div>
          <div className="form-control gap-4 text-lg ">
            <br></br>
            <br></br>
            <h3>
              Votre ancien email était :
              <div className="font-bold">{user.name}</div>{" "}
            </h3>
            <br></br>
            <h3>Votre nouveau email est :</h3>
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
      ))}
    </div>
  );
}

export default modif_username;
