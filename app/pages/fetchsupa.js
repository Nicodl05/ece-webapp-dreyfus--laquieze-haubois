import { useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

function FetchSupa() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const [fetchError, setFetchError] = useState(null);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      const { data, error } = await supabase.from("contacts").select("*");

      if (error) {
        setFetchError("Ne peut récupérer les contacts");
        setContact(null);
        console.log(error);
      }
      if (data) {
        setContact(data);
        setFetchError(null);
        console.log(data);
      }
    };
    fetchContact();
  });
  return (
    <div className="text-xl">
      {fetchError && <p>{fetchError}</p>}
      {contact && (
        <div className="text-xl">
          {contact.map((contacts) => (
            <p>{contacts.email}</p>
          ))}
        </div>
      )}
    </div>
  );
}
export default FetchSupa;
