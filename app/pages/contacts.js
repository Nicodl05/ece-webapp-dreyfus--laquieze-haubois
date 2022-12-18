import Layout from "../components/Layout";
import Link from "next/link";

import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import Account from "../components/Account";
import { useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { darkThemes } from "../utils/supabase";

const mail_nico = "nico.dreylaq@gmail.com";
const mail_cyril = "cyril.haubois@edu.ece.fr";

function Contacts() {
  const onSubmit = async (e) => {
    const [email, setEmail] = useState(null);
    const [pwd, setPwd] = useState(null);
  };
  return (
    <div>
      <h1 className="text-2xl  text-center h1">Contacts</h1>
      <br></br>
      <div className="dark:text-white">
        <br></br>
        <div className="text-center align-center  ">
          Vous pouvez contacter les créateurs de cette page par mail en cliquant
          sur leurs noms: <br></br>
          <div className="dark:hover:text-blue-500 hover:text-[#007178] font-bold  ">
            <Link href={"mailto:" + mail_nico}>Nicolas Dreyfus--Laquièze</Link>
          </div>
          <br></br>
          <div className="dark:hover:text-blue-500 hover:text-[#007178] font-bold ">
            <Link href={"mailto:" + mail_cyril}> Cyril Haubois</Link>
          </div>
          <br></br>
          <div className="dark:hover:text-blue-500 hover:text-[#007178] font-bold ">
            <Link href="https://github.com/Nicodl05/ece-webapp-dreyfus--laquieze-haubois">
              Notre Github
            </Link>
          </div>
        </div>
        Vous pouvez aussi nous contacter via notre page en replissant ce
        formulaire de contact{" "}
        <form className="mt-6" onSubmit={onSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block  mr-2 mb-2   text-sm font-semibold "
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full px-4 py-2 mt-2  text-gray-700 mr-2 mb-2   bg-white border rounded-md   focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm  mr-2 mb-2  font-semibold "
            >
              Votre mail
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full px-4 py-2 mt-2  mr-2 mb-2   bg-white border rounded-md   focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 bg-blue-400 tracking-wide hover:underline  mr-2 mb-2 dark:hover:text-blue-500 hover:text-[#007178]  transition-colors duration-200 transform  rounded-md  focus:outline-none">
              Send
            </button>
          </div>
        </form>{" "}
      </div>
    </div>
  );
}
export default Contacts;
