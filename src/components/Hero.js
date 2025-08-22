import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MarqueeProjects from "../components/ProjectsMarquee";

const roles = ["Mobile App Developer", "UI/UX Developer", "Remote Designer"];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* 🎥 Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-100"
            >
                <source src="../../assets/img/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-[10%]">
                {/* Heading */}
                <div className="flex items-center gap-4 mb-6 flex-wrap justify-center">
                    <img
                        src="../assets/img/pic.png"
                        alt="Profile"
                        className="w-40 h-40 rounded-2xl shadow-lg object-cover"
                    />
                    <h1 className="text-5xl sm:text-6xl font-serif font-extrabold text-slate-800">
                        I'm Yashindi Bhagya
                    </h1>
                </div>

                {/* Animated Role with Icons */}
                <div className="flex items-center gap-4 mb-6 flex-wrap justify-center min-h-[80px]">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={roles[index]}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl sm:text-6xl font-serif font-extrabold text-slate-800"
                        >
                            {roles[index]}
                        </motion.h2>
                    </AnimatePresence>

                    {/* Icons */}
                    <div className="flex gap-2">
                        <img
                            src="/cloud.png"
                            alt="Cloud"
                            className="w-12 h-12 rounded-2xl shadow-md"
                        />
                        <img
                            src="/moon.png"
                            alt="Moon"
                            className="w-12 h-12 rounded-2xl shadow-md"
                        />
                    </div>
                </div>

                {/* Subheading */}
                <p className="max-w-2xl text-lg sm:text-xl text-gray-600 mb-10 px-4">
                    I specialize in creating thoughtful and impactful products,
                    collaborating with startups and leading brands
                </p>

                <div className="w-full mt-8">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                        <button className="px-6 py-3 rounded-xl bg-gradient-to-br from-[#222B4D] to-[#3D4680] text-white font-medium shadow-lg hover:scale-105 transition-transform whitespace-nowrap">
                            ➜ Get Template
                        </button>
                        <button className="px-6 py-3 rounded-xl bg-gradient-to-br from-white to-gray-100 text-gray-700 font-medium shadow-lg hover:scale-105 transition-transform whitespace-nowrap">
                            ➜ See Projects
                        </button>
                    </div>

                    <div className="w-full relative">
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none backdrop-blur-md"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none backdrop-blur-md"></div>
                        <MarqueeProjects />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
