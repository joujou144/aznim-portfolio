import { CONTACT, STYLECLASSES } from "@/lib/data";
import Link from "next/link";
import Clock from "../Clock";
import FlipLink from "../FlipLink";
import Image from "next/image";
import { Bebas_Neue, Inter, Oswald } from "next/font/google";
import { Fragment } from "react";

// bg-[#dec6e2]

const oswald = Oswald({
  weight: ["700"],
  subsets: ["latin"],
  preload: false,
});

const Hero = () => {
  return (
    <section className="h-svh p-6 md:px-8 hero bg-stone-300 flex flex-col justify-end">
      <div className="absolute inset-0 gradients-container">
        {STYLECLASSES.map(({ style }) => (
          <div key={style} className={style} />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <h1
            className={`${oswald.className} uppercase text-[4.7rem] xs:text-[6.6rem] sm:text-[9.6rem] md:text-[11rem] 2xl:text-[22rem] leading-[0.9] whitespace-nowrap border border-green-700 md:col-span-2`}
          >
            Aznim
          </h1>
          <div className="source-code uppercase text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] order-last md:col-span-1 flex flex-col justify-end gap-4 lg:pl-6 xl:pl-14">
            <SideContent />
          </div>

          <div className="md:order-last col-span-1 md:col-span-3 ">
            <h1
              className={`${oswald.className} uppercase text-[4.7rem] xs:text-[6.6rem] sm:text-[9.6rem] md:text-[11rem] 2xl:text-[22rem] border border-black leading-[0.9] whitespace-nowrap`}
            >
              Rahman
            </h1>
          </div>
        </div>
      </div>

      {/* <div className="absolute inset-x-0 inset-y-0 lg:top-6 flex flex-col justify-end gap-2">
          <div className="flex justify-between">
            <h1
              className={`${oswald.className} z-10 uppercase text-[5rem] 2xl:text-[22rem] leading-none whitespace-nowrap`}
            >
              Aznim
            </h1>

            <div className="border border-pink source-code-md w-1/2 xl:w-[25%] xl:pl-14 flex flex-col gap-4 justify-end pb-3">
              <SideContent />
            </div>
          </div>

          <h1
            className={`${oswald.className} z-10 uppercase 2xl:text-[22rem] border border-black leading-none whitespace-nowrap`}
          >
            Rahman
          </h1>
        </div> */}
    </section>
  );
};

const SideContent = () => {
  return (
    <Fragment>
      <div>
        <label className=" text-stone-500 ">Current</label>
        <p className="mt-2">Front end engineer</p>
        <p className="">Available to start now</p>
      </div>
      <div>
        <label className="text-stone-500 ">Contact</label>
        <ul className="mt-2 font-normal opacity-90 flex flex-col items-start gap-1.5">
          {CONTACT.map(({ label, href, icon }) => {
            const newTab = label === "linkedin";
            return (
              <FlipLink key={label} className="hover:text-pink transition">
                {newTab ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    {label}
                    <span> {icon}</span>
                  </a>
                ) : (
                  <a
                    href={href}
                    className="flex items-center gap-1  leading-[0.9]"
                  >
                    {label}
                    <span> {icon}</span>
                  </a>
                )}
              </FlipLink>
            );
          })}
        </ul>
      </div>

      {/* <div className="mt-4">
        <Clock />
      </div> */}
    </Fragment>
  );
};

export default Hero;
