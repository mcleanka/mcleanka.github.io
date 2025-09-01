import { Fragment, FunctionComponent, useState, useEffect, MouseEvent } from "react";

interface StatusAndKeyboardHelpProps {
    currentSection?: string;
    onSectionChange?: (section: string, direction?: 'next' | 'prev') => void;
    onScrollSection?: (direction: 'up' | 'down') => void;
    sections?: string[];
}

const StatusAndKeyboardHelp: FunctionComponent<StatusAndKeyboardHelpProps> = ({
    currentSection = "Home",
    onSectionChange,
    onScrollSection,
    sections = ["home", "about", "projects", "skills", "contact"]
}) => {
    const [isHelpVisible, setIsHelpVisible] = useState(false);
    const [shouldPulse, setShouldPulse] = useState(false);

    const toggleKeyboardHelp = () => {
        setIsHelpVisible(!isHelpVisible);
    };

    const navigateToSection = (direction: 'next' | 'prev') => {
        const currentIndex = sections.indexOf(currentSection.toLowerCase());
        let newIndex;

        if (direction === "next") {
            newIndex = (currentIndex + 1) % sections.length;
        } else {
            newIndex = (currentIndex - 1 + sections.length) % sections.length;
        }

        const newSection = sections[newIndex];
        onSectionChange?.(newSection, direction);

        announceToScreenReader(`Navigated to ${newSection} section`);
    };

    const jumpToSection = (sectionIndex: number) => {
        if (sectionIndex < sections.length) {
            const newSection = sections[sectionIndex];
            onSectionChange?.(newSection);
            announceToScreenReader(`Navigated to ${newSection} section`);
        }
    };

    const announceToScreenReader = (message: string) => {
        const announcement = document.createElement("div");
        announcement.setAttribute("aria-live", "polite");
        announcement.setAttribute("aria-atomic", "true");
        announcement.className = "sr-only";
        announcement.textContent = message;
        document.body.appendChild(announcement);
        setTimeout(() => document.body.removeChild(announcement), 1000);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {

            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
                return;
            }

            switch (e.key) {
                case "ArrowRight":
                case "ArrowDown":
                    e.preventDefault();
                    navigateToSection("next");
                    break;

                case "ArrowLeft":
                case "ArrowUp":
                    e.preventDefault();
                    navigateToSection("prev");
                    break;

                case " ":
                    e.preventDefault();
                    if (e.shiftKey) {
                        onScrollSection?.("up");
                    } else {
                        onScrollSection?.("down");
                    }
                    break;

                case "Home":
                    e.preventDefault();
                    jumpToSection(0);
                    break;

                case "End":
                    e.preventDefault();
                    jumpToSection(sections.length - 1);
                    break;

                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                    e.preventDefault();
                    const sectionIndex = parseInt(e.key) - 1;
                    jumpToSection(sectionIndex);
                    break;

                case "?":
                    e.preventDefault();
                    toggleKeyboardHelp();
                    break;

                case "Escape":
                    if (isHelpVisible) {
                        e.preventDefault();
                        toggleKeyboardHelp();
                    }
                    break;
            }
        };

        const handleMouseDown = () => {
            document.body.classList.remove("keyboard-nav");
        };

        const handleKeyDownForNav = (e: KeyboardEvent) => {
            if (e.key === "Tab") {
                document.body.classList.add("keyboard-nav");
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("keydown", handleKeyDownForNav);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("keydown", handleKeyDownForNav);
        };
    }, [currentSection, sections, isHelpVisible, onSectionChange, onScrollSection]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldPulse(true);
            const pulseTimer = setTimeout(() => {
                setShouldPulse(false);
            }, 6000);
            return () => clearTimeout(pulseTimer);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleHelpOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            toggleKeyboardHelp();
        }
    };

    return (
        <Fragment>
            <div
                id="status-indicator"
                className={`status-indicator ${shouldPulse ? 'pulse' : ''}`}
            >
                <span id="current-section">
                    {currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}
                </span>
                <span className="text-xs ml-2">(Press ? for shortcuts)</span>
            </div>

            <div
                id="keyboard-help"
                className={`keyboard-help ${isHelpVisible ? 'show' : ''}`}
                onClick={handleHelpOverlayClick}
            >
                <div className="help-content">
                    <h3>Keyboard Shortcuts</h3>
                    <ul>
                        <li>
                            <span className="key">←→ / ↑↓</span>
                            <span className="description">Navigate sections</span>
                        </li>
                        <li>
                            <span className="key">1-5</span>
                            <span className="description">Jump to section</span>
                        </li>
                        <li>
                            <span className="key">Space</span>
                            <span className="description">Scroll within section</span>
                        </li>
                        <li>
                            <span className="key">Home</span>
                            <span className="description">Go to first section</span>
                        </li>
                        <li>
                            <span className="key">End</span>
                            <span className="description">Go to last section</span>
                        </li>
                        <li>
                            <span className="key">?</span>
                            <span className="description">Toggle this help</span>
                        </li>
                        <li>
                            <span className="key">Esc</span>
                            <span className="description">Close help</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default StatusAndKeyboardHelp;