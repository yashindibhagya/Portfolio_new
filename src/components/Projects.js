import React, { useState } from "react";
import { Box } from "lucide-react";
import { projectsData } from "../data/projectsData"; // Adjust path as needed

const tabs = ["All", "UI/UX", "Mobile App", "Website"];

const NeumorphicProjects = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [hoveredCard, setHoveredCard] = useState(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    // Filtering logic based on the `type` field (e.g., 'uiux', 'mobile', 'website')
    const filteredProjects =
        activeTab === "All"
            ? projectsData
            : projectsData.filter((project) => {
                if (activeTab === "UI/UX") return project.type === "uiux";
                if (activeTab === "Mobile App") return project.type === "mobile";
                if (activeTab === "Website") return project.type === "website";
                return false;
            });

    const handleMouseMove = (e, index) => {
        const card = e.currentTarget.getBoundingClientRect();
        setCursorPos({
            x: e.clientX - card.left,
            y: e.clientY - card.top,
        });
        setHoveredCard(index);
    };

    return (
        <section className="py-5 px-6 md:px-8 text-gray-800 mb-20">
            {/* Section Header */}
            <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 shadow-md text-gray-700 text-sm mb-2">
                    <Box className="w-4 h-4" />
                    Projects
                </span>
                <h2 className="text-4xl font-semibold">Proven Impact & Results</h2>
                <p className="text-sm text-gray-600 mt-2">
                    Explore Projects that reflect our AI expertise & real world impact
                </p>
            </div>

            {/* Outer Neumorphic Container */}
            <div className="max-w-6xl mx-auto rounded-3xl p-6 md:p-10 shadow-[10px_10px_20px_#d1d9e6,-10px_-10px_20px_#ffffff]">

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-2 px-4 sm:px-8 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap
                            ${activeTab === tab
                                    ? "bg-white text-black shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]"
                                    : "bg-[#f5f5f5] text-gray-600 shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff]"
                                } hover:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filteredProjects.slice(0, 4).map((project, index) => (
                        <div
                            key={project.id}
                            className="relative group rounded-3xl overflow-hidden shadow-[6px_6px_16px_#d1d9e6,-6px_-6px_16px_#ffffff] bg-[#f5f5f5] cursor-none"
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                className="w-full h-64 object-cover rounded-3xl"
                            />
                            <div className="text-center py-4 text-base font-semibold text-gray-700">
                                {project.title}
                            </div>
                            {hoveredCard === index && (
                                <div
                                    className="absolute z-20 text-sm font-medium text-white px-4 py-2 
                    rounded-full pointer-events-none transition duration-100
                    bg-white/20 backdrop-blur-md border border-white/30 shadow-lg"
                                    style={{
                                        top: cursorPos.y,
                                        left: cursorPos.x,
                                        transform: "translate(-50%, -50%)",
                                    }}
                                >
                                    View project
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-8 text-center">
                    <a
                        href="/projects"
                        className="inline-block py-2 px-6 rounded-2xl text-sm font-medium text-gray-700 bg-[#f5f5f5]
        shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] hover:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]
        transition-all duration-200"
                    >
                        View All Projects
                    </a>
                </div>


            </div>
        </section>
    );
};

export default NeumorphicProjects;
