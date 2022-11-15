import profile_image from "/public/Nicolas.jpg";
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
import cer from "/public/cer.png";
import renov from "/public/renov.png";
import ece from "/public/ece.png";
import Image from "next/image";
import Link from "next/link";

const Nicolas = () => {
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
            <div className=" mb-2 wt-title justify-center ">Nicolas</div>
            <div className="justify-center items-center text-center ">
              Nicolas est un étudiant sérieux et motivé, passionné par le
              développement logiciel et les nouvelles technologies.
              <br></br>Il est en deuxième année du cycle ingénieur à l’ECE
              Paris, spécialisé en Systèmes d’Informations.
              <br></br>Il est à la recherche d’un stage d’une durée de 4-5 mois
              à partir du 11 avril dans le domaine du développement
              informatique.
            </div>

            <div className="flex flex-wrap gap-1 justify-center">
              Vous pouvez cliquer
              <div className="text-blue-500 hover:text-blue-800 font-bold">
                <Link href="https://www.linkedin.com/in/nicolas-dreyfus-laquièze-024532169">
                  ici
                </Link>
              </div>
              pour accéder à son profil LinkedIn ou
              <div className="text-blue-500 hover:text-blue-800 font-bold">
                <Link href="https://github.com/Nicodl05"> ici</Link>
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
            <div className="justify-center items-center text-center ">
              <div className="text-blue-500 font-bold ">
                <Link href="https://github.com/Nicodl05/Cinema_Projet">
                  Projet Cinéma
                </Link>
              </div>
              Ce projet a été réalisé en 3ème année.
              <br></br>
              <div className="text-blue-500 font-bold">
                <Link href="https://github.com/Nicodl05/TdG-Projet">
                  Projet de Théorie des Graphes
                </Link>
              </div>
              Ce projet a été réalisé en 2ème année.
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
                  title="Documentation de C#"
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
                  title="Documentation de C#"
                >
                  <Image src={sql} width={75} height={75} /> <p></p>
                  MySQL
                </a>
              </div>
              <div className="hover:scale-150 rounded overflow-hidden shadow-lg ">
                <Image src={nosql} width={75} height={75} /> <p></p>
                NoSQL
              </div>
              <div className="hover:scale-150 rounded overflow-hidden shadow-lg ">
                <Image src={html} width={75} height={75} /> <p></p>
                HTML
              </div>
              <div className="hover:scale-150 rounded overflow-hidden shadow-lg ">
                <Image src={css} width={75} height={75} />
                <p></p>
                CSS
              </div>
              <div className="hover:scale-150 rounded overflow-hidden shadow-lg ">
                <Image src={js} width={75} height={75} />
                <p></p>
                JavaScript
              </div>
              <div className="hover:scale-150 rounded overflow-hidden shadow-lg ">
                <Image src={react} width={75} height={75} />
                <p></p>
                React
              </div>
              <div className="hover:scale-150 rounded overflow-hidden shadow-lg ">
                <Image src={tailwind} width={75} height={75} />
                <p></p>
                Tailwind CSS
              </div>
              <div className="hover:scale-150 rounded overflow-hidden shadow-lg ">
                <Image src={php} width={75} height={75} />
                <p></p>
                PHP
              </div>
              <div className="hover:scale-150 rounded overflow-hidden shadow-lg ">
                <Image src={python} width={75} height={75} />
                <p></p>
                Python
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div>
          <div className="wt-title">
            Les entreprises avec lesquelles j'ai travaillé
          </div>
          <div className="grid grid-cols-3 gap-4    ">
            <div className="rounded overflow-hidden shadow-lg    ">
              <div className="grid grid-cols-2   ">
                <div className="justify-center items-center text-center hover:scale-75">
                  <a
                    href="https://www.cer-bercy.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Site du CER Bercy"
                  >
                    <Image src={cer} width={200} height={200}></Image>
                  </a>
                </div>
                <div>
                  <div className="text-xl text-center underline font-bold">
                    CER Bercy
                  </div>
                  <br></br>
                  <div className="font-bold">
                    Poste: Assistant administratif
                  </div>
                  <div className="underline">Mes missions:</div>
                  <ul>
                    <li>Remise à niveau du site internet</li>
                    <li>Développement applications de bureau</li>
                    <li>Support informatique</li>
                    <li>Gestion de la vitrine numérique</li>
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
                    <Image src={renov} width={200} height={200}></Image>
                  </a>
                </div>
                <div>
                  <div className="text-xl text-center underline font-bold">
                    Rénov R Bâti
                  </div>
                  <br></br>
                  <div className="font-bold">Poste: Développeur Logiciel</div>

                  <div className="underline">Mes missions:</div>
                  <ul>
                    <li>
                      Développement application console pour la gestion des
                      matériauxde chantiers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg    ">
              <div className="grid grid-cols-2   ">
                <div className="justify-between items-center text-center hover:scale-75">
                  <a
                    href="https://www.ece.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Site de l'école d'ingénieurs ECE"
                  >
                    <Image src={ece} width={200} height={100}></Image>
                  </a>
                </div>
                <div>
                  <div className="text-xl text-center underline font-bold">
                    ECE Paris
                  </div>
                  <br></br>
                  <div className="font-bold">Poste: Ambassadeur</div>
                  <div className="underline">Mes missions:</div>
                  <ul>
                    <li>Responsable de la promotion école</li>
                    <li>Résponsable lors de salons étudiants</li>
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
export default Nicolas;
