import Link from "next/link";
import Router, { useRouter } from "next/router";
import Nicolas from "../components/Nicolas";
// create a function about
const About = () => {
  return (
    <div>
      <h1>About Us</h1>

      <p>
        This is the about page
        <br></br>
        Nicolas et Cyril sont des étudiants de l'ECE spécialisés en SI
        <Nicolas />
      </p>
    </div>
  );
}
export default About;
