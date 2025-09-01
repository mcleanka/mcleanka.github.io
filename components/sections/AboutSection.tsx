import Image from "next/image";
import React, { FunctionComponent } from "react";

interface AboutSectionProps {
    profile: Profile;
    currentSection: string;
    onSectionChange: (section: string) => void;
}

const AboutSection: FunctionComponent<AboutSectionProps> = ({ currentSection, profile }) => {
    return (
        <div
            id="about"
            className={`section ${currentSection === "about" ? "active" : ""} p-8 overflow-y-auto custom-scroll`}
            aria-current={currentSection === "about" ? "page" : undefined}
        >
            <div className="max-w-6xl mx-auto flex items-center min-h-full">
                <div className="grid lg:grid-cols-2 gap-12 items-start w-full">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-2xl font-bold text-white-custom font-mono">
                                <span className="text-accent">01.</span> About Me
                            </h2>
                            <div
                                className="h-px bg-lightest-navy flex-1"
                                style={{ background: "var(--lightest-navy)" }}
                            ></div>
                        </div>

                        <div className="space-y-4 text-secondary leading-relaxed">
                            <p>
                                Hello! My name is McLean and I enjoy creating things that live on
                                the internet. My interest in web development started back in 2012
                                when I decided to try editing custom Tumblr themes — turns out
                                hacking together a custom reblog button taught me a lot about HTML
                                & CSS!
                            </p>
                            <p>
                                Fast-forward to today, and I&apos;ve had the privilege of working
                                at <span className="text-accent">an advertising agency</span>,{" "}
                                <span className="text-accent">a start-up</span>,{" "}
                                <span className="text-accent">a huge corporation</span>, and{" "}
                                <span className="text-accent">a student-led design studio</span>.
                                My main focus these days is building accessible, inclusive
                                products and digital experiences at{" "}
                                <span className="text-accent">Upstatement</span> for a variety of
                                clients.
                            </p>
                            <p>
                                I also recently{" "}
                                <span className="text-accent">launched a course</span> that covers
                                everything you need to build a web app with the Spotify API using
                                Node & React.
                            </p>
                            <p>Here are a few technologies I&apos;ve been working with recently:</p>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-sm font-mono">
                            <div className="flex items-center">
                                <span className="text-accent mr-2">▹</span>
                                <span className="text-secondary">JavaScript (ES6+)</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-accent mr-2">▹</span>
                                <span className="text-secondary">TypeScript</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-accent mr-2">▹</span>
                                <span className="text-secondary">React</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-accent mr-2">▹</span>
                                <span className="text-secondary">Eleventy</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-accent mr-2">▹</span>
                                <span className="text-secondary">Node.js</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-accent mr-2">▹</span>
                                <span className="text-secondary">WordPress</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="w-64 h-64 mx-auto relative">
                            <div
                                className="absolute inset-0 rounded border-2 translate-x-4 translate-y-4 z-0"
                                style={{ borderColor: "var(--green)" }}
                            ></div>
                            <div className="relative z-10 w-full h-full rounded overflow-hidden">
                                <Image
                                    src={profile.avatar_url || 'https://github.com/github.png'}
                                    alt={profile.name || profile.login || 'McLean Kasambala'}
                                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                                    loading="lazy"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
