import "../styles/global.css";
import { ThemeProvider } from "next-themes";
// Page par défaut de l'application comprenant les éléments communs à toutes les pages

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
export default MyApp;
