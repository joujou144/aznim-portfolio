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

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <h1
            className={`${oswald.className} leading-none md:leading-[0.8] lg:leading-[0.9] hero-text md:col-span-2`}
          >
            Aznim
          </h1>
          <div className="hero-side-content mt-4 md:mt-0 order-last md:col-span-1 flex flex-col justify-end gap-4">
            <SideContent />
          </div>

          <h1
            className={`${oswald.className} leading-[0.9] hero-text md:order-last col-span-1 md:col-span-3`}
          >
            Rahman
          </h1>
        </div>
      </div>
    </section>
  );
};

const SideContent = () => {
  return (
    <Fragment>
      <div>
        <label className=" text-stone-600 ">Current</label>
        <p className="mt-2 font-normal">Front end engineer</p>
        <p className="font-normal">Available to start now</p>
      </div>
      <div>
        <label className="text-stone-600 ">Contact</label>
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
                    className="flex items-center gap-1 leading-[0.9]"
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
    </Fragment>
  );
};

export default Hero;
