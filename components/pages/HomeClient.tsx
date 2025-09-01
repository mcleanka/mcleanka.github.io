"use client";

import { Fragment, useState } from "react";
import NavigationBar from "@/components/NavigationBar";
import SocialSidebar from "@/components/SocialSidebar";
import StatusAndKeyboardHelp from "@/components/StatusAndKeyboardHelp";
import ProfileImageInBackground from "@/components/ProfileImageInBackground";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

type HomeClientProps = {
    profile: Profile;
};

export default function HomeClient({ profile }: HomeClientProps) {
    const [currentSection, setCurrentSection] = useState("home");
    const [isAnimating, setIsAnimating] = useState(false);
    const sections = ["home", "about", "skills", "projects", "contact"];

    const handleSectionChange = (section: string) => {
        if (isAnimating || section === currentSection) return;

        setIsAnimating(true);
        setCurrentSection(section);

        if (section === "skills") {
            setTimeout(() => {
                document.querySelectorAll(".skill-fill").forEach((fill, index) => {
                    setTimeout(() => {
                        fill.classList.add("animate");
                    }, index * 200);
                });
            }, 300);
        }

        setTimeout(() => {
            setIsAnimating(false);
        }, 300);
    };

    const handleScrollSection = (direction: "up" | "down") => {
        const activeSection = document.querySelector(".section.active");
        if (activeSection && activeSection.classList.contains("custom-scroll")) {
            const scrollAmount = 100;
            if (direction === "down") {
                activeSection.scrollTop += scrollAmount;
            } else {
                activeSection.scrollTop -= scrollAmount;
            }
        }
    };

    return (
        <Fragment>
            <a href="#main-content" className="skip-link">
                Skip to main content Cervantes
            </a>

            <ProfileImageInBackground
                login={profile.login}
                name={profile.name}
                avatar_url={profile.avatar_url}
            />

            <SocialSidebar />

            <div className="h-screen flex relative z-10" id="main-content" tabIndex={-1}>
                <NavigationBar
                    sections={sections}
                    currentSection={currentSection}
                    isAnimating={isAnimating}
                    onSectionChange={handleSectionChange}
                />

                <main className="flex-1 relative overflow-hidden">
                    <HomeSection
                        currentSection={currentSection}
                        onSectionChange={handleSectionChange}
                    />

                    <AboutSection
                        profile={profile}
                        currentSection={currentSection}
                        onSectionChange={handleSectionChange}
                    />

                    <ProjectsSection
                        currentSection={currentSection}
                        onSectionChange={handleSectionChange}
                    />

                    <SkillsSection
                        currentSection={currentSection}
                        onSectionChange={handleSectionChange}
                    />

                    <ContactSection
                        currentSection={currentSection}
                        onSectionChange={handleSectionChange}
                    />
                </main>
            </div>

            <StatusAndKeyboardHelp
                currentSection={currentSection}
                onSectionChange={handleSectionChange}
                onScrollSection={handleScrollSection}
                sections={sections}
            />
        </Fragment>
    );
}