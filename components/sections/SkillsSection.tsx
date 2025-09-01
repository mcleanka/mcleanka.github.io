import React from "react";

interface SkillsSectionProps {
    currentSection: string;
    onSectionChange: (section: string) => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
    currentSection,
}) => {
    return (
        <div
            className={`section p-8 overflow-y-auto custom-scroll ${currentSection === "skills" ? "active" : ""
                }`}
            id="skills"
        >
            <div className="max-w-4xl mx-auto flex items-center min-h-full">
                <div className="w-full">
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-2xl font-bold text-white-custom font-mono">
                            <span className="text-accent">03.</span> Skills & Experience
                        </h2>
                        <div
                            className="h-px bg-lightest-navy flex-1"
                            style={{ background: "var(--lightest-navy)" }}
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold text-white-custom mb-6">
                                Technical Skills
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-secondary">JavaScript</span>
                                        <span className="text-accent font-mono text-sm">95%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-fill"
                                            style={{ "--target-width": "95%" } as React.CSSProperties}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-secondary">React</span>
                                        <span className="text-accent font-mono text-sm">90%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-fill"
                                            style={{ "--target-width": "90%" } as React.CSSProperties}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-secondary">Node.js</span>
                                        <span className="text-accent font-mono text-sm">85%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-fill"
                                            style={{ "--target-width": "85%" } as React.CSSProperties}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-secondary">TypeScript</span>
                                        <span className="text-accent font-mono text-sm">80%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-fill"
                                            style={{ "--target-width": "80%" } as React.CSSProperties}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-secondary">CSS/Sass</span>
                                        <span className="text-accent font-mono text-sm">95%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-fill"
                                            style={{ "--target-width": "95%" } as React.CSSProperties}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white-custom mb-6">
                                Experience
                            </h3>
                            <div className="space-y-6">
                                <div className="glass-strong p-4 rounded modern-card">
                                    <h4 className="text-lg font-semibold text-white-custom">
                                        Lead Engineer
                                    </h4>
                                    <p className="text-accent font-mono text-sm mb-2">
                                        @ Upstatement • 2018 - Present
                                    </p>
                                    <p className="text-secondary text-sm">
                                        Deliver high-quality, robust production code for a diverse array of
                                        projects for clients including Harvard Business School, Everytown
                                        for Gun Safety, and more.
                                    </p>
                                </div>
                                <div className="glass-strong p-4 rounded modern-card">
                                    <h4 className="text-lg font-semibold text-white-custom">
                                        UI Engineer
                                    </h4>
                                    <p className="text-accent font-mono text-sm mb-2">
                                        @ Apple • 2017 - 2018
                                    </p>
                                    <p className="text-secondary text-sm">
                                        Developed and styled interactive web apps for Apple Music using
                                        MusicKit.js, Node.js, and a custom CMS.
                                    </p>
                                </div>
                                <div className="glass-strong p-4 rounded modern-card">
                                    <h4 className="text-lg font-semibold text-white-custom">
                                        Studio Developer
                                    </h4>
                                    <p className="text-accent font-mono text-sm mb-2">
                                        @ Scout • 2015 - 2017
                                    </p>
                                    <p className="text-secondary text-sm">
                                        Worked with a team of three designers to build a marketing website
                                        and design system for Scout&apos;s new brand identity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;