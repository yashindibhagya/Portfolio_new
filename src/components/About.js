// ProfileCard.jsx
import React from 'react';

const experiences = [
    { title: 'Product Designer', company: 'Nexus Creative', year: '2023' },
    { title: 'Freelance', company: 'BrightLeaf Co', year: '2021' },
    { title: 'Graphic Designer', company: 'SummitWorks', year: '2024' },
    { title: 'UX/UI Designer', company: 'UrbanFlow Lab', year: '2022' },
];

const skills = [
    'Product Design', 'UX Design', 'UI Design', 'Framer',
    'Interaction Design', 'Branding', 'Webflow', 'UX Research', 'No-Code',
];

const ProfileCard = () => {
    return (

        <section className="py-16 px-6 md:px-8 text-gray-800">
            {/* Section Header */}
            <div className="text-center mb-10">
                <span className="uppercase tracking-widest text-xs bg-white py-1 px-3 rounded-full shadow-[inset_1px_1px_3px_#d1d9e6,inset_-1px_-1px_3px_#ffffff] inline-block mb-3">
                    Projects
                </span>
                <h2 className="text-4xl font-semibold">Proven Impact & Results</h2>
                <p className="text-sm text-gray-600 mt-2">
                    Explore Projects that reflect our AI expertise & real world impact
                </p>
            </div>
            <div className="min-h-screen flex items-start justify-center p-10 space-x-8">
                {/* Left: Profile */}

                <div className="bg-white shadow-md rounded-2xl w-80 p-6 text-center">
                    <img
                        src="/your-image.jpg" // Replace with your actual image path
                        alt="Sophie Carter"
                        className="w-full h-64 object-cover rounded-xl mb-4"
                    />
                    <p className="text-green-500 text-sm flex items-center justify-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                        available for work
                    </p>
                    <h1 className="text-xl font-semibold">Sophie Carter</h1>
                    <p className="text-sm text-gray-500 mt-1">UI/UX Interaction Designer Based in Berlin.</p>

                    {/* Social Icons */}
                    <div className="flex justify-center mt-4 space-x-4 text-gray-600">
                        <button className="hover:text-black"><i className="fab fa-x-twitter"></i></button>
                        <button className="hover:text-black"><i className="fab fa-instagram"></i></button>
                        <button className="hover:text-black"><i className="fab fa-facebook"></i></button>
                    </div>

                    {/* Contact Button */}
                    <button className="mt-6 w-full bg-indigo-900 text-white py-2 rounded-xl shadow-md hover:bg-indigo-800">
                        ✈️ Contact Me
                    </button>
                </div>

                {/* Right: Info */}
                <div className="flex-1 max-w-3xl space-y-6">
                    {/* Intro */}
                    <div>
                        <p className="text-gray-700 text-lg">
                            I'm Sophie Carter, a passionate Web Designer & Developer based in the dynamic city of Berlin, Germany.
                            I blend creative design with precise technical execution to deliver outstanding digital experiences.
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-3">
                        {skills.map(skill => (
                            <span key={skill} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Experience */}
                    <div className="divide-y divide-gray-300 border-t border-b border-gray-300">
                        {experiences.map(({ title, company, year }, idx) => (
                            <div key={idx} className="flex justify-between py-4 px-2">
                                <div className="font-medium">{title}</div>
                                <div className="text-gray-500">{company}</div>
                                <div className="text-gray-400">{year}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileCard;
