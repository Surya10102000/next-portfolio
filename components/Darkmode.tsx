"use client"

import { useState } from "react";
import { Moon,Sun } from "lucide-react";

const Darkmode = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return <div>
  <button className="mt-1" onClick={()=> darkModeHandler()}>
      {
          
          dark && <Moon />   
      }
      {
          !dark && <Sun />
      }
  </button>
</div>;
};
export default Darkmode;
