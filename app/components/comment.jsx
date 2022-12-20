import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Comment() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [projet_id, setProjet_id] = useState("");
  const [u_id, setU_id] = useState("");

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

  async function getCurrentProject()
  {
    const {error} = await supabase.from("projet").select("id");
    if(error)
    {
      throw error;
    }
  }

  // async function getComment() {
  //   try{
  //     setLoading(true);
  //     const projet = getCurrentProject();
  //     let { data, error,status } = await supabase
  //     .from("comment")
  //     .select("*")
  //     .eq("projet_id", projet.id)
  //     .single();
  //     if (error !== 406) {
  //       throw error;
  //     }
  //     if (data) {
  //       setComment(data.comment)
  //     }
  //   } catch (error) {
  //     alert("Error loading comment!");
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  async function addComment() {
    try {
      setLoading(true);
      const user = getCurrentUser();
      const projet = getCurrentProject();
      const update = {
        u_id: user.id,
        comment: comment,
        projet: projet.id
      }
      const { data, error } = await supabase
        .from("comment")
        .upsert([{ update }]);
    } catch (error) {
      alert("Error!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteComment() {
    let { data: id } = await supabase.from('comment').select('id')
    const { data, error } = await supabase.from('comment').delete().eq('id', id)
  }

  async function updateComment()
  {
    try {
      setLoading(true);
      let { data: id} = await supabase.from('comment').select('id')
      let { error } = await supabase.from("comment").update({comment: comment}).eq('id',id);
      if (error) throw error;
      alert("comment updated!");
    } catch (error) {
      alert("Error updating comment!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="pt-36 flex justify-center">
        <div className="min-w-[600px]">
          <h1 className="text-4xl font-bold ">Comments</h1>
          <form className="mt-8 flex gap-8">
            <input
              type="text"
              placeholder="Add a comment"
              className="p-2 border-b focus:border-b-gray-700 w-full outline-none"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button className="px-4 py-2 bg-green-500 rounded-lg text-white" onClick={() => addComment({ comment})}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
