import Image from "next/image";

function Programming_Languages({ lang }) {
  return (
    <div className=" gap-6 justify-between text-center items-center ">
      <p className="gap-6 wt-title"> Mes langages maitrisés</p>
      <div className=" grid lg:grid-cols-6  lg:gap-6 md:grid-cols-4 md:gap-4 sm:grid-cols-2 sm:gap-2 font-bold justify-between">
        <div className="hover:scale-150 rounded overflow-hidden shadow-lg ">
          {lang.map((prog) => (
            <a href={prog[1]} target="_blank" rel="noopener noreferrer">
              {prog[0]}
              <Image src={prog[2]} width={75} height={75} /> <p></p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programming_Languages;
