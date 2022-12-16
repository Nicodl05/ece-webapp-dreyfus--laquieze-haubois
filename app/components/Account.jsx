import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

export default function Account({ session }) {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [pwd, setPwd] = useState(null)

  useEffect(() => {
    getUser()
  }, [session])

  async function getCurrentUser() {
    const {data: {session}, error} = await supabase.auth.getSession();
    if(error) {
      throw error
    }

    if(!session?.user) {
      throw new Error('User not logged in')
    }

    return session.user
  }

  async function getUser() {
    try {
      setLoading(true)
      const user = await getCurrentUser();

      let { data, error, status } = await supabase
        .from('user')
        .select(`email, name, password`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setName(data.name)
        setEmail(data.email)
        setPwd(data.pwd)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ name, email, pwd }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        name,
        email,
        pwd,
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email : </label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Name : </label>
        <input
          id="name"
          type="text"
          value={name || ''}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password : </label>
        <input
          id="password"
          type="password"
          value={pwd || ''}
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() => updateProfile({ name, email, pwd })}
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