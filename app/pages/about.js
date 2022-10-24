import Link from "next/link";
import Router, { useRouter } from "next/router";
import Nicolas from "../components/Nicolas";
import Profiles from "../components/Profiles";
import Cyril from "../components/Cyril";
// create a function about
const About = () => {
  return (
    <div>
      <h1>About Us</h1>

      <p>
        This is the about page
        <br></br>
        Nicolas et Cyril sont des étudiants de l'ECE spécialisés en SI

      </p>

      <Cyril />
    </div>
  );
}
export default About;
