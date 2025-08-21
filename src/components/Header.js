import React from 'react';

const Header = () => {
    const topHeaderStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 30px',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        zIndex: 1000,
    };

    const nameStyle = {
        fontFamily: 'cursive',
        fontSize: '22px',
        fontWeight: 'bold',
        color: '#1f2937', // dark text for visibility
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
    };

    return (
        <>
            {/* Top Header */}
            <div style={topHeaderStyle}>
                <div style={nameStyle}>Emile Jones</div>
                <div style={availabilityStyle}>
                    <span style={greenDotStyle}></span>
                    available for work
                </div>
            </div>

            {/* Bottom Navigation Header */}
            <div style={{
                position: 'fixed',
                bottom: '40px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(51, 65, 85, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50px',
                padding: '15px 30px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                zIndex: 1000,
                border: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
                <nav style={{
                    display: 'flex',
                    gap: '35px',
                    alignItems: 'center',
                }}>
                    <a href="#home" style={{
                        color: '#ffffff',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '16px',
                        padding: '8px 16px',
                        borderRadius: '12px',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                    }}>Home</a>
                    <a href="#projects" style={navLinkStyle}>Projects</a>
                    <a href="#services" style={navLinkStyle}>Services</a>
                    <a href="#contact" style={navLinkStyle}>Contact</a>
                    <button style={{
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '15px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '14px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                    }}>Get Template</button>
                </nav>
            </div>
        </>
    );
};

const navLinkStyle = {
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    padding: '8px 16px',
    borderRadius: '12px',
    position: 'relative',
};

export default Header;
