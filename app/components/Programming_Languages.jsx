import Image from "next/image";
import Link from "next/link";

/*grid lg:grid-cols-6  lg:gap-6 md:grid-cols-4 md:gap-4 sm:grid-cols-2 sm:gap-2*/
function Programming_Languages({ lang }) {
  return (
    <div className=" gap-6 justify-between text-center items-center ">
      <p className="gap-6 wt-title"> Mes langages maitrisés</p>
      <div className="  font-bold justify-between">
        <div className="grid lg:grid-cols-6  lg:gap-6 md:grid-cols-4 md:gap-4 sm:grid-cols-2 sm:gap-2 rounded  ">
          {lang.map((lang) => (
            <div className="hover:scale-75 flex flex-col justify-center items-center">
              <a href={lang[1]} target="_blank" rel="noopener noreferrer">
                <Image
                  src={lang[2]}
                  width={75}
                  height={75}
                  alt="Picture of the language"
                />
                <p className="text-center">{lang[0]}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programming_Languages;
