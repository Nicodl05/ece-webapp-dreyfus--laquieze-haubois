import Layout from "../components/Layout";
import Link from "next/link";

import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import Account from "../components/Account";

import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const mail_nico = "nicolas.dreyfus@outlook.fr";
const mail_cyril = "cyril.haubois@edu.ece.fr";

function Contacts() {
  const session = useSession();

  const supabase = useSupabaseClient();
  return (
    <div>
      <h1 className="text-2xl  text-center h1">Contacts</h1>
      <br></br>
      <div>
        <br></br>
        <div className="text-center align-center  ">
          Vous pouvez contacter les créateurs de cette page par mail en cliquant
          sur leurs noms: <br></br>
          <div className="dark:hover:text-blue-500 hover:text-[#007178] font-bold  ">
            <Link href={"mailto:" + mail_nico}>Nicolas Dreyfus--Laquièze</Link>
          </div>
          <br></br>
          <div className="dark:hover:text-blue-500 hover:text-[#007178] font-bold ">
            <Link href={"mailto:" + mail_cyril}> Cyril Haubois</Link>
          </div>
          <br></br>
          <div className="dark:hover:text-blue-500 hover:text-[#007178] font-bold ">
            <Link href="https://github.com/Nicodl05/ece-webapp-dreyfus--laquieze-haubois">
              Notre Github
            </Link>
          </div>
        </div>
      </div>
      <div className="" style={{ padding: "50px 0 100px 0" }}>
        {!session ? (
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          />
        ) : (
          <Account session={session} />
        )}
      </div>
    </div>
  );
}
export default Contacts;
