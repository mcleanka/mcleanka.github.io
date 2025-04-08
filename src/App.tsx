import React, { useEffect, useState } from "react";
import GoTopButton from "./components/GoTopButton";
import { useScroll } from "./helpers/scroll";
import {
  About,
  Awards,
  Education,
  Experience,
  Interests,
  Repositories,
  Skills,
} from "./pages";
import FadeIn from "./components/FadeIn";
import { Navigation } from "./components";

const App: React.FC = () => {
  const scrollPosition = useScroll();
  const [mode, setMode] = useState<string>(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [mode]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation parentToChild={{ mode }} handleChangeTheme={toggleTheme} />
      <FadeIn transitionDuration={700} className="flex-1 ml-64">
        <About theme={mode} />
        <div className="h-px bg-gradient-to-r from-cyan-500 to-blue-500 my-6 animate-pulse" />
        <Experience />
        <div className="h-px bg-gradient-to-r from-cyan-500 to-blue-500 my-6 animate-pulse" />
        <Education />
        <div className="h-px bg-gradient-to-r from-cyan-500 to-blue-500 my-6 animate-pulse" />
        <Skills />
        <div className="h-px bg-gradient-to-r from-cyan-500 to-blue-500 my-6 animate-pulse" />
        <Repositories />
        <div className="h-px bg-gradient-to-r from-cyan-500 to-blue-500 my-6 animate-pulse" />
        <Interests />
        <div className="h-px bg-gradient-to-r from-cyan-500 to-blue-500 my-6 animate-pulse" />
        <Awards />
        <GoTopButton visible={scrollPosition > 400} />
      </FadeIn>
    </div>
  );
};

export default App;
