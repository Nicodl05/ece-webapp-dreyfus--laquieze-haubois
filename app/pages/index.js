import React from "react";
import Layout from "../components/Layout";

function Home() {
  return (
    <div className="text-center">
      <h1 className="wt-title">Home</h1>
      <a> Vous êtes sur la page principale de cette application </a>
      <br></br>
      <br></br>
      <p>
        Vous pouvez naviguer sur le site en utilisant la barre de navigation.
        <br></br>
        Si vous cliquez sur About, vous en apprendrez plus sur les créateurs de
        ce site. <br></br>
        Si vous cliquez sur Articles, vous pourrez voir les articles
        disponibles. <br></br>
        Si vous cliquez sur Contacts, vous pourrez contacter les créateurs de ce
        site. <br></br>
      </p>
      <br></br>
      <p className="italic">
        L'objectif de ce tp est d'apprendre next.js ainsi que React et
        Tailwindcss
      </p>
      <br></br>
      <a className="text-blue-400 dark:text-blue-800">
        Documentation de Nextjs: <a href="https://nextjs.org/"> ici</a>
        <br></br>
        Documentation de React: <a href="https://fr.reactjs.org/">ici </a>
        <br></br>
        Documentation de Tailwindcss:
        <a href="https://tailwindcss.com/"> ici</a>
      </a>
    </div>
  );
}

export default Home;
