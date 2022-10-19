import Link from "next/link";
import Router, { useRouter } from "next/router";

// create a function about
function About() {
  return (
    <div>
      <h1>About Us</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
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
        This is the about page
        <br></br>
        Nicolas et Cyril sont des étudiants de l'ECE spécialisés en SI
      </p>
    </div>
  );
}
export default About;
