import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#f5f5f5] 
        shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] 
        hover:shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff] 
        transition-all duration-300"
            aria-label="Scroll to top"
        >
            <ChevronUp className="w-5 h-5 text-gray-700" />
        </button>
    );
};

export default ScrollToTopButton;
