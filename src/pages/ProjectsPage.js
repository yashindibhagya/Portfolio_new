import React, { useState } from "react";
import { Box } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projectsData } from "../data/projectsData";

const tabs = ["All", "UI/UX", "Mobile App", "Website"];

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((project) => {
        if (activeTab === "UI/UX") return project.type === "uiux";
        if (activeTab === "Mobile App") return project.type === "mobile";
        if (activeTab === "Website") return project.type === "website";
        return false;
      });

  const handleMouseMove = (e, index) => {
    // Only enable cursor tracking on desktop
    if (window.innerWidth >= 768) {
      const card = e.currentTarget.getBoundingClientRect();
      setCursorPos({
        x: e.clientX - card.left,
        y: e.clientY - card.top,
      });
      setHoveredCard(index);
    }
  };

  const handleMouseEnter = (index) => {
    // Simple hover for mobile
    if (window.innerWidth < 768) {
      setHoveredCard(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-4 sm:py-5 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-10 mt-20">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 sm:px-4 py-1 shadow-md text-gray-700 text-xs sm:text-sm mb-2">
                <Box className="w-3 h-3 sm:w-4 sm:h-4" />
                Projects
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold px-2">Proven Impact & Results</h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 px-2">
                Explore Projects that reflect our AI expertise & real world impact
              </p>
            </div>

            {/* Outer Neumorphic Container */}
            <div className="max-w-6xl mx-auto rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 -mt-10">
              {/* Tabs */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 px-3 sm:px-5 md:px-8 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap
                    ${activeTab === tab
                        ? "bg-white text-black shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]"
                        : "bg-[#f5f5f5] text-gray-600 shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff]"
                      } hover:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Projects Grid */}
              <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {filteredProjects.map((project, index) => (
                  <Link
                    to={`/project/${project.id}`}
                    key={project.id}
                    onClick={() => window.scrollTo(0, 0)}
                    className="block no-underline"
                  >
                    <div
                      className="relative group rounded-2xl sm:rounded-3xl overflow-hidden shadow-[6px_6px_16px_#d1d9e6,-6px_-6px_16px_#ffffff] bg-[#f5f5f5] cursor-pointer hover:shadow-[8px_8px_20px_#c9d1de,-8px_-8px_20px_#ffffff] transition-all duration-300"
                      onMouseMove={(e) => handleMouseMove(e, index)}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl sm:rounded-3xl group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="text-center py-3 sm:py-4 text-sm sm:text-base font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300 px-2">
                        {project.title}
                      </div>

                      <div className="flex flex-wrap justify-center gap-1 sm:gap-2 pb-3 sm:pb-4 px-2">
                        {project.tools?.slice(0, window.innerWidth < 640 ? 2 : 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 sm:px-3 py-1 text-xs rounded-full bg-[#f5f5f5] text-gray-700 shadow-[2px_2px_4px_#d1d9e6,-2px_-2px_4px_#ffffff]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tools && project.tools.length > (window.innerWidth < 640 ? 2 : 3) && (
                          <span className="px-2 sm:px-3 py-1 text-xs rounded-full bg-[#f5f5f5] text-gray-700 shadow-[2px_2px_4px_#d1d9e6,-2px_-2px_4px_#ffffff]">
                            +{project.tools.length - (window.innerWidth < 640 ? 2 : 3)}
                          </span>
                        )}
                      </div>

                      {/* Desktop cursor follower */}
                      {hoveredCard === index && window.innerWidth >= 768 && (
                        <div
                          className="absolute z-20 text-sm font-medium text-white px-4 py-2 
                        rounded-full pointer-events-none transition duration-100
                        bg-white/20 backdrop-blur-md border border-white/30 shadow-lg hidden md:block"
                          style={{
                            top: cursorPos.y,
                            left: cursorPos.x,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          View project
                        </div>
                      )}

                      {/* Mobile hover indicator */}
                      {hoveredCard === index && window.innerWidth < 768 && (
                        <div className="absolute inset-0 bg-black/10 rounded-2xl sm:rounded-3xl flex items-center justify-center md:hidden">
                          <div className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                            Tap to view
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;