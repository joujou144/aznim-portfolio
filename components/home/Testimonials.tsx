"use client";

import { TESTIMONIALS } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger animation when half of the element is in view
  });

  return (
    <section className="px-6 md:px-8 py-10">
      <div className="flex flex-col md:flex-row w-full md:border-b divider">
        <div className="hidden md:block md:w-[28%] pt-6">
          <h2 className="source-code-md hidden md:block lg:hidden">
            Testimonials
          </h2>
        </div>
        <div className="px-0 md:w-[45%] lg:w-[35%] xl:w-[30%] py-4 md:px-5">
          <h2 className="text-[1.1rem] heading capitalize">
            Kind Words from Colleagues
          </h2>
        </div>
      </div>

      <div className="flex md:flex-row md:mt-6">
        <div className="hidden md:block md:w-[28%]">
          <h2 className="source-code-md hidden lg:block">Testimonials</h2>
        </div>

        <motion.ul
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          whileInView={{ opacity: 1 }}
          className="w-full flex flex-wrap flex-grow md:w-[72%]"
        >
          {TESTIMONIALS.map(({ quote, author, title, logo }, index) => (
            <motion.li
              key={index}
              className="w-full md:flex-grow md:w-[24%]"
              variants={item}
              transition={{ type: "linear", duration: 0.5 }}
            >
              <div className="divider border-t md:border-t-0 md:border-l px-0 py-4 md:px-5 md:py-0">
                <cite className="text-gray-500 opacity-80">
                  &quot;{quote}&quot;
                </cite>
                <div className="flex items-center gap-5 mt-6">
                  <Image
                    src={logo}
                    alt="company-logo"
                    quality={100}
                    style={{ width: "30px", height: "30px" }}
                  />
                  <div className="leading-tight source-code-xs">
                    <p>{author}</p>
                    <p>{title}</p>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Testimonials;
