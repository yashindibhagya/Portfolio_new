import React from "react";

const projects = [
    { id: 1, title: "CourseSite", img: "../../assets/img/bakery.png" },
    { id: 2, title: "LanderOS", img: "../../assets/img/doctor.png" },
    { id: 3, title: "Alter", img: "../../assets/img/burger.png" },
    { id: 4, title: "Project Four", img: "../../assets/img/forest.png" },
    { id: 5, title: "Project Five", img: "../../assets/img/gesture.png" },
    { id: 6, title: "Project Six", img: "../../assets/img/nature.png" },
    { id: 7, title: "Project Seven", img: "../../assets/img/plant.png" },
    { id: 8, title: "Project Eight", img: "../../assets/img/nike.png" },
    { id: 9, title: "Project Nine", img: "../../assets/img/coffee_shop.png" },
];

const MarqueeProjects = () => {
    return (
        <div className="relative w-full overflow-hidden py-10">
            {/* Marquee content */}
            <div className="flex gap-6 animate-marquee whitespace-nowrap">
                {projects.concat(projects).map((project, idx) => (
                    <div
                        key={idx}
                        className="w-[380px] h-[250px] flex-shrink-0 bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative"
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4 bg-white/70 px-3 py-1 rounded-lg text-sm font-semibold shadow">
                            {project.title}
                        </div>
                    </div>
                ))}
            </div>

            {/* Fade/blur effect sides */}
            <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-100 via-gray-100/60 to-transparent"></div>
            <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-100 via-gray-100/60 to-transparent"></div>

            {/* Animation style */}
            <style>
                {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 30s linear infinite;
          }
        `}
            </style>
        </div>
    );
};

export default MarqueeProjects;
