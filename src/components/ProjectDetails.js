import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === parseInt(id));

    if (!project) return <div>Project not found</div>;

    return (
        <div className="min-h-screen px-6 py-40">
            <div className="max-w-6xl w-full mx-auto font-sans">

                {/* 🔝 Header Section */}
                <div style={topSectionStyle}>
                    <div style={topLeftStyle}>
                        <h1 style={projectTitleStyle}>{project.title}</h1>
                        <p style={projectDescriptionStyle}>{project.subtitle}</p>
                        <div style={buttonGroupStyle}>
                            <Link to="/contact" style={primaryButtonStyle}>
                                ↗ Contact Me
                            </Link>
                            <a
                                href={project.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={secondaryButtonStyle}
                            >
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
                            <p style={metaValueStyle}>{project.tools.join(', ')}</p>
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

                {/* 🖼 Project Mockup */}
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

                {/* 📝 Neumorphic Details */}
                <div style={neumorphicDetailsWrapper}>
                    <NeumorphicSection title="Project Overview" content={project.overview} />
                    <NeumorphicSection title="Brand Overview" content={project.brandOverview} />
                    <NeumorphicSection title="Challenge" content={project.challenge} />
                    <NeumorphicSection title="Solution" content={project.solution} />
                </div>

                {/* ✨ Key Features */}
                <div style={neumorphicCardBlock}>
                    <h2 style={neumorphicHeading}>✨ Key Features</h2>
                    <ul style={neumorphicFeaturesList}>
                        {project.features.map((feature, i) => (
                            <li key={i} style={neumorphicFeatureItem}>
                                ✔ {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 🛠 Tools Used */}
                <div style={neumorphicCardBlock}>
                    <h2 style={neumorphicHeading}>🛠 Tools Used</h2>
                    <div style={neumorphicToolsList}>
                        {project.tools.map((tool, i) => (
                            <span key={i} style={neumorphicToolTag}>{tool}</span>
                        ))}
                    </div>
                </div>

                <div style={sectionBlock}>
                    <h2 style={sectionHeading}>🖼 UI Screens</h2>
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

                {/* ✅ Conclusion */}
                <div style={neumorphicCardBlock}>
                    <h2 style={neumorphicHeading}>✅ Conclusion</h2>
                    <p style={neumorphicText}>{project.conclusion}</p>
                </div>

                {/* 🔗 External Link */}
                <div style={{ textAlign: 'center', marginTop: 40 }}>
                    <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={externalLinkStyle}
                    >
                        🔗 View Full Project on Behance
                    </a>
                </div>
            </div>
        </div>
    );
};

// 🧊 Neumorphic Section Component
const NeumorphicSection = ({ title, content }) => (
    <div style={neumorphicCard}>
        <h2 style={neumorphicHeading}>{title}</h2>
        <p style={neumorphicText}>{content}</p>
    </div>
);

// ===================== 🔧 Styles =====================

// Header Section
const topSectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderRadius: '16px',
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
    fontSize: '28px',
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

const externalLinkStyle = {
    textDecoration: 'none',
    color: '#3b82f6',
    fontWeight: '600',
    fontSize: '16px',
};

// 🧊 Neumorphic Styles
const neumorphicDetailsWrapper = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    marginTop: '60px',
};

const neumorphicCard = {
    background: '#e0e0e0',
    borderRadius: '20px',
    padding: '30px',
    boxShadow: '8px 8px 20px #bebebe, -8px -8px 20px #ffffff',
    transition: 'all 0.3s ease',
};

const neumorphicHeading = {
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '16px',
    color: '#1e293b',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
};

const neumorphicText = {
    fontSize: '15px',
    lineHeight: '1.7',
    color: '#4b5563',
};

const neumorphicCardBlock = {
    ...neumorphicCard,
    marginTop: '60px',
};

const neumorphicFeaturesList = {
    listStyle: 'none',
    paddingLeft: 0,
    marginTop: '10px',
};

const neumorphicFeatureItem = {
    fontSize: '15px',
    padding: '8px 0',
    color: '#1f2937',
};

const neumorphicToolsList = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
};

const neumorphicToolTag = {
    padding: '6px 12px',
    backgroundColor: '#e0e0e0',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#1f2937',
    boxShadow: 'inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff',
};

const sectionBlock = {
    marginTop: '60px',
};

const sectionHeading = {
    fontSize: '22px',
    fontWeight: '600',
    marginBottom: '12px',
};

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




export default ProjectDetails;
