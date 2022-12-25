import Image from "next/image";
import nicolas from "/public/Nicolas.jpg";
import cyril from "/public/Cyril.jpg";
import Link from "next/link";

// Permet de display les profiles des users en dur
const Profiles = () => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
      <div className="rounded overflow-hidden bg-[#007178] shadow-lg border border-opacity-100 border-solid dark:border-gray-400 border-black dark:bg-gray-900  ">
        <br></br>
        <div className="text-center">
          <Image
            src={nicolas}
            alt="Picture of the author"
            width={400}
            height={400}
          />
        </div>
        <div className="px-6 py-4 text-white ">
          <div className="font-bold text-xl mb-2  dark:text-gray-200 text-center ">
            Nicolas
          </div>
          <div className="">
            <p>
              Nicolas est un étudiant de l'ECE Paris, il est en 2ème année de
              cycle ingénieur spécialisé en SI.
            </p>
            <p>
              Il est passionné par le développement logiciel et les nouvelles
              technologies.
            </p>
            <div className="flex flex-wrap gap-1">
              Vous pouvez cliquer
              <div className="text-yellow-500 hover:text-blue-800 font-bold">
                <Link href="https://www.linkedin.com/in/nicolas-dreyfus-laquièze-024532169">
                  ici
                </Link>
              </div>
              pour accéder à son profil LinkedIn ou
              <div className=" text-yellow-500 hover:text-blue-800  font-bold">
                <Link href="https://github.com/Nicodl05">ici</Link>
              </div>
              pour accéder à son Github
            </div>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Dev
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
            #Java
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
            #Dev Logiciel
          </span>

          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:hover:bg-blue-500 hover:bg-yellow -500 hover:bg-indigo-600 hover:text-white">
            <Link href="/Nicolas">Voir son profil</Link>
          </span>
        </div>
      </div>
      <div className="rounded overflow-hidden text-white shadow-lg border bg-[#007178] border-opacity-100 border-solid border-black dark:border-gray-400 dark:bg-gray-900 ">
        <div className="text-center">
          <br></br>
          <Image
            src={cyril}
            alt="Picture of the author"
            width={400}
            height={400}
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-200 text-center    ">
            Cyril
          </div>
          <p>
            Cyril est un étudiant de l'ECE Paris, il est en 2ème année de cycle
            ingénieur spécialisé en SI.
          </p>
          <p>
            Il est passionné par l'informatique et plus particulièrement la
            cybersécurité.
          </p>
          <p>
            Son exploit : tenir le record du monde d'une piste TrackMania durant
            une semaine !!
          </p>
          <div className=" flex flex-wrap gap-1">
            Vous pouvez cliquer
            <div className="text-yellow-500 hover:text-blue-800 font-bold  text-justify">
              <Link href="https://github.com/teepol"> ici </Link>
            </div>
            pour accéder à son Github
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Dev
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
            #C#
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
            #Cybersecurity
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:hover:bg-blue-500 hover:bg-yellow -500 hover:bg-indigo-600 hover:text-white">
            <Link href="/Cyril">Voir son profil</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
