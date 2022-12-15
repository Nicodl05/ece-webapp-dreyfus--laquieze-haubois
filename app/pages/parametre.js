import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import Image from "next/image";
import baguette from "/public/baguette.jpg";
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
function parametre({ user }) {
  return (
    <div>
      {user.map((user) => (
        <section className=" body-font text-black dark:text-white">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 ">
                <p> {user.name}</p>
              </h1>
              <div className="hidden lg:inline-block text-lg  ">
                Vos informations
              </div>

              <div className="mb-8 leading-relaxed ">
                <div className="flex flex-wrap gap-2">
                  Email:
                  <p className="font-extrabold">{user.email}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  Mot de passe:
                  <p className=" font-extrabold">{user.password}</p>
                </div>
              </div>
              <div className="flex justify-center">
                <a href="/email_modif">
                  {" "}
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Modifier l'email
                  </button>
                </a>
                <a href="/pwd_modif">
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Modifier le mot de passe
                  </button>
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image
                className="object-cover object-center rounded"
                alt="hero"
                src={baguette}
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default parametre;
