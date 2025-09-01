import React from "react";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

export default function SocialSidebar() {
    return (
        <div className="side-element right-10">
            <ul className="flex flex-col items-center space-y-8 mb-8">
                <li>
                    <a
                        href="https://github.com"
                        className="text-light-slate hover:text-green hover:-translate-y-1 transform transition-all duration-300"
                        aria-label="GitHub Profile"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://linkedin.com"
                        className="text-light-slate hover:text-green hover:-translate-y-1 transform transition-all duration-300"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://instagram.com"
                        className="text-light-slate hover:text-green hover:-translate-y-1 transform transition-all duration-300"
                        aria-label="Instagram Profile"
                    >
                        <Instagram className="w-5 h-5" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://twitter.com"
                        className="text-light-slate hover:text-green hover:-translate-y-1 transform transition-all duration-300"
                        aria-label="Twitter Profile"
                    >
                        <Twitter className="w-5 h-5" />
                    </a>
                </li>
            </ul>
        </div>
    );
}