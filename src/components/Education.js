import React, { useState, useEffect } from 'react';

const EducationExperience = () => {
    // State to manage which section is expanded (Education or Experience)
    const [expandedEducation, setExpandedEducation] = useState(null);
    const [expandedExperience, setExpandedExperience] = useState(null);

    const toggleEducationSection = (index) => {
        setExpandedEducation(expandedEducation === index ? null : index); // Toggle the education section
    };

    const toggleExperienceSection = (index) => {
        setExpandedExperience(expandedExperience === index ? null : index); // Toggle the experience section
    };

    // Add the flow animation keyframes to the document only once
    useEffect(() => {
        if (!document.getElementById('flow-animation-style')) {
            const style = document.createElement('style');
            style.id = 'flow-animation-style';
            style.innerHTML = `
                @keyframes flow {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                
                .animate-flow {
                    display: inline-flex;
                    width: 200%;
                    animation: flow 20s linear infinite;
                }
                
                /* Prevent horizontal scrolling on the entire page */
                html, body {
                    overflow-x: hidden;
                    width: 100%;
                    position: relative;
                }
            `;
            document.head.appendChild(style);
        }
    }, []);

    return (
        <section className="py-16 sm:py-20 md:py-24 relative">
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-gray-400 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.5 + 0.2
                        }}
                    />
                ))}
            </div>

            <div className="flex flex-col items-center">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#ff58d8] via-[#bc50ff] to-[#4f4cfa] bg-clip-text text-transparent">
                        Education & Experience
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        My academic journey and professional experience in the field of design and development
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl">
                    {/* Education Section */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
                        <div className="space-y-12">
                            {/* BSc Degree */}
                            <div className="relative pl-8">
                                <div
                                    className="absolute left-0 top-0 w-2 h-2 bg-[#ff58d8] rounded-full transform -translate-x-[3px]"
                                    onClick={() => toggleEducationSection(0)}
                                ></div>
                                <div
                                    className="bg-white/[0.03] backdrop-blur-sm border border-white/10 p-6 rounded-xl cursor-pointer"
                                    onClick={() => toggleEducationSection(0)}
                                >
                                    <h4 className="text-xl font-semibold text-white mb-2">
                                        BSc (Hons) Computer Science
                                    </h4>
                                    <p className="text-gray-400 mb-2">
                                        National School of Business Management (Undergraduate)
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        2022-2025
                                    </p>

                                    {/* Toggle Details */}
                                    {expandedEducation === 0 && (
                                        <div className="mt-4">
                                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                                <li className="text-sm">
                                                    Focused on software development, algorithms, and advanced computer science concepts. Specializing in UI/UX design and modern web technologies.
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Advanced Level */}
                            <div className="relative pl-8">
                                <div
                                    className="absolute left-0 top-0 w-2 h-2 bg-[#bc50ff] rounded-full transform -translate-x-[3px]"
                                    onClick={() => toggleEducationSection(1)}
                                ></div>
                                <div
                                    className="bg-white/[0.03] backdrop-blur-sm border border-white/10 p-6 rounded-xl cursor-pointer"
                                    onClick={() => toggleEducationSection(1)}
                                >
                                    <h4 className="text-xl font-semibold text-white mb-2">
                                        G.C.E. Advanced Level
                                    </h4>
                                    <p className="text-gray-400 mb-2">
                                        Sujatha Vidalaya, Nugegoda
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        2018-2021
                                    </p>

                                    {/* Toggle Details */}
                                    {expandedEducation === 1 && (
                                        <div className="mt-4">
                                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                                <li className="text-sm">
                                                    Excelled in Combined Mathematics stream with a strong foundation in analytical thinking and problem-solving skills.
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-white mb-8">Experience</h3>
                        <div className="space-y-12">
                            {/* Amerck */}
                            <div className="relative pl-8">
                                <div
                                    className="absolute left-0 top-0 w-2 h-2 bg-[#ff58d8] rounded-full transform -translate-x-[3px]"
                                    onClick={() => toggleExperienceSection(0)}
                                ></div>
                                <div
                                    className="bg-white/[0.03] backdrop-blur-sm border border-white/10 p-6 rounded-xl cursor-pointer"
                                    onClick={() => toggleExperienceSection(0)}
                                >
                                    <h4 className="text-xl font-semibold text-white mb-2">
                                        UI/UX Designer
                                    </h4>
                                    <p className="text-gray-400 mb-2">
                                        Amerck
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        2025 May - Present
                                    </p>
                                    {/* Toggle Details */}
                                    {expandedExperience === 0 && (
                                        <div className="mt-4">
                                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                                <li className="text-sm">
                                                    Designed responsive user interfaces for cross-platform web and mobile applications across healthcare.
                                                </li>
                                                <li className="text-sm">
                                                    Conducted user research and usability testing to inform design decisions.
                                                </li>
                                                <li className="text-sm">
                                                    Collaborated with development team to ensure pixel-perfect implementation.
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* New Pacific Systems */}
                            <div className="relative pl-8">
                                <div
                                    className="absolute left-0 top-0 w-2 h-2 bg-[#bc50ff] rounded-full transform -translate-x-[3px]"
                                    onClick={() => toggleExperienceSection(1)}
                                ></div>
                                <div
                                    className="bg-white/[0.03] backdrop-blur-sm border border-white/10 p-6 rounded-xl cursor-pointer"
                                    onClick={() => toggleExperienceSection(1)}
                                >
                                    <h4 className="text-xl font-semibold text-white mb-2">
                                        UI/UX Designer
                                    </h4>
                                    <p className="text-gray-400 mb-2">
                                        New Pacific Systems
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        2023 Jan - 2023 Dec
                                    </p>
                                    {/* Toggle Details */}
                                    {expandedExperience === 1 && (
                                        <div className="mt-4">
                                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                                <li className="text-sm">
                                                    Designed responsive web and mobile interfaces for enterprise clients.
                                                </li>
                                                <li className="text-sm">
                                                    Created and maintained design system documentation.
                                                </li>
                                                <li className="text-sm">
                                                    Facilitated design workshops and stakeholder presentations.
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationExperience;
