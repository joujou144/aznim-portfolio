"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "@/public/images/mypic-bnw.png";
import gridGif from "@/public/images/grid.gif";

const ProfileImage = () => {
  // const controls = useAnimation();

  // useEffect(() => {
  //   const sequence = async () => {
  //     await controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
  //     await controls.start({ opacity: 0, y: 0, transition: { duration: 1 } });
  //     await controls.start({
  //       opacity: 1,
  //       y: "-3rem",
  //       transition: { duration: 1 },
  //     });
  //     await controls.start({
  //       opacity: 0,
  //       y: "-3rem",
  //       transition: { duration: 1 },
  //     });
  //   };
  //   sequence();
  // }, [controls]);
  return (
    <div className="divider md:pr-6 md:border-r lg:pl-6 lg:border-l lg:col-end-3">
      <motion.div
        whileHover={{ scale: 0.98, backgroundColor: "#FB28CD" }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden h-full bg-charcoal rounded-xl relative"
      >
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <Image
            src={profilePic}
            alt="aznim's photo"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>
      {/* <motion.div
      className="absolute bottom-4 right-4"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      <Image
        src="/grid_dots.svg"
        alt="Grid Dots"
        width={100}
        height={100}
        className="w-20 h-20 opacity-25"
      />
    </motion.div> */}
    </div>
  );
};

export default ProfileImage;
