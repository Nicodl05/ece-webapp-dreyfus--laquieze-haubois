import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
const Login = function () {
  const session = useSession();
  const supabase = useSupabaseClient();
  return (
    <div className="gap-6">
      <br></br>
      <h1 className="wt-title">Connexion</h1>
      <div className="" style={{ padding: "50px 0 100px 0" }}>
        {!session ? (
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={["github"]}
          />
        ) : (
          <Account session={session} />
        )}
      </div>
    </div>
  );
};
export default Login;
/*

const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    alert(JSON.stringify(Object.fromEntries(data)));
    if (!email || !pwd) {
      setFromError("Remplissez tous les champs");
      return;
    }
    const { donnee: contact } = await supabase
      .from("auth.user")
      .select("*")
      .eq("email", email);

    return {
      props: {
        contact,
      },
    };
  };
  
<div className="relative space-y-6 flex flex-col min-h-screen overflow-hidden">
      <br></br>
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700 mr-2 mb-2   underline">
          Se connecter
        </h1>
        <form className="mt-6" onSubmit={onSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-gray-700 mr-2 mb-2   text-sm font-semibold "
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full px-4 py-2 mt-2  text-gray-700 mr-2 mb-2   bg-white border rounded-md   focus:outline-none focus:ring focus:ring-opacity-40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm text-gray-700 mr-2 mb-2  font-semibold "
            >
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 mr-2 mb-2   bg-white border rounded-md   focus:outline-none focus:ring focus:ring-opacity-40"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <div className="text-xs  text-gray-700 mr-2 mb-2 dark:hover:text-blue-500 hover:text-[#007178]  hover:underline">
            <Link href="#">Mot de passe oublié ?</Link>
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide hover:underline text-gray-700 mr-2 mb-2 dark:hover:text-blue-500 hover:text-[#007178]  transition-colors duration-200 transform  rounded-md  focus:outline-none">
              Connexion
            </button>
          </div>
        </form>
        <div className="mt-8 text-xs font-light text-gray-700 mr-2 mb-2   text-center ">
          {" "}
          Pas encore de compte ?{" "}
          <div className="font-medium  hover:underline hover:text-[#007178] dark:hover:text-blue-500 ">
            <Link href="#">Créer un compte</Link>
          </div>
        </div>
      </div>
    </div>
    */
