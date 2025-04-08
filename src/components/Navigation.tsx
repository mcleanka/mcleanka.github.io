import { useEffect, useState } from "react";
import profile from "../assets/images/profile.jpg";
import { FaMoon, FaSun } from "react-icons/fa";

const links = [
  ["about", "about"],
  ["experience", "experience"],
  ["education", "education"],
  ["skills", "skills"],
  ["repositories", "repositories"],
  ["interests", "interests"],
  ["awards", "awards"],
];

type NavigationProps = {
  parentToChild: { mode: string };
  handleChangeTheme: () => void;
};

const Navigation = ({ parentToChild, handleChangeTheme }: NavigationProps) => {
  const { mode } = parentToChild;
  const [activeSection, setActiveSection] = useState<string | null>("about");

  useEffect(() => {
    const handleScroll = () => {
      document.getElementById("navigation");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    const expertiseElement = document.getElementById(section);
    if (expertiseElement) {
      expertiseElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-64 bg-gradient-to-b from-white to-teal-600 h-screen border-teal-200 flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center space-y-2">
        <div className="py-4 px-6 flex justify-center">
          <span className="block lg:hidden">{"Mclean Kasambala"}</span>
          <a href="/" className="hidden lg:block">
            <img
              className="w-full h-[110px] rounded-full object-cover mx-auto"
              src={profile}
              alt="Profile"
            />
          </a>
        </div>

        {links.map((item) => (
          <a
            key={item[0]}
            href="#!"
            onClick={() => scrollToSection(item[1])}
            className={`px-6 py-2.5 capitalize cursor-pointer hover:text-cyan-50 ${
              activeSection === item[1]
                ? "text-cyan-100 font-semibold"
                : "text-cyan-900/100"
            }`}
          >
            {item[0]}
          </a>
        ))}
      </div>

      <div className="py-6 flex justify-center space-x-4">
        {mode === "dark" ? (
          <FaSun
            className="text-cyan-900/100 hover:text-cyan-650 cursor-pointer"
            onClick={() => handleChangeTheme()}
          />
        ) : (
          <FaMoon
            className="text-cyan-900/100 hover:text-cyan-650 cursor-pointer"
            onClick={() => handleChangeTheme()}
          />
        )}
      </div>
    </div>
  );
};

export default Navigation;
