import { DOTS } from "@/lib/data";
import { BsDot } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

type Color = "orange" | "yellow" | "green";
const Dots = () => {
  const variant: Record<Color, string> = {
    orange: "bg-peach",
    yellow: "bg-yellow-200",
    green: "bg-grass",
  };
  return (
    <div className="py-2 mb-4 flex gap-1">
      {DOTS.map(({ color }) => (
        <li key={color} className="list-none cursor-pointer relative">
          <div className={`h-3 w-3 rounded-full ${variant[color]} group`}>
            <span className="absolute inset-0 flex justify-center items-center  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaMinus className="text-black" size={10} />
            </span>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Dots;
