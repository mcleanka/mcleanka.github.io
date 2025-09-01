import React from 'react';
import { Users } from 'lucide-react';

interface ProjectImageProps {
    project: Project;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ project }) => {
    const IconComponent = project.icon;

    return (
        <div className="relative rounded overflow-hidden shadow-2xl glow">
            <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                <IconComponent className="w-16 h-16 text-navy" strokeWidth={1.5} />
                {project.status === 'live' && (
                    <div className="absolute top-4 right-4">
                        <span className="bg-green text-navy text-xs px-2 py-1 rounded font-mono">
                            LIVE
                        </span>
                    </div>
                )}
                {project.title.includes('8M+') && (
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                        <div className="text-center">
                            <Users className="w-8 h-8 text-white mb-2 mx-auto" strokeWidth={1.5} />
                            <span className="text-white text-sm font-mono">8M+ Records</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectImage;