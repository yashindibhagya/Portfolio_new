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
                {/* 🔝 Header Section (Based on Screenshot) */}
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


                {/* 📝 Details Section */}
                <div style={sectionBlock}>
                    <Section title="Project Overview" content={project.overview} />
                    <Section title="Brand Overview" content={project.brandOverview} />
                    <Section title="Challenge" content={project.challenge} />
                    <Section title="Solution" content={project.solution} />
                </div>

                {/* ✨ Features */}
                <div style={sectionBlock}>
                    <h2 style={sectionHeading}>✨ Key Features</h2>
                    <ul style={featuresList}>
                        {project.features.map((feature, i) => (
                            <li key={i} style={featureItem}>✔ {feature}</li>
                        ))}
                    </ul>
                </div>

                {/* 🛠 Tools */}
                <div style={sectionBlock}>
                    <h2 style={sectionHeading}>🛠 Tools Used</h2>
                    <div style={toolsList}>
                        {project.tools.map((tool, i) => (
                            <span key={i} style={toolTag}>{tool}</span>
                        ))}
                    </div>
                </div>

                {/* 🖼 UI Screens (Neumorphism style retained) */}
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
                <Section title="Conclusion" content={project.conclusion} />

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
