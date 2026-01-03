import React from 'react';
import { socialLinks } from "../config/socialLinks";
import Education from './Education';
import { Box } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const skills = [
    'Product Design', 'UX Design', 'UI Design', 'Mobile Application Developer',
    'Interaction Design', 'Branding', 'React Native', 'UX Research', 'Figma',
];

const ProfileCard = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <div
            className="relative min-h-screen flex flex-col items-center overflow-hidden bg-[#F2F2F2] rounded-[50px] sm:rounded-[70px] lg:rounded-[100px]"
        >
            {/* 🎥 Background Video (optional) */}

            {/* 🧱 Main Content Wrapper */}
            <div className="relative z-10 w-full px-3 sm:px-6 py-8 sm:py-16 md:py-20">
                {/* Shared Width Container */}
                <div className="max-w-6xl mx-auto w-full">

                    {/* Section Header */}
                    <div className="text-center mb-6 sm:mb-8 md:mb-10">
                        <span className="inline-flex items-center gap-1 sm:gap-2 rounded-full bg-[#f2f2f2] px-3 py-1 sm:px-4 sm:py-1 shadow-[2px_2px_5px_#c3c6ca,-2px_-2px_5px_#ffffff] sm:shadow-[3px_3px_7px_#c3c6ca,-3px_-3px_7px_#ffffff] text-gray-700 text-xs sm:text-sm mb-2">
                            <Box className="w-3 h-3 sm:w-4 sm:h-4" />
                            About
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center mb-1">
                            Proven Impact & Results
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-700 text-center max-w-xs sm:max-w-xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2 sm:px-0">
                            Explore Projects that reflect our AI expertise & real world impact
                        </p>
                    </div>

                    {/* Profile + Bio Layout */}
                    <div className="flex flex-col lg:flex-row items-start justify-center px-0 lg:px-6 space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-0 lg:space-x-10">
                        {/* Left: Profile */}
                        <div className="bg-white shadow-md rounded-xl sm:rounded-2xl w-full max-w-xs mx-auto lg:mx-0 p-4 sm:p-6 text-center">
                            <img
                                src="../../assets/img/pic.png"
                                alt="Yashindi Bhagya"
                                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4"
                            />
                            <p className="text-green-500 text-xs sm:text-sm flex items-center justify-center gap-2 mb-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                                available for work
                            </p>
                            <h1 className="text-lg sm:text-xl font-semibold">Yashindi Bhagya</h1>
                            <p className="text-xs sm:text-sm text-gray-500 mt-1">UI/UX Interaction Designer and Mobile App Developer Based in Sri Lanka.</p>

                            {/* Social Links */}
                            <div className="flex gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 justify-center">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-[#E0E5E] shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] sm:shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bec3c9,inset_-4px_-4px_8px_#ffffff] sm:hover:shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] transition-all"
                                    >
                                        <span className="text-gray-600 text-sm sm:text-base">{social.icon}</span>
                                    </a>
                                ))}
                            </div>

                            {/* Contact Button */}
                            <button
                                onClick={() => {
                                    navigate('/contact');
                                    window.scrollTo(0, 0);
                                }}
                                className="w-full mt-4 sm:mt-6 py-2.5 sm:py-3.5 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-gradient-to-bl from-[#0000B9] to-[#000000] text-white text-xs sm:text-sm md:text-base shadow-[4px_4px_8px_#00005D,-4px_-4px_8px_#ffffff] sm:shadow-[6px_6px_12px_#00005D,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#00005D,inset_-4px_-4px_8px_#0000FF] sm:hover:shadow-[inset_6px_6px_12px_#00005D,inset_-6px_-6px_12px_#0000FF] transition-all"
                            >
                                ➜ Contact Me
                            </button>
                        </div>

                        {/* Right: Bio & Skills */}
                        <div className="flex-1 max-w-3xl space-y-4 sm:space-y-6 text-black px-2 sm:px-0">
                            {/* Intro */}
                            <div>
                                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                                    Hey, I’m Yashindi Bhagya.
                                    I recently graduated with a BSc (Hons) in Computer Science (Second Class Upper Division) from NSBM affiliated with University of Plymouth UK, and I bring over 1 year of hands-on experience in UI/UX design.
                                    <br /><br />
                                    My journey began with crafting intuitive interfaces and engaging user experiences using tools like Figma, Photoshop, and Canva. Over time, my passion for building beyond visuals led me into the world of mobile app development with React Native.
                                    <br /><br />
                                    Now, I’m focused on blending design thinking with technical development to create apps that feel seamless, purposeful, and enjoyable to use. I’m always excited to learn, collaborate, and bring ideas to life, whether it’s a mobile app, a user-centric platform, or something entirely new.
                                    <br /><br />
                                    I'm always eager to learn, collaborate, and take on challenges that push my creative and technical skills forward.
                                </p>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {skills.map(skill => (
                                    <span
                                        key={skill}
                                        className="bg-black bg-opacity-10 text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-black border-opacity-10"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 👇 Education Section Below the Profile */}
                    <div className="mt-8 sm:mt-12 md:mt-16">
                        <Education />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;