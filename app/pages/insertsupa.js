import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

function InsertSupa() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [formError, setFromError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fname || !lname || !email || !msg) {
      setFromError("Remplissez tous les champs");
      return;
    }

    const { data, error } = await supabase
      .from("contacts")
      .insert([
        { firstname: fname, lastname: lname, email: email, message: msg },
      ]);

    if (error) {
      console.log(error);
      setFromError("Remplissez tous les champs correctement");
    }

    if (data) {
      console.log(data);
      setFromError(null);
    }
  };

  return (
    <div className="relative flex space-y-6 flex-col min-h-screen overflow-hidden">
      <p></p>
      <div className="w-full p-6 m-auto bg-green-800 rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-200 mr-2 mb-2 italic">
          Insert a new Contact
        </h1>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="firstname"
            className="block text-gray-300 mr-2 mb-2   text-lg font-semibold "
          >
            First Name :{" "}
          </label>
          <input
            type="text"
            id="firstname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <label
            htmlFor="lastname"
            className="block text-gray-300 mr-2 mb-2   text-lg font-semibold "
          >
            Last Name :{" "}
          </label>
          <input
            type="text"
            id="lastname"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <label
            htmlFor="email"
            className="block text-gray-300 mr-2 mb-2   text-lg font-semibold "
          >
            Email :{" "}
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="message"
            className="block text-gray-300 mr-2 mb-2   text-lg font-semibold "
          >
            Message :{" "}
          </label>
          <input
            type="text"
            id="message"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />

          <button className="w-full px-6 py-2 tracking-wide hover:underline text-gray-900 mr-2 mb-2 dark:hover:bg-blue-500 hover:text-[#007178]  transition-colors duration-200 transform  rounded-md  focus:outline-none text-xl italic font-semibold">
            Insert
          </button>

          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    </div>
  );
}

export default InsertSupa;
