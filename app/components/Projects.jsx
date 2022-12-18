import Image from "next/image";
import { supabase } from "../utils/supabase";

export const getStaticProps = async () => {
  const { data: id } = await supabase
    .from("user")
    .select("id")
    .eq("name", user.name);

  const { data2: projet } = await supabase
    .from("projet")
    .select("*")
    .eq("user_id", id);

  return {
    props: {
      projet,
    },
  };
};
function Projects({ projet }) {
  return (
    <div className="px-6 py-4 ">
      <div className="wt-title">Mes projets réalisés</div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  ">
        {projet.map((project) => (
          <div className=" font-bold hover:scale-125   ">
            <div className="text-center items-center">
              <a href={project.path}>
                <Image src={project.image} width={150} height={100} />
              </a>
              <br></br>
              {project.languages}
              <br></br>
              {project.description}
            </div>
          </div>
        ))}
      </div>

      <br></br>
    </div>
  );
}

export default Projects;
