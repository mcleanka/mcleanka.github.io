const NavigationDot = ({
    section,
    isMobile = false,
    isAnimating,
    currentSection,
    handleSectionChange
}: {
    section: string;
    isMobile?: boolean;
    isAnimating: boolean;
    currentSection: string;
    handleSectionChange: (section: string) => void
}) => {
    const isActive = currentSection === section;
    const buttonId = isMobile ? `nav-${section}-mobile` : `nav-${section}`;

    return (
        <button
            onClick={() => handleSectionChange(section)}
            className={`nav-dot w-3 h-3 rounded-full bg-white/30 hover:bg-white/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent ${isActive ? 'active bg-white/80 scale-125' : ''
                }`}
            id={buttonId}
            title={section.charAt(0).toUpperCase() + section.slice(1)}
            aria-label={`Navigate to ${section.charAt(0).toUpperCase() + section.slice(1)} section`}
            aria-pressed={isActive}
            disabled={isAnimating}
        />
    );
};

export default NavigationDot;