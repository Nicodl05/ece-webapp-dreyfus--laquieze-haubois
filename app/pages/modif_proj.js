import { useContext, useEffect, useState } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import Context from "../components/UserContext";

export default function modif_proj({ session }) {
  const [projet, setProjet] = useState([]);
  const supabase = useSupabaseClient();
  const { user } = useContext(Context);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [git, setGit] = useState(null);
  const [description, setDescription] = useState(null);

  useEffect(() => {
    async function getProjet() {
      setLoading(true);

      const { data: projet, error } = await supabase.from("projet").select("*");

      console.log("Mon projet est : " + projet);
      setProjet(projet);
    }
    getProjet();
  }, []);
  const [name_user, setNameUser] = useState(null);
  const [email_user, setEmailUser] = useState(null);
  const [passwordUser, setPwdUser] = useState(null);
  const [id_User, setId_User] = useState(null);

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
        setNameUser(data.name);
        setEmailUser(data.email);
        setPwdUser(data.password);
        setId_User(data.id);
        // alert("Bienvenue " + data.name);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    }
  }
  const modif = async function (e) {
    e.preventDefault();

    if (name != null) {
      const { error } = await supabase
        .from("projet")
        .update({ name: name })
        .eq("id", id);
      if (error) {
        alert(
          "Erreur lors de la modification du projet, vous n'êtes peut-être pas l'auteur du projet"
        );
      } else {
        alert("Projet modifié, vous pouvez rafraichir la page");
      }
    }
    if (languages != null) {
      const { error } = await supabase
        .from("projet")
        .update({ languages: languages })
        .eq("id", id);
      if (error) {
        alert(
          "Erreur lors de la modification du projet, vous n'êtes peut-être pas l'auteur du projet"
        );
      } else {
        alert("Projet modifié, vous pouvez rafraichir la page");
      }
    }
    if (git != null) {
      const { error } = await supabase
        .from("projet")
        .update({ git: git })
        .eq("id", id);
      if (error) {
        alert(
          "Erreur lors de la modification du projet, vous n'êtes peut-être pas l'auteur du projet"
        );
      } else {
        alert("Projet modifié, vous pouvez rafraichir la page");
      }
    }
    if (description != null) {
      const { error } = await supabase
        .from("projet")
        .update({ description: description })
        .eq("id", id);
      if (error) {
        alert(
          "Erreur lors de la modification du projet, vous n'êtes peut-être pas l'auteur du projet"
        );
      } else {
        alert("Projet modifié, vous pouvez rafraichir la page");
      }
    }
  };
  return (
    <div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
        {projet.map((project) => (
          <div
            className="bg-[#007178] rounded overflow-hidden shadow-lg dark:bg-gray-900 "
            key={project.id}
          >
            <div className="justify-between items-center text-center gap-4 ">
              <img
                className="w-full h-full"
                src={project.image}
                alt="Image du projet"
              />

              <div className="px-6 py-4 justify-center text-center">
                <div className="font-bold text-xl mb-2"> {project.name}</div>
                <p className="text-black dark:text-white text-base ">
                  <div className="text-sm underline">
                    Projet n° {project.id}
                  </div>

                  <br></br>
                  {project.description}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 justify-center text-center items-center round gap-4">
                <span className="inline-flex items-center justify-center  font-bold leading-none text-red-100 bg-[#20c9d5] rounded-full">
                  <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    {project.languages}
                  </span>
                </span>
              </div>
              <br></br>
            </div>
          </div>
        ))}
      </div>
      <div className="justify-between items-center text-center">
        <input
          className="dark:bg-gray-700 text-white"
          type="text"
          id="id"
          placeholder="N° du projet à modifier "
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br></br>
        <br></br>
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white underline italic"
          >
            Titre du projet
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Mon projet Hello World !"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-xl font-medium text-gray-900 underline italic dark:text-white"
          >
            Languages
          </label>
          <input
            type="text"
            id="languages"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="C#, Java, SQL, React, Python ... "
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-xl font-medium underline italic text-gray-900 dark:text-white"
          >
            Lien Github
          </label>
          <input
            type="text"
            id="github"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="https://github.com/"
            value={git}
            onChange={(e) => setGit(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-xl font-medium underline italic text-gray-900 dark:text-white"
          >
            Description du projet
          </label>
          <input
            type="text"
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Projet réalisé en ..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          className="hover:scale-90 min-h-min items-center justify-center text-center  text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg"
          onClick={modif}
        >
          Modifier
        </button>
      </div>
    </div>
  );
}
