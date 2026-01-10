import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const [isDarkmode, setisDarkmode] = useState(true); // default DARK

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setisDarkmode(false);
    } else {
      // default case (first visit OR dark saved)
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setisDarkmode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkmode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setisDarkmode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setisDarkmode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-4 right-5 z-50 p-2",
        "rounded-full transition-colors duration-300 focus:outline-none cursor-pointer"
      )}
    >
      {isDarkmode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
}

export default ThemeToggle;
