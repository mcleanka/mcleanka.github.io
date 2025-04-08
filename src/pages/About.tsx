import React, { FC, PropsWithChildren } from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF } from "react-icons/fa";
import bgLight from "../assets/images/bg-light.png";
import bgDark from "../assets/images/bg-dark.png";
import { TypeAnimation } from "react-type-animation";

const icons: React.ReactElement[] = [
  <FaLinkedinIn />,
  <FaGithub />,
  <FaTwitter />,
  <FaFacebookF />,
];

const About: FC<PropsWithChildren<{ theme: string }>> = ({
  theme,
}: {
  theme: string;
}) => {
  return (
    <section
      id="about"
      style={{
        backgroundImage: `url(${
          theme === "light" ? bgLight : bgDark
        }), linear-gradient(rgb(34 211 238 / 0), #0d9488)`,
      }}
      className="h-screen flex flex-col justify-center px-6 relative bg-gradient-to-r from-cyan-400 to-teal-600 animate-gradient-x"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto relative z-10 text-center justify-center items-center">
        <div className="bg-transparent p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white line-through">
            {"Mclean"} <span className="text-cyan-600">{"Kasambala"}</span>
          </h1>
          <div className="mb-5 text-lg text-gray-700 dark:text-gray-300">
            Gemini House, City Center, Box 2543, Lilongwe, Malawi. <br /> (+265)
            99-159-3543 ·{" "}
            <a
              href="mailto:mcleankasambala@gmail.com"
              className="hover:underline text-cyan-600 dark:text-cyan-400"
            >
              mcleankasambala@gmail.com
            </a>
          </div>
        </div>

        <p className="leading-7 text-gray-700 dark:text-gray-300">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1000,
              "Network Engineer",
              2000,
              "IoT Engineer",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1.35rem", display: "inline-block" }}
          />
        </p>

        <div className="flex gap-4 justify-center items-center py-12">
          {icons.map((icon, key) => (
            <a
              className="p-3 rounded-full text-white bg-cyan-600 hover:bg-cyan-700 transition duration-300 transform hover:scale-110"
              href="#!"
              key={key}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
