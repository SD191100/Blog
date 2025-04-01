"use client";
//import { useTheme } from 'next-themes'
//
//const ThemeChanger = () => {
//  const { theme, setTheme } = useTheme()
//
//  return (
//    <div>
//      <button onClick={() => setTheme('light')}>L</button>
//      <button onClick={() => setTheme('dark')}>D</button>
//    </div>
//  )
//}
//
//export default ThemeChanger;
//


import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
//import { Sun, Moon } from "lucide-react";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center gap-2 p-2 bg-gray-200 dark:bg-gray-800 rounded-full transition-all"
    >
      {theme === "dark" ? (
        <Image src={`light.svg`} alt="light" width={30} height={30} />
        //<Sun size={20} className="text-yellow-400" />
      ) : (

        <Image src={`dark.svg`} alt="dark" width={30} height={30} />
        //<Moon size={20} className="text-gray-600" />
      )}
      <span className="hidden sm:block">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
};

export default ThemeChanger;
