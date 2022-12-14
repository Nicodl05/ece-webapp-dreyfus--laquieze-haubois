import Image from "next/image";

function All_projects({ project }) {
  return (
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {project.map((project) => (
        <div class="rounded overflow-hidden shadow-lg hover:scale-90">
          <div className="justify-between items-center text-center  ">
            <Image
              class="w-full"
              src={project[1]}
              width={350}
              height={240}
              alt="Mountain"
            />
          </div>
          <div class="px-6 py-4 justify-center text-center">
            <div class="font-bold text-xl mb-2"> {project[2]}</div>
            <p class="text-gray-700 text-base ">
              <br></br>
              {project[3]}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 justify-center text-center items-center round">
            <span class="inline-flex items-center justify-center px-2 py-1 mr-2  font-bold leading-none text-red-100 bg-red-300 rounded-full">
              <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {project[4]}
              </span>
            </span>
            if({project[5] === null})
            {
              <span class="inline-flex items-center justify-center px-2 py-1 mr-2  font-bold leading-none text-red-100 bg-red-300 rounded-full">
                <span class="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {project[5]}
                </span>
              </span>
            }
            if()
            <span class="inline-flex items-center justify-center px-2 py-1 mr-2  font-bold leading-none text-red-100 bg-red-300 rounded-full"></span>
            <span class="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {project[6]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default All_projects;
