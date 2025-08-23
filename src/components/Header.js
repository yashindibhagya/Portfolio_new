import React, { useState } from 'react';

const Header = () => {
    const [activeLink, setActiveLink] = useState('home');

    const handleNavClick = (link) => {
        setActiveLink(link);
    };

    const [isHovered, setIsHovered] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);


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
        marginLeft: 50
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

    const links = [
        { name: 'Home', id: 'home' },
        { name: 'Projects', id: 'projects' },
        { name: 'Services', id: 'services' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <>
            {/* Top Glass + Neumorphic Header */}
            <div style={topHeaderStyle}>
                <div style={nameStyle}><img src="../../assets/img/logo.png "></img></div>
                <div style={availabilityStyle}>
                    <span style={greenDotStyle}></span>
                    available for work
                </div>
            </div>

            {/* Bottom Navigation with Glass & Neumorphism */}
            <div style={navContainerStyle}>
                <nav style={navStyle}>
                    {links.map(link => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={() => handleNavClick(link.id)}
                            onMouseEnter={() => setHoveredLink(link.id)}
                            onMouseLeave={() => setHoveredLink(null)}
                            style={{
                                ...navLinkStyle,
                                ...(hoveredLink === link.id ? navHoverStyle : {}),
                                ...(activeLink === link.id ? activeLinkStyle : {}),
                            }}
                        >
                            {link.name}
                        </a>

                    ))}
                    <button
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{
                            ...buttonStyle,
                            ...(isHovered ? buttonHoverStyle : {}),
                        }}
                    >
                        Get Template
                    </button>

                </nav>
            </div>
        </>
    );
};

// Styles
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
    boxShadow: 'inset 4px 4px 8pxrgba(192, 192, 192, 0.61), inset -4px -4px 8px #ffffff',
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
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: `
        inset 2px 2px 4px rgba(255, 255, 255, 0.5),
        inset -2px -2px 4px rgba(0, 0, 0, 0.05),
        0 4px 12px rgba(0, 0, 0, 0.05)
    `,
    transition: 'all 0.3s ease',
};



export default Header;
