import React from 'react';
import { ExternalLink, Building, Church } from 'lucide-react';

interface ProjectLinksProps {
    project: Project;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ project }) => {
    return (
        <div className="flex items-center space-x-3">
            {project.externalLink ? (
                <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-accent transition-colors"
                    aria-label="External link"
                >
                    <ExternalLink className="w-5 h-5" strokeWidth={1.5} />
                </a>
            ) : project.organization ? (
                <span className="text-slate-400 text-sm flex items-center">
                    {project.organization === 'MLW' ? (
                        <Building className="w-4 h-4 mr-1" strokeWidth={1.5} />
                    ) : (
                        <Church className="w-4 h-4 mr-1" strokeWidth={1.5} />
                    )}
                    {project.organization}
                </span>
            ) : null}
        </div>
    );
};

export default ProjectLinks;