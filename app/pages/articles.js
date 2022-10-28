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
function Articles() {
  return (
    <div>
      <h1 className="align-center h1 dark:dark text-center ">Articles</h1>
      <br></br>
      <p className="text-center align-center ">
        {parse(array)} <br></br>
      </p>
    </div>
  );
}
export default Articles;
