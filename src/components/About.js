import React from 'react';
import { socialLinks } from "../config/socialLinks";
import Education from './Education';
import { Box } from 'lucide-react';

const skills = [
    'Product Design', 'UX Design', 'UI Design', 'Framer',
    'Interaction Design', 'Branding', 'Webflow', 'UX Research', 'No-Code',
];

const ProfileCard = () => {
    return (
        <div
            className="relative min-h-screen flex flex-col items-center overflow-hidden bg-[#F2F2F2]"
            style={{ borderRadius: 100 }}
        >
            {/* 🎥 Background Video (optional) */}

            {/* 🧱 Main Content Wrapper */}
            <div className="relative z-10 w-full px-6 py-20">
                {/* Shared Width Container */}
                <div className="max-w-6xl mx-auto w-full">

                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#f2f2f2] px-4 py-1 shadow-[3px_3px_7px_#c3c6ca,-3px_-3px_7px_#ffffff] text-gray-700 text-sm mb-2">
                            <Box className="w-4 h-4" />
                            About
                        </span>
                        <h2 className="text-4xl font-semibold text-black">Proven Impact & Results</h2>
                        <p className="text-sm text-gray-800 mt-2">
                            Explore Projects that reflect our AI expertise & real world impact
                        </p>
                    </div>

                    {/* Profile + Bio Layout */}
                    <div className="flex flex-col lg:flex-row items-start justify-center px-0 lg:px-6 space-y-10 lg:space-y-0 lg:space-x-10">
                        {/* Left: Profile */}
                        <div className="bg-white shadow-md rounded-2xl w-full max-w-xs p-6 text-center">
                            <img
                                src="../../assets/img/pic.png"
                                alt="Yashindi Bhagya"
                                className="w-full h-64 object-cover rounded-xl mb-4"
                            />
                            <p className="text-green-500 text-sm flex items-center justify-center gap-2 mb-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                                available for work
                            </p>
                            <h1 className="text-xl font-semibold">Yashindi Bhagya</h1>
                            <p className="text-sm text-gray-500 mt-1">UI/UX Interaction Designer Based in Berlin.</p>

                            {/* Social Links */}
                            <div className="flex gap-4 mt-6 justify-center">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#E0E5EC] shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] transition-all"
                                    >
                                        <span className="text-gray-600">{social.icon}</span>
                                    </a>
                                ))}
                            </div>

                            {/* Contact Button */}
                            <button className="w-full mt-6 py-3.5 px-4 rounded-xl bg-gradient-to-bl from-[#0000B9] to-[#000000] text-white text-sm sm:text-base shadow-[6px_6px_12px_#00005D,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#00005D,inset_-6px_-6px_12px_#0000FF] transition-all">
                                ➜ Contact Me
                            </button>
                        </div>

                        {/* Right: Bio & Skills */}
                        <div className="flex-1 max-w-3xl space-y-6 text-black">
                            {/* Intro */}
                            <div>
                                <p className="text-lg">
                                    Hey, I'm Yashindi Bhagya, a final-year BSc (Hons) Computer Science student at NSBM, passionate about building intuitive digital experiences that blend design and functionality.
                                    <br /><br />
                                    With over a year of hands-on experience in UI/UX design, I specialize in user research, wireframing, and prototyping using tools like Figma, Adobe Photoshop, and Canva.
                                    <br /><br />
                                    Beyond design, I develop mobile applications using React Native and create interactive games with Unity and C#. I enjoy turning ideas into real-world solutions whether it's a learning app, a game, or a user-centric platform.
                                    <br /><br />
                                    I'm always eager to learn, collaborate, and take on challenges that push my creative and technical skills forward.
                                </p>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-3">
                                {skills.map(skill => (
                                    <span
                                        key={skill}
                                        className="bg-black bg-opacity-10 text-black px-4 py-2 rounded-full text-sm font-medium border border-black border-opacity-10"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 👇 Education Section Below the Profile */}
                    <div className="mt-16">
                        <Education />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
