import { useState, useEffect, useContext } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import Context from "./UserContext";

export default function Comment(id) {
  const supabase = useSupabaseClient();

  const [comment, setComment] = useState("");
  const [projet_id, setProjet_id] = useState("");
  const [u_id, setU_id] = useState("");

  const addComment = async (e) => {
    console.log(id);

    e.preventDefault();

    if (!comment) {
      alert("Tapez un commentaire avant de valider");
      return;
    }

    const { error2 } = await supabase.from("comment").insert({
      created_at: new Date().toISOString(),
      u_id: "32a51743-cebf-4fdd-9915-0b76da038d6e",
      comment: comment.comment,
      projet_id: id,
    });
    if (error2) {
      throw error2;
    }
  };

  async function deleteComment() {
    let { data: id } = await supabase.from("comment").select("id");
    const { data, error } = await supabase
      .from("comment")
      .delete()
      .eq("id", id);
  }

  async function updateComment() {
    try {
      setLoading(true);
      let { data: id } = await supabase.from("comment").select("id");
      let { error } = await supabase
        .from("comment")
        .update({ comment: comment })
        .eq("id", id);
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
              value={comment || ""}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-green-500 rounded-lg text-white"
              onClick={() => addComment({ comment })}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
