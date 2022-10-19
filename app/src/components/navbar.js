 import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about" onClick={()=> Router.push("/about")}>About</Link>
    </li>
    <li>
      <Link to="/contacts" onClick={()=> Router.push("/contacts")}>Contacts</Link>
    </li>
    <li>
      <Link to="/articles" onClick={()=> Router.push("/articles")}>Articles</Link>
    </li>
  </div>
  );
}
export default navbar;