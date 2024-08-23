import ProjectCard from "./ProjectCard";
import { data } from "@/constants/helper";


const Projects = () => {
  return (
    <div id="projects">
      <div>
        <h1 className="text-center font-bold text-3xl">Recent Projects</h1>
      </div>
      <ProjectCard {...data} />
      <ProjectCard {...data} />

    </div>
  );
};
export default Projects;
