import { EXPERIENCES, SKILLS } from "@/lib/data";
import { getCurrentDate } from "@/lib/getCurrentDate";
import Dots from "./Dots";
import TransitionLink from "./TransitionLink";

const Summary = () => {
  return (
    <div className="px-6 mid-md:px-8 bg-[#22242f] text-dove py-6 source-code font-normal text-[0.85rem] mid-md:text-[0.9rem]">
      <TransitionLink href="/">
        <Dots />
      </TransitionLink>
      <div className="flex flex-col gap-2">
        <p className="text-carrot">
          class <span className="text-azure">Aznim </span>
          <span className="text-yellow-200">{"{"}</span>
        </p>
        <p className="ml-4 mid-md:ml-10 text-carrot">
          constructor<span className="text-candy">{"() {"}</span>
        </p>
      </div>

      <div className="mt-2 grid grid-cols-1 xs:grid-cols-2 mid-md:grid-cols-3">
        <div className="flex justify-between items-center">
          <p className="ml-6 mid-md:ml-14 text-carrot">
            this.<span className="text-yellow-100">location</span>
          </p>
          <span className="hidden xs:inline-block text-peach">=</span>
        </div>
        <p className="ml-10 xs:ml-2 mid-md:ml-6 col-span-1 text-grass">
          London Area, UK
        </p>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 mid-md:grid-cols-3">
        <div className="flex justify-between items-center ">
          <p className="ml-6 mid-md:ml-14 text-carrot">
            this.<span className="text-yellow-100">availability</span>
          </p>
          <span className="hidden xs:inline-block text-peach">=</span>
        </div>
        <p className="ml-10 xs:ml-2 mid-md:ml-6 col-span-1 text-grass">
          {getCurrentDate()}
        </p>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <p className="ml-4 mid-md:ml-10 text-candy">{"}"}</p>

        <p className="ml-4 mid-md:ml-10 text-sky">
          experience<span className="text-candy">{"() {"}</span>
        </p>
        <p className="text-peach ml-6 mid-md:ml-14">
          return <span className="text-azure">{"["}</span>
        </p>
        <span className="text-yellow-200 ml-8 mid-md:ml-16">{"{"}</span>
      </div>

      <ul className="flex flex-col gap-6">
        {EXPERIENCES.map(({ company, role, date, description }) => (
          <li key={company} className="list-none">
            <div className="grid grid-cols-1 xs:grid-cols-2 mid-md:grid-cols-3">
              <div className="flex justify-between items-center ">
                <p className="ml-10 mid-md:ml-20">role</p>
                <span className="hidden xs:inline-block">:</span>
              </div>
              <p className="ml-10 xs:ml-2 mid-md:ml-6 text-grass">{role}</p>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 mid-md:grid-cols-3">
              <div className="flex justify-between items-center ">
                <p className="ml-10 mid-md:ml-20">company</p>
                <span className="hidden xs:inline-block">:</span>
              </div>
              <p className="ml-10 xs:ml-2 mid-md:ml-6 col-span-1 text-grass">
                {company}
              </p>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 mid-md:grid-cols-3">
              <div className="flex justify-between items-center ">
                <p className="ml-10 mid-md:ml-20">date</p>
                <span className="hidden xs:inline-block">:</span>
              </div>
              <p className="ml-10 xs:ml-2 mid-md:ml-6 col-span-1 text-grass">
                {date}
              </p>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 mid-md:grid-cols-3 items-start">
              <div className="flex justify-between items-center ">
                <p className="ml-10 mid-md:ml-20">description</p>
                <span className="hidden xs:inline-block">:</span>
              </div>
              <p className="ml-10 mid-md:ml-6 col-span-2 text-grass">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-2 mt-2">
        <p className="text-yellow-200 ml-8 mid-md:ml-16">{"}"}</p>
        <p className="text-azure ml-6 mid-md:ml-14">{"]"}</p>
        <p className="ml-4 mid-md:ml-10 text-candy">{"{"}</p>
        <p className="ml-4 mid-md:ml-10 text-sky">
          skills<span className="text-candy">{"() {"}</span>
        </p>
        <p className="text-peach ml-6 mid-md:ml-14">
          return <span className="text-azure">{"["}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 mid-md:grid-cols-3">
        <p className="ml-10 mid-md:ml-20 col-span-3 mid-md:col-span-2 mt-2">
          {SKILLS}
        </p>
      </div>
      <p className="ml-4 mid-md:ml-10 text-azure">{"]"}</p>
    </div>
  );
};

export default Summary;
