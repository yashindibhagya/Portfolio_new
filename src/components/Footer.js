import React from 'react';
import { socialLinks, contactInfo } from "../config/socialLinks";

const CreativeProject = () => {

    const availabilityStyle = {
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        fontWeight: '500',
        color: '#111827',
    };

    const greenDotStyle = {
        height: '10px',
        width: '10px',
        backgroundColor: '#22c55e',
        borderRadius: '50%',
        display: 'inline-block',
        marginRight: '8px',
        boxShadow: '0 0 6px #22c55e',
    };

    return (
        <footer className=" py-16 px-8 md:px-16 mt-20 mb-18">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-8">
                    <img
                        src="/path/to/your/icon.png" // Add your icon image path here
                        alt="Handshake Icon"
                        className="w-16 h-16 text-indigo-600"
                    />
                </div>
                <h2 className="text-4xl font-semibold text-gray-800 mb-4">
                    Tell Me About Your Next Creative Project
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Let’s create captivating digital experiences that engage audiences and drive meaningful brand interactions across diverse platforms.
                </p>
                <div className="w-full mt-2">
                    <div className="flex flex-row flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-6 mb-6">
                        <button className="px-5 py-2 sm:px-6 sm:py-3 flex items-center justify-center rounded-xl bg-gradient-to-bl from-[#0000B9] to-[#000000] text-white text-sm sm:text-base shadow-[6px_6px_12px_#00005D,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#00005D,inset_-6px_-6px_12px_#0000FF] transition-all">
                            ➜ Contact Me
                        </button>
                        <button className="px-5 py-2 sm:px-6 sm:py-3 flex items-center justify-center rounded-xl bg-[#E0E5E] text-sm sm:text-base shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] transition-all">
                            ➜ See Projects
                        </button>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4"
                    style={{
                        justifyContent: "center",
                        //marginTop: -40,
                    }}>
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

            </div>

            {/* Footer Sides with Copyright and Framer Text */}
            <div className="flex justify-between items-center mt-20 px-8">
                <p className="text-sm text-gray-600">© 2025 Yashindi. All rights reserved.</p>
                <div className="flex gap-4 text-sm text-gray-600"
                    style={{ borderRadius: 100, borderWidth: 1, borderColor: '#E0E5E', borderStyle: 'solid', width: 180, height: 40, boxShadow: '6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={availabilityStyle}>
                        <span style={greenDotStyle}></span>
                        available for work
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default CreativeProject;
