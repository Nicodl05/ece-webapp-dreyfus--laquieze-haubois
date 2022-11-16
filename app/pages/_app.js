import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

import { SessionContextProvider } from "@supabase/auth-helpers-react";
//import { ContextProvider } from "../components/UserContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionContextProvider>
    </ThemeProvider>
  );
}
export default MyApp;
