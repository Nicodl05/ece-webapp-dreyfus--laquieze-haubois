import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
var i = 0;
function add_project() {
  const [name, setName] = useState("");
  const [languages, setLanguages] = useState("");
  const [git, setGit] = useState("");
  const [description, setDescription] = useState("");
  const [id_author, setId_author] = useState("1");
  const [formError, setFromError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !languages || !description) {
      setFromError("Remplissez les champs obligatoires");
      return;
    }
    const { error } = await supabase.from("projet").insert([
      {
        name: name,
        languages: languages,
        git: git,
        user_id: id_author,
        description: description,
      },
    ]);
    if (error) {
      console.log(error);
      setFromError("Remplissez tous les champs correctement " + i);
      i++;
    }
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
            htmlFor="email"
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
        </div>
        <button
          type="submit"
          className="justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enregistrer
        </button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}

export default add_project;
