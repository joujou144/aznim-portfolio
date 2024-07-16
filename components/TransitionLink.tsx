"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent, ReactNode } from "react";

type TransitionLinkProps = LinkProps & {
  className?: string;
  href: string;
  children: ReactNode;
};

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const TransitionLink = ({ href, children, className }: TransitionLinkProps) => {
  const router = useRouter();

  const handleClick = async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    // Add the page-transition class
    const body = document.querySelector("body");
    body?.classList.add("page-transition");

    // Wait for the transition effect to complete
    await sleep(400);
    // Navigate to the new page
    router.push(href);

    await sleep(400);
    // Wait a short period to allow the navigation to complete

    body?.classList.remove("page-transition");
    // Remove the page-transition class to allow the new page to appear
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default TransitionLink;
