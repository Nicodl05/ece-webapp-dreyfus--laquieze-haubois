import {useState, useEffect} from "react";
import Logo from "./Logo";
import {useTheme} from "next-themes";
import { HiOutlineMoon } from "react-icons/hi2";
import   { HiSun } from "react-icons/hi2";

const Header = () => {

  const {systemTheme , theme, setTheme} = useTheme ();
  const [mounted, setMounted] = useState(false);  
  useEffect(() =>{
    setMounted(true);
  },[])

   const renderThemeChanger= () => {
      if(!mounted) return null;
      const currentTheme = theme === "system" ? systemTheme : theme ;
      if(currentTheme ==="dark"){
        return (
          <HiSun  className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
        )
      }

      else {
        return (
          <HiOutlineMoon className="w-10 h-10 text-white " role="button" onClick={() => setTheme('dark')} />
        )
      }
   };

  return (
    <header >
     <div >        
        
        {renderThemeChanger()}
     </div> 
    </header>
  );
};

export default Header;