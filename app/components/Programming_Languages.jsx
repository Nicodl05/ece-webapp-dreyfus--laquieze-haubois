import Image from "next/image";

/*grid lg:grid-cols-6  lg:gap-6 md:grid-cols-4 md:gap-4 sm:grid-cols-2 sm:gap-2*/
function Programming_Languages({ lang }) {
  return (
    <div className=" gap-6 justify-between text-center items-center ">
      <p className="gap-6 wt-title"> Mes langages maitrisés</p>
      <div className="  font-bold justify-between">
        <div className="grid lg:grid-cols-6  lg:gap-6 md:grid-cols-4 md:gap-4 sm:grid-cols-2 sm:gap-2 rounded  ">
          {lang.map((prog_lang) => (
            <div className="hover:scale-75 flex flex-col justify-center items-center">
              <a href={prog_lang[1]} target="_blank" rel="noopener noreferrer">
                <Image
                  src={prog_lang[2]}
                  width={75}
                  height={75}
                  alt="Picture of the language"
                />
                <p className="text-center">{prog_lang[0]}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Programming_Languages;
