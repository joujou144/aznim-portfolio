import { PROJECTS } from "@/lib/data";
import ProjectCard from "../ProjectCard";

const RecentProject = () => {
  return (
    <div className="lg:w-[70%] mx-auto px-6 md:px-8 h-full w-full my-10">
      <div className="flex items-center mb-4">
        <p className="source-code-md w-full xs:w-[60%] md:w-[30%] xl:w-[20%]">
          Recent Project
        </p>
        <span className="bg-gray-400 bg-opacity-70 h-[1px] w-full"></span>
      </div>

      <ProjectCard {...PROJECTS[0]} />
    </div>
  );
};

export default RecentProject;
