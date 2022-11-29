import { supabase } from "../utils/supabase";

export const getStaticProps = async () => {
  const { data: contact } = await supabase.from("contacts").select("*");
  return {
    props: {
      contact,
    },
  };
}

export default function FetchSupa({contact})
{
  console.log({contact})
  return (
    <div className="flex flex-col items-center justify-center text-xl">
      {contact.map((contacts) => (
      <p>{contacts.email}</p>
    ))}</div>
  )
}