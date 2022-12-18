import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import Avatar from "./Avatar";
import { supabase } from "../utils/supabase";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

const Header = ({ session }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <FaSun
          className="w-10 h-10 text-yellow-400 hover:scale-125  "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <FaMoon
          className="w-10 h-10 text-white hover:scale-125 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  const user = useUser();
  let userProfile = {
    username: "Nicolas",
    email: "nico.dreylaq@gmail.com",
    isLoggedIn: true,
  };
  const supabase = useSupabaseClient();
  const [error, setError] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(true);

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
        .select(`name, email`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setName(data.name);
        setEmail(data.email);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  userProfile = {
    username: name,
    email: email,
    //email: "david@adaltas.com",
    isLoggedIn: true,
  };
  if (!userProfile.username) {
    return <div>En attente de connexion...</div>;
  } //SI c'est à null, sans le ? ça va bugger
  if (error) {
    return <pre className="text-red-500">{JSON.stringify(error, null, 2)}</pre>;
  }
  return (
    <div>
      <div className="flex gap-2 items-center">
        <Avatar email={userProfile.email} />
        <p> {userProfile?.username}</p>
        <div>{renderThemeChanger()}</div>
      </div>
    </div>
  );

  return;
};

export default Header;
//  <p>User: {user?.username}</p>

/*async function fetchUser() {
      try {
        const res = await fetch("http://localhost:3000/api/profile");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError(err);
      } finally {
        console.log("fetch done" + user);
      }
    }
    fetchUser();
    */
// dans le use effect

///Cours
/*
  const [email, setEmail] = useState("")
  useEffect(()=>{
    checkEmail(email) // a chaque fois que va y avoir une maj sur notre input dans le cas ou nous avons une form, les maj se font en temps réeel*

  }, [email])
  /*
  return(
    <>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    </>
  )
  */

/* Partie avec useeffect et fetch
  useEffect(() => {
    const res = fetch("http://localhost:3000/api/profile")
      .then((res) => res.json())
      .then((data) => setUser(data));
    console.log(res);
  }, []);
  */
