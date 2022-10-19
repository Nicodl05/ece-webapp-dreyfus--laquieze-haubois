import Link from "next/link";
import React, { Fragment } from "react";
import Head from "next/head";
// import { BrowserRouter as Router } from "react-router-dom";
//import navbar from "src/components/navbar"
// create a header function in common for all files
//<navbar />
function Home() {
  return (
    
    <div>
      
      <h1>Home</h1>
      <a> Vous êtes sur la page principale de cette application </a>
      <br></br>
      <b>
        Vous avez la possibilité de naviguer entre les pages en cliquant sur les
        différents liens affichés ci-dessous
      </b>
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
      L'objectif de ce tp est d'apprendre next.js
      <br></br>
      Documentation en cliquant <a href="https://nextjs.org/"> ici</a>
    </div>
  );
}

export default Home;
