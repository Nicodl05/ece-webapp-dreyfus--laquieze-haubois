import Link from "next/link";
import Router, { useRouter } from "next/router";

const mail_nico = "nicolas.dreyfus@outlook.fr";
const mail_cyril = "cyril.haubois@edu.ece.fr";

function Contacts() {
  return (
    <div>
      <h1 class = "text-3xl font bold underline">Contacts</h1>
      <ul>
        <li>
          <Link href="/">
            <a class="text-3xl font-bold underline">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={() => Router.push("/about")}>
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/contacts" onClick={() => Router.push("/contacts")}>
            <a>Contacts</a>
          </Link>
        </li>
        <li>
          <Link href="/articles" onClick={() => Router.push("/articles")}>
            <a>Articles</a>
          </Link>
        </li>
      </ul>
      <p>
        This is the contacts page
        <br></br>
        Vous pouvez contacter les créateurs de cette page par mail en cliquant
        sur leurs noms: <br></br>
        <a href="mailto:  {mail_nico}"> Nicolas</a>
        <br></br>
        <a href="mailto:  {mail_cyril}"> Cyril</a>
        <br></br>
        <a href="https://github.com/Nicodl05/ece-webapp-dreyfus--laquieze-haubois">
          Notre Github
        </a>
      </p>
    </div>
  );
}
export default Contacts;
