import profile_image from "/public/Cyril.jpg";
import cplus from "/public/c++.png";
import css from "/public/css.png";
import html from "/public/html.png";
import sql from "/public/sql.png";
import nosql from "/public/nosql.png";
import csharp from "/public/csharp.png";
import java from "/public/java.png";
import js from "/public/js.png";
import react from "/public/react.png";
import tailwind from "/public/tailwind.png";
import python from "/public/python.png";
import php from "/public/php.png";
import braintech from "/public/braintech.png";
import lacentralef from "/public/lacentralef.png";
import ski from "/public/ski.png";
import java_cyril from "/public/java_nico.png";
import Image from "next/image";
import Link from "next/link";

const Cyril = () => {
  return (
    <div className="p-10grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
      <br></br>
      <div className="max-w rounded overflow-hidden shadow-lg ">
        <div className="p-10grid grid-cols-2 flex items-start text-center justify-center gap-20 ">
          <div className="gap-8">
            <Image
              src={profile_image}
              alt="Picture of the author"
              width={400}
              height={400}
            />
          </div>
          <div>
            <div className=" mb-2 wt-title justify-center ">Cyril</div>
            <div className="justify-center items-center text-center ">
              Cyril est un étudiant de l'ECE Paris, il est en 2ème année de
              cycle ingénieur spécialisé en SI.
              <br></br>Il est passionné par l'informatique et plus
              particulièrement la cybersécurité.
              <br></br>Un de ces exploits : tenir le record du monde d'une piste
              TrackMania durant une semaine !!
              <br></br>Il est à la recherche d’un stage d’une durée de 4-5 mois
              à partir du 11 avril dans le domaine de l'informatique et ou de la
              cybersécurité.
            </div>

            <div className="flex flex-wrap gap-1 justify-center">
              Vous pouvez cliquer
              <div className="text-blue-500 hover:text-blue-800 font-bold">
                <a
                  href="https://github.com/teepol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  ici
                </a>
              </div>
              pour accéder à son Github
            </div>
          </div>
        </div>
        <p></p>
        <div className="px-6 py-4 grid grid-cols-2">
          <div>
            <br></br>
            <div className="wt-title">Mes projets réalisés</div>
            <div className=" grid grid-cols-2  ">
              <div className=" font-bold hover:scale-125 items-center text-center justify-center  ">
                <div>
                  <a href="https://github.com/Nicodl05/Cinema_Projet">
                    <Image src={java_cyril} width={150} height={100} />
                  </a>
                </div>
                Projet Cinéma (Java, MySQL) <br></br> Ce projet a été réalisé en
                3ème année.
              </div>
              <div className="font-bold hover:scale-125 items-center text-center justify-center">
                <div>
                  <a
                    href="https://github.com/Nicodl05/TdG-Projet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={ski} width={100} height={100} />
                  </a>
                </div>
                Projet Théorie des Graphes (C++) <br></br>Ce projet a été
                réalisé en 2ème année
              </div>
            </div>
          </div>

          <div className="gap-6 justify-between text-center items-center ">
            <p className="gap-6 wt-title"> Mes langages maitrisés</p>
            <div className=" grid grid-cols-6 gap-6 font-bold justify-between">
              <div className="hover:scale-150 rounded overflow-hidden shadow-lg ">
                <a
                  href="https://cplusplus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Documentation de C++"
                >
                  <Image src={cplus} width={75} height={75} /> <p></p>
                  C++
                </a>
              </div>
              <div className="hover:scale-150 rounded overflow-hidden shadow-lg ">
                <a
                  href="https://learn.microsoft.com/fr-fr/dotnet/csharp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Documentation de C#"
                >
                  <Image src={csharp} width={75} height={75} /> <p></p>
                  C#
                </a>
              </div>
              <div className="hover:scale-150 rounded overflow-hidden shadow-lg ">
                <a
                  href=" https://docs.oracle.com/en/java/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Documentation de Java"
                >
                  <Image src={java} width={75} height={75} /> <p></p>
                  Java
                </a>
              </div>
              <div className="hover:scale-150 rounded overflow-hidden shadow-lg ">
                <a
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Documentation de MySQL"
                >
                  <Image src={sql} width={75} height={75} /> <p></p>
                  MySQL
                </a>
              </div>
              <div className="hover:scale-150 rounded overflow-hidden shadow-lg ">
                <a
                  href="https://docs.oracle.com/en/database/other-databases/nosql-database/index.html
                  "
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Documentation de NoSQL"
                >
                  <Image src={nosql} width={75} height={75} /> <p></p>
                  NoSQL
                </a>
              </div>
              <div className="hover:scale-150 rounded overflow-hidden shadow-lg ">
                <a
                  href="https://developer.mozilla.org/fr/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Documentation de HTML"
                >
                  <Image src={html} width={75} height={75} /> <p></p>
                  HTML
                </a>
              </div>
              <div className="hover:scale-150 rounded overflow-hidden shadow-lg ">
                <a
                  href="https://developer.mozilla.org/fr/docs/Web/CSS"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Documentation de CSS"
                >
                  <Image src={css} width={75} height={75} />
                  <p></p>
                  CSS
                </a>
              </div>
              <div className="hover:scale-150 rounded overflow-hidden shadow-lg ">
                <a
                  href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Documentation de Javascript"
                >
                  <Image src={js} width={75} height={75} />
                  <p></p>
                  JavaScript
                </a>
              </div>
              <div className="hover:scale-150 rounded overflow-hidden shadow-lg ">
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Documentation de React"
                >
                  <Image src={react} width={75} height={75} />
                  <p></p>
                  React
                </a>
              </div>
              <div className="hover:scale-150 rounded overflow-hidden shadow-lg ">
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Documentation de Tailwind CSS"
                >
                  <Image src={tailwind} width={75} height={75} />
                  <p></p>
                  Tailwind CSS
                </a>
              </div>
              <div className="hover:scale-150 rounded overflow-hidden shadow-lg ">
                <a
                  href="https://www.php.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Documentation de PHP"
                >
                  <Image src={php} width={75} height={75} />
                  <p></p>
                  PHP
                </a>
              </div>
              <div className="hover:scale-150 rounded overflow-hidden shadow-lg ">
                <a
                  href="https://www.python.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Documentation de Python"
                >
                  <Image src={python} width={75} height={75} />
                  <p></p>
                  Python
                </a>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div>
          <div className="wt-title">
            Les entreprises avec lesquelles j'ai travaillé
          </div>
          <div className="grid grid-cols-2 gap-4    ">
            <div className="rounded overflow-hidden shadow-lg    ">
              <div className="grid grid-cols-2   ">
                <div className="justify-center items-center text-center hover:scale-75">
                  <a
                    href="https://www.cer-bercy.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Site du CER Bercy"
                  >
                    <Image src={braintech} width={200} height={200}></Image>
                  </a>
                </div>
                <div>
                  <div className="text-xl text-center underline font-bold">
                    Braintech
                  </div>
                  <br></br>
                  <div className="font-bold">
                    Poste: Assistant support informatique
                  </div>
                  <div className="underline">Mes missions:</div>
                  <ul>
                    <li>Gestion du parc informatique</li>
                    <li>
                      Mise à jour de la politique interne de sécurité
                      informatique (RGPD)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg    ">
              <div className="grid grid-cols-2   ">
                <div className="justify-center items-center text-center hover:scale-75">
                  <a
                    href="https://www.societe.com/societe/renov-r-bati-790412357.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Site sociétal de Rénov R Bati"
                  >
                    <Image src={lacentralef} width={200} height={200}></Image>
                  </a>
                </div>
                <div>
                  <div className="text-xl text-center underline font-bold">
                    La centrale de financement
                  </div>
                  <br></br>
                  <div className="font-bold">Poste: Assistant stagiaire </div>

                  <div className="underline">Mes missions:</div>
                  <ul>
                    <li>Vituralisation de Documentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cyril;
