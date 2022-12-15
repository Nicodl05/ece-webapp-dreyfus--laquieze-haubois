import { useState, useEffect } from "react";

import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Account({ session }) {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    getUser();
  }, [session]);

  async function getUser() {
    try {
      setLoading(true);
      let { data, error, status } = await supabase
        .from("user")
        .select(`email, password, name`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.name);
        setEmail(data.email);
        setPassword(data.password);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateUser({ username, email, password }) {
    try {
      setLoading(true);
      const updates = {
        id: user.id,
        username,
        email,
        password,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("user").upsert(updates);
      if (error) throw error;

      alert("user updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email : </label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Username : </label>
        <input
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
          <label htmlFor="password">Password : </label>

          <input
            id="password"
            type="password"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

      <div>
        <button
          className="button primary block"
          onClick={() => updateUser({ username, password })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  )
}
