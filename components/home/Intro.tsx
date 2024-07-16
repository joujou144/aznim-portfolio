import { INTRO } from "@/lib/data";
import React from "react";

const Intro = () => {
  return (
    <section className="lg:w-[70%] mx-auto px-6 md:px-8 pt-20 pb-14">
      <div className="py-2 border-b divider mb-2">
        <p className="source-code-md">Introduction</p>
      </div>
      <h2 className="font-thin text-[1.4rem] xs:text-[1.65rem] sm:text-[2.5rem] leading-tight">
        <span className="ml-24">A </span>
        {INTRO}
      </h2>
    </section>
  );
};

export default Intro;
