"use client";

import { INTRO } from "@/lib/data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Intro = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variantsIntro = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref} className="lg:w-[70%] mx-auto px-6 md:px-8 pt-20 pb-14">
      <div className="py-2 border-b divider mb-2">
        <p className="source-code-md">Introduction</p>
      </div>
      <motion.h2
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variantsIntro}
        transition={{ duration: 0.7 }}
        className="font-thin text-[1.4rem] xs:text-[1.65rem] sm:text-[2.5rem] leading-tight"
      >
        <span className="ml-24">A </span>
        {INTRO}
      </motion.h2>
    </section>
  );
};

export default Intro;
