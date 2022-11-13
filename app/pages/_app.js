import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";
import { ContextProvider } from "../components/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
