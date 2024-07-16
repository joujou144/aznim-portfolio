import { COPYRIGHT, FOOTER_LINKS } from "@/lib/data";
import Link from "next/link";
import FlipLink from "./FlipLink";

const Footer = ({ className }: { className?: string }) => {
  return (
    <section
      className={`
      } ${className} px-6 md:px-8 pt-6 relative`}
    >
      <div className="source-code-sm border-t divider py-4 lg:py-5 flex flex-col items-center md:flex-row md:justify-between gap-2">
        <ul className="flex gap-6 md:order-first">
          {FOOTER_LINKS.map(({ label, href }) => (
            <FlipLink
              key={label}
              className="hover:text-pink cursor-pointer transition"
            >
              <Link href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </Link>
            </FlipLink>
          ))}
        </ul>

        <p className="order-first">{COPYRIGHT}</p>
      </div>
    </section>
  );
};

export default Footer;
