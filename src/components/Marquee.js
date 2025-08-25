import React from "react";
import { FaVideo } from "react-icons/fa";
import { MdOutlineSlideshow, MdOutlineSearch, MdOutlineWeb } from "react-icons/md";
import { TbArrowsShuffle } from "react-icons/tb";

const tags = [
    { icon: <FaVideo />, label: "Video & Motion Graphics" },
    { icon: <MdOutlineSlideshow />, label: "Slide Decks" },
    { icon: <MdOutlineSearch />, label: "SEO" },
    { icon: <MdOutlineWeb />, label: "Landing Pages" },
    { icon: <TbArrowsShuffle />, label: "Framer Migration" },
];

const MarqueeTags = () => {
    return (
        <div className="relative w-full overflow-hidden"
            style={{
                top: "-150px",
            }}>
            {/* Fade edges */}
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#fff] to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#fff] to-transparent pointer-events-none z-10" />

            {/* Marquee container */}
            <div className="animate-marquee whitespace-nowrap flex gap-6">
                {[...tags, ...tags].map((tag, index) => (
                    <div
                        key={index}
                        className="inline-flex items-center bg-white/50 text-gray-700 font-medium text-1xl px-6 py-3 rounded-full backdrop-blur-sm shadow-sm"
                        style={{
                            width: "max-content",
                            maxWidth: "max-content",
                            minWidth: "max-content",
                            borderWidth: "max-content",
                            columnWidth: "max-content",
                        }}
                    >
                        <span className="mr-2 text-gray-600 text-base">{tag.icon}</span>
                        <span>{tag.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarqueeTags;
