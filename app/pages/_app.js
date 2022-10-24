import "../styles/global.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
// Page par défaut de l'application comprenant les éléments communs à toutes les pages
function MyApp({ Component, pageProps }) {
    return (
        <div >
            <Navbar />

            <Component {...pageProps} />
            <Footer />

        </div>
    );
}

export default MyApp;
