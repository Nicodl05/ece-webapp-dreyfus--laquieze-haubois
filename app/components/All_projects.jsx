function All_projects({ project }) {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
      {project.map((project) => (
        <div
          className="rounded overflow-hidden shadow-lg bg-[#007178] border-solid border-opacity-100 border-black dark:bg-gray-900 "
          key={project.id}
        >
          <div className="justify-between items-center text-center gap-4 ">
            <img
              className="w-full h-full"
              src={project.image}
              alt="Image du projet"
            />
            <div className="px-6 py-4 justify-center text-center">
              <div className="font-bold text-xl mb-2"> {project.name}</div>
              <p className="text-black dark:text-white text-base ">
                <br></br>
                {project.description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 justify-center text-center items-center round gap-4">
              <span className="inline-flex items-center justify-center  font-bold leading-none text-red-100 bg-[#20c9d5] rounded-full">
                <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {project.languages}
                </span>
              </span>
            </div>
            <a href={project.path}>
              <button className="hover:scale-90 items-center justify-center text-center  text-gray-700 bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                En savoir plus
              </button>
            </a>
          </div>
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default All_projects;
