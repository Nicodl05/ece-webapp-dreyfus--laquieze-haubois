import React from "react";
import { supabase } from "../../utils/supabase";
import { useRouter } from "next/router";
import Comment from "../../components/comment";
import { useEffect, useState } from "react";

function Page_Projet(props) {
  async function getSession() {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.log("error", error.message);
    }
    if (data === undefined) {
      console.log("ma session de id est undefined");
    }
    return data;
  }
  const [loading, setLoading] = useState(true);
  const [uid, setuId] = useState(null);

  const id = props.id;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black dark:text-white">
              <br className="hidden lg:inline-block"></br>
              {props.name}
            </h1>
            <h2>{props.languages}</h2>
            <p className="mb-8 leading-relaxed">{props.description}</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={props.image}
            />
          </div>
        </div>
      </section>
      {/* Juste en dessous c'est la ligne pour map les commentaires faudras que tu mettes en forme stp */}
      <h1 className="underline wt-title">Commentaires</h1>
      <div className="border-t pt-4 pb-4 grid grid-cols-3 gap-6">
        {props.comment.map((comment) => (
          <div key={comment.id} className="border rounded-md p-4">
            <p className="font-semibold mb-2">{comment.comment}</p>
            <p className="font-light">{comment.created_at}</p>
            <p className="font-light">Author: {comment.u_id}</p>
          </div>
        ))}
      </div>
      <br></br>
      <Comment id={id} />
    </div>
  );
}

//console.log(props.comment)

export async function getStaticPaths() {
  let { data: project } = await supabase.from("projet").select("*");

  const paths = project.map((projet) => ({
    params: { id: `${projet.id}` },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  // trouver le bon projet en fonction de l'id en parametre et le return
  let { data: project } = await supabase.from("projet").select("*");
  let { data: comment } = await supabase
    .from("comment")
    .select("*")
    .eq("projet_id", params.id);
  const res = project.find((projet) => projet.id == params.id);
  return {
    props: {
      name: res.name,
      languages: res.languages,
      id: res.id,
      description: res.description,
      image: res.image,
      github: res.git,

      comment,
    },
  };
}

export default Page_Projet;
// const res = projets.find((projet) => projet.id === params.id);
// let { data: projets } = await supabase .from("projet") .select("*") .eq("id", params.id);
