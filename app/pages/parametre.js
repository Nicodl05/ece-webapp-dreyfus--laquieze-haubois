import { useEffect, useState } from "react";

import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

import Image from "next/image";
import Nicolas from "../public/Nicolas.jpg";
import Cyril from "../public/Cyril.jpg";

function switchimages({ id }) {
  switch (id) {
    case "21ef1270-5eae-4b48-8f40-6e07915a0f90":
      return (
        <Image
          src={Nicolas}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      );
    case "32a51743-cebf-4fdd-9915-0b76da038d6e":
      return (
        <Image
          src={Cyril}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      );
  }
}
export default function parametre({ session }) {
  const supabase = useSupabaseClient();

  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPwd] = useState(null);
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
        .select(`id,name, email, password`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setName(data.name);
        setEmail(data.email);
        setPwd(data.password);
        setId(data.id);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    }
  }

  return (
    <div>
      <section className=" body-font text-black dark:text-white">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 ">
              <p> {name}</p>
            </h1>
            <div className="hidden lg:inline-block text-lg  ">
              Vos informations
            </div>

            <div className="mb-8 leading-relaxed ">
              <div className="flex flex-wrap gap-2">
                Email:
                <p className="font-extrabold">{email}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                Mot de passe:
                <p className=" font-extrabold">{password}</p>
              </div>
            </div>
            <div className="flex justify-center">
              <a href="/modif_username">
                {" "}
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Modifier le nom
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
            {switchimages({ id })}
          </div>
        </div>
      </section>
    </div>
  );
}

/*  async function getCurrentUser() {
  const supabase = useSupabaseClient();
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
}*/
