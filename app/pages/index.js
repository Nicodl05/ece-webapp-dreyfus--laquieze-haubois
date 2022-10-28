import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

function Home() {
  return (
    <div className="text-center dark:dark">
      <h1 className="h1">Home</h1>
      <br></br>
      <p> Vous êtes sur la page principale de cette application </p>

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
      <div className="text-gray-800 dark:text-gray-300">
        Documentation de Nextjs: <Link href="https://nextjs.org/"> ici</Link>
        <br></br>
        Documentation de React: <Link href="https://fr.reactjs.org/">ici </Link>
        <br></br>
        Documentation de Tailwindcss:
        <Link href="https://tailwindcss.com/"> ici</Link>{" "}
      </div>
    </div>
  );
}

export default Home;
