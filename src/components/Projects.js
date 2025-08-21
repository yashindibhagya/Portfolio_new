import React, { useState } from "react";

const tabs = ["All", "UI/UX", "Mobile App"];

const projects = [
    {
        id: 1,
        category: "UI/UX",
        title: "Workwise — Automated HR Workflow Bot",
        description:
            "Developed an AI-powered workflow automation bot for onboarding, leave requests, and FAQ handling.",
        image: "../../assets/img/bakery.png",
        stats: [
            { value: "60%", label: "Saved admin time" },
            { value: "35%", label: "Improved team output" },
        ],
    },
    {
        id: 2,
        category: "Mobile App",
        title: "SwiftChat — Real-time Messaging Platform",
        description:
            "Built a cross-platform real-time messaging app with encryption, voice notes, and media sharing.",
        image: "../../assets/img/bakery.png",
        stats: [
            { value: "99.9%", label: "Uptime" },
            { value: "85%", label: "User engagement increase" },
        ],
    },
    {
        id: 3,
        category: "Mobile App",
        title: "SwiftChat — Real-time Messaging Platform",
        description:
            "Built a cross-platform real-time messaging app with encryption, voice notes, and media sharing.",
        image: "../../assets/img/bakery.png",
        stats: [
            { value: "99.9%", label: "Uptime" },
            { value: "85%", label: "User engagement increase" },
        ],
    },
    {
        id: 4,
        category: "Mobile App",
        title: "SwiftChat — Real-time Messaging Platform",
        description:
            "Built a cross-platform real-time messaging app with encryption, voice notes, and media sharing.",
        image: "../../assets/img/bakery.png",
        stats: [
            { value: "99.9%", label: "Uptime" },
            { value: "85%", label: "User engagement increase" },
        ],
    },
];

const NeumorphicProjects = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProjects =
        activeTab === "All"
            ? projects
            : projects.filter((project) => project.category === activeTab);


    const [hoveredCard, setHoveredCard] = useState(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e, index) => {
        const card = e.currentTarget.getBoundingClientRect();
        setCursorPos({
            x: e.clientX - card.left,
            y: e.clientY - card.top,
        });
        setHoveredCard(index);
    };

    return (
        <section className="py-16 px-6 md:px-8 text-gray-800">
            {/* Section Header */}
            <div className="text-center mb-10">
                <span className="uppercase tracking-widest text-xs bg-white py-1 px-3 rounded-full shadow-[inset_1px_1px_3px_#d1d9e6,inset_-1px_-1px_3px_#ffffff] inline-block mb-3">
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
                <div className="flex justify-center space-x-4 mb-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-2 px-8 rounded-2xl text-sm font-medium transition-all duration-200
                ${activeTab === tab
                                    ? "bg-white text-black shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]"
                                    : "bg-[#f5f5f5] text-gray-600 shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff]"
                                } hover:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Projects */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="relative group rounded-3xl overflow-hidden shadow-[6px_6px_16px_#d1d9e6,-6px_-6px_16px_#ffffff] bg-[#f5f5f5] cursor-none"
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-64 object-cover rounded-3xl"
                            />

                            {/* Project Name */}
                            <div className="text-center py-4 text-base font-semibold text-gray-700">
                                {project.title}
                            </div>

                            {/* Floating Cursor */}
                            {/* Floating Cursor */}
                            {hoveredCard === index && (
                                <div
                                    className="absolute z-20 text-sm font-medium text-white px-4 py-2 
                   rounded-full pointer-events-none transition duration-100
                   bg-white/20 backdrop-blur-md border border-white/30
                   shadow-lg"
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

            </div>
        </section>
    );
};

export default NeumorphicProjects;
