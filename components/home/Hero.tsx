import { CONTACT, STYLECLASSES } from "@/lib/data";
import { Oswald } from "next/font/google";
import { Fragment } from "react";
import FlipLink from "../FlipLink";
import StaggeredText from "../StaggeredText";

const oswald = Oswald({
  weight: ["700"],
  subsets: ["latin"],
  preload: false,
});

const Hero = () => {
  return (
    <section className="h-svh p-6 md:px-8 hero bg-stone-300 flex flex-col justify-end">
      {/* Goo blobs */}
      <div className="absolute inset-0 gradients-container">
        {STYLECLASSES.map(({ style }) => (
          <div key={style} className={style} />
        ))}
      </div>

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <StaggeredText
            className={`${oswald.className} hero-text md:col-span-2`}
          >
            Aznim
          </StaggeredText>

          <div className="hero-side-content mt-4 md:mt-0 order-last md:col-span-1 flex flex-col justify-end gap-4">
            <SideContent />
          </div>

          <StaggeredText
            className={`${oswald.className} leading-[0.9] hero-text md:order-last col-span-1 md:col-span-3`}
          >
            Rahman
          </StaggeredText>
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
        <p className="mt-1 font-normal">Front end engineer</p>
        <p className="font-normal">Available to start now</p>
      </div>
      <div>
        <label className="text-stone-600 ">Contact</label>
        <ul className="mt-1 font-normal opacity-90 flex flex-col items-start gap-1.5">
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
