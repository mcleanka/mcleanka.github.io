import React from 'react';

interface SectionHeaderProps {
    number: string;
    title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title }) => {
    return (
        <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-white-custom font-mono">
                    <span className="text-accent">{number}.</span> {title}
                </h2>
                <div
                    className="h-px bg-lightest-navy flex-1"
                    style={{ background: "var(--lightest-navy)" }}
                />
            </div>
        </div>
    );
};

export default SectionHeader;
