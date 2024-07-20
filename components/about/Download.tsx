import Link from "next/link";
import { PiArrowUpRightThin } from "react-icons/pi";

const Download = () => {
  return (
    <div className="py-6 border-t divider grid grid-cols-1 lg:grid-cols-3">
      <div className="lg:pl-6 lg:border-l divider lg:col-end-3 text-[2rem] flex flex-col justify-end pt-14">
        <Link
          className=" cursor-pointer transition hover:text-pink"
          href="/AznimRC_resume2024.pdf"
          target="_blank"
          download
        >
          Download CV
        </Link>
        <a
          href="mailto:hello@aznim.xyz"
          className="text-stone-500 opacity-70 cursor-pointer flex gap-1 items-center hover:text-stone-700"
        >
          Say hi
          <PiArrowUpRightThin className="mt-2" />
        </a>
      </div>
    </div>
  );
};

export default Download;
