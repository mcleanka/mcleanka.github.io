import React from 'react';

interface TechStackProps {
    technologies: string[];
    variant?: 'default' | 'small';
    className?: string;
}

const TechStack: React.FC<TechStackProps> = ({
    technologies,
    variant = 'default',
    className = ''
}) => {
    const baseClasses = variant === 'small'
        ? 'flex flex-wrap gap-2 font-mono text-xs text-slate-500'
        : 'flex flex-wrap gap-3 font-mono text-sm text-secondary';

    return (
        <ul className={`${baseClasses} ${className}`}>
            {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
            ))}
        </ul>
    );
};

export default TechStack;