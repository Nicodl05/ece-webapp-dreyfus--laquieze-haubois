import { Children, createContext, useEffect, useState } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";
import Nicolas from "../public/Nicolas.jpg";
import Cyril from "../public/Cyril.jpg";
// Render switch pour display image en fonction du user
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
    default:
      return (
        <img
          src="https://ypkrvmmlnbddeybnmruo.supabase.co/storage/v1/object/public/images-projets/profile.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      );
  }
}
export default function parametre({ session }) {
  // Valeurs connexions supa et user
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPwd] = useState(null);
  const [id, setId] = useState(null);
  const [admin, setAdmin] = useState("");

  // Permet de get le user
  useEffect(() => {
    getUser();
  }, [session]);
  // Permet de get le user en fonction de la session
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

  // Permet de get les infos user a partir de la table
  async function getUser() {
    try {
      setLoading(true);
      const user = await getCurrentUser();
      let { data, error, status } = await supabase
        .from("user")
        .select(`id,name, email, password, admin`)
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
        if (data.admin == true) {
          setAdmin("Oui");
        } else {
          setAdmin("Non");
        }
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
              <div className="flex flex-wrap gap-2">
                Admin:
                <p className=" font-extrabold">{admin}</p>
              </div>
            </div>
            <div className=" justify-center grid lg:grid-cols-2 sm:grid-cols-1 gap-6 ">
              <a href="/modif_username">
                <button
                  name="modif nom"
                  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 hover:text-white rounded text-lg"
                >
                  Modifier le nom
                </button>
              </a>

              <a href="/modif_proj">
                <button
                  name="modif proj"
                  className=" inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 hover:text-gray-700 rounded text-lg"
                >
                  Modifier un projet
                </button>
              </a>
              <a href="/delete_proj">
                <button
                  name="delete proj"
                  className=" inline-flex text-white bg-red-500  border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 hover:text-gray-700 rounded text-lg"
                >
                  Supprimer un projet
                </button>
              </a>
              <a href="/delete_user">
                <button
                  name="delete user"
                  className=" inline-flex text-white bg-red-500  border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 hover:text-gray-700 rounded text-lg"
                >
                  Supprimer un utilisateur
                </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* <Avatar email={email} /> */}
            {switchimages({ id })}
          </div>
        </div>
      </section>
    </div>
  );
}
