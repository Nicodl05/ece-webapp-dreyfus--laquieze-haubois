import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function handler(req, res) {
  let userProfile = {
    username: "Nicolas",
    email: "nico.dreylaq@gmail.com",
    //email: "david@adaltas.com",
    isLoggedIn: true,
  };
  const session = supabase.auth.session();
  useEffect(() => {
    getUser();
  }, [session]);
  console.log(user + " trc");
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
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
        .select(`name, email`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        alert(data.name);
        setName(data.name);
        setEmail(data.email);

        setId(data.id);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    }
  }

  userProfile = {
    username: name,
    email: email,
    //email: "david@adaltas.com",
    isLoggedIn: true,
  };

  /// res.status(200).json(userProfile); cette ligne est équivalente à celle ci-dessous
  res.status(200).json({ ...userProfile, isLoggedIn: true });
}
/*
  const supabase = useSupabaseClient();
  const user = useUser();
  // retrieve session
  const { session } = req;
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  let userProfile = {
    username: "Nicolas",
    email: "nico.dreylaq@gmail.com",
    //email: "david@adaltas.com",
    isLoggedIn: true,
  };
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
        .select(`,name, email`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        alert(data.name);
        setName(data.name);
        setEmail(data.email);
        setPwd(data.password);
        setId(data.id);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    }
  }

  userProfile = {
    username: "Nicolas",
    email: "nico.dreylaq@gmail.com",
    //email: "david@adaltas.com",
    isLoggedIn: true,
  };
  */
