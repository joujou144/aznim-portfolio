import { EXPERIENCES, SKILLS } from "@/lib/data";

const WorkExperience = () => {
  return (
    <div className="py-6 border-t divider grid grid-cols-1 gap-y-6 mid-md:gap-y-0 mid-md:grid-cols-3">
      <div className="source-code-sm">
        <h4>Experience</h4>
      </div>

      <div className="mid-md:px-6 col-span-2">
        <ul className="flex flex-col gap-6">
          {EXPERIENCES.map(({ role, date, company, description }) => (
            <li key={company} className="list-none">
              <p className="text-stone-700">{company}</p>
              <p className="font-semibold source-code-sm">{role}</p>
              <p className="opacity-60 text-[0.9rem]">{date}</p>
              <p className=" mt-2 content-font">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <div className="py-6 border-t divider grid grid-cols-1 gap-y-6 mid-md:gap-y-0 mid-md:grid-cols-3">
      <div className="source-code-sm">
        <h4>Skills</h4>
      </div>

      <div className="tracking-normal mid-md:px-6 col-span-2 content-font">
        {SKILLS}
      </div>
    </div>
  );
};

export default WorkExperience;
