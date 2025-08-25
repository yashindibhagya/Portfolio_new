import React from "react";
import { Box, Feather, Monitor, Brush } from "lucide-react"; // Changed PaintBrush to Brush


const services = [
    {
        id: 1,
        icon: <Feather className="w-6 h-6 text-gray-700" />,
        title: "UX & UI",
        description:
            "Crafting seamless, user-friendly interfaces that enhance engagement and usability.",
        imageUrl:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60",
    },
    {
        id: 2,
        icon: <Box className="w-6 h-6 text-white" />,
        title: "Framer Development",
        description:
            "Building high-performance, interactive websites using Framer’s powerful design and development tools for seamless user experiences.",
    },
    {
        id: 3,
        icon: <Monitor className="w-6 h-6 text-white" />,
        title: "Interactive Web Experiences",
        description:
            "Interactive websites with Framer’s advanced design and development tools to deliver smooth and engaging user experiences.",
    },
    {
        id: 4,
        icon: <Brush className="w-6 h-6 text-gray-700" />,  // Changed here too
        title: "Design & Creativity",
        description:
            "Creating visually compelling designs that truly resonate with your target audience and brand.",
        imageUrl:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=60",
    },
];

const ServiceCard = ({
    icon,
    title,
    description,
    imageUrl,
    iconDark = false,
}) => (
    <div className="bg-[#f5f5f5] rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6 md:gap-10
    shadow-[6px_6px_16px_#d1d9e6,-6px_-6px_16px_#ffffff]
    transition-all duration-300
    hover:shadow-[inset_6px_6px_16px_#d1d9e6,inset_-6px_-6px_16px_#ffffff]">
        {imageUrl && (
            <img
                src={imageUrl}
                alt={title}
                className="rounded-lg w-full md:w-48 object-cover"
            />
        )}
        <div className="flex-1">
            <div
                className={`inline-flex items-center justify-center w-10 h-10 rounded-full shadow-md mb-4 ${iconDark ? "bg-gray-900" : "bg-white"
                    }`}
            >
                {icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-700">{description}</p>
        </div>
    </div>
);

export default function ServicesSection() {
    return (
        <section className="min-h-screen flex flex-col items-center px-6 py-16 ">
            <div className="mb-6 text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 shadow-md text-gray-700 text-sm mb-2">
                    <Box className="w-4 h-4" />
                    Services
                </span>
                <h2 className="text-4xl font-light text-center mb-1">
                    Crafting Digital Excellence
                </h2>
                <p className="text-sm text-gray-700 text-center max-w-xl mb-10">
                    Building smooth and engaging digital interactions that elevate user
                    satisfaction
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full justify-items-center">
                <ServiceCard
                    icon={<Feather className="w-6 h-6 text-gray-700" />}
                    title="UX & UI"
                    description="Crafting seamless, user-friendly interfaces that enhance engagement and usability."
                    imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60"
                />
                <ServiceCard
                    icon={<Box className="w-6 h-6 text-white" />}
                    title="Framer Development"
                    description="Building high-performance, interactive websites using Framer’s powerful design and development tools for seamless user experiences."
                    iconDark
                />
                <ServiceCard
                    icon={<Monitor className="w-6 h-6 text-white" />}
                    title="Interactive Web Experiences"
                    description="Interactive websites with Framer’s advanced design and development tools to deliver smooth and engaging user experiences."
                    iconDark
                />
                <ServiceCard
                    icon={<Brush className="w-6 h-6 text-gray-700" />}
                    title="Design & Creativity"
                    description="Creating visually compelling designs that truly resonate with your target audience and brand."
                    imageUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=60"
                />
            </div>
        </section>
    );
}
