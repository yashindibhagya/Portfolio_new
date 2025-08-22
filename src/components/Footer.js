import React from 'react';

const CreativeProject = () => {
    return (
        <footer className="bg-gray-100 py-16 px-8 md:px-16 mt-20 mb-18">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-8">
                    <img
                        src="/path/to/your/icon.png" // Add your icon image path here
                        alt="Handshake Icon"
                        className="w-16 h-16 text-indigo-600"
                    />
                </div>
                <h2 className="text-4xl font-semibold text-gray-800 mb-4">
                    Tell Me About Your Next Creative Project
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Let’s create captivating digital experiences that engage audiences and drive meaningful brand interactions across diverse platforms.
                </p>
                <div className="flex justify-center gap-6 mt-4 mb-20">
                    <a
                        href="mailto:your-email@example.com" // Replace with your contact link
                        className="inline-block bg-gray-200 text-gray-800 py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
                    >
                        Contact Me
                    </a>
                    <a
                        href="#projects" // Add the section or link to your projects
                        className="inline-block bg-gray-200 text-gray-800 py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
                    >
                        See Projects
                    </a>
                </div>
            </div>

            {/* Footer Sides with Copyright and Framer Text */}
            <div className="flex justify-between items-center mt-10 px-8">
                <p className="text-sm text-gray-600">© 2024 Portfoy Template</p>
                <div className="flex gap-4 text-sm text-gray-600">
                    <span>Made by <a href="https://www.framebase.com" className="text-gray-800 hover:underline">Framebase</a></span>
                    <span>Built in <a href="https://www.framer.com" className="text-gray-800 hover:underline">Framer</a></span>
                </div>
            </div>
        </footer>
    );
};

export default CreativeProject;
