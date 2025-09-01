import React from 'react';
import { Building, GraduationCap } from 'lucide-react';

interface ProjectStatusProps {
    project: Project;
}

const ProjectStatus: React.FC<ProjectStatusProps> = ({ project }) => {
    if (!project.status && !project.organization) return null;

    const getIcon = () => {
        switch (project.status) {
            case 'government':
                return Building;
            case 'ministry':
                return GraduationCap;
            default:
                return Building;
        }
    };

    const IconComponent = getIcon();

    return (
        <span className="text-secondary text-sm font-mono flex items-center">
            <IconComponent className="w-4 h-4 mr-2" strokeWidth={1.5} />
            {project.organization}
        </span>
    );
};

export default ProjectStatus;