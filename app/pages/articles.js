import Layout from "../components/Layout";

import Image from "next/image";
import baguette from "/public/baguette.jpg";
import camembert from "/public/camembert.jpg";
import rillettes from "/public/rillettes.jpg";
import chablis from "/public/chablis.jpg";
const parse = require("html-react-parser");
const db = {
  articles: [
    {
      id: 1,
      title: "Rillettes",
      content: "Cyril aime ça au petit déj",
      image: "rillette",
    },
    {
      id: 2,
      title: "Vins",
      content: "Ca va, c'est de l'eau",
      image: "chablis",
    },

    {
      id: 3,
      title: "Camembert",
      content: "MEUUUUUH",
      image: "camembert",
    },
    {
      id: 4,
      title: "Baguette",
      content: "C'est du pain lol",
      image: "baguette",
    },
  ],
};

let array = "";
// saut de ligne
let br = "<br></br>";

for (let i = 0; i < db.articles.length; i++) {
  array +=
    "Article " +
    (i + 1) +
    ":" +
    br +
    "Title: " +
    db.articles[i].title +
    br +
    "Content: " +
    db.articles[i].content +
    br +
    db.articles[i].image;
}
function renderswitch(param) {
  switch (param) {
    case "camembert":
      return <Image src={camembert} alt="camembert" width={200} height={200} />;
    case "baguette":
      return <Image src={baguette} alt="baguette" width={200} height={200} />;
    case "rillette":
      return <Image src={rillettes} alt="rillettes" width={200} height={200} />;

    case "chablis":
      return <Image src={chablis} alt="chablis" width={200} height={200} />;
  }
}

function Articles({ res }) {
  return (
    <div>
      <h1 className="justify-center items-center text-center wt-title">
        Nos différents articles du terroir
      </h1>
      <div className="flex items-start text-center justify-center">
        <div className="grid grid-cols-2 gap-6">
          {res.map((post) => (
            <ul>
              <li className="dark:text-blue-500 text-[#007178] text-xl">
                Nom du produit: {post.title}
              </li>
              <li className="text-xl">
                Commentaires de {post.title}: {post.content}
              </li>
              <li>{renderswitch(post.image)}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = db.articles;
  return {
    props: {
      res,
    },
  };
}

export default Articles;
