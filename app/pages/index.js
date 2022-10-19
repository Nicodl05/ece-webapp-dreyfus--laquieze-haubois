import Link from "next/link";
import React, { Fragment } from "react";
import Head from "next/head";

// create a header function in common for all files

function Home() {
  return (
    <React.Fragment>
      <Head>
        <meta name="theme-color" content ="3c1742" />
      </Head>
      <Component {...pageProps} />
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
    </React.Fragment>
  );
}

export default Home;
