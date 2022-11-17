import Link from "next/link";

export default function Presentation({ name, info, linkd, git }) {
  console.log({ name });
  return (
    <div>
      <div className=" mb-2 wt-title justify-center ">{name}</div>
      <div className="justify-center items-center text-center ">{info}</div>
      <div className="flex flex-wrap gap-1 justify-center">
        Vous pouvez cliquer
        <div className="text-blue-500 hover:text-blue-800 font-bold">
          <Link href={linkd}>ici</Link>
        </div>
        pour accéder à son profil LinkedIn ou
        <div className="text-blue-500 hover:text-blue-800 font-bold">
          <Link href={git}> ici</Link>
        </div>
        pour accéder à son Github
      </div>
    </div>
  );
}
