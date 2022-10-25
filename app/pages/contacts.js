import Link from "next/link";
import Router, { useRouter } from "next/router";

const mail_nico = "nicolas.dreyfus@outlook.fr";
const mail_cyril = "cyril.haubois@edu.ece.fr";

function Contacts() {
  return (
    <div>
      <h1 className="text-2xl font bold underline text-center">Contacts</h1>

      <p>
        <br></br>
        <div className="text-center align-center bg-gray-200">
          Vous pouvez contacter les créateurs de cette page par mail en cliquant
          sur leurs noms: <br></br>
          <a href={"mailto:" + mail_nico} className="text-blue-600">
            Nicolas Dreyfus--Laquièze
          </a>
          <br></br>
          <a href={"mailto:" + mail_cyril} className="text-green-600">
            {" "}
            Cyril Haubois
          </a>
          <br></br>
          <a
            href="https://github.com/Nicodl05/ece-webapp-dreyfus--laquieze-haubois"
            className="text-red-400"
          >
            Notre Github
          </a>
        </div>
      </p>
    </div>
  );
}
export default Contacts;
