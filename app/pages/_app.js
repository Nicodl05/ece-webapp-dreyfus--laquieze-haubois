import "../styles/global.css";
import Navbar from "../components/Navbar/NavBar";

// Page par défaut de l'application comprenant les éléments communs à toutes les pages
function MyApp({ Component, pageProps }) {
    return (
        <div >

            <Component {...pageProps} />


        </div>
    );
}

export default MyApp;
