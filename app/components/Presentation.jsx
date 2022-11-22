import Link from "next/link";
import Image from "next/image";

export default function Presentation({ picture, name, info, linkd, git }) {
  return (
    <div className="flex space-y-10">
      <br></br>
      <div className=" gap-1 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  items-center text-center ">
        <div>
          <Image
            src={picture}
            alt="Picture of the author"
            width={400}
            height={400}
          />
        </div>
        <div>
          <br></br>
          <div className=" mb-2 wt-title  ">{name}</div>
          {info}
          <br></br>
          <div className="flex flex-wrap gap-1 items-center text-center justify-center">
            Vous pouvez cliquer
            <div className="text-blue-500 hover:text-blue-800 font-bold">
              <a href={linkd} target="_blank" rel="noopener noreferrer">
                {" "}
                ici{" "}
              </a>
            </div>
            pour accéder à son profil LinkedIn ou
            <div className="text-blue-500 hover:text-blue-800 font-bold">
              <a href={git} target="_blank" rel="noopener noreferrer">
                {" "}
                ici{" "}
              </a>
            </div>
            pour accéder à son Github
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}
