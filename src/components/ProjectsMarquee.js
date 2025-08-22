import React from "react";
import { motion } from "framer-motion";

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
        <div className="relative w-full overflow-hidden" style={{ marginTop: "-100px" }}>
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none"></div>

            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none"></div>

            {/* Marquee content - Slowed down animation */}
            <div className="flex gap-6 animate-marquee whitespace-nowrap">
                {[...projects, ...projects].map((project, idx) => (
                    <motion.div
                        key={`${project.id}-${idx}`}
                        className="w-[300px] h-[200px] sm:w-[350px] sm:h-[250px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg relative bg-white dark:bg-gray-800 bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300 hover:scale-105 transition-transform duration-300 transform neumorphism"
                        whileHover={{ scale: 1.03 }}
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-semibold shadow-sm text-gray-800 dark:text-white">
                            {project.title}
                        </div>
                    </motion.div>
                ))}
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    animation: marquee 60s linear infinite;
                }
                @media (min-width: 640px) {
                    .animate-marquee {
                        animation-duration: 80s;
                    }
                }
                .neumorphism {
                    background: #e0e5ec;
                    box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.1), -8px -8px 15px rgba(255, 255, 255, 0.7);
                }
                .neumorphism:hover {
                    box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.8);
                }
            `}</style>
        </div>
    );
};

export default MarqueeProjects;
