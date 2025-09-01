import Image from "next/image";
import React, { FunctionComponent, useState } from "react";
import SectionHeader from "../SectionHeader";

interface AboutSectionProps {
    profile: Profile;
    currentSection: string;
    onSectionChange: (section: string) => void;
}

const AboutSection: FunctionComponent<AboutSectionProps> = ({ currentSection, profile }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const currentTech = [
        "JavaScript / TypeScript",
        "React, Next.js & Vue",
        "Node.js & Express",
        "Python, Java & Kotlin",
        "C++, C & C#",
        "Docker & DevOps",
    ];

    const additionalSkills = [
        "Cloud Platforms (Azure, DigitalOcean, Firebase)",
        "IoT Development (C++, Python, ESPs, Raspberry Pi)",
        "System Integration & Automation",
        "API Development (REST & GraphQL)",
        "Mobile Development (React Native, Capacitor)",
        "Database & Server Management (MySQL, PostgreSQL, Apache2, Nginx)",
    ];

    return (
        <div
            id="about"
            className={`section ${currentSection === "about" ? "active" : ""} p-8 overflow-y-auto custom-scroll`}
            aria-current={currentSection === "about" ? "page" : undefined}
        >
            <div className="max-w-6xl mx-auto flex items-center min-h-full">
                <div className="grid lg:grid-cols-2 gap-12 items-start w-full">
                    <div className="space-y-6">

                        <SectionHeader number="01" title="About Me" />

                        <div className="space-y-4 text-secondary leading-relaxed">
                            <p>
                                Hi, I&apos;m <span className="text-accent">McLean Kasambala</span>,
                                a Computer Engineer from Malawi with 5+ years of experience in{" "}
                                full-stack development, IoT systems, and cloud infrastructure.
                            </p>
                            <p>
                                I have developed and deployed large-scale systems for{" "}
                                <span className="text-accent">Elizabeth Glaser Paediatric AIDS Foundation </span>
                                (CRVS system – 17M+ records),{" "}
                                <span className="text-accent">Sigma Group Technologies </span>
                                (Minister of Education&apos;s Next Generation Skills app), and{" "}
                                <span className="text-accent">Malawi Liverpool Wellcome Trust </span>
                                (management information systems).
                            </p>
                            <p>
                                My focus is building scalable and accessible digital solutions that
                                improve healthcare, education, and civic services.
                            </p>
                            <p>Here are the core technologies I work with regularly:</p>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-sm font-mono mb-6">
                            {currentTech.map((tech, index) => (
                                <div key={index} className="flex items-center group">
                                    <span className="text-accent mr-2 group-hover:translate-x-1 transition-transform duration-200">▹</span>
                                    <span className="text-secondary group-hover:text-white-custom transition-colors duration-200">{tech}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-lightest-navy">
                            <p className="text-secondary text-sm mb-3">Additional expertise includes:</p>
                            <div className="flex flex-wrap gap-2">
                                {additionalSkills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-xs font-mono bg-lightest-navy rounded-full border border-accent/20 hover:border-accent/50 transition-colors duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-lightest-navy">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-accent font-mono">17M+</div>
                                <div className="text-xs text-secondary">Records Managed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-accent font-mono">5+</div>
                                <div className="text-xs text-secondary">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-accent font-mono">10+</div>
                                <div className="text-xs text-secondary">Major Projects</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative pt-20">
                        <div className="w-64 h-64 mx-auto relative group">
                            <div className="absolute inset-0 rounded">
                                <div
                                    className="absolute inset-0 rounded border-2 translate-x-4 translate-y-4 z-0 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"
                                    style={{ borderColor: "var(--green)" }}
                                />

                            </div>

                            <div className="relative z-10 w-full h-full rounded overflow-hidden bg-accent/10">
                                {!imageLoaded && (
                                    <div className="absolute inset-0 bg-lightest-navy animate-pulse flex items-center justify-center">
                                        <div className="w-16 h-16 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
                                    </div>
                                )}
                                <Image
                                    src={profile.avatar_url || '/images/profile-placeholder.jpg'}
                                    alt={profile.name || profile.login || 'McLean Kasambala'}
                                    className={`w-full h-full object-cover transition-all duration-500 ${imageLoaded ? 'sepia saturate-200 hue-rotate-180 contrast-110 brightness-95 group-hover:sepia-0 group-hover:saturate-100 group-hover:hue-rotate-0 group-hover:contrast-100 group-hover:brightness-100 opacity-100' : 'opacity-0'
                                        } group-hover:scale-105`}
                                    loading="lazy"
                                    width={256}
                                    height={256}
                                    onLoad={() => setImageLoaded(true)}
                                    onError={() => setImageLoaded(true)}
                                />

                                <div className="absolute inset-0 bg-cyan-700/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-300" />
                            </div>

                            <div className="absolute -top-4 -right-4 w-8 h-8 border border-accent/50 rounded transform rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/30 rounded-full group-hover:scale-125 transition-transform duration-300" />
                        </div>

                        <div className="text-center mt-6">
                            <p className="text-sm text-secondary font-mono">
                                📍 Based in <span className="text-accent"> Lilongwe, Malawi</span>
                            </p>
                            <p className="text-xs text-secondary/70 mt-1">
                                Building solutions across Africa
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;