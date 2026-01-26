import React, { useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { motion } from 'framer-motion';
import {
    SiFigma, SiAdobephotoshop, SiReact, SiFirebase,
    SiCloudinary, SiTailwindcss, SiNodedotjs, SiCanva,
    SiVercel, SiGithub, SiBehance, SiBootstrap,
    SiJavascript, SiHtml5, SiCss3, SiPython, SiOpencv, SiTensorflow, SiLinkedin
} from 'react-icons/si';
import ImageViewer from './ImageViewer';


const ProjectDetails = () => {
    const { id } = useParams();
    // const navigate = useNavigate();
    const project = projectsData.find(p => p.id === parseInt(id));

    // State for image viewer
    const [viewerState, setViewerState] = useState({
        isOpen: false,
        currentIndex: 0
    });

    // Get all project images for the viewer
    const allImages = [project.image, ...(project.additionalImages || [])].filter(Boolean);

    // Open image viewer
    const openImageViewer = useCallback((index = 0) => {
        setViewerState({
            isOpen: true,
            currentIndex: index
        });
    }, []);

    // Close image viewer
    const closeImageViewer = useCallback(() => {
        setViewerState(prev => ({ ...prev, isOpen: false }));
    }, []);

    // Navigate to next image
    const goToNext = useCallback(() => {
        setViewerState(prev => ({
            ...prev,
            currentIndex: (prev.currentIndex + 1) % allImages.length
        }));
    }, [allImages.length]);

    // Navigate to previous image
    const goToPrev = useCallback(() => {
        setViewerState(prev => ({
            ...prev,
            currentIndex: (prev.currentIndex - 1 + allImages.length) % allImages.length
        }));
    }, [allImages.length]);

    if (!project) return <div>Project not found</div>;


    const toolIcons = {
        'Figma': { icon: SiFigma, color: '#0000B9' },
        'Adobe Photoshop': { icon: SiAdobephotoshop, color: '#0000B9' },
        'React Native': { icon: SiReact, color: '#0000B9' },
        'React': { icon: SiReact, color: '#0000B9' },
        'Firebase': { icon: SiFirebase, color: '#0000B9' },
        'Cloudinary': { icon: SiCloudinary, color: '#0000B9' },
        'Tailwind CSS': { icon: SiTailwindcss, color: '#0000B9' },
        'Node.js': { icon: SiNodedotjs, color: '#0000B9' },
        'Canva': { icon: SiCanva, color: '#0000B9' },
        'Vercel': { icon: SiVercel, color: '#0000B9' },
        'GitHub': { icon: SiGithub, color: '#0000B9' },
        'Behance': { icon: SiBehance, color: '#0000B9' },
        'Bootstrap': { icon: SiBootstrap, color: '#0000B9' },
        'JavaScript': { icon: SiJavascript, color: '#0000B9' },
        'HTML5': { icon: SiHtml5, color: '#0000B9' },
        'CSS3': { icon: SiCss3, color: '#0000B9' },
        'Python': { icon: SiPython, color: '#0000B9' },
        'OpenCV': { icon: SiOpencv, color: '#0000B9' },
        'TensorFlow': { icon: SiTensorflow, color: '#0000B9' }
    };


    const ToolIconWithTooltip = ({ tool, toolData }) => {
        const [hover, setHover] = useState(false);
        return (
            <div className="relative">
                <div
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-lg sm:rounded-xl bg-white shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] sm:shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] sm:hover:shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff] transition-all duration-300"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    tabIndex={0}
                    aria-label={tool}
                >
                    {toolData ? (
                        <toolData.icon color={toolIcons[tool]?.color || '#3498db'} className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                        <span className="text-xs text-gray-700">{tool}</span>
                    )}
                </div>
                {hover && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 sm:px-3 py-1 sm:py-1.5 bg-white text-gray-800 text-xs rounded-lg shadow-md whitespace-nowrap z-50">
                        {tool}
                    </div>
                )}
            </div>
        );
    };


    const neumorphic = {
        raised: "bg-[#e0e0e0] rounded-xl shadow-[6px_6px_12px_#bebebe,_-6px_-6px_12px_#ffffff]",
        pressed: "bg-[#e0e0e0] rounded-xl shadow-[inset_6px_6px_12px_#bebebe,_inset_-6px_-6px_12px_#ffffff]",
    };


    return (
        <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 pb-6 sm:pb-8 md:pb-12">
            {viewerState.isOpen && (
                <ImageViewer
                    images={allImages}
                    currentIndex={viewerState.currentIndex}
                    onClose={closeImageViewer}
                    onNext={goToNext}
                    onPrev={goToPrev}
                />
            )}
            <div className="max-w-7xl w-full mx-auto font-sans px-4 sm:px-6 md:px-8 lg:px-10">
                {/* 🔝 Header Section */}
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 py-6 sm:py-8 md:py-10">
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 lg:mb-8 max-w-2xl leading-relaxed">
                            {project.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                            <Link to="/contact" className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-center rounded-xl bg-gradient-to-bl from-[#0000B9] to-[#000000] text-white text-sm sm:text-base shadow-[6px_6px_12px_#00005D,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#00005D,inset_-6px_-6px_12px_#0000FF] transition-all">
                                ↗ Contact Me
                            </Link>
                            {/* Site Preview - Only for website type projects */}
                            {project.type === "website" && project.website && (
                                <a
                                    href={project.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-center rounded-xl bg-white text-sm sm:text-base shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] transition-all text-gray-800">
                                    → Site Preview
                                </a>
                            )}
                            {/* Social Icons Container */}
                            <div className="flex gap-3 sm:gap-4">
                                {/* GitHub Icon - Only if githubUrl exists */}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff] transition-all duration-300"
                                        title="View on GitHub"
                                    >
                                        <SiGithub className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
                                    </a>
                                )}
                                {/* Behance Icon - Only if behanceUrl exists */}
                                {project.behanceUrl && (
                                    <a
                                        href={project.behanceUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff] transition-all duration-300"
                                        title="View on Behance"
                                    >
                                        <SiBehance className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
                                    </a>
                                )}
                                {/* LinkedIn Icon - Only if linkedinUrl exists */}
                                {project.linkedinUrl && (
                                    <a
                                        href={project.linkedinUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff] transition-all duration-300"
                                        title="View on LinkedIn"
                                    >
                                        <SiLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base">
                        <div className="flex flex-col">
                            <p className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-gray-600 uppercase tracking-wide">Services</p>
                            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900 break-words">{project.category}</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-600 uppercase tracking-wide">Tools</p>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-2 sm:gap-3 w-full">
                                {project.tools.map((tool) => {
                                    const toolData = toolIcons[tool];
                                    return (
                                        <div key={tool} className="flex justify-center">
                                            <ToolIconWithTooltip tool={tool} toolData={toolData} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-gray-600 uppercase tracking-wide">Type</p>
                            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900 capitalize">{project.type}</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2 text-gray-600 uppercase tracking-wide">Timeline</p>
                            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900">{project.duration}</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    {project.video ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full"
                        >
                            <video
                                src={project.video}
                                controls
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full rounded-xl sm:rounded-2xl shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] sm:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </motion.div>
                    ) : (
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            onClick={() => openImageViewer(0)}
                            className="cursor-zoom-in w-full"
                        >
                            <img
                                src={project.mockupImage}
                                alt={`${project.title} Mockup`}
                                className="w-full rounded-xl sm:rounded-2xl shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] sm:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
                            />
                        </motion.div>
                    )}
                </div>


                {/* Brand Overview */}
                <div className="container mx-auto max-w-5xl text-center py-6 sm:py-8 md:py-10 px-4 sm:px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black-900 mb-3 sm:mb-4 md:mb-6">BRAND OVERVIEW</h2>
                        <p className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">{project.brandOverview}</p>
                    </motion.div>
                </div>

                {/* Challenge & Solution */}
                <div className="container mx-auto max-w-6xl py-6 sm:py-8 md:py-10 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                    {['THE CHALLENGE', 'THE SOLUTION'].map((heading, i) => (
                        <motion.div
                            key={heading}
                            initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="space-y-3 sm:space-y-4 md:space-y-5"
                        >
                            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ${i === 0 ? 'text-black-800 border-l-4 border-blue-900' : 'text-black-900 border-l-4 border-blue-900'} pl-3 sm:pl-4 md:pl-5`}>
                                {heading}
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">{i === 0 ? project.challenge : project.solution}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Key Features */}
                <div className="container mx-auto max-w-6xl py-6 sm:py-8 md:py-10 px-4 sm:px-6">
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black-900 mb-4 sm:mb-6 md:mb-8 border-l-4 border-blue-900 pl-3 sm:pl-4 md:pl-5">
                        KEY FEATURES
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                        {project.features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.15 }}
                                whileHover={{ scale: 1.02 }}
                                className={`${neumorphic.raised} p-4 sm:p-5 md:p-6 rounded-xl transition-all duration-300 hover:shadow-[inset_6px_6px_12px_#bebebe,_inset_-6px_-6px_12px_#ffffff]`}
                            >
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-3 sm:mr-4 relative">
                                        <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-bl from-[#0000B9] to-[#000000] flex items-center justify-center text-white font-bold text-xs sm:text-sm md:text-base">{idx + 1}</div>
                                    </div>
                                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">{feature}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>


                {/* 🖼 UI Screens (Mobile Responsive) - Only show if uiScreens exists and is not null */}
                {project.uiScreens && project.uiScreens.length > 0 && (
                    <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4 sm:px-6">
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black-900 mb-4 sm:mb-6 md:mb-8 border-l-4 border-blue-900 pl-3 sm:pl-4 md:pl-5">
                            UI SCREENS
                        </motion.h2>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center sm:items-start gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                            {project.uiScreens.map(screen => (
                                <div key={screen.id} className="flex-shrink-0">
                                    <img
                                        src={screen.image}
                                        alt={`Screen ${screen.id}`}
                                        className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 rounded-xl sm:rounded-2xl shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] sm:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Conclusion Section */}
                <div className="container mx-auto max-w-6xl py-6 sm:py-8 md:py-10 px-4 sm:px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black-900 mb-4 sm:mb-6 md:mb-8 inline-block border-b-2 border-black pb-2">PROJECT CONCLUSION</h2>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto">{project.conclusion}</p>
                    </motion.div>
                </div>

                {/* Related Projects Section */}
                <div className="relative py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
                        >
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black-900 inline-block border-b-2 border-black pb-2 mb-2">RELATED PROJECTS</h2>
                        </motion.div>


                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                            {projectsData
                                .filter(p => p.type === project.type && p.id !== project.id)
                                .slice(0, 3)
                                .map(related => {
                                    const isWebsite = related.type === "website";
                                    const websiteUrl = related.website || null;

                                    return (
                                        <div key={related.id} className="h-full flex flex-col">
                                            <Link
                                                to={`/project/${related.id}`}
                                                onClick={() => window.scrollTo(0, 0)}
                                                className="block no-underline h-full flex flex-col"
                                            >
                                                <motion.div
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="h-full p-4 sm:p-5 md:p-6 rounded-xl bg-white shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#c9d1de,-8px_-8px_16px_#ffffff] transition-all duration-300 cursor-pointer flex flex-col"
                                                >
                                                    {/* Project Image */}
                                                    <div className="mb-3 sm:mb-4 rounded-lg overflow-hidden flex-shrink-0">
                                                        <img
                                                            src={related.image}
                                                            alt={related.title}
                                                            className="w-full h-36 sm:h-40 md:h-44 lg:h-48 xl:h-52 object-cover rounded-lg"
                                                        />
                                                    </div>

                                                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 flex-shrink-0">{related.title}</h3>
                                                    <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-2 text-xs sm:text-sm md:text-base flex-grow leading-relaxed">{related.description}</p>

                                                    {/* Tags */}
                                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                                                        {related.tools && related.tools.slice(0, 3).map((tech, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 text-xs rounded-full bg-[#f2f2f2] text-gray-700 shadow-[2px_2px_4px_#d1d9e6,-2px_-2px_4px_#ffffff]"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                        {related.tools && related.tools.length > 3 && (
                                                            <span className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 text-xs rounded-full bg-[#f2f2f2] text-gray-700 shadow-[2px_2px_4px_#d1d9e6,-2px_-2px_4px_#ffffff]">
                                                                +{related.tools.length - 3}
                                                            </span>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            </Link>

                                            {/* Site Preview Button - Only for Website type */}
                                            {isWebsite && websiteUrl && (
                                                <a
                                                    href={websiteUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="mt-3 w-full px-3 sm:px-4 py-2 flex items-center justify-center gap-2 rounded-xl bg-white text-xs sm:text-sm font-medium text-gray-800 shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] transition-all duration-200"
                                                >
                                                    <span>→</span>
                                                    <span>Site Preview</span>
                                                </a>
                                            )}
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// // 🔄 Reusable Text Section Component
// const Section = ({ title, content }) => (
//     <div style={{ marginBottom: '40px' }}>
//         <h2 style={sectionHeading}>{title}</h2>
//         <p style={sectionText}>{content}</p>
//     </div>
// );


// const pageContainer = {
//     padding: '120px 20px 60px',
//     maxWidth: '1100px',
//     margin: '0 auto',
//     fontFamily: 'Inter, sans-serif',
//     color: '#1e293b',
// };

// // Header Section (Screenshot Style)
// const topSectionStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     borderRadius: '16px',
//     boxShadow: 'none',
//     gap: '30px',
//     flexWrap: 'wrap',
//     maxWidth: '1100px',
//     margin: '0 auto 40px',
// };

// const topLeftStyle = {
//     flex: '1 1 55%',
//     minWidth: '280px',
// };

// const topRightStyle = {
//     flex: '1 1 40%',
//     minWidth: '280px',
//     display: 'grid',
//     gridTemplateColumns: 'repeat(2, 1fr)',
//     gridRowGap: '20px',
//     gridColumnGap: '40px',
//     fontSize: '14px',
//     color: '#4b5563',
// };

// const projectTitleStyle = {
//     fontSize: '38px',
//     fontWeight: '900',
//     margin: 0,
//     lineHeight: 1.2,
//     color: '#111827',
// };

// const projectDescriptionStyle = {
//     fontSize: '15px',
//     marginTop: '8px',
//     marginBottom: '24px',
//     color: '#6b7280',
// };

// const buttonGroupStyle = {
//     display: 'flex',
//     gap: '16px',
// };

// const primaryButtonStyle = {
//     backgroundColor: '#111827',
//     color: '#fff',
//     padding: '11px 24px',
//     borderRadius: '8px',
//     fontWeight: '600',
//     fontSize: '14px',
//     border: 'none',
//     cursor: 'pointer',
//     boxShadow: '0 8px 16px rgb(17 24 39 / 0.2)',
//     textDecoration: 'none',
// };

// const secondaryButtonStyle = {
//     backgroundColor: '#f3f4f6',
//     color: '#111827',
//     padding: '11px 24px',
//     borderRadius: '8px',
//     fontWeight: '600',
//     fontSize: '14px',
//     border: 'none',
//     cursor: 'pointer',
//     textDecoration: 'none',
//     boxShadow: 'none',
// };


// const metaGroupStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     gap: '20px',
// };

// const metaLabelStyle = {
//     fontWeight: '600',
//     marginBottom: '4px',
//     color: '#6b7280',
// };

// const metaValueStyle = {
//     fontWeight: '700',
//     color: '#111827',
//     whiteSpace: 'nowrap',
// };

// // Body Sections
// const sectionBlock = {
//     marginTop: '60px',
//     marginBottom: '60px',
// };

// const sectionHeading = {
//     fontSize: '22px',
//     fontWeight: '600',
//     marginBottom: '12px',
// };

// const sectionText = {
//     lineHeight: '1.7',
//     color: '#374151',
//     fontSize: '16px',
// };

// const featuresList = {
//     paddingLeft: '20px',
//     marginTop: '10px',
// };

// const featureItem = {
//     fontSize: '15px',
//     padding: '5px 0',
// };

// const toolsList = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '12px',
// };

// const toolTag = {
//     padding: '6px 12px',
//     backgroundColor: '#f3f4f6',
//     borderRadius: '10px',
//     fontSize: '14px',
//     fontWeight: '500',
//     color: '#1f2937',
// };

// // UI Screens (Neumorphic style)
// const screensContainerStyle = {
//     display: 'flex',
//     gap: '20px',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
// };

// const screenImageStyle = {
//     width: '250px',
//     borderRadius: '16px',
//     boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff',
// };

// // External Link
// const externalLinkStyle = {
//     textDecoration: 'none',
//     color: '#3b82f6',
//     fontWeight: '600',
//     fontSize: '16px',
// };

export default ProjectDetails;