import React, { useState } from "react";

const NeumorphicToggleSection = () => {
    const [activeTab, setActiveTab] = useState("education");

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-6xl p-10">
                {/* Toggle */}
                <div className="flex justify-center mb-8">
                    <div className="flex bg-gray-100 p-2 rounded-full">
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

                {/* 2 Column Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {activeTab === "education" ? (
                        <>
                            <div className="p-6 rounded-2xl bg-gray-100 shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff]">
                                <h3 className="text-xl font-bold mb-2">Bachelor’s in Design</h3>
                                <p className="text-gray-600">University of ABC - 2020</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-gray-100 shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff]">
                                <h3 className="text-xl font-bold mb-2">Master’s in UX</h3>
                                <p className="text-gray-600">XYZ Institute - 2023</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="p-6 rounded-2xl bg-gray-100 shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff]">
                                <h3 className="text-xl font-bold mb-2">UI/UX Designer</h3>
                                <p className="text-gray-600">UrbanTech • 2022 - Present</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-gray-100 shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff]">
                                <h3 className="text-xl font-bold mb-2">Graphic Designer</h3>
                                <p className="text-gray-600">SummitWorks • 2020 - 2022</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NeumorphicToggleSection;
