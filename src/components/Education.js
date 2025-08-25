import React, { useState } from "react";

const NeumorphicToggleSection = () => {
    const [activeTab, setActiveTab] = useState("education");

    // Education data
    const educationData = [
        { degree: "Bachelor’s in Design", place: "University of ABC", year: "2020" },
        { degree: "Master’s in UX", place: "XYZ Institute", year: "2023" },
    ];

    // Experience data
    const experienceData = [
        { role: "UI/UX Designer", place: "UrbanTech", period: "2022 - Present" },
        { role: "Graphic Designer", place: "SummitWorks", period: "2020 - 2022" },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center -mt-40">
            <div className="w-full max-w-6xl">

                {/* Toggle */}
                <div className="flex justify-center mb-8">
                    <div
                        className="flex bg-gray-100 p-2 rounded-full"
                        style={{
                            boxShadow: "8px 8px 16px #c5c5c5, -8px -8px 16px #ffffff",
                            gap: 20
                        }}
                    >
                        <button
                            onClick={() => setActiveTab("education")}
                            className={`py-2 px-8 rounded-2xl text-sm font-medium transition-all duration-200
                                ${activeTab === "education"
                                    ? "bg-white text-black shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]"
                                    : "bg-[#f5f5f5] text-gray-600 shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff]"
                                } hover:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]`}
                        >
                            Education
                        </button>
                        <button
                            onClick={() => setActiveTab("experience")}
                            className={`py-2 px-8 rounded-2xl text-sm font-medium transition-all duration-200
                                 ${activeTab === "experience"
                                    ? "bg-white text-black shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]"
                                    : "bg-[#f5f5f5] text-gray-600 shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff]"
                                } hover:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]`}
                        >
                            Experience
                        </button>
                    </div>
                </div>

                {/* Top Summary */}
                <div className="text-center mb-10">
                    {activeTab === "education" ? (
                        <>
                            <h2 className="text-2xl font-bold mb-2">My Education</h2>
                            <p className="text-gray-600 max-w-xl mx-auto">
                                I have pursued a strong academic background in design, starting with a Bachelor’s in Design and advancing to a Master’s in UX.
                            </p>
                        </>
                    ) : (
                        <>
                            <h2 className="text-2xl font-bold mb-2">My Experience</h2>
                            <p className="text-gray-600 max-w-xl mx-auto">
                                Over the years, I have worked as a UI/UX Designer at UrbanTech and as a Graphic Designer at SummitWorks, gaining hands-on industry expertise.
                            </p>
                        </>
                    )}
                </div>

                {/* 2 Column Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {activeTab === "education"
                        ? educationData.map((edu, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-gray-100 transition-all duration-300 
                     shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] 
                     hover:shadow-[inset_6px_6px_12px_#c5c5c5,inset_-6px_-6px_12px_#ffffff]
                     hover:scale-[0.98]"
                            >
                                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                                <p className="text-gray-600">{edu.place} • {edu.year}</p>
                            </div>
                        ))
                        : experienceData.map((exp, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-gray-100 transition-all duration-300 
                     shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] 
                     hover:shadow-[inset_6px_6px_12px_#c5c5c5,inset_-6px_-6px_12px_#ffffff]
                     hover:scale-[0.98]"
                            >
                                <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                                <p className="text-gray-600">{exp.place} • {exp.period}</p>
                            </div>
                        ))}
                </div>

            </div>
        </div>
    );
};

export default NeumorphicToggleSection;
