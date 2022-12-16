import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { Link, Redirect } from "react-router-dom";
export const getStaticProps = async () => {
  let { data: user, error } = await supabase
    .from("user")
    .select("*")
    .eq("name", "nicolas");
  return {
    props: {
      user,
    },
  };
};

function pwd_modif({ user }) {
  const [pwd, setPwd] = useState("");
  const [formError, setFromError] = useState(null);

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
      .eq("name", "nicolas");
    alert(
      "Votre mot de passe a été modifié, votre nouveau mot de passe est " + pwd
    );

    if (error2) {
      console.log(error);
      setFromError("Problème de mise à jour");
    }
    const { data, error } = await supabase.auth.updateUser({
      password: pwd,
    });
    if (error) {
      console.log(error);
      setFromError("Problème de mise à jour");
    }
  };
  return (
    <div>
      {user.map((user) => (
        <div className="text-center justify-center items-center">
          <div className="wt-title">Modification de votre mot de passe: </div>
          <div className="form-control gap-4 text-lg ">
            <br></br>
            <br></br>
            <h3>
              Votre ancien mot de passe était :
              <div className="font-bold">{user.password}</div>{" "}
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

export default pwd_modif;
