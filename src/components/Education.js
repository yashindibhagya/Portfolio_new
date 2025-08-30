import React, { useState } from "react";

const NeumorphicToggleSection = () => {
    const [activeTab, setActiveTab] = useState("education");

    // Education data
    const educationData = [
        {
            degree: "BSc (Hons) Computer Science",
            place:
                "National School of Business Management (Undergraduate), Affiliated with University of Plymouth",
            score: "Second Class Honours (Upper Division)",
            year: "2022 -2025",
        },
        {
            degree: "G.C.E. (Advanced) Level",
            place: "Sujatha Vidyalaya - Nugegoda",
            score: "Combined Mathematics Stream",
            year: "2021",
        },
    ];

    // Experience data
    const experienceData = [
        {
            role: "UI/UX Designer - Intern",
            place: "Amerck Inc",
            period: "2025 May - 2025 Aug",
            work: "Onsite"
        },
        {
            role: "UI/UX Designer - Freelancer",
            place: "NPS",
            period: "2023 Jan - 2023 Dec",
            work: "Remote",
        },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-40 px-3 sm:px-6">
            <div className="w-full max-w-6xl">

                {/* Toggle Buttons */}
                <div className="flex justify-center mb-6 sm:mb-8">
                    <div
                        className="flex bg-gray-100 p-1.5 sm:p-2 rounded-full"
                        style={{
                            boxShadow: "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff",
                            gap: window.innerWidth < 640 ? 10 : 20,
                        }}
                    >
                        {/* Education Button */}
                        <button
                            onClick={() => setActiveTab("education")}
                            className={`py-1.5 px-4 sm:py-2 sm:px-6 md:px-8 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium transition-all duration-200
                ${activeTab === "education"
                                    ? "bg-white text-black shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]"
                                    : "bg-[#f5f5f5] text-gray-600 shadow-[3px_3px_6px_#d1d9e6,-3px_-3px_6px_#ffffff] sm:shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff]"
                                }
                hover:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]`}
                        >
                            Education
                        </button>

                        {/* Experience Button */}
                        <button
                            onClick={() => setActiveTab("experience")}
                            className={`py-1.5 px-4 sm:py-2 sm:px-6 md:px-8 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium transition-all duration-200
                ${activeTab === "experience"
                                    ? "bg-white text-black shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]"
                                    : "bg-[#f5f5f5] text-gray-600 shadow-[3px_3px_6px_#d1d9e6,-3px_-3px_6px_#ffffff] sm:shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff]"
                                }
                hover:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]`}
                        >
                            Experience
                        </button>
                    </div>
                </div>

                {/* Top Summary */}
                <div className="text-center mb-6 sm:mb-8 md:mb-10 px-2 sm:px-0">
                    {activeTab === "education" ? (
                        <>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center mb-1">
                                My Education
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-700 text-center max-w-sm sm:max-w-xl mx-auto mb-6 sm:mb-8 md:mb-10">
                                I hold a Bachelor's in Computer Science and a Master's in UX Design, which have helped shape my design and technical thinking.
                            </p>
                        </>
                    ) : (
                        <>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center mb-1">My Experience</h2>
                            <p className="text-xs sm:text-sm text-gray-700 text-center max-w-sm sm:max-w-xl mx-auto mb-6 sm:mb-8 md:mb-10">
                                Over the years, I've worked as a UI/UX Designer at UrbanTech and a Graphic Designer at SummitWorks, gaining hands-on industry expertise.
                            </p>
                        </>
                    )}
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    {activeTab === "education"
                        ? educationData.map((edu, index) => (
                            <div
                                key={index}
                                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gray-100 transition-all duration-300 
                  shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] sm:shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff]
                  hover:shadow-[inset_4px_4px_8px_#c5c5c5,inset_-4px_-4px_8px_#ffffff] sm:hover:shadow-[inset_6px_6px_12px_#c5c5c5,inset_-6px_-6px_12px_#ffffff]
                  hover:scale-[0.98]"
                            >
                                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{edu.degree}</h3>
                                <h3 className="text-xs sm:text-sm font-bold mb-1 sm:mb-2">{edu.score}</h3>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{edu.place} • {edu.year}</p>
                            </div>
                        ))
                        : experienceData.map((exp, index) => (
                            <div
                                key={index}
                                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gray-100 transition-all duration-300 
                  shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] sm:shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff]
                  hover:shadow-[inset_4px_4px_8px_#c5c5c5,inset_-4px_-4px_8px_#ffffff] sm:hover:shadow-[inset_6px_6px_12px_#c5c5c5,inset_-6px_-6px_12px_#ffffff]
                  hover:scale-[0.98]"
                            >
                                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{exp.role}</h3>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{exp.place} • {exp.period}</p>
                                <p className="text-xs sm:text-sm text-gray-600">{exp.work}</p>
                            </div>
                        ))}
                </div>

            </div>
        </div>
    );
};

export default NeumorphicToggleSection;