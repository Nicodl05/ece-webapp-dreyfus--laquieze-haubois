import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { UserContext } from "../components/UserContext";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    // Theme into session supa into usercontext
    <ThemeProvider enableSystem={true} attribute="class">
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <UserContext>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserContext>
      </SessionContextProvider>
    </ThemeProvider>
  );
}
export default MyApp;
