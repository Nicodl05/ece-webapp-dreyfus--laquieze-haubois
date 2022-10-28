import {useState, useEffect} from "react";
import {useTheme} from "next-themes";
import {FaSun, FaMoon}  from "react-icons/fa";

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
          <FaSun  className="w-10 h-10 text-yellow-400 " role="button" onClick={() => setTheme('light')} />
        )
      }

      else {
        return (
          <FaMoon className="w-10 h-10 text-yellow-400 " role="button" onClick={() => setTheme('dark')} />
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