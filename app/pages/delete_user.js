import { useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { supabase } from "../utils/supabase";
import { useRouter } from "next/router";
export default function delete_user({ session, users }) {
  const supabase = useSupabaseClient();
  const [to_delete, setToDelete] = useState("");
  const [loading, setLoading] = useState(true);
  const [name_user, setNameUser] = useState(null);
  const [email_user, setEmailUser] = useState(null);
  const [passwordUser, setPwdUser] = useState(null);
  const [id_User, setId_User] = useState(null);
  const [admin, setAdmin] = useState(null);
  const router = useRouter();
  // Permet de get le user
  useEffect(() => {
    getUser();
  }, [session]);

  //Permet de get le user par rapport a la session en cours
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

  //Permet de get les infos du user sur la table user
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
        setNameUser(data.name);
        setEmailUser(data.email);
        setPwdUser(data.password);
        setId_User(data.id);
        setAdmin(data.admin);
        // alert("Bienvenue " + data.name);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    }
  }

  //Permet de delete un user avec check si le user est bien admin
  const delete_confirm = async function (e) {
    e.preventDefault();
    if (admin === true) {
      const { error } = await supabase
        .from("user")
        .delete()
        .eq("name", to_delete);
      if (error) {
        alert("Erreur lors de la suppression de l'utilisateur ");
      }
      alert("L'utilisateur a été supprimé");
      router.push("/parametre");
    } else {
      alert("Vous n'avez pas les droits pour supprimer un utilisateur");
    }
  };
  return (
    <div>
      <h1 className="wt-title">Supprimer un utilisateur</h1>
      <div className="justify-between items-center text-center">
        <br></br>
        <br></br>
        <h1 className="text-xl font-bold italic underline">
          Liste des utilisateurs
        </h1>
        <br></br>
        {users.map((user) => (
          <div key={user.id}>
            <p className="bg-[#007178] text-white dark:bg-gray-900">
              {user.name}
            </p>
            {user.mail}
          </div>
        ))}
        <br></br>
        <input
          className="min-w-min"
          type="text"
          id="to_delete"
          placeholder="Nom de l'utilisateur à supprimer ?"
          value={to_delete}
          onChange={(e) => setToDelete(e.target.value)}
        />
        <br></br>
        <br></br>
        <button
          className="hover:scale-90 min-h-min items-center justify-center text-center  text-white-700 bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded text-lg"
          onClick={delete_confirm}
          name="submit delete"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const { data: users } = await supabase.from("user").select("*");

  return {
    props: {
      users,
    },
  };
};
