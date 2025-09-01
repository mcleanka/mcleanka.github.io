import { experiences } from "@/data/experience";
import React, { useState } from "react";
import SectionHeader from "../SectionHeader";

interface SkillsSectionProps {
    currentSection: string;
    onSectionChange: (section: string) => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
    currentSection,
}) => {
    const companies = Object.keys(experiences) as CompanyKey[];
    const [selectedCompany, setSelectedCompany] = useState<CompanyKey>("EGPAF");

    const handleCompanySelect = (company: string): void => {
        setSelectedCompany(company as CompanyKey);
    };

    return (
        <div
            className={`section p-8 overflow-y-auto custom-scroll ${currentSection === "skills" ? "active" : ""
                }`}
            id="skills"
        >
            <div className="max-w-4xl mx-auto flex items-center min-h-full">
                <div className="w-full">

                    <SectionHeader number="02" title="Where I've Worked" />

                    <div className="grid md:grid-cols-1 gap-12">
                        <div className="flex">
                            <div className="flex flex-col mr-8">
                                {companies.map((company: CompanyKey) => (
                                    <button
                                        key={company}
                                        onClick={() => handleCompanySelect(company)}
                                        className={`text-left py-3 px-4 border-l-2 text-sm font-mono transition-all duration-200 whitespace-nowrap ${selectedCompany === company
                                            ? "border-lightest-navy text-accent bg-lightest-navy"
                                            : "border-slate-600 text-slate-400 hover:text-accent hover:bg-slate-800/50"
                                            }`}
                                    >
                                        {company}
                                    </button>
                                ))}
                            </div>

                            <div className="flex-1 min-h-[400px]">
                                <div className="mb-4">
                                    <h4 className="text-xl font-semibold text-white mb-1">
                                        {experiences[selectedCompany].role}{" "}
                                        <span className="text-lightest-navy">
                                            @ {experiences[selectedCompany].company}
                                        </span>
                                    </h4>
                                    <p className="text-slate-400 font-mono text-sm">
                                        {experiences[selectedCompany].period}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {experiences[selectedCompany].responsibilities.map(
                                        (responsibility: string, index: number) => (
                                            <div key={index} className="flex items-start">
                                                <span className="text-lightest-navy mr-4 mt-2 text-sm">
                                                    ▹
                                                </span>
                                                <p className="text-slate-300 text-sm leading-relaxed">
                                                    {responsibility}
                                                </p>
                                            </div>
                                        )
                                    )}
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