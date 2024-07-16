"use client";

import { useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";

const Clock = ({ className }: { className?: string }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12; // Convert 24-hour to 12-hour format
      const formattedTime = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
      setCurrentTime(formattedTime);
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`${className} flex gap-3 items-center`}>
      <FiClock size={18} />

      <p className="source-code-sm">{currentTime}</p>
    </div>
  );
};

export default Clock;
