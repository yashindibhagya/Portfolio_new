import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { motion } from 'framer-motion';
import {
    SiFigma, SiAdobephotoshop, SiReact, SiFirebase,
    SiCloudinary, SiTailwindcss, SiNodedotjs, SiCanva,
    SiVercel, SiGithub, SiBehance, SiBootstrap,
    SiJavascript, SiHtml5, SiCss3
} from 'react-icons/si';


const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectsData.find(p => p.id === parseInt(id));

    if (!project) return <div>Project not found</div>;


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
                className={`w-10 h-10 ${neumorphic.raised} flex items-center justify-center relative group transition`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                tabIndex={0}
                aria-label={tool}
            >
                {toolData ? (
                    <toolData.icon color={"#000"} className="w-5 h-5" />
                ) : (
                    <span className="text-xs text-gray-700">{tool}</span>
                )}
                {hover && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#e0e0e0] text-black text-xs rounded-lg shadow-[4px_4px_8px_#bebebe,_-4px_-4px_#ffffff] whitespace-nowrap">
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
        <div className="min-h-screen px-6 pt-24 pb-8">
            <div className="max-w-6xl w-full mx-auto font-sans">
                {/* 🔝 Header Section (Based on Screenshot) */}
                <div style={topSectionStyle}>
                    <div style={topLeftStyle}>
                        <h1 style={projectTitleStyle}>{project.title}</h1>
                        <p style={projectDescriptionStyle}>{project.subtitle}</p>
                        <div style={buttonGroupStyle}>
                            <Link to="/contact" className="px-5 py-2 sm:px-6 sm:py-3 flex items-center justify-center rounded-xl bg-gradient-to-bl from-[#0000B9] to-[#000000] text-white text-sm sm:text-base shadow-[6px_6px_12px_#00005D,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#00005D,inset_-6px_-6px_12px_#0000FF] transition-all">
                                ↗ Contact Me
                            </Link>
                            <a
                                href={project.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2 sm:px-6 sm:py-3 flex items-center justify-center rounded-xl bg-[#E0E5E] text-sm sm:text-base shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] transition-all">
                                → Site Preview
                            </a>
                        </div>
                    </div>

                    <div style={topRightStyle}>
                        <div>
                            <p style={metaLabelStyle}>Services</p>
                            <p style={metaValueStyle}>{project.category}</p>
                        </div>
                        <div>
                            <p style={metaLabelStyle}>Tools</p>
                            <div className="grid grid-cols-2 gap-0 w-full">
                                {project.tools.map((tool) => {
                                    const toolData = toolIcons[tool];
                                    return (
                                        <div key={tool} className="flex items-center gap-2">
                                            <div className="flex-shrink-0">
                                                <ToolIconWithTooltip tool={tool} toolData={toolData} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <p style={metaLabelStyle}>Value</p>
                            <p style={metaValueStyle}>Seamless design, brand consistency</p>
                        </div>
                        <div>
                            <p style={metaLabelStyle}>Timeline</p>
                            <p style={metaValueStyle}>{project.duration}</p>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <img
                        src={project.mockupImage}
                        alt={`${project.title} Mockup`}
                        style={{
                            maxWidth: '100%',
                            borderRadius: '16px',
                            boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff',
                        }}
                    />
                </div>


                {/* Brand Overview */}
                <div className="container mx-auto max-w-5xl text-center py-8 px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-700 mb-4 hover:underline">
                            <svg className="w-4 h-4 mr-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            View Full Project
                        </a>

                        <h2 className="text-3xl md:text-4xl font-bold text-black-900 mb-4 text-lg">BRAND OVERVIEW</h2>
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
                            <h2 className={`text-3xl font-bold ${i === 0 ? 'text-black-800 border-l-4 border-black' : 'text-black-900 border-l-4 border-black'} pl-4`}>
                                {heading}
                            </h2>
                            <p className="text-gray-700 leading-relaxed">{i === 0 ? project.challenge : project.solution}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Key Features */}
                <div className="container mx-auto max-w-6xl py-8 px-4">
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-bold text-black-900 mb-6 border-l-4 border-black pl-4">
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
                                        <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white font-bold">{idx + 1}</div>
                                    </div>
                                    <p className="text-gray-700">{feature}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>


                {/* 🖼 UI Screens (Neumorphism style retained) */}
                <div style={sectionBlock}>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-bold text-black-900 mb-6 border-l-4 border-black pl-4">
                        UI SCREENS
                    </motion.h2>
                    <div style={screensContainerStyle}>
                        {project.uiScreens.map(screen => (
                            <img
                                key={screen.id}
                                src={screen.image}
                                alt={`Screen ${screen.id}`}
                                style={screenImageStyle}
                            />
                        ))}
                    </div>
                </div>

                {/* Conclusion Section */}
                <div className="container mx-auto max-w-6xl py-8 px-4 text-center">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
                        <h2 className="text-3xl font-bold text-black-900 mb-6 inline-block border-b-2 border-black">PROJECT CONCLUSION</h2>
                        <p className="text-gray-700 leading-relaxed">{project.conclusion}</p>
                    </motion.div>
                </div>

                {/* Related Projects Section */}
                <div className="relative py-12 px-4 md:px-6">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="text-center mb-10"
                        >
                            <h2 className="text-3xl font-bold text-black-900 inline-block border-b-2 border-black mb-2">RELATED PROJECTS</h2>
                        </motion.div>


                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projectsData
                                .filter(p => p.type === project.type && p.id !== project.id)
                                .slice(0, 3)
                                .map(related => (
                                    <div
                                        key={related.id}
                                        className="group bg-[#f2f2f2] rounded-2xl overflow-hidden shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff] transition-all duration-300 cursor-pointer"
                                        onClick={() => navigate(`/project/${related.id}`)}
                                    >
                                        {/* Image */}
                                        <div className="relative overflow-hidden rounded-t-2xl">
                                            <img
                                                src={related.image}
                                                alt={related.title}
                                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{related.title}</h3>
                                            <p className="text-gray-600 mb-4 line-clamp-2">{related.description}</p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-2">
                                                {related.tools && related.tools.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 text-xs rounded-full bg-[#f2f2f2] text-gray-700 shadow-[2px_2px_4px_#d1d9e6,-2px_-2px_4px_#ffffff]"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>




            </div>
        </div>
    );
};

// 🔄 Reusable Text Section Component
const Section = ({ title, content }) => (
    <div style={{ marginBottom: '40px' }}>
        <h2 style={sectionHeading}>{title}</h2>
        <p style={sectionText}>{content}</p>
    </div>
);


const pageContainer = {
    padding: '120px 20px 60px',
    maxWidth: '1100px',
    margin: '0 auto',
    fontFamily: 'Inter, sans-serif',
    color: '#1e293b',
};

// Header Section (Screenshot Style)
const topSectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    //padding: '30px 50px',
    borderRadius: '16px',
    boxShadow: 'none',
    gap: '30px',
    flexWrap: 'wrap',
    maxWidth: '1100px',
    margin: '0 auto 40px',
};

const topLeftStyle = {
    flex: '1 1 55%',
    minWidth: '280px',
};

const topRightStyle = {
    flex: '1 1 40%',
    minWidth: '280px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridRowGap: '20px',
    gridColumnGap: '40px',
    fontSize: '14px',
    color: '#4b5563',
};

const projectTitleStyle = {
    fontSize: '38px',
    fontWeight: '900',
    margin: 0,
    lineHeight: 1.2,
    color: '#111827',
};

const projectDescriptionStyle = {
    fontSize: '15px',
    marginTop: '8px',
    marginBottom: '24px',
    color: '#6b7280',
};

const buttonGroupStyle = {
    display: 'flex',
    gap: '16px',
};

const primaryButtonStyle = {
    backgroundColor: '#111827',
    color: '#fff',
    padding: '11px 24px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '14px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 8px 16px rgb(17 24 39 / 0.2)',
    textDecoration: 'none',
};

const secondaryButtonStyle = {
    backgroundColor: '#f3f4f6',
    color: '#111827',
    padding: '11px 24px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '14px',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    boxShadow: 'none',
};


const metaGroupStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
};

const metaLabelStyle = {
    fontWeight: '600',
    marginBottom: '4px',
    color: '#6b7280',
};

const metaValueStyle = {
    fontWeight: '700',
    color: '#111827',
    whiteSpace: 'nowrap',
};

// Body Sections
const sectionBlock = {
    marginTop: '60px',
    marginBottom: '60px',
};

const sectionHeading = {
    fontSize: '22px',
    fontWeight: '600',
    marginBottom: '12px',
};

const sectionText = {
    lineHeight: '1.7',
    color: '#374151',
    fontSize: '16px',
};

const featuresList = {
    paddingLeft: '20px',
    marginTop: '10px',
};

const featureItem = {
    fontSize: '15px',
    padding: '5px 0',
};

const toolsList = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
};

const toolTag = {
    padding: '6px 12px',
    backgroundColor: '#f3f4f6',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#1f2937',
};

// UI Screens (Neumorphic style)
const screensContainerStyle = {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
};

const screenImageStyle = {
    width: '250px',
    borderRadius: '16px',
    boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff',
};

// External Link
const externalLinkStyle = {
    textDecoration: 'none',
    color: '#3b82f6',
    fontWeight: '600',
    fontSize: '16px',
};

export default ProjectDetails;