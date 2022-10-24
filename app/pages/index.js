import React from 'react';


/*
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
  );*/

function Home() {
  return (

    <div>
      <h1>Home</h1>
      <a> Vous êtes sur la page principale de cette application </a>
      <br></br>
      <b>
        Vous avez la possibilité de naviguer entre les pages en cliquant sur les
        différents liens affichés ci-dessous
      </b>

      L'objectif de ce tp est d'apprendre next.js
      <br></br>
      Documentation en cliquant <a href="https://nextjs.org/"> ici</a>
    </div>
  );

}


export default Home;






