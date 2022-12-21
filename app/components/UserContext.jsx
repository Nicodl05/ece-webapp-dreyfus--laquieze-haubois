import { createContext, useState , useEffect} from "react";
import supabase from "../utils/supabase"

const Context = createContext();

export default Context;

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <Context.Provider
      value={{
        user: user,
        login: (user) => {
          setUser(user);
        },
        logout: () => {
          async function supabasLogout() {
            await supabase.auth.signOut();
          }
          supabasLogout();
          setUser(null);
        },
      }}
    >
      { children }
    </Context.Provider>
  );
};
