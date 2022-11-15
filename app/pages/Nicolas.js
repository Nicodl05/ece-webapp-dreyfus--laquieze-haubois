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
import Image from "next/image";
import Link from "next/link";

const Nicolas = () => {
  return (
    <div className="p-10grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
      <br></br>
      <div className="max-w rounded overflow-hidden shadow-lg ">
        <div className="p-10grid grid-cols-2 flex items-start text-center justify-center gap-20 ">
          <Image
            src={profile_image}
            alt="Picture of the author"
            width={400}
            height={400}
          />
          <div className="gap-6 justify-between text-center items-center ">
            <p className="gap-6 wt-title"> Mes langages maitrisés</p>

            <div className=" grid grid-cols-4 gap-6 ">
              <div className="hover:scale-150">
                <Image src={cplus} width={75} height={75} />
              </div>
              <div className="hover:scale-150">
                <Image src={csharp} width={75} height={75} />
              </div>
              <div className="hover:scale-150">
                <Image src={java} width={75} height={75} />
              </div>
              <div className="hover:scale-150">
                <Image src={sql} width={75} height={75} />
              </div>
              <div className="hover:scale-150">
                <Image src={nosql} width={75} height={75} />
              </div>
              <div className="hover:scale-150">
                <Image src={html} width={75} height={75} />
              </div>
              <div className="hover:scale-150">
                <Image src={css} width={75} height={75} />
              </div>
              <div className="hover:scale-150">
                <Image src={js} width={75} height={75} />
              </div>
              <div className="hover:scale-150">
                <Image src={react} width={75} height={75} />
              </div>
              <div className="hover:scale-150">
                <Image src={tailwind} width={75} height={75} />
              </div>
              <div className="hover:scale-150">
                <Image src={php} width={75} height={75} />
              </div>
              <div className="hover:scale-150">
                <Image src={python} width={75} height={75} />
              </div>
            </div>
          </div>
        </div>
        <p></p>
        <div className="px-6 py-4 justify-center items-center text-center ">
          <div className=" mb-2 wt-title justify-center ">Nicolas</div>
          <div>
            Nicolas est un étudiant de l'ECE Paris, il est en 2ème année de
            cycle ingénieur spécialisé en SI.
          </div>
          <div>
            Il est passionné par le développement logiciel et les nouvelles
            technologies.
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
          <div>
            <br></br>
            <div className="wt-title">Mes projets réalisés</div>
            <div>
              <div className="text-blue-500 font-bold">
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
        </div>
      </div>
    </div>
  );
};
export default Nicolas;
