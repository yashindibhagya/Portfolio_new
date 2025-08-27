import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    SiFigma, SiAdobephotoshop, SiReact, SiFirebase,
    SiCloudinary, SiTailwindcss, SiNodedotjs, SiCanva,
    SiVercel, SiGithub, SiBehance, SiBootstrap,
    SiJavascript, SiHtml5, SiCss3
} from 'react-icons/si';
import { projectsData } from '../data/projectsData';

const neumorphic = {
    raised: "bg-[#e0e0e0] rounded-xl shadow-[6px_6px_12px_#bebebe,_-6px_-6px_12px_#ffffff]",
    pressed: "bg-[#e0e0e0] rounded-xl shadow-[inset_6px_6px_12px_#bebebe,_inset_-6px_-6px_12px_#ffffff]",
};

const toolIcons = {
    'Figma': { icon: SiFigma, color: '#1e3a8a' },
    'Adobe Photoshop': { icon: SiAdobephotoshop, color: '#1e3a8a' },
    'React Native': { icon: SiReact, color: '#1e3a8a' },
    'React': { icon: SiReact, color: '#1e3a8a' },
    'Firebase': { icon: SiFirebase, color: '#1e3a8a' },
    'Cloudinary': { icon: SiCloudinary, color: '#1e3a8a' },
    'Tailwind CSS': { icon: SiTailwindcss, color: '#1e3a8a' },
    'Node.js': { icon: SiNodedotjs, color: '#1e3a8a' },
    'Canva': { icon: SiCanva, color: '#1e3a8a' },
    'Vercel': { icon: SiVercel, color: '#1e3a8a' },
    'GitHub': { icon: SiGithub, color: '#1e3a8a' },
    'Behance': { icon: SiBehance, color: '#1e3a8a' },
    'Bootstrap': { icon: SiBootstrap, color: '#1e3a8a' },
    'JavaScript': { icon: SiJavascript, color: '#1e3a8a' },
    'HTML5': { icon: SiHtml5, color: '#1e3a8a' },
    'CSS3': { icon: SiCss3, color: '#1e3a8a' }
};

const ToolIconWithTooltip = ({ tool, toolData }) => {
    const [hover, setHover] = useState(false);
    return (
        <div
            className={`w-12 h-12 ${neumorphic.raised} flex items-center justify-center relative group transition`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            tabIndex={0}
            aria-label={tool}
        >
            {toolData ? (
                <toolData.icon color={toolData.color} className="w-6 h-6" />
            ) : (
                <span className="text-xs text-gray-700">{tool}</span>
            )}
            {hover && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#e0e0e0] text-black text-xs rounded-lg shadow-[4px_4px_8px_#bebebe,_-4px_-4px_#ffffff]">
                    {tool}
                </div>
            )}
        </div>
    );
};

const ImageLightbox = ({ image, title, isOpen, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => { document.body.style.overflow = 'auto'; };
    }, [isOpen]);

    if (!isOpen) return null;
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#e0e0e0]/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={`${neumorphic.raised} p-4 max-w-5xl mx-auto`}>
                <button
                    onClick={onClose}
                    className={`${neumorphic.raised} absolute top-4 right-4 p-2`}
                >
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative"
                >
                    <img src={image} alt={title || "Image"} className="max-h-[90vh] mx-auto object-contain" />
                    {title && (
                        <div className="absolute bottom-4 left-0 right-0 text-center">
                            <div className="inline-block px-4 py-2 bg-[#e0e0e0] text-black text-sm rounded-full shadow-[4px_4px_8px_#bebebe,_-4px_-4px_#ffffff]">
                                {title}
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
};

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [lightbox, setLightbox] = useState({ isOpen: false, image: null, title: null });

    useEffect(() => {
        window.scrollTo(0, 0);
        const timeout = setTimeout(() => window.scrollTo(0, 0), 50);
        return () => clearTimeout(timeout);
    }, [id]);

    useEffect(() => {
        setLoading(true);
        const found = projectsData.find(p => p.id === parseInt(id));
        if (found) {
            found.tools = found.tools.map(tool => {
                if (tool.toLowerCase().includes('figma')) return 'Figma';
                if (tool.toLowerCase().includes('photoshop')) return 'Adobe Photoshop';
                return tool;
            });
        }
        setTimeout(() => { setProject(found); setLoading(false); }, 300);
    }, [id]);

    const openLightbox = (img, title) => setLightbox({ isOpen: true, image: img, title });
    const closeLightbox = () => setLightbox({ ...lightbox, isOpen: false });
    const handleBack = () => {
        const pos = sessionStorage.getItem('projectsSectionPosition');
        navigate('/');
        setTimeout(() => {
            const sec = document.getElementById('work');
            if (sec && pos) window.scrollTo({ top: parseInt(pos), behavior: 'auto' });
            else if (sec) sec.scrollIntoView({ behavior: 'auto' });
        }, 150);
    };

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen bg-[#e0e0e0]">
            <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full bg-blue-600 animate-spin"></div>
            </div>
        </div>
    );
    if (!project) return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-[#e0e0e0] text-black">
            <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
            <p className="mb-6">The project you're looking for doesn't exist or has been removed.</p>
            <button onClick={handleBack} className={`${neumorphic.raised} px-6 py-3 text-black rounded-full hover:${neumorphic.pressed} transition`}>
                Back to Projects
            </button>
        </div>
    );

    return (
        <div className="text-black bg-[#e0e0e0] min-h-screen overflow-hidden relative">
            <AnimatePresence>
                {lightbox.isOpen && (
                    <ImageLightbox image={lightbox.image} title={lightbox.title} isOpen={lightbox.isOpen} onClose={closeLightbox} />
                )}
            </AnimatePresence>

            {/* Back Button */}
            <div className="container mx-auto px-4 relative z-10 pt-8">
                <button onClick={handleBack} className={`${neumorphic.raised} px-4 py-2 flex items-center space-x-2 transition hover:${neumorphic.pressed}`}>
                    <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span>Back to Projects</span>
                </button>
            </div>

            {/* Title Section */}
            <div className="container mx-auto text-center py-8 px-4">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <div className="text-sm uppercase tracking-widest text-blue-800">{project.category}</div>
                    <h1 className="text-5xl md:text-7xl font-bold text-blue-900 my-4">{project.title}</h1>
                    <p className="text-lg text-gray-800 max-w-3xl mx-auto">{project.description}</p>
                </motion.div>
            </div>

            {/* Project Info */}
            <div className="container mx-auto max-w-6xl py-8 px-4">
                <motion.div className="grid grid-cols-3 gap-4 text-center">
                    {['CATEGORY', 'START DATE', 'SOFTWARES'].map((label, idx) => (
                        <div key={idx} className="p-4">
                            <div className="uppercase text-gray-700 font-bold tracking-wider mb-2">{label}</div>
                            {label === 'SOFTWARES' ? (
                                <div className="flex justify-center gap-4">
                                    {project.tools.map(tool => {
                                        const toolData = toolIcons[tool];
                                        return <ToolIconWithTooltip key={tool} tool={tool} toolData={toolData} />;
                                    })}
                                </div>
                            ) : (
                                <div className="text-xl font-medium text-gray-800">
                                    {label === 'CATEGORY' ? project.category : project.duration}
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Showcase Image */}
            <div className="container mx-auto max-w-3xl py-8 px-4">
                <motion.div
                    className={`${neumorphic.raised} rounded-xl overflow-hidden shadow-lg cursor-pointer`}
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    onClick={() => openLightbox(project.mockupImage || project.image, project.title)}
                >
                    <img src={project.mockupImage || project.image} alt={project.title} className="w-full h-auto rounded-xl" />
                </motion.div>
            </div>

            {/* Brand Overview */}
            <div className="container mx-auto max-w-5xl text-center py-8 px-4">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-700 mb-4 hover:underline">
                        <svg className="w-4 h-4 mr-2 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        VISIT WEBSITE
                    </a>
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">BRAND OVERVIEW</h2>
                    <p className="text-gray-800 text-lg leading-relaxed">{project.brandOverview}</p>
                </motion.div>
            </div>

            {/* Challenge & Solution */}
            <div className="container mx-auto max-w-6xl py-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {['THE CHALLENGE', 'THE SOLUTION'].map((heading, i) => (
                    <motion.div
                        key={heading}
                        initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="space-y-4"
                    >
                        <h2 className={`text-3xl font-bold ${i === 0 ? 'text-blue-800 border-l-4 border-blue-800' : 'text-blue-900 border-l-4 border-blue-900'} pl-4`}>
                            {heading}
                        </h2>
                        <p className="text-gray-700 leading-relaxed">{i === 0 ? project.challenge : project.solution}</p>
                    </motion.div>
                ))}
            </div>

            {/* Key Features */}
            <div className="container mx-auto max-w-6xl py-8 px-4">
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-blue-900 pl-4">
                    KEY FEATURES
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.15 }}
                            whileHover={{ scale: 1.03 }}
                            className={`${neumorphic.raised} p-6 rounded-xl transition shadow-lg hover:${neumorphic.pressed}`}
                        >
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4 relative">
                                    <div className="w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold">{idx + 1}</div>
                                </div>
                                <p className="text-gray-700">{feature}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Pages / UI Screens */}
            <div className="container mx-auto max-w-7xl py-8 px-4">
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl font-bold text-blue-900 text-center mb-6">
                    PAGES
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
                    {project.uiScreens.map((screen, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                            className="cursor-pointer"
                            onClick={() => openLightbox(screen.image, screen.title)}
                        >
                            <div className={`${neumorphic.raised} rounded-xl p-1 transition hover:${neumorphic.pressed}`}>
                                <div className="w-full" style={{ aspectRatio: '0.5' }}>
                                    <img src={screen.image} alt={screen.title} className="w-full h-full object-contain" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Conclusion Section */}
            <div className="container mx-auto max-w-6xl py-8 px-4 text-center">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
                    <h2 className="text-3xl font-bold text-blue-900 mb-6 inline-block border-b-2 border-blue-900">PROJECT CONCLUSION</h2>
                    <p className="text-gray-700 leading-relaxed">{project.conclusion}</p>
                </motion.div>
            </div>

            {/* Related Projects */}
            <div className="container mx-auto max-w-6xl py-8 px-4">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-blue-900 inline-block border-b-2 border-blue-900 mb-2">RELATED PROJECTS</h2>
                    <p className="text-gray-600">Explore more projects in the same category.</p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.filter(p => p.type === project.type && p.id !== project.id).slice(0, 3).map(related => (
                        <div
                            key={related.id}
                            className={`${neumorphic.raised} p-4 rounded-xl cursor-pointer hover:${neumorphic.pressed} transition`}
                            onClick={() => navigate(`/project/${related.id}`)}
                        >
                            <img src={related.image} alt={related.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                            <h3 className="text-xl font-semibold text-blue-900 mb-2">{related.title}</h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">{related.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {related.tools?.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 text-xs text-gray-600 bg-[#e0e0e0] rounded shadow-[2px_2px_5px_#bebebe,_-2px_-2px_#ffffff]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;