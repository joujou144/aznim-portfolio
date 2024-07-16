"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const FlipLink = ({
  children,
  className,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={`${className} relative overflow-hidden whitespace-nowrap`}
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0"
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default FlipLink;
