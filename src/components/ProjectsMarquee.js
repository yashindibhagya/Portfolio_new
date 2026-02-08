import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../data/projectsData";

// Map projects data to the required format
const projects = projectsData.map(project => ({
    id: project.id,
    title: project.title,
    img: project.mockupImage || project.image
}));

const MarqueeProjects = () => {
    const navigate = useNavigate();

    const handleProjectClick = (projectId) => {
        navigate(`/project/${projectId}`);
        window.scrollTo(0, 0);
    };

    return (
        <div className="relative w-full overflow-hidden py-6 sm:py-10 -mt-60 sm:-mt-80 md:-mt-60 lg:mt-10 xl:-mt-20">
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none"></div>

            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none"></div>

            {/* Marquee content - Slowed down animation */}
            <div className="flex gap-3 sm:gap-6 animate-marquee whitespace-nowrap">
                {[...projects, ...projects].map((project, idx) => (
                    <motion.div
                        key={`${project.id}-${idx}`}
                        className="w-[250px] h-[150px] sm:w-[300px] sm:h-[200px] md:w-[350px] md:h-[250px] flex-shrink-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg relative bg-white dark:bg-gray-800 bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300 hover:scale-105 transition-transform duration-300 transform neumorphism cursor-pointer"
                        whileHover={{ scale: 1.03 }}
                        onClick={() => handleProjectClick(project.id)}
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                        />
                        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-white/95 px-2 py-1 sm:px-3 sm:py-1 rounded-md sm:rounded-lg text-xs sm:text-sm font-semibold shadow-sm text-gray-800 dark:text-white">
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
                    animation: marquee 45s linear infinite;
                    will-change: transform;
                }
                @media (min-width: 640px) {
                    .animate-marquee {
                        animation-duration: 60s;
                    }
                }
                @media (min-width: 768px) {
                    .animate-marquee {
                        animation-duration: 80s;
                    }
                }
                .neumorphism {
                    background: #e0e5ec;
                    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.08), -6px -6px 12px rgba(255, 255, 255, 0.6);
                }
                .neumorphism:hover {
                    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.12), -6px -6px 15px rgba(255, 255, 255, 0.7);
                }
                @media (min-width: 640px) {
                    .neumorphism {
                        box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.1), -8px -8px 15px rgba(255, 255, 255, 0.7);
                    }
                    .neumorphism:hover {
                        box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.8);
                    }
                }
            `}</style>
        </div>
    );
};

export default MarqueeProjects;