import "../styles/global.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";
// Page par défaut de l'application comprenant les éléments communs à toutes les pages

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />

        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
