"use client";

import { Fragment } from "react";
import { Clock } from "@/components";
import { navLinks } from "@/lib/data";
import Image from "next/image";
import FlipLink from "./FlipLink";
import TransitionLink from "./TransitionLink";
import AzLogo from "@/public/logo/a.svg";

export default function Navbar() {
  return (
    <Fragment>
      <nav className=" z-20 w-full max-w-[93rem] mx-auto absolute left-0 right-0 px-6 mid-md:px-8">
        <div className="flex justify-between items-center py-4 lg:py-5">
          <TransitionLink href="/" className="cursor-pointer w-auto h-auto">
            <Image src={AzLogo} alt="logo" quality={100} className="w-8 h-8" />
          </TransitionLink>
          <div className="flex items-center gap-8">
            <NavMenu />
            <Clock className="hidden md:inline-flex" />
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

const NavMenu = () => {
  return (
    <ul className="flex justify-between gap-4">
      {navLinks.map(({ label, href }) => (
        <FlipLink key={label} className="source-code-sm">
          <TransitionLink
            href={href}
            className="hover:text-pink cursor-pointer transition"
          >
            {label}
          </TransitionLink>
        </FlipLink>
      ))}
    </ul>
  );
};
