import Image from "next/image";

function Projects({ project }) {
  return (
    <div className="px-6 py-4 ">
      <div className="wt-title">Mes projets réalisés</div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  ">
        {project.map((project) => (
          <div className=" font-bold hover:scale-125   ">
            <div className="text-center items-center">
              <a href={project[0]}>
                <Image src={project[1]} width={150} height={100} />
              </a>
              <br></br>
              {project[2]}
              <br></br>
              {project[3]}
            </div>
          </div>
        ))}
      </div>

      <br></br>
    </div>
  );
}

export default Projects;
