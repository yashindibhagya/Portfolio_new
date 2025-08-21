import React from "react";

const Skills = () => {
    // Frontend skills
    const frontendSkills = [
        {
            name: "HTML",
            iconUrl:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            proficiency: 95,
        },
        {
            name: "CSS",
            iconUrl:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            proficiency: 90,
        },
        {
            name: "JavaScript",
            iconUrl:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            proficiency: 92,
        },
        {
            name: "React Native",
            iconUrl:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            proficiency: 88,
        },
        {
            name: "Tailwind CSS",
            iconUrl:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
            proficiency: 60,
        },
    ];

    // Backend skills
    const backendSkills = [
        {
            name: "Node.js",
            iconUrl:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            proficiency: 75,
        },
    ];

    // Database skills
    const databaseSkills = [
        {
            name: "Supabase",
            iconUrl: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
            proficiency: 85,
        },
        {
            name: "Firebase",
            iconUrl:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            proficiency: 88,
        },
        {
            name: "Cloudinary",
            iconUrl:
                "https://res.cloudinary.com/cloudinary-marketing/image/upload/v1599098500/creative_folder/logo-blue-PDF.png",
            proficiency: 90,
        },
    ];

    // Design Tools
    const designTools = [
        {
            name: "Figma",
            iconUrl:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
            proficiency: 95,
        },
        {
            name: "Canva",
            iconUrl:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
            proficiency: 95,
        },
        {
            name: "Adobe Photoshop",
            iconUrl:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
            proficiency: 90,
        },
        {
            name: "Wix Studio",
            iconUrl:
                "https://static.wixstatic.com/media/9aea63_de2dedcd4ee245fdbdcbe3d9f93d49d0~mv2.png",
            proficiency: 90,
        },
        {
            name: "VS Code",
            iconUrl:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
            proficiency: 95,
        },
    ];

    // Skill item
    const SkillItem = ({ skill }) => (
        <div className="group">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center mr-3 rounded-xl shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] bg-[#f5f5f5] overflow-hidden">
                        <img
                            src={skill.iconUrl}
                            alt={`${skill.name} icon`}
                            className="w-5 h-5 object-contain"
                        />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{skill.name}</span>
                </div>
                <span className="text-xs font-semibold text-gray-500">
                    {skill.proficiency}%
                </span>
            </div>

            {/* Progress bar */}
            <div className="h-2 w-full rounded-full bg-[#e6e6e6] shadow-inner overflow-hidden">
                <div
                    className="h-full rounded-full bg-gradient-to-r from-[#6a85f1] to-[#b084f9] transition-all duration-500"
                    style={{ width: `${skill.proficiency}%` }}
                ></div>
            </div>
        </div>
    );

    return (
        <section className="py-16 px-6 md:px-8 text-gray-800">
            {/* Section Header */}
            <div className="text-center mb-12">
                <span className="uppercase tracking-widest text-xs bg-white py-1 px-3 rounded-full shadow-[inset_1px_1px_3px_#d1d9e6,inset_-1px_-1px_3px_#ffffff] inline-block mb-3">
                    Skills
                </span>
                <h2 className="text-4xl font-semibold">Technical Expertise</h2>
                <p className="text-sm text-gray-600 mt-2 max-w-2xl mx-auto">
                    A toolkit of technologies and tools I’ve mastered through practice and
                    real-world application.
                </p>
            </div>

            {/* Outer Neumorphic Container */}
            <div className="max-w-6xl mx-auto bg-[#f5f5f5] rounded-3xl p-8 md:p-12 shadow-[10px_10px_20px_#d1d9e6,-10px_-10px_20px_#ffffff]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Frontend */}
                    <div className="p-6 rounded-2xl bg-[#f5f5f5] 
    shadow-[6px_6px_16px_#d1d9e6,-6px_-6px_16px_#ffffff] 
    transition-all duration-300 
    hover:shadow-[inset_6px_6px_16px_#d1d9e6,inset_-6px_-6px_16px_#ffffff]">
                        <div className="flex items-center mb-6">
                            <span className="text-3xl mr-3">💻</span>
                            <h3 className="text-lg font-semibold text-gray-800">Frontend</h3>
                        </div>
                        <div className="space-y-5">
                            {frontendSkills.map((skill) => (
                                <SkillItem key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </div>

                    {/* Backend & Database */}
                    <div className="p-6 rounded-2xl bg-[#f5f5f5] 
    shadow-[6px_6px_16px_#d1d9e6,-6px_-6px_16px_#ffffff] 
    transition-all duration-300 
    hover:shadow-[inset_6px_6px_16px_#d1d9e6,inset_-6px_-6px_16px_#ffffff]">
                        <div className="flex items-center mb-6">
                            <span className="text-3xl mr-3">⚙️</span>
                            <h3 className="text-lg font-semibold text-gray-800">
                                Backend & Database
                            </h3>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-base font-semibold text-gray-700 mb-3">
                                Backend
                            </h4>
                            <div className="space-y-5">
                                {backendSkills.map((skill) => (
                                    <SkillItem key={skill.name} skill={skill} />
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-base font-semibold text-gray-700 mb-3">
                                Database & Storage
                            </h4>
                            <div className="space-y-5">
                                {databaseSkills.map((skill) => (
                                    <SkillItem key={skill.name} skill={skill} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Design & Dev Tools */}
                    <div className="p-6 rounded-2xl bg-[#f5f5f5] shadow-[6px_6px_16px_#d1d9e6,-6px_-6px_16px_#ffffff] transition-all duration-300 hover:shadow-[inset_6px_6px_16px_#d1d9e6,inset_-6px_-6px_16px_#ffffff]">
                        <div className="flex items-center mb-6">
                            <span className="text-3xl mr-3">🎨</span>
                            <h3 className="text-lg font-semibold text-gray-800">
                                Design & Dev Tools
                            </h3>
                        </div>
                        <div className="space-y-5">
                            {designTools.map((skill) => (
                                <SkillItem key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;
