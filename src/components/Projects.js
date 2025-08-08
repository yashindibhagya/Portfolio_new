import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [visibleCount, setVisibleCount] = useState(6); // Show 6 initially
    const navigate = useNavigate();

    // Project data with unique IDs and updated for portfolio style
    const projects = [
        {
            id: 1,
            title: "NIKE",
            subtitle: "Future-Forward Software Beyond Limits",
            category: "UI/UX Design",
            type: "uiux",
            image: "/assets/img/nike.png",
            description: "A software company website with modern design and interactive elements.",
            technologies: ["Figma", "Adobe Photoshop"],
            liveLink: "#",
            githubLink: "#"

        },
        {
            id: 2,
            title: "BURGER HOUSE",
            subtitle: "Traditional Dhotis",
            category: "E-Commerce",
            type: "uiux",
            image: "/assets/img/burger.png",
            description: "E-commerce platform for traditional clothing with a contemporary interface.",
            technologies: ["Figma", "Adobe Photoshop"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 3,
            title: "DOCNET",
            subtitle: "Curate Your Fashion Styles",
            category: "Mobile App",
            type: "uiux",
            image: "/assets/img/doctor.png",
            description: "Fashion curation mobile application with personalized recommendations.",
            technologies: ["Figma", "Adobe Photoshop"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 4,
            title: "THE BAKERY SHOP",
            subtitle: "Online Shopping Platform",
            category: "E-Commerce",
            type: "uiux",
            image: "/assets/img/bakery.png",
            description: "Full-featured e-commerce platform with advanced filtering and search.",
            technologies: ["Figma", "Adobe Photoshop"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 5,
            title: "FLORONA",
            subtitle: "Designs by Edwinn",
            category: "Portfolio",
            type: "uiux",
            image: "/assets/img/plant.png",
            description: "Designer portfolio website showcasing creative work and services.",
            technologies: ["Figma", "Adobe Photoshop"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 6,
            title: "BEANLINE",
            subtitle: "Designs by Edwinn",
            category: "E-Commerce",
            type: "mobile",
            image: "/assets/img/coffee_shop.png",
            description: "A modern mobile experience for coffee lovers.",
            technologies: ["Figma", "Adobe Photoshop", "React Native"],
            liveLink: "#",
            githubLink: "https://github.com/yashindibhagya/BeanLine-CoffeeShop"
        },
        {
            id: 7,
            title: "E-LEARNING",
            subtitle: "Home Enterprises",
            category: "E-Commerce",
            type: "mobile",
            image: "/assets/img/e-learning.png",
            description: "Home appliances e-commerce store with modern user interface.",
            technologies: ["React Native", "Firebase"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 8,
            title: "INSURANCE",
            subtitle: "Home Enterprises",
            category: "E-Commerce",
            type: "mobile",
            image: "/assets/img/task.png",
            description: "Home appliances e-commerce store with modern user interface.",
            technologies: ["React Native"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 9,
            title: "GESTURECONNECT",
            subtitle: "Home Enterprises",
            category: "E-Commerce",
            type: "mobile",
            image: "/assets/img/gesture.png",
            description: "Home appliances e-commerce store with modern user interface.",
            technologies: ["React Native", "Firebase", "Cloudinary"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 10,
            title: "NATURE WONDERS",
            subtitle: "Home Enterprises",
            category: "E-Commerce",
            type: "uiux",
            image: "/assets/img/nature.png",
            description: "Home appliances e-commerce store with modern user interface.",
            technologies: ["Figma", "Adobe Photoshop"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 11,
            title: "EVENT EDGE",
            subtitle: "Home Enterprises",
            category: "E-Commerce",
            type: "uiux",
            image: "/assets/img/dashboard.png",
            description: "Home appliances e-commerce store with modern user interface.",
            technologies: ["Figma", "Adobe Photoshop"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 12,
            title: "EPICUREAN DELIGHT",
            subtitle: "Home Enterprises",
            category: "E-Commerce",
            type: "uiux",
            image: "/assets/img/hotel.png",
            description: "Home appliances e-commerce store with modern user interface.",
            technologies: ["Figma", "Adobe Photoshop"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 13,
            title: "TROPICAL WATER",
            subtitle: "Home Enterprises",
            category: "E-Commerce",
            type: "uiux",
            image: "/assets/img/water.png",
            description: "Home appliances e-commerce store with modern user interface.",
            technologies: ["Figma", "Adobe Photoshop"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 14,
            title: "FOREST HAVEN",
            subtitle: "Home Enterprises",
            category: "E-Commerce",
            type: "uiux",
            image: "/assets/img/forest.png",
            description: "Home appliances e-commerce store with modern user interface.",
            technologies: ["Figma", "Adobe Photoshop"],
            liveLink: "#",
            githubLink: "#"
        },

    ];

    const filteredProjects = activeTab === 'all'
        ? projects
        : projects.filter(project => project.type === activeTab);

    const visibleProjects = filteredProjects.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 6); // Load 6 more
    };

    const handleProjectClick = (projectId) => {
        sessionStorage.setItem('scrollPosition', window.pageYOffset.toString());
        sessionStorage.setItem('activeTab', activeTab);
        navigate(`/project/${projectId}`);
    };

    const handleImageError = (e) => {
        console.log("Image failed to load");
        e.target.src = "/assets/img/placeholder.png";
    };

    return (
        <section id="work" className="py-12 sm:py-16 md:py-20 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-l from-[#ff58d8] via-[#bc50ff] to-[#4f4cfa] bg-clip-text text-transparent">
                        Projects
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-white opacity-80">
                        A selection of my recent works across UI/UX and mobile platforms.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-10">
                    <div className="flex flex-wrap justify-center gap-2">
                        {["all", "uiux", "mobile"].map((type) => (
                            <button
                                key={type}
                                onClick={() => {
                                    setActiveTab(type);
                                    setVisibleCount(6); // Reset visible count on tab switch
                                }}
                                className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeTab === type
                                        ? 'text-white bg-gradient-to-r from-[#ff58d8] via-[#bc50ff] to-[#4f4cfa]'
                                        : 'text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500'
                                    }`}
                            >
                                {type === "all" ? "All" : type === "uiux" ? "UI/UX Designs" : "Mobile Apps"}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Grid */}
                {visibleProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {visibleProjects.map(project => (
                            <div
                                key={project.id}
                                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer"
                                onClick={() => handleProjectClick(project.id)}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                        onError={handleImageError}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h3 className="text-2xl font-bold text-white mb-2">No Projects Yet</h3>
                        <p className="text-gray-400">Please check back later. Projects are coming soon!</p>
                    </div>
                )}

                {/* Load More Button */}
                {visibleCount < filteredProjects.length && (
                    <div className="text-center">
                        <button
                            onClick={handleLoadMore}
                            className="px-8 py-3 rounded-full text-white text-sm font-medium bg-gradient-to-r from-[#ff58d8] via-[#bc50ff] to-[#4f4cfa] hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1 transition-all duration-300"
                        >
                            Load More Projects
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;