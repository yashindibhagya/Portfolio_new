import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, PhoneCall, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { socialLinks } from '../config/socialLinks';

const Header = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Update active link based on current route
        const path = location.pathname.substring(1); // remove the leading '/'
        if (path === '' || path === 'home') {
            setActiveLink('home');
        } else if (path === 'projects') {
            setActiveLink('projects');
        } else if (path === 'services') {
            setActiveLink('services');
        } else if (path === 'contact') {
            setActiveLink('contact');
        }
    }, [location]);

    const links = [
        { name: 'Home', id: 'home', path: '/' },
        { name: 'Projects', id: 'projects', path: '/projects' },
        { name: 'Services', id: 'services', path: '/services' },
        { name: 'Contact', id: 'contact', path: '/contact' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* DESKTOP VIEW - Your exact original code */}
            <div className="hidden md:block">
                {/* Top Glass Header */}
                <div style={topHeaderStyle}>
                    <div style={nameStyle}>
                        <img src="../../assets/img/logo.png" alt="Logo" style={{ height: 30 }} />
                    </div>

                    <div style={rightContentStyle}>
                        {/* Availability */}
                        <div style={availabilityStyle}>
                            <span style={greenDotStyle}></span>
                            available for work
                        </div>

                        {/* Divider */}
                        <div style={dividerStyle} />

                        {/* Social Icons */}

                        <div style={socialIconsStyle}>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#fff] shadow-[6px_6px_12px_#bec3c9,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bec3c9,inset_-6px_-6px_12px_#ffffff] transition-all"
                                >
                                    <span className="text-gray-600 "
                                        style={{ size: 20 }}>{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div style={navContainerStyle}>
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
                            href="../../assets/document/Yashindi_Bhagya.pdf"
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
            </div>

            {/* MOBILE VIEW - New addition */}
            <div className="block md:hidden">
                {/* Mobile Top Header */}
                <div style={mobileTopHeaderStyle}>
                    <div style={mobileLogoStyle}>
                        <img src="../../assets/img/logo.png" alt="Logo" style={{ height: 24 }} />
                    </div>

                    <div style={mobileRightStyle}>
                        {/* Availability Indicator */}
                        <div style={mobileAvailabilityStyle}>
                            <span style={mobileGreenDotStyle}></span>
                            <span style={mobileAvailabilityTextStyle}>available for work</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Left Menu Button */}
                <div style={mobileMenuButtonContainerStyle}>
                    <button
                        onClick={toggleMobileMenu}
                        style={mobileMenuButtonBottomStyle}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div style={mobileMenuOverlayStyle}>
                        <div style={mobileMenuStyle}>
                            {/* Mobile Menu Header */}
                            <div style={mobileMenuHeaderStyle}>
                                <div style={mobileAvailabilityFullStyle}>
                                    <span style={mobileGreenDotStyle}></span>
                                    available for work
                                </div>

                                {/* Social Icons */}
                                <div style={mobileSocialIconsStyle}>
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={mobileSocialIconStyle}
                                        >
                                            <span style={{ color: '#6b7280', fontSize: '14px' }}>{social.icon}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Navigation Links */}
                            <div style={mobileNavLinksStyle}>
                                {links.map(link => (
                                    <Link
                                        key={link.id}
                                        to={link.path}
                                        onClick={() => {
                                            setActiveLink(link.id);
                                            closeMobileMenu();
                                        }}
                                        style={{
                                            ...mobileNavLinkStyle,
                                            ...(activeLink === link.id ? mobileActiveLinkStyle : {}),
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                {/* Mobile Resume Download */}
                                <a
                                    href="../../assets/document/Mobile Application developer.pdf"
                                    download
                                    onClick={closeMobileMenu}
                                    style={mobileResumeButtonStyle}
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

// YOUR ORIGINAL DESKTOP STYLES - Exactly as they were
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

// NEW MOBILE STYLES - Using your design aesthetic
const mobileTopHeaderStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: 'inset 2px 2px 5px rgba(255,255,255,0.6), inset -2px -2px 5px rgba(0,0,0,0.05)',
    zIndex: 1000,
};

const mobileLogoStyle = {
    display: 'flex',
    alignItems: 'center',
};

const mobileRightStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
};

const mobileAvailabilityStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
};

const mobileAvailabilityTextStyle = {
    fontSize: '12px',
    fontWeight: '500',
    color: '#111827',
};

const mobileMenuButtonContainerStyle = {
    position: 'fixed',
    bottom: '30px',
    right: '20px',
    zIndex: 1001,
};

const mobileMenuButtonBottomStyle = {
    background: '#f0f0f3',
    border: 'none',
    padding: '14px',
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: '6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1f2937',
    transition: 'all 0.25s ease',
    width: '60px',
    height: '60px',
};

const mobileGreenDotStyle = {
    height: '8px',
    width: '8px',
    backgroundColor: '#22c55e',
    borderRadius: '50%',
    display: 'inline-block',
    boxShadow: '0 0 6px #22c55e',
};

const mobileMenuOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    background: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
};

const mobileMenuStyle = {
    position: 'absolute',
    bottom: '100px',
    right: '20px',
    width: '300px',
    background: '#f0f0f3',
    borderRadius: '25px',
    border: '1px solid rgba(255, 255, 255, 0.6)',
    boxShadow: `
        10px 10px 20px #d1d9e6,
        -10px -10px 20px #ffffff
    `,
    overflow: 'hidden',
    animation: 'slideUp 0.35s ease',
};

const mobileMenuHeaderStyle = {
    padding: '20px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const mobileAvailabilityFullStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#111827',
};

const mobileSocialIconsStyle = {
    display: 'flex',
    gap: '8px',
};

const mobileSocialIconStyle = {
    backgroundColor: '#f0f0f3',
    padding: '6px',
    borderRadius: '8px',
    boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    width: '28px',
    height: '28px',
};

const mobileNavLinksStyle = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
};

const mobileNavLinkStyle = {
    color: '#1f2937',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '16px',
    padding: '14px 20px',
    borderRadius: '15px',
    background: '#f0f0f3',
    boxShadow: '6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff',
    transition: 'all 0.25s ease',
    textAlign: 'center',
};


const mobileActiveLinkStyle = {
    fontWeight: '600',
    background: '#e0e0e0',
    boxShadow: 'inset 6px 6px 12px #c9ced8, inset -6px -6px 12px #ffffff',
};

const mobileResumeButtonStyle = {
    background: '#f0f0f3',
    color: '#3b82f6',
    padding: '14px 20px',
    borderRadius: '18px',
    fontWeight: '600',
    fontSize: '16px',
    boxShadow: '6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'block',
    marginTop: '12px',
    transition: 'all 0.25s ease',
};

export default Header;