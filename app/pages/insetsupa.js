import { useEffect, useState } from "react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { supabase } from "../utils/supabase";

function InsertSupa() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [formError, setFromError] = useState(null);

  const handleSubmit = async (e) =>
  {
    e.preventDefault()
    if (!fname || !lname || !email || !msg)
    {
      setFromError('Remplissez tous les champs')
      return
    }

    const { data, error}  = await supabase.from('contacts').insert([{firstname: fname,lastname: lname,email: email,message: msg}])

    if(error)
    {
      console.log(error)
      setFromError('Remplissez tous les champs correctement')
    }

    if(data)
    {
      console.log(data)
      setFromError(null)
    }
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="firstname">First Name : </label>
        <input
          type="text"
          id="firstname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <label htmlFor="lastname">Last Name : </label>
        <input
          type="text"
          id="lastname"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <label htmlFor="email">Email : </label>
        <input
          type="text"
          id="femail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message">Message : </label>
        <input
          type="text"
          id="message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />

        <button>Insert contact</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}

export default InsertSupa;
