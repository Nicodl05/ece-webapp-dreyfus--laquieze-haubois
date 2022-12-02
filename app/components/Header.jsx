import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import Avatar from "./Avatar";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
  }; /*
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

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("http://localhost:3000/api/profile");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError(err);
      } finally {
        console.log("fetch done");
      }
    }
    fetchUser();
  }, []);

  if (!user) {
    return <div>Chargement...</div>;
  } //SI c'est à null, sans le ? ça va bugger
  if (error) {
    return <pre className="text-red-500">{JSON.stringify(error, null, 2)}</pre>;
  }
  return (
    <div className="flex gap-2 items-center">
      <Avatar email={user.email} />
      <p>User: {user?.username}</p>
      <div>{renderThemeChanger()}</div>
    </div>
  );

  return;
};

export default Header;
