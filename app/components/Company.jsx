import Image from "next/image";

function Compagny({ jobs }) {
  return (
    <div>
      <div className="wt-title">
        Les entreprises avec lesquelles j'ai travaillé
      </div>
      <div className="    ">
        <div className="rounded overflow-hidden shadow-lg    ">
          <div className=" grid grid-cols-3 ">
            {jobs.map((company) => (
              <div className="  gap-4 justify-center items-center text-center hover:scale-75">
                <a
                  href={company[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={company[1]}
                >
                  <Image src={company[2]} width={100} height={100}></Image>
                </a>
                <div className="text-xl text-center underline font-bold">
                  {company[3]}
                </div>
                <br></br>
                <div className="font-bold">Poste: {company[4]}</div>
                <div className=" italic"> {company[5]}</div>
                <br></br>
                <div className="underline">Mes missions:</div>
                <ul>
                  <li>{company[6]}</li>
                  <li>{company[7]}</li>
                </ul>
                <br></br>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <br></br>
        </div>
      </div>
    </div>
  );
}
export default Compagny;
