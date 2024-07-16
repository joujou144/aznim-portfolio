import { Footer, ProjectCard } from "@/components";
import { PROJECTS } from "@/lib/data";

const Work = () => {
  return (
    <section className="max-w-[93rem] mx-auto pt-14 lg:pt-16">
      <div className=" px-6 mid-md:px-8">
        <div className="py-6 border-t divider flex flex-1 flex-col mid-md:flex-row">
          <div className="mid-md:w-[30%] mid-md:border-l mid-md:pl-6 divider ">
            <p className="text-[1.6rem] heading pt-12 mid-md:pt-0 pb-4 border-b divider mid-md:border-b-0">
              Selected Projects
            </p>
          </div>

          <div className="pt-6 h-full mid-md:w-[70%] mid-md:order-first mid-md:pr-6 mid-md:pt-0">
            <ProjectCard {...PROJECTS[0]} />
          </div>
        </div>

        <div className="py-6 border-t divider flex flex-1 flex-col mid-md:flex-row">
          <div className="border-b divider pb-6 mid-md:pb-0 mid-md:w-[40%] mid-md:pr-6 mid-md:border-b-0">
            <ProjectCard {...PROJECTS[1]} isEven />
          </div>

          <div className="pt-6 h-full divider mid-md:w-[60%] mid-md:border-l mid-md:pl-6 mid-md:pt-0">
            <ProjectCard {...PROJECTS[2]} />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Work;
