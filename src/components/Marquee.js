import React from "react";
import { FaMobileAlt, FaPencilRuler, FaLaptopCode } from "react-icons/fa";
import { MdOutlineBrandingWatermark, MdOutlineWeb } from "react-icons/md";
import { BiGitCompare } from "react-icons/bi";

const tags = [
    { icon: <FaPencilRuler />, label: "UI/UX Design" },           // design-focused icon
    { icon: <FaMobileAlt />, label: "Mobile App Development" },  // mobile icon
    { icon: <MdOutlineBrandingWatermark />, label: "Branding" }, // branding icon
    { icon: <FaLaptopCode />, label: "Web Design" },             // web development icon
    { icon: <BiGitCompare />, label: "Prototyping" },            // prototype/iteration icon
];

const MarqueeTags = () => {
    return (
        <div className="relative w-full overflow-hidden"
            style={{
                top: window.innerWidth < 768 ? "-180px" : window.innerWidth < 1024 ? "-120px" : "-150px",
            }}>
            {/* Fade edges */}
            <div className="absolute left-0 top-0 h-full w-8 sm:w-12 lg:w-16 bg-gradient-to-r from-[#fff] to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 h-full w-8 sm:w-12 lg:w-16 bg-gradient-to-l from-[#fff] to-transparent pointer-events-none z-10" />

            {/* Marquee container */}
            <div className="animate-marquee whitespace-nowrap flex gap-3 sm:gap-4 lg:gap-6">
                {[...tags, ...tags].map((tag, index) => (
                    <div
                        key={index}
                        className="inline-flex items-center bg-white/50 text-gray-700 font-medium text-sm sm:text-base lg:text-sm px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3 rounded-full backdrop-blur-sm shadow-sm"
                        style={{
                            width: "max-content",
                            maxWidth: "max-content",
                            minWidth: "max-content",
                            borderWidth: "max-content",
                            columnWidth: "max-content",
                        }}
                    >
                        <span className="mr-1.5 sm:mr-2 text-gray-600 text-xs sm:text-sm lg:text-base flex-shrink-0">{tag.icon}</span>
                        <span className="whitespace-nowrap">{tag.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarqueeTags;