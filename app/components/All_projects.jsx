import Image from "next/image";

function All_projects({ project }) {
  return (
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {project.project.map((project) => (
        <a href={project[8]} onClick={console.log(project[8])}>
          <div class="rounded overflow-hidden shadow-lg hover:scale-90">
            <div className="justify-between items-center text-center  ">
              <Image
                class="w-full"
                src={project[2]}
                width={350}
                height={240}
                alt="Mountain"
              />
            </div>
            <div class="px-6 py-4 justify-center text-center">
              <div class="font-bold text-xl mb-2"> {project[3]}</div>
              <p class="text-gray-700 text-base ">
                <br></br>
                {project[44]}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2 justify-center text-center items-center round gap-4">
              <span class="inline-flex items-center justify-center  font-bold leading-none text-red-100 bg-[#20c9d5] rounded-full">
                <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {project[5]}
                </span>
              </span>
              {(project[6] !== null || project[6] != "") && (
                <span class="inline-flex items-center justify-center  font-bold leading-none text-red-100 bg-[#20c9d5] rounded-full">
                  <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    {project[6]}
                  </span>
                </span>
              )}
              {project[7] != null && (
                <span class="inline-flex items-center justify-center  font-bold leading-none text-red-100 bg-[#20c9d5] rounded-full">
                  <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">
                    {project[7]}
                  </span>
                </span>
              )}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default All_projects;
