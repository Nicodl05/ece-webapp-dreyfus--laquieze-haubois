import Layout from "../components/Layout";

const parse = require("html-react-parser");
const db = {
  articles: [
    {
      id: 1,
      title: "Pomme pack",
      content: "1 pomme + 1 poire",
    },
    {
      id: 2,
      title: "Banane pack",
      content: "1 banane + 1 orange",
    },

    {
      id: 3,
      title: "Chocolate pack",
      content: "100 g chocolat + 1 biscuit",
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
    br;
}
function Articles({res}) {
  return (
    <ul>
      {
        res.map((post) => (
          <ul>
            <li>{post.title}</li>
            <li>{post.content}</li>
          </ul>
        ))
      }
    </ul>
  );
}

export async function getStaticProps()
{
  const res = db.articles;
  return{
    props: {
      res,
    },
  }
}

export default Articles;
