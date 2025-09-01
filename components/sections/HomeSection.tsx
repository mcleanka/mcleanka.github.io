import React, { FC } from "react";

interface HomeSectionProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const HomeSection: FC<HomeSectionProps> = ({ currentSection, onSectionChange }) => {
  return (
    <div
      id="home"
      className={`section ${currentSection === "home" ? "active" : ""} p-8 flex items-center justify-center`}
    >
      <div className="text-left max-w-5xl">
        <div className="mb-4">
          <p className="text-accent font-mono text-sm mb-4">Hi, my name is</p>
          <h1 className="text-6xl font-bold text-white-custom mb-2">
            McLean Kasambala
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-secondary mb-6">
            I design & build software.
          </h2>
        </div>

        <p className="text-lg text-secondary mb-16 max-w-2xl leading-relaxed">
          I&apos;m a computer engineer specializing in{" "}
          <span className="text-accent">web, desktop, mobile, IoT and cloud systems</span>.
          Currently, I&apos;m focused on creating scalable, human-centered products
          in Malawi and beyond.
        </p>

        <div className="flex flex-col sm:flex-row justify-left">
          <button
            onClick={() => onSectionChange("projects")}
            className="btn-primary"
            aria-label="Navigate to projects section"
          >
            Check out my work!
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
