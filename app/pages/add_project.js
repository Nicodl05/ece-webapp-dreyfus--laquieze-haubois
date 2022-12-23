import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

var i = 0;
var proj_added = "";

const addinfo = async () => {
  const { id, error } = await supabase
    .from("projet")
    .select("id")
    .eq("name", proj_added);
  const { error3 } = await supabase
    .from("projet")
    .update({ path: "../projets/" + id })
    .eq("id", id);

  if (error3) {
    console.log("Erreur update:" + error3);
  }
};
function add_project({ session }) {
  const [name, setName] = useState("");
  const [languages, setLanguages] = useState("");
  const [git, setGit] = useState("");
  const [description, setDescription] = useState("");
  const [formError, setFromError] = useState(null);
  const supabase = useSupabaseClient();

  const user = useUser();
  const [loading, setLoading] = useState(true);
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
        .select(`id`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setId(data.id);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    }
  }
  // pour l'id
  const handleSubmit = async (e) => {
    if (!name || !languages || !description) {
      setFromError("Remplissez les champs obligatoires");
      return;
    }
    // try {
    //   const file = e.target.files[0];
    //   const { data, error_up_images } = await supabase.storage
    //     .from("images-projet")
    //     .upload(file, file, {
    //       cacheControl: "3600",
    //       upsert: false,
    //     });
    //   if (error_up_images) {
    //     console.log(error_up_images);
    //   }
    // } catch (error_up_images) {
    //   console.log(error_up_images);
    // }

    const { error } = await supabase.from("projet").insert({
      user_id: id,
      languages: languages,
      git: git,
      name: name,
      description: description,
    });
    if (error) {
      console.log(error);
      setFromError("Remplissez tous les champs correctement " + i);
      i++;
    }
    proj_added = name;
    alert(
      "Votre projet a été ajouté, vous pouvez retourner sur la page Projets"
    );
  };
  return (
    <div>
      <br></br>
      <h1 className=" text wt-title text-center space-y-6">
        Ajouter un nouveau projet
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
            required
          />
        </div>{" "}
        <input
          type="file"
          accept="image/*"
          className="  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
        />
        <br></br>
        <br></br>
        <button
          type="submit"
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enregistrer
        </button>
        <div className=" min-h-screen  py-2 mb-2"></div>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}

export default add_project;
