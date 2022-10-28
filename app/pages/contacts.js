import Layout from "../components/Layout";
import Link from "next/link";

const mail_nico = "nicolas.dreyfus@outlook.fr";
const mail_cyril = "cyril.haubois@edu.ece.fr";

function Contacts() {
  return (
    <div>
      <h1 className="text-2xl  text-center h1">Contacts</h1>
      <br></br>
      <div>
        <br></br>
        <div className="text-center align-center  ">
          Vous pouvez contacter les créateurs de cette page par mail en cliquant
          sur leurs noms: <br></br>
          <Link href={"mailto:" + mail_nico}>Nicolas Dreyfus--Laquièze</Link>
          <br></br>
          <Link href={"mailto:" + mail_cyril}> Cyril Haubois</Link>
          <br></br>
          <Link href="https://github.com/Nicodl05/ece-webapp-dreyfus--laquieze-haubois">
            Notre Github
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Contacts;
