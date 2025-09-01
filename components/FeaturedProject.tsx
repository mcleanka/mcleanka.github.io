import React from 'react';
import TechStack from './TechStack';
import ProjectStatus from './ProjectStatus';
import ProjectImage from './ProjectImage';

interface FeaturedProjectProps {
    project: Project;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project }) => {
    const { isReversed = false } = project;

    return (
        <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'order-2 lg:order-1'}`}>
                <ProjectImage project={project} />
            </div>

            <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : 'order-1 lg:order-2'} ${isReversed ? '' : 'lg:text-right'}`}>
                <p className="text-accent font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-white-custom mb-4">
                    {project.title}
                </h3>
                <div className={`glass-strong p-6 rounded shadow-lg ${isReversed ? 'lg:-mr-16' : 'lg:-ml-16'} mb-4`}>
                    <p className="text-secondary">
                        {project.description}
                    </p>
                </div>
                <TechStack
                    technologies={project.technologies}
                    className={`mb-6 ${isReversed ? '' : 'lg:justify-end'}`}
                />
                <div className={`flex space-x-4 ${isReversed ? '' : 'lg:justify-end'}`}>
                    <ProjectStatus project={project} />
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;
