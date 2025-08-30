import React from 'react';
import { socialLinks, contactInfo } from "../config/socialLinks";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();
    return (
        <footer className="py-8 sm:py-16 px-4 sm:px-8 md:px-16 mt-12 sm:mt-20 bg-[#F2F2F2] align-center"
            style={{
                borderTopLeftRadius: window.innerWidth < 640 ? 40 : 100,
                borderTopRightRadius: window.innerWidth < 640 ? 40 : 100,
            }}>
            <div className="max-w-4xl mx-auto text-center justify-center items-center">
                <motion.img
                    src="../../assets/img/handshake.png"
                    alt="Handshake Icon"
                    className="w-12 h-12 sm:w-16 sm:h-16 animate-float mx-auto mb-3 sm:mb-4"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800 mb-3 sm:mb-4 px-2">
                    Tell Me About Your Next Creative Project
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-2">
                    Let's create captivating digital experiences that engage audiences and drive meaningful brand interactions across diverse platforms.
                </p>
                <div className="w-full mt-2">
                    <div className="flex flex-row flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-6 mb-6">
                        <button
                            onClick={() => navigate('/contact')}
                            className="px-5 py-2 sm:px-6 sm:py-3 flex items-center justify-center rounded-xl bg-gradient-to-bl from-[#0000B9] to-[#000000] text-white text-sm sm:text-base shadow-[6px_6px_12px_#00005D,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#00005D,inset_-6px_-6px_12px_#0000FF] transition-all"
                        >
                            ➜ Contact Me
                        </button>
                        <button
                            onClick={() => navigate('/projects')}
                            className="px-5 py-2 sm:px-6 sm:py-3 flex items-center justify-center rounded-xl bg-[#E0E5E] text-sm sm:text-base shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] transition-all"
                        >
                            ➜ See Projects
                        </button>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 sm:gap-4"
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
                            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[#E0E5E] shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] transition-all"
                        >
                            <span className="text-gray-600 text-sm sm:text-base">{social.icon}</span>
                        </a>
                    ))}
                </div>

            </div>

            {/* Footer Sides with Copyright and Framer Text */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-12 sm:mt-20 px-4 sm:px-8 gap-4 sm:gap-0">
                <p className="text-xs sm:text-sm text-gray-600 order-2 sm:order-1">© 2025 Yashindi. All rights reserved.</p>
                <div className="flex gap-4 text-xs sm:text-sm text-gray-600 order-1 sm:order-2"
                    style={{
                        borderRadius: 100,
                        borderWidth: 1,
                        borderColor: '#E0E5E',
                        borderStyle: 'solid',
                        width: window.innerWidth < 640 ? 160 : 180,
                        height: window.innerWidth < 640 ? 35 : 40,
                        boxShadow: '6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <div style={{ ...availabilityStyle, fontSize: window.innerWidth < 640 ? '12px' : '14px' }}>
                        <span style={greenDotStyle}></span>
                        available for work
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default CreativeProject;