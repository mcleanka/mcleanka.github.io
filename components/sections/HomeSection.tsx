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
      <div className="text-left max-w-4xl">
        <div className="mb-4">
          <p className="text-accent font-mono text-sm mb-4">Hi, my name is</p>
          <h1 className="text-6xl font-bold text-white-custom mb-2">
            McLean Kasambala
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-secondary mb-6">
            I build things for the web.
          </h2>
        </div>

        <p className="text-lg text-secondary mb-16 max-w-2xl leading-relaxed">
          I&apos;m a software engineer specializing in building exceptional digital
          experiences. Currently, I&apos;m focused on building accessible,
          human-centered products at{" "}
          <span className="text-accent">Upstatement</span>.
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