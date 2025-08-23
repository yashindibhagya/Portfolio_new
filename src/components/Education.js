import React, { useState } from 'react';

// Sample data
const experienceData = [
    { title: 'Product Designer', company: 'Nexus Creative', year: '2023' },
    { title: 'Freelance', company: 'BrightLeaf Co', year: '2021' },
    { title: 'Graphic Designer', company: 'SummitWorks', year: '2024' },
    { title: 'UX/UI Designer', company: 'UrbanFlow Lab', year: '2022' },
];

const educationData = [
    { degree: 'BSc (Hons) in Computer Science', institution: 'NSBM Green University', year: '2021 - 2025' },
    { degree: 'GCE A/L - Physical Science Stream', institution: 'St. Joseph’s College', year: '2018 - 2020' },
    { degree: 'GCE O/L - Full Distinction', institution: 'St. Joseph’s College', year: '2017' },
];


// Neumorphic Section Component
const NeumorphicToggleSection = ({ title, icon, data, expanded, onToggle }) => {
    const visibleItems = expanded ? data : data.slice(0, 1);

    return (
        <div
            className={`bg-[#fff] rounded-2xl p-6 shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] transition-all duration-300 flex flex-col ${expanded ? 'max-h-[1000px]' : 'max-h-[350px]'
                } overflow-hidden`}
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <span className="text-xl">{icon}</span> {title}
                </h3>
                <button
                    onClick={onToggle}
                    className="text-sm text-blue-600 font-medium bg-white px-3 py-1.5 rounded-full shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] hover:bg-gray-100 transition-all"
                >
                    {expanded ? 'Show Less' : 'Show All'}
                </button>
            </div>
            <div className="space-y-4 overflow-y-auto pr-1">
                {visibleItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-[#f0f0f3] p-4 rounded-xl shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]"
                    >
                        <div className="text-gray-800 font-semibold">
                            {item.title || item.degree}
                        </div>
                        <div className="text-gray-500 text-sm">
                            {item.company || item.institution}
                        </div>
                        <div className="text-gray-400 text-xs">
                            {item.year}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Main Component
const Education = () => {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection((prev) => (prev === section ? null : section));
    };

    return (
        <section className="py-16 px-6 md:px-8 text-gray-800 max-w-6xl mx-auto" style={{ marginTop: -180 }}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <NeumorphicToggleSection
                    title="Experience"
                    icon="💼"
                    data={experienceData}
                    expanded={expandedSection === 'experience'}
                    onToggle={() => toggleSection('experience')}
                />
                <NeumorphicToggleSection
                    title="Education"
                    icon="🎓"
                    data={educationData}
                    expanded={expandedSection === 'education'}
                    onToggle={() => toggleSection('education')}
                />
            </div>
        </section>
    );
};

export default Education;
