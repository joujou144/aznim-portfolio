"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const DURATION = 0.5;
const STAGGER = 0.05;

const StaggeredText = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  const control = useAnimation();

  useEffect(() => {
    control.start("animate");
  }, [control]);

  return (
    <motion.h1
      initial="initial"
      animate={control}
      style={{ lineHeight: 0.9 }}
      className={`${className} relative block overflow-hidden`}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: {
                y: "100%",
              },
              animate: {
                y: "0",
              },
            }}
            className="inline-block"
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.h1>
  );
};

export default StaggeredText;
