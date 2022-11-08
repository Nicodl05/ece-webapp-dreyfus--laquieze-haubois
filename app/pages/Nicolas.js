import profile_image from "/public/Nicolas.jpg";
import Image from "next/image";

const Nicolas = () => {
  return (
    <div className="p-10grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
      <br></br>
      <div className="max-w rounded overflow-hidden shadow-lg ">
        <div className="flex items-start ">
          <Image
            src={profile_image}
            alt="Picture of the author"
            width={400}
            height={400}
          />
          <div className="justify-center text-center items-center">
            Compétences
          </div>
        </div>
        <div className="px-6 py-4 justify-center items-center ">
          <div className="font-bold text-xl mb-2 text-gray-700 justify-center ">
            Nicolas
          </div>
          <p>
            Nicolas est un étudiant de l'ECE Paris, il est en 2ème année de
            cycle ingénieur spécialisé en SI.
          </p>
          <p>
            Il est passionné par le développement logiciel et les nouvelles
            technologies.
          </p>
          <p>
            Vous pouvez cliquer
            <a
              href="https://www.linkedin.com/in/nicolas-dreyfus-laquièze-024532169"
              className="text-blue-500 hover:text-blue-800 font-bold"
            >
              {" "}
              ici{" "}
            </a>
            pour accéder à son profil LinkedIn ou
            <a
              href="https://github.com/Nicodl05"
              className="text-blue-500 hover:text-blue-800 font-bold"
            >
              {" "}
              ici
            </a>{" "}
            pour accéder à son Github
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Dev
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            C#
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Java
          </span>
        </div>
      </div>
    </div>
  );
};
export default Nicolas;
