import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

export const getStaticProps = async () => {
  const { data: contact } = await supabase.from("contacts").select("*");
  return {
    props: {
      contact,
    },
  };
};
function parametre() {
  const [nom, setFname] = useState("");
  return (
    <div>
      <h1 className=" text text-4xl text-center">Paramètres</h1>
      <form>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nom
          </label>
          <output
            type="text"
            id="nom"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
      </form>
    </div>
  );
}

export default parametre;
