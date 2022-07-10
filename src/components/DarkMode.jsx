import React, { useState } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
const DarkMode = () => {
  const [dark, setDark] = useState(0);
  const switchDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      setDark(0);
      document.documentElement.classList.remove("dark");
    } else {
      setDark(1);
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <div className="rounded-full p-1">
      {dark ? (
        <BsSunFill className="h-5 w-5 text-white" onClick={switchDarkMode} />
      ) : (
        <BsFillMoonFill className="h-5 w-5" onClick={switchDarkMode} />
      )}
    </div>
  );
};

export default DarkMode;
