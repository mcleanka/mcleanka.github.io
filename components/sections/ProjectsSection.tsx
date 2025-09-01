import { projectsData } from "@/data/projects";
import React, { useState } from "react";
import SectionHeader from "../SectionHeader";
import FeaturedProject from "../FeaturedProject";
import NoteworthyProject from "../NoteworthyProject";

interface ProjectsSectionProps {
    currentSection: string;
    onSectionChange: (section: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
    currentSection,
}) => {
    const [showMore, setShowMore] = useState(false);

    const featuredProjects = projectsData.filter(p => p.category === 'featured');
    const noteworthyProjects = projectsData.filter(p => p.category === 'noteworthy');
    const displayedNoteworthy = showMore ? noteworthyProjects : noteworthyProjects.slice(0, 6);

    return (
        <div
            className={`section p-8 overflow-y-auto custom-scroll ${currentSection === "projects" ? "active" : ""}`}
            id="projects"
        >
            <div className="max-w-6xl mx-auto py-8">

                <SectionHeader number="03" title="Some Things I've Built" />

                <div className="space-y-16">
                    {featuredProjects.map((project) => (
                        <FeaturedProject key={project.id} project={project} />
                    ))}

                    <div className="mt-32">
                        <div className="text-center mb-16">
                            <h3 className="text-2xl font-bold text-white-custom mb-4">
                                Other Noteworthy Projects
                            </h3>
                            <a
                                href="https://mcleanka.github.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent hover:text-white-custom transition-colors duration-300 font-mono text-sm"
                            >
                                view the archive
                            </a>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {displayedNoteworthy.map((project) => (
                                <NoteworthyProject key={project.id} project={project} />
                            ))}
                        </div>

                        <div className="text-center mt-16">
                            <button
                                onClick={() => setShowMore(true)}
                                className="inline-flex items-center gap-2 px-8 py-4 border border-accent text-accent rounded font-mono text-sm hover:bg-accent hover:bg-opacity-10 transition-all duration-300"
                            >
                                Show More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;