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
import Image from "next/image";
import Link from "next/link";

const Cyril = () => {
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
        <div className="px-6 py-4 justify-center items-center text-center ">
          <div className=" mb-2 wt-title justify-center ">Cyril</div>
          <div>
            Cyril est un étudiant de l'ECE Paris, il est en 2ème année de cycle
            ingénieur spécialisé en SI.
          </div>
          <div>
            Il est passionné par l'informatique et plus particulièrement la
            cybersécurité.
          </div>
          <div>
            Son exploit : tenir le record du monde d'une piste TrackMania durant
            une semaine !!
          </div>
          <div className="flex flex-wrap gap-1 justify-center">
            Vous pouvez accéderà son Github en cliquant
            <div className="text-blue-500 hover:text-blue-800 font-bold">
              <Link href="https://github.com/teepol"> ici</Link>
            </div>
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
            <br></br>
            <div>
              <div className="wt-title">
                Les entreprises avec lesquelles j'ai travaillé
              </div>

              <div className="grid grid-cols-2  text-center items-center justify-center  ">
                <div className="rounded overflow-hidden shadow-lg items-center text-center justify-center   ">
                  <div>
                    <Image src={braintech} width={100} height={100}></Image>
                  </div>
                  Braintechnologies
                </div>
                <div className="rounded overflow-hidden shadow-lg items-center text-center justify-center   ">
                  <div>
                    <Image src={lacentralef} width={100} height={100}></Image>
                  </div>
                  La Centrale de Financement
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
