"use client";

import NavigationDot from "@/components/NavigationDot";
import React, { Fragment, FunctionComponent, useEffect } from "react";

interface NavigationBarProps {
    sections: string[];
    currentSection: string;
    isAnimating: boolean;
    onSectionChange: (section: string) => void;
}

const NavigationBar: FunctionComponent<NavigationBarProps> = ({
    sections,
    currentSection,
    isAnimating,
    onSectionChange,
}) => {
    useEffect(() => {
        let startX = 0;
        let startY = 0;
        let startTime = 0;

        const handleTouchStart = (e: TouchEvent) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            startTime = Date.now();
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (!startX || !startY) return;

            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const endTime = Date.now();
            const diffX = startX - endX;
            const diffY = startY - endY;
            const timeDiff = endTime - startTime;

            if (timeDiff > 300 || Math.abs(diffX) < 50) {
                startX = startY = 0;
                return;
            }

            if (Math.abs(diffX) > Math.abs(diffY)) {
                const currentIndex = sections.indexOf(currentSection);
                let newIndex;

                if (diffX > 0) {
                    newIndex = (currentIndex + 1) % sections.length;
                } else {
                    newIndex = (currentIndex - 1 + sections.length) % sections.length;
                }

                onSectionChange(sections[newIndex]);
            }

            startX = startY = 0;
        };

        document.addEventListener("touchstart", handleTouchStart);
        document.addEventListener("touchend", handleTouchEnd);

        return () => {
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchend", handleTouchEnd);
        };
    }, [currentSection, sections, onSectionChange]);

    return (
        <Fragment>
            <nav
                className="w-24 flex flex-col items-center justify-center space-y-8 relative z-20 mobile-hidden"
                aria-label="Main navigation"
            >
                <div className="flex flex-col space-y-6" role="group" aria-label="Section navigation">
                    {sections.map((section) => (
                        <NavigationDot
                            key={section}
                            currentSection={currentSection}
                            handleSectionChange={onSectionChange}
                            isAnimating={isAnimating}
                            section={section}
                        />
                    ))}
                </div>
            </nav>

            <nav
                className="mobile-sidebar glass md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30"
                aria-label="Mobile navigation"
            >
                <div
                    className="mobile-nav-dots flex items-center space-x-6 px-6 py-3"
                    role="group"
                    aria-label="Section navigation"
                >
                    {sections.map((section) => (
                        <NavigationDot
                            key={`${section}-mobile`}
                            currentSection={currentSection}
                            handleSectionChange={onSectionChange}
                            isAnimating={isAnimating}
                            section={section}
                            isMobile
                        />
                    ))}
                </div>
            </nav>
        </Fragment>
    );
};

export default NavigationBar;