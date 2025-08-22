import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roles = ["Mobile App Developer", "UI UX Developer", "Remote Designer"];

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
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-2 leading-tight">
                {/* Profile Section */}
                <div className="flex items-center gap-2 mb-3 flex-wrap justify-center">
                    <h1 className="text-5xl sm:text-6xl font-['Garamond_Nova_Pro'] font-light italic text-gray-400">
                        Hey, I'm
                    </h1>
                    <img
                        src="../assets/img/pic.png"
                        alt="Profile"
                        className="w-[100px] h-[55px] rounded-full border border-black shadow-lg object-contain"

                    />
                    <h1 className="text-5xl sm:text-6xl font-['Garamond_Nova_Pro'] font-light italic text-slate-800">
                        Yashindi Bhagya
                    </h1>
                </div>

                {/* Animated Role with Icons */}
                <div className="flex items-center gap-2 mb-3 flex-wrap justify-center min-h-[60px]">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={roles[index]}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl sm:text-6xl font-['Garamond_Nova_Pro'] font-light italic text-slate-800"
                            style={{ fontVariationSettings: '"wght" 300, "ital" 1' }}
                        >
                            {roles[index]}
                        </motion.h2>
                    </AnimatePresence>

                    <img
                        src="../assets/img/day.jpg"
                        alt="Day Icon"
                        className="w-[100px] h-[55px] rounded-full border shadow-lg object-cover"
                    />

                    <img
                        src="../assets/img/night.jpg"
                        alt="Night Icon"
                        className="w-[100px] h-[55px] rounded-full border border-black shadow-lg object-cover"
                    />
                </div>

                {/* Location Section */}
                <div className="flex items-center gap-2 mb-3 flex-wrap justify-center">
                    <h1 className="text-5xl sm:text-5xl font-['Garamond_Nova_Pro'] font-light italic text-gray-400">
                        Living in
                    </h1>
                    <img
                        src="../assets/img/sl.avif"
                        alt="Sri Lanka"
                        className="w-[100px] h-[55px] rounded-full border border-black shadow-lg object-cover"
                    />
                    <h1 className="text-5xl sm:text-5xl font-['Garamond_Nova_Pro'] font-light italic text-gray-400 ">
                        Sri Lanka
                    </h1>
                </div>

                {/* Subheading */}
                <p className="max-w-2xl text-lg sm:text-xl text-gray-600 mb-6 px-4 mt-10">
                    I specialize in creating thoughtful and impactful products,
                    collaborating with startups and leading brands
                </p>

                {/* Buttons */}
                <div className="w-full mt-4">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                        <button className="px-6 py-3 flex items-center justify-center rounded-xl bg-gradient-to-bl from-[#0000B9] to-[#000000] text-white shadow-[6px_6px_12px_#00005D,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#00005D,inset_-6px_-6px_12px_#0000FF] transition-all">
                            ➜ Contact Me
                        </button>
                        <button className="px-6 py-3 flex items-center justify-center rounded-xl bg-[#E0E5E] shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] transition-all">
                            ➜ See Projects
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
