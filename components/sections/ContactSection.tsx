import React from "react";

interface ContactSectionProps {
    currentSection: string;
    onSectionChange: (section: string) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({
    currentSection,
}) => {
    return (
        <div
            className={`section p-8 flex items-center justify-center ${currentSection === "contact" ? "active" : ""
                }`}
            id="contact"
        >
            <div className="text-center max-w-2xl">
                <div className="flex items-center justify-center gap-4 mb-8">
                    <h2 className="text-2xl font-bold text-white-custom font-mono">
                        <span className="text-accent">04.</span> What&apos;s Next?
                    </h2>
                </div>

                <h3 className="text-4xl md:text-6xl font-bold text-white-custom mb-6">
                    Get In Touch
                </h3>

                <p className="text-lg text-secondary mb-12 leading-relaxed">
                    Although I&apos;m not currently looking for any new opportunities, my inbox
                    is always open. Whether you have a question or just want to say hi,
                    I&apos;ll try my best to get back to you!
                </p>

                <div className="space-y-8">
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="mailto:mclean@example.com" className="btn-primary glow">
                            Say Hello
                        </a>
                        <a href="/resume.pdf" className="btn-primary">
                            Resume
                        </a>
                    </div>

                    <div className="flex justify-center space-x-8 pt-8">
                        <a
                            href="https://github.com"
                            className="text-secondary hover:text-accent transition-colors text-2xl"
                            aria-label="GitHub Profile"
                        >
                            <i className="fab fa-github" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            className="text-secondary hover:text-accent transition-colors text-2xl"
                            aria-label="LinkedIn Profile"
                        >
                            <i className="fab fa-linkedin" />
                        </a>
                        <a
                            href="https://twitter.com"
                            className="text-secondary hover:text-accent transition-colors text-2xl"
                            aria-label="Twitter Profile"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        <a
                            href="https://instagram.com"
                            className="text-secondary hover:text-accent transition-colors text-2xl"
                            aria-label="Instagram Profile"
                        >
                            <i className="fab fa-instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;