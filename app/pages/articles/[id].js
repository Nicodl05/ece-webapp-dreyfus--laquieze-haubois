import db from "../../content/db";
import Image from "next/image";
import baguette from "/public/baguette.jpg";
import camembert from "/public/camembert.jpg";
import rillettes from "/public/rillettes.jpg";
import chablis from "/public/chablis.jpg";
function renderswitch(article) {
  switch (article) {
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
function PageArticle({ res }) {
  return (
    <div>
      <h1 className="justify-center items-center text-center wt-title">
        Cet article vous intéresse ?
      </h1>
      <div className="flex items-start text-center justify-center">
        <div className="">
          <ul>
            <li className="dark:text-blue-500 text-[#007178] text-xl">
              Nom du produit: {res.title}
            </li>
            <li className="text-xl">
              Commentaires de {res.title}: {res.content}
            </li>
            <li>{renderswitch(res.image)}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = db.articles.map((articles) => ({
    params: { id: articles.id },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const res = db.articles.find((articles) => articles.id === params.id);
  return { props: { res } };
}

export default PageArticle;
