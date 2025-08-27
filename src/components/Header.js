import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { socialLinks } from '../config/socialLinks';

const Header = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.substring(1);
        if (path === '' || path === 'home') {
            setActiveLink('home');
        } else {
            setActiveLink(path);
        }
    }, [location]);

    const links = [
        { name: 'Home', id: 'home', path: '/' },
        { name: 'Projects', id: 'projects', path: '/projects' },
        { name: 'Services', id: 'services', path: '/services' },
        { name: 'Contact', id: 'contact', path: '/contact' },
    ];

    return (
        <>
            {/* Top Header */}
            <div style={topHeaderStyle}>
                <div style={nameStyle}>
                    <img src="../../assets/img/logo.png" alt="Logo" style={{ height: 30 }} />
                </div>

                <div style={rightContentStyle}>
                    <div style={availabilityStyle}>
                        <span style={greenDotStyle}></span>
                        available for work
                    </div>

                    <div style={dividerStyle} />

                    <div style={socialIconsStyle}>
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#fff] shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] transition-all"
                            >
                                <span className="text-gray-600" style={{ fontSize: 20 }}>{social.icon}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Desktop Bottom Nav */}
            <div style={navContainerStyle} className="desktop-only">
                <nav style={navStyle}>
                    {links.map(link => (
                        <Link
                            key={link.id}
                            to={link.path}
                            onClick={() => setActiveLink(link.id)}
                            onMouseEnter={() => setHoveredLink(link.id)}
                            onMouseLeave={() => setHoveredLink(null)}
                            style={{
                                ...navLinkStyle,
                                ...(hoveredLink === link.id ? navHoverStyle : {}),
                                ...(activeLink === link.id ? activeLinkStyle : {}),
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="../../assets/document/Mobile Application developer.pdf"
                        download
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{
                            ...buttonStyle,
                            ...(isHovered ? buttonHoverStyle : {}),
                            textDecoration: 'none',
                            display: 'inline-block',
                        }}
                    >
                        Download Resume
                    </a>
                </nav>
            </div>

            {/* Mobile Floating Button & Menu */}
            <div style={floatingButtonContainerStyle} className="mobile-only">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={floatingButtonStyle}
                >
                    ☰
                </button>

                {isMobileMenuOpen && (
                    <div style={mobileMenuStyle}>
                        {links.map(link => (
                            <Link
                                key={link.id}
                                to={link.path}
                                onClick={() => {
                                    setActiveLink(link.id);
                                    setIsMobileMenuOpen(false);
                                }}
                                style={mobileNavLinkStyle}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="../../assets/document/Mobile Application developer.pdf"
                            download
                            style={mobileNavLinkStyle}
                        >
                            Download Resume
                        </a>
                    </div>
                )}
            </div>
        </>
    );
};

// ----- STYLES -----

const topHeaderStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: 'inset 2px 2px 5px rgba(255,255,255,0.6), inset -2px -2px 5px rgba(0,0,0,0.05)',
    zIndex: 1000,
};

const nameStyle = {
    width: 200,
    marginLeft: 50,
};

const rightContentStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginRight: 30,
};

const availabilityStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: '500',
    color: '#111827',
};

const greenDotStyle = {
    height: '10px',
    width: '10px',
    backgroundColor: '#22c55e',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: '8px',
    boxShadow: '0 0 6px #22c55e',
};

const dividerStyle = {
    height: 24,
    width: 1,
    backgroundColor: '#d4d4d4',
};

const socialIconsStyle = {
    display: 'flex',
    gap: '10px',
};

const navContainerStyle = {
    position: 'fixed',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
    borderRadius: '50px',
    padding: '15px 30px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    boxShadow: `
        0 4px 30px rgba(0, 0, 0, 0.1),
        inset 4px 4px 8px rgba(255, 255, 255, 0.6),
        inset -4px -4px 8px rgba(0, 0, 0, 0.05)
    `,
    zIndex: 1000,
    transition: 'all 0.3s ease',
};

const navStyle = {
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
};

const navLinkStyle = {
    color: '#1f2937',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '15px',
    padding: '10px 18px',
    borderRadius: '12px',
    backgroundColor: '#f0f0f3',
    boxShadow: '6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff',
    transition: 'all 0.3s ease',
};

const activeLinkStyle = {
    fontWeight: '600',
    backgroundColor: '#e0e0e0',
    boxShadow: 'inset 4px 4px 8px rgba(192, 192, 192, 0.61), inset -4px -4px 8px #ffffff',
};

const buttonStyle = {
    backgroundColor: '#f0f0f3',
    color: '#3b82f6',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '15px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    boxShadow: '6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff',
    transition: 'all 0.3s ease',
};

const buttonHoverStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: `
        inset 2px 2px 4px rgba(255, 255, 255, 0.5),
        inset -2px -2px 4px rgba(0, 0, 0, 0.05),
        0 4px 12px rgba(0, 0, 0, 0.05)
    `,
};

const navHoverStyle = {
    backgroundColor: '#f0f0f3',
    boxShadow: 'inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #ffffff',
    transition: 'all 0.3s ease',
};

const floatingButtonContainerStyle = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    zIndex: 1000,
    display: 'none',
    flexDirection: 'column',
    alignItems: 'flex-end',
};

const floatingButtonStyle = {
    backgroundColor: '#3b82f6',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    fontSize: '28px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
};

const mobileMenuStyle = {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    gap: '10px',
};

const mobileNavLinkStyle = {
    textDecoration: 'none',
    color: '#1f2937',
    padding: '10px 15px',
    borderRadius: '8px',
    backgroundColor: '#f0f0f3',
    boxShadow: '2px 2px 6px #d1d9e6, -2px -2px 6px #ffffff',
    fontWeight: '500',
    textAlign: 'center',
};

export default Header;
