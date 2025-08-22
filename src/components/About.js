
import React from 'react';
import { socialLinks, contactInfo } from "../config/socialLinks";

const experiences = [
    { title: 'Product Designer', company: 'Nexus Creative', year: '2023' },
    { title: 'Freelance', company: 'BrightLeaf Co', year: '2021' },
    { title: 'Graphic Designer', company: 'SummitWorks', year: '2024' },
    { title: 'UX/UI Designer', company: 'UrbanFlow Lab', year: '2022' },
];

const skills = [
    'Product Design', 'UX Design', 'UI Design', 'Framer',
    'Interaction Design', 'Branding', 'Webflow', 'UX Research', 'No-Code',
];

const ProfileCard = () => {
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
            <div className="min-h-screen flex items-start justify-center p-10 space-x-8">
                {/* Left: Profile */}

                <div className="bg-white shadow-md rounded-2xl w-80 p-6 text-center">
                    <img
                        src="../../assets/img/pic.png" // Replace with your actual image path
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
                    <div className="flex gap-4 mt-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#E0E5E] shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] transition-all"
                            >
                                <span className="text-gray-600">{social.icon}</span>
                            </a>
                        ))}
                    </div>

                    {/* Contact Button 
                    <button className="mt-6 w-full bg-indigo-900 text-white py-2 rounded-xl shadow-md hover:bg-indigo-800"> */}
                    <button className="w-full mt-6 py-3.5 px-4 rounded-xl bg-[#3F35B9] text-white font-medium shadow-[6px_6px_12px_#090074,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#090074,inset_-6px_-6px_12px_#0B0091] transition-all disabled:opacity-70">
                        ✈️ Contact Me
                    </button>
                </div>

                {/* Right: Info */}
                <div className="flex-1 max-w-3xl space-y-6">
                    {/* Intro */}
                    <div>
                        <p className="text-gray-700 text-lg">
                            Hey, I'm Yashindi Bhagya,a final-year BSc (Hons) Computer Science student at NSBM, passionate about building intuitive digital experiences that blend design and functionality.
                            <br />
                            <br />
                            With over a year of hands-on experience in UI/UX design, I specialize in user research, wireframing, and prototyping using tools like Figma, Adobe Photoshop, and Canva.
                            <br />
                            <br />
                            Beyond design, I develop mobile applications using React Native and create interactive games with Unity and C#. I enjoy turning ideas into real-world solutions whether it's a learning app, a game, or a user-centric platform.
                            <br />
                            <br />
                            I'm always eager to learn, collaborate, and take on challenges that push my creative and technical skills forward.
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-3">
                        {skills.map(skill => (
                            <span key={skill} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Experience */}
                    <div className="divide-y divide-gray-300 border-t border-b border-gray-300">
                        {experiences.map(({ title, company, year }, idx) => (
                            <div key={idx} className="flex justify-between py-4 px-2">
                                <div className="font-medium">{title}</div>
                                <div className="text-gray-500">{company}</div>
                                <div className="text-gray-400">{year}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ProfileCard;
