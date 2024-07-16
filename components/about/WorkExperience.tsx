import { EXPERIENCES } from "@/lib/data";
import React from "react";

const WorkExperience = () => {
  return (
    <div className="py-6 border-t divider grid grid-cols-1 gap-y-6 mid-md:gap-y-0 mid-md:grid-cols-3">
      <div className="source-code-sm">
        <h4>Experience</h4>
      </div>

      <div className="mid-md:px-6 col-span-2">
        <ul className="flex flex-col gap-6">
          {EXPERIENCES.map(({ role, date, company, description }) => (
            <li key={company} className="list-none quattro-regular">
              <p className="text-stone-500">{company}</p>
              <p>{role}</p>
              <p className="opacity-60 text-[0.9rem]">{date}</p>
              <p className="text-gray-600 mt-2">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
