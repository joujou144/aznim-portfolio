"use client";

import { PROJECTS } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

type ProjectProps = (typeof PROJECTS)[number];

type ExtendedProjectProps = ProjectProps & {
  isEven?: boolean;
};

const ProjectCard = ({
  href,
  title,
  description,
  imageUrl,
  tags,
  isEven,
}: ExtendedProjectProps) => {
  return (
    <section>
      <motion.div
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden h-full rounded-xl relative"
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Image
              src={imageUrl}
              alt="losttracker"
              quality={100}
              priority={true}
              placeholder="blur"
              className="w-full h-full rounded-xl"
            />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className={`flex flex-col ${isEven ? "items-start" : "items-end"} `}
      >
        <p className="mb-2 mt-4 text-[1.1rem] xs:text-[1.3rem]">
          {title}{" "}
          <span className="quattro-regular text-[0.8rem]">{"(2024)"}</span>
        </p>
        <p
          className={classNames({
            "project-description": true,
            "text-left w-full": isEven,
            "text-right mid-md:w-[60%]": !isEven,
          })}
        >
          {description}
        </p>
        <ul className="list-none flex flex-wrap justify-end gap-2 text-[0.75rem]">
          {tags.map((tag) => (
            <li key={tag} className="px-2 py-0.5 rounded-full bg-neutral-300">
              {tag}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default ProjectCard;
