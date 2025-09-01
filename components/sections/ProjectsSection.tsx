import React from "react";

interface ProjectsSectionProps {
    currentSection: string;
    onSectionChange: (section: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
    currentSection,
}) => {
    return (
        <div
            className={`section p-8 overflow-y-auto custom-scroll ${currentSection === "projects" ? "active" : ""
                }`}
            id="projects"
        >
            <div className="max-w-7xl mx-auto py-8">
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-2xl font-bold text-white-custom font-mono">
                            <span className="text-accent">02.</span> Some Things I&apos;ve Built
                        </h2>
                        <div
                            className="h-px bg-lightest-navy flex-1"
                            style={{ background: "var(--lightest-navy)" }}
                        />
                    </div>
                </div>

                <div className="space-y-16">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 order-2 lg:order-1">
                            <div className="relative rounded overflow-hidden shadow-2xl glow">
                                <div className="aspect-video bg-gradient-to-br from-green to-light-navy flex items-center justify-center">
                                    <i className="fas fa-music text-4xl text-navy" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 order-1 lg:order-2 lg:text-right">
                            <p className="text-accent font-mono text-sm mb-2">Featured Project</p>
                            <h3 className="text-2xl font-bold text-white-custom mb-4">
                                Spotify Profile
                            </h3>
                            <div className="glass-strong p-6 rounded shadow-lg lg:-ml-16 mb-4">
                                <p className="text-secondary">
                                    A web app for visualizing personalized Spotify data. View your top
                                    artists, top tracks, recently played tracks, and detailed audio
                                    information about each track. Create and save new playlists of
                                    recommended tracks based on your existing playlists and more.
                                </p>
                            </div>
                            <ul className="flex flex-wrap gap-3 font-mono text-sm text-secondary mb-6 lg:justify-end">
                                <li>React</li>
                                <li>Express</li>
                                <li>Spotify API</li>
                                <li>Styled Components</li>
                            </ul>
                            <div className="flex space-x-4 lg:justify-end">
                                <a
                                    href="#"
                                    className="text-secondary hover:text-accent transition-colors"
                                    aria-label="View source code on GitHub"
                                >
                                    <i className="fab fa-github text-lg" />
                                </a>
                                <a
                                    href="#"
                                    className="text-secondary hover:text-accent transition-colors"
                                    aria-label="View live project"
                                >
                                    <i className="fas fa-external-link-alt text-lg" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-5">
                            <p className="text-accent font-mono text-sm mb-2">Featured Project</p>
                            <h3 className="text-2xl font-bold text-white-custom mb-4">
                                OctoProfile
                            </h3>
                            <div className="glass-strong p-6 rounded shadow-lg lg:-mr-16 mb-4">
                                <p className="text-secondary">
                                    A nicer look at your GitHub profile and repo stats. Includes data
                                    visualizations of your top languages, starred repositories, and
                                    sort through your top repos by number of stars, forks, and size.
                                </p>
                            </div>
                            <ul className="flex flex-wrap gap-3 font-mono text-sm text-secondary mb-6">
                                <li>Next.js</li>
                                <li>Chart.js</li>
                                <li>GitHub API</li>
                                <li>Vercel</li>
                            </ul>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-secondary hover:text-accent transition-colors"
                                    aria-label="View source code on GitHub"
                                >
                                    <i className="fab fa-github text-lg" />
                                </a>
                                <a
                                    href="#"
                                    className="text-secondary hover:text-accent transition-colors"
                                    aria-label="View live project"
                                >
                                    <i className="fas fa-external-link-alt text-lg" />
                                </a>
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="relative rounded overflow-hidden shadow-2xl glow">
                                <div className="aspect-video bg-gradient-to-br from-green to-light-navy flex items-center justify-center">
                                    <i className="fas fa-chart-bar text-4xl text-navy" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24">
                        <h3 className="text-2xl font-bold text-white-custom text-center mb-12">
                            Other Noteworthy Projects
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="glass-strong p-8 rounded-lg modern-card">
                                <div className="flex justify-between items-center mb-6">
                                    <i className="fas fa-folder text-green text-4xl" />
                                    <div className="flex space-x-4">
                                        <a
                                            href="#"
                                            className="text-secondary hover:text-accent transition-colors"
                                            aria-label="View source code on GitHub"
                                        >
                                            <i className="fab fa-github text-lg" />
                                        </a>
                                        <a
                                            href="#"
                                            className="text-secondary hover:text-accent transition-colors"
                                            aria-label="View live project"
                                        >
                                            <i className="fas fa-external-link-alt text-lg" />
                                        </a>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-white-custom mb-3">
                                    Halcyon Theme
                                </h4>
                                <p className="text-secondary mb-6">
                                    A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
                                    and more. Available on Visual Studio Marketplace.
                                </p>
                                <ul className="flex flex-wrap gap-3 font-mono text-sm text-secondary">
                                    <li>VS Code</li>
                                    <li>Sublime Text</li>
                                    <li>Atom</li>
                                </ul>
                            </div>

                            {/* Project Card 2 */}
                            <div className="glass-strong p-8 rounded-lg modern-card">
                                <div className="flex justify-between items-center mb-6">
                                    <i className="fas fa-folder text-green text-4xl" />
                                    <div className="flex space-x-4">
                                        <a
                                            href="#"
                                            className="text-secondary hover:text-accent transition-colors"
                                            aria-label="View source code on GitHub"
                                        >
                                            <i className="fab fa-github text-lg" />
                                        </a>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-white-custom mb-3">
                                    Course Reviews
                                </h4>
                                <p className="text-secondary mb-6">
                                    A React app for course reviews, ratings, and professor feedback for
                                    university students.
                                </p>
                                <ul className="flex flex-wrap gap-3 font-mono text-sm text-secondary">
                                    <li>React</li>
                                    <li>Material-UI</li>
                                    <li>Firebase</li>
                                </ul>
                            </div>

                            {/* Project Card 3 */}
                            <div className="glass-strong p-8 rounded-lg modern-card">
                                <div className="flex justify-between items-center mb-6">
                                    <i className="fas fa-folder text-green text-4xl" />
                                    <div className="flex space-x-4">
                                        <a
                                            href="#"
                                            className="text-secondary hover:text-accent transition-colors"
                                            aria-label="View source code on GitHub"
                                        >
                                            <i className="fab fa-github text-lg" />
                                        </a>
                                        <a
                                            href="#"
                                            className="text-secondary hover:text-accent transition-colors"
                                            aria-label="View live project"
                                        >
                                            <i className="fas fa-external-link-alt text-lg" />
                                        </a>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-white-custom mb-3">
                                    Portfolio v2
                                </h4>
                                <p className="text-secondary mb-6">
                                    Second iteration of my personal website. Designed and developed with
                                    a conscious effort to avoid over-engineering.
                                </p>
                                <ul className="flex flex-wrap gap-3 font-mono text-sm text-secondary">
                                    <li>Jekyll</li>
                                    <li>Sass</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;