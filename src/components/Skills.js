import { Box } from "lucide-react";
import React from "react";

const Skills = () => {
    const frontendSkills = [
        { name: "HTML", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", proficiency: 95 },
        { name: "CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", proficiency: 90 },
        { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", proficiency: 92 },
        { name: "React Native", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", proficiency: 88 },
        { name: "Tailwind CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", proficiency: 60 },
    ];

    const backendSkills = [
        { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", proficiency: 75 },
    ];

    const databaseSkills = [
        { name: "Supabase", iconUrl: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg", proficiency: 85 },
        { name: "Firebase", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", proficiency: 88 },
        { name: "Cloudinary", iconUrl: "https://res.cloudinary.com/cloudinary-marketing/image/upload/v1599098500/creative_folder/logo-blue-PDF.png", proficiency: 90 },
    ];

    const designTools = [
        { name: "Figma", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", proficiency: 95 },
        { name: "Canva", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", proficiency: 95 },
        { name: "Adobe Photoshop", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", proficiency: 90 },
        { name: "Wix Studio", iconUrl: "https://static.wixstatic.com/media/9aea63_de2dedcd4ee245fdbdcbe3d9f93d49d0~mv2.png", proficiency: 90 },
        { name: "VS Code", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", proficiency: 95 },
    ];

    const SkillItem = ({ skill }) => (
        <div className="p-3 rounded-xl bg-[#f2f2f2] shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] hover:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] transition-all duration-300">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] bg-[#f2f2f2]">
                        <img src={skill.iconUrl} alt={skill.name} className="w-4 h-4 object-contain" />
                    </div>
                    <span className="text-gray-700 text-sm">{skill.name}</span>
                </div>
                <span className="text-xs text-gray-500 font-medium">{skill.proficiency}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-[#dcdcdc] shadow-inner overflow-hidden">
                <div
                    className="h-full rounded-full bg-gradient-to-r transition-all duration-500"
                    style={{ width: `${skill.proficiency}%`, background: 'linear-gradient(to right, #0000B9, #000)' }}
                ></div>

            </div>
        </div>
    );

    return (
        <section className="py-12 px-4 md:px-6 text-gray-800"
            style={{
                borderRadius: 100
            }}>
            {/* Section Header */}
            <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#fff] px-4 py-1 shadow-[3px_3px_7px_#c3c6ca,-3px_-3px_7px_#ffffff] text-gray-700 text-sm mb-2">
                    <Box className="w-4 h-4" />
                    Skills
                </span>
                <h2 className="text-4xl font-light text-center mb-1">Technical Expertise</h2>
                <p className="text-sm text-gray-700 text-center max-w-xl mx-auto mb-10">
                    A compact neumorphic section with a minimal black & gray theme.
                </p>

            </div>

            {/* Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Frontend */}
                <div className="rounded-2xl bg-[#f2f2f2] p-6 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff] transition-all">
                    <h3 className="text-base font-semibold mb-4 flex items-center gap-1">💻 Frontend</h3>
                    <div className="space-y-3">
                        {frontendSkills.map((skill) => <SkillItem key={skill.name} skill={skill} />)}
                    </div>
                </div>

                {/* Backend & Database */}
                <div className="rounded-2xl bg-[#f2f2f2] p-6 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff] transition-all">
                    <h3 className="text-base font-semibold mb-4 flex items-center gap-1">⚙️ Backend & Database</h3>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Backend</h4>
                    <div className="space-y-3 mb-4">
                        {backendSkills.map((skill) => <SkillItem key={skill.name} skill={skill} />)}
                    </div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Database & Storage</h4>
                    <div className="space-y-3">
                        {databaseSkills.map((skill) => <SkillItem key={skill.name} skill={skill} />)}
                    </div>
                </div>

                {/* Design & Tools */}
                <div className="rounded-2xl bg-[#f2f2f2] p-6 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff] transition-all">
                    <h3 className="text-base font-semibold mb-4 flex items-center gap-1">🎨 Design & Tools</h3>
                    <div className="space-y-3">
                        {designTools.map((skill) => <SkillItem key={skill.name} skill={skill} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
