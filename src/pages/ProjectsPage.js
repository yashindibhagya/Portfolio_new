import React, { useState } from "react";
import { Box } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projectsData } from "../data/projectsData";

const tabs = ["All", "UI/UX", "Mobile App"];

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((project) =>
        activeTab === "UI/UX" ? project.type === "uiux" : project.type === "mobile"
      );

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - card.left,
      y: e.clientY - card.top,
    });
    setHoveredCard(index);
  };

  return (
    <div className="min-h-screen flex flex-col py-20 sm:py-24">
      <Header />
      <main className="flex-grow">
        <section className="py-5 px-6 md:px-8 text-gray-800 mb-20">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 shadow-md text-gray-700 text-sm mb-2">
              <Box className="w-4 h-4" />
              Projects
            </span>
            <h2 className="text-4xl font-semibold">Proven Impact & Results</h2>
            <p className="text-sm text-gray-600 mt-2">
              Explore Projects that reflect our AI expertise & real world impact
            </p>
          </div>

          {/* Outer Neumorphic Container */}
          <div className="max-w-6xl mx-auto rounded-3xl p-6 md:p-10">
            {/* Tabs */}
            <div className="flex justify-center space-x-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-8 rounded-2xl text-sm font-medium transition-all duration-200
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
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <Link
                  to={`/project/${project.id}`}
                  key={project.id}
                  className="block no-underline"
                >
                  <div
                    className="relative group rounded-3xl overflow-hidden shadow-[6px_6px_16px_#d1d9e6,-6px_-6px_16px_#ffffff] bg-[#f5f5f5] cursor-pointer hover:shadow-[8px_8px_20px_#c9d1de,-8px_-8px_20px_#ffffff] transition-all duration-300"
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="text-center py-4 text-base font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      {project.title}
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 pb-4">
                      {project.tools?.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full bg-[#f5f5f5] text-gray-700 shadow-[2px_2px_4px_#d1d9e6,-2px_-2px_4px_#ffffff]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {hoveredCard === index && (
                      <div
                        className="absolute z-20 text-sm font-medium text-white px-4 py-2 
                        rounded-full pointer-events-none transition duration-100
                        bg-white/20 backdrop-blur-md border border-white/30 shadow-lg"
                        style={{
                          top: cursorPos.y,
                          left: cursorPos.x,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        View project
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
