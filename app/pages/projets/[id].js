import React from "react";
import Link from "next/link";
import { supabase } from "../../utils/supabase";
import Add_comment from "../../components/Add_comment";
import UpdateComment from "../../components/UpdateComment";
import DeleteComment from "../../components/DeleteComment";

import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

function Page_Projet(props, { session }) {
  const supabase = useSupabaseClient();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [uid, setUid] = useState(null);

  useEffect(() => {
    getUser();
  }, [session]);

  async function getCurrentUser() {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();
    if (error) {
      throw error;
    }

    if (!session?.user) {
      throw new Error("User not logged in");
    }

    return session.user;
  }

  async function getUser() {
    try {
      setLoading(true);
      const user = await getCurrentUser();
      let { data, error, status } = await supabase
        .from("user")
        .select(`id,name, email, password`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setName(data.name);
        setEmail(data.email);
        setPwd(data.password);
        setUid(data.id);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    }
  }
  async function getAuthorName(id) {
    console.log("lid de l'auteur est : " + id);
    const { data: user, error } = await supabase
      .from("user")
      .select("name")
      .eq("id", id);
    return user.name;
  }

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
        {props.comment.map((commentary) => (
          <div key={commentary.id} className="border rounded-md p-4">
            ID Comment: {commentary.id}
            <br></br>
            <p className="font-bold">Commentaire: {commentary.comment}</p>
            <p className="font-light">Ecrit: {commentary.created_at}</p>
            <div className="font-light">
              Auteur:
              {commentary.author}
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <div className="grid grid-cols-3">
        <div>
          <Add_comment id={id} />
        </div>

        <div>
          <UpdateComment id={id} />
        </div>
        <div>
          <DeleteComment />
        </div>
      </div>
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
  const { data: user, error } = await supabase.from("user").select("name");

  const res = project.find((projet) => projet.id == params.id);

  return {
    props: {
      name: res.name,
      languages: res.languages,
      id: res.id,
      description: res.description,
      image: res.image,
      github: res.git,
      user,
      comment,
    },
  };
}

export default Page_Projet;
