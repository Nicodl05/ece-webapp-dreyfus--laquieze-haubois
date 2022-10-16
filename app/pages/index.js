import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { URLPattern } from 'next/server';
import React from 'react';
import ReactDOM from 'react-dom';

const name ="Nicolas"
function Home() {
  return (
    <div>
      <h1>Home</h1> 
      <a> Vous êtes sur la page principale de cette application </a>
      <br></br>
      <b>Vous avez la possibilité de naviguer entre les pages en cliquant sur les différents liens affichés ci-dessous</b>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        

        <Link href="/about" onClick={()=> Router.push('/about')}>
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/contacts"onClick={()=> Router.push('/contacts')}>
          <a>Contacts</a>
        </Link>
      </li>
      <li>
        <Link href="/articles"onClick={()=> Router.push('/articles')}>
          <a>Articles</a>
        </Link>
      </li>
    </ul>
    </div>

  )
}
// create function which displays about
function BlogPost() {
  const router = useRouter()
  const { slug } = router.query
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  )
}
function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page</p>
    </div>
  )
  
}

export default Home
 