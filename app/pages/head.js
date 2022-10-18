
import Link from 'next/link'
import React from 'react';

<link rel="stylesheet" href="head.css"></link>
function navbar() {
  return (
    <nav>
        <Link href="/">
             <a>Home</a>
        </Link>
        <Link href="/about" onClick={()=> Router.push('/about')}>
          <a>About Us</a>
        </Link>
        <Link href="/contacts"onClick={()=> Router.push('/contacts')}>
          <a>Contacts</a>
        </Link>
        <Link href="/articles"onClick={()=> Router.push('/articles')}>
          <a>Articles</a>
        </Link>

    </nav>
  )
}