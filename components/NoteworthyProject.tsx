import React from 'react';
import TechStack from './TechStack';
import ProjectLinks from './ProjectLinks';

interface NoteworthyProjectProps {
    project: Project;
}

const NoteworthyProject: React.FC<NoteworthyProjectProps> = ({ project }) => {
    const IconComponent = project.icon;

    return (
        <div className="bg-slate-900/25 bg-opacity-50 p-8 rounded border border-slate-700 hover:border-accent hover:shadow-lg transition-all duration-300 group">
            <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-accent" strokeWidth={1.5} />
                </div>
                <ProjectLinks project={project} />
            </div>
            <h4 className="text-xl font-semibold text-white-custom mb-3">
                {project.title}
            </h4>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                {project.description}
            </p>
            <TechStack
                technologies={project.technologies}
                variant="small"
            />
        </div>
    );
};

export default NoteworthyProject;
