import { useEffect, useState, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

// Splash animation with vibrant gradient and glow
const splashAnimation = keyframes`
  0% {
    transform: scale(0.3);
    opacity: 0.9;
    filter: blur(2px);
  }
  50% {
    transform: scale(1.3);
    opacity: 0.6;
    filter: blur(4px);
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
    filter: blur(6px);
  }
`;

const Splash = styled.div.attrs((props) => ({
  style: {
    left: `${props.x - 25}px`,
    top: `${props.y - 25}px`,
  },
}))`
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  background: radial-gradient(circle, #ff6b6b, #feca57, #48dbfb, #5f27cd);
  background-size: 300% 300%;
  animation: ${splashAnimation} 1s ease-out forwards;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2), 0 0 20px rgba(255, 255, 255, 0.3);
  mix-blend-mode: multiply;
`;

// Cursor with dark center & neon border
const Cursor = styled.div.attrs((props) => ({
  style: {
    left: `${props.x - 12}px`,
    top: `${props.y - 12}px`,
    transform: `scale(${props.$isHovering ? 1.8 : 1})`,
    opacity: props.$isHovering ? 0.8 : 1,
  },
}))`
  position: fixed;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #1e1e1e; /* Dark core for visibility */
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 8px rgba(0, 255, 255, 0.6), 0 0 16px rgba(255, 0, 255, 0.4);
  pointer-events: none;
  z-index: 10000;
  transition: transform 0.15s ease, opacity 0.15s ease;
`;

const PaintSplashCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [splashes, setSplashes] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  const createSplash = useCallback((x, y) => {
    const newSplash = { id: Date.now(), x, y };
    setSplashes((prev) => [...prev, newSplash]);
    setTimeout(() => {
      setSplashes((prev) => prev.filter((s) => s.id !== newSplash.id));
    }, 1000);
  }, []);

  useEffect(() => {
    let animationFrameId;
    let lastTime = 0;
    const throttleDelay = 32;

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime >= throttleDelay) {
        lastTime = now;
        setPosition({ x: e.clientX, y: e.clientY });
        if (Math.abs(e.movementX) > 2 || Math.abs(e.movementY) > 2) {
          createSplash(e.clientX, e.clientY);
        }
      } else {
        animationFrameId = requestAnimationFrame(() => {
          setPosition({ x: e.clientX, y: e.clientY });
        });
      }
    };

    const handleHover = (e) => {
      const target = e.target;
      const isInteractive = target.matches('a, button, [role="button"], [data-clickable], a *, button *');
      setIsHovering(isInteractive);
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleHover, { passive: true });
    document.addEventListener('mouseout', () => setIsHovering(false), { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleHover);
      document.removeEventListener('mouseout', () => setIsHovering(false));
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [createSplash]);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      <Cursor x={position.x} y={position.y} $isHovering={isHovering} />
      {splashes.map((splash) => (
        <Splash key={splash.id} x={splash.x} y={splash.y} />
      ))}
    </>
  );
};

export default PaintSplashCursor;
