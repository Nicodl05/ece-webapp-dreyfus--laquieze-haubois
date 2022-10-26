import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";
// Page par défaut de l'application comprenant les éléments communs à toutes les pages

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
}
export default MyApp;
