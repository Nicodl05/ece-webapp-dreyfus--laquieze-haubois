
import Link from 'next/link'
import React from 'react';

<link rel="stylesheet" href="head.css"></link>
function navbar() {
  return (
    <nav>
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
    </nav>
  )
}
export default navbar