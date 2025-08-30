import { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const splashAnimation = keyframes`
  0% {
    transform: scale(0.2) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(360deg);
    opacity: 0;
  }
`;

const Splash = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: multiply;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  animation: ${splashAnimation} 0.8s ease-out forwards;
  transform-origin: center;
  ${({ x, y }) => `
    left: ${x - 20}px;
    top: ${y - 20}px;
  `}
`;

const Cursor = styled.div`
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #4ecdc4;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: multiply;
  transition: transform 0.1s ease-out;
  ${({ x, y, isHovering }) => `
    left: ${x - 10}px;
    top: ${y - 10}px;
    transform: scale(${isHovering ? 2 : 1});
    opacity: ${isHovering ? 0.5 : 1};
  `}
`;

const PaintSplashCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [splashes, setSplashes] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add a new splash at the current position
      const newSplash = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };
      
      setSplashes(prev => [...prev, newSplash]);
      
      // Remove the splash after animation completes
      setTimeout(() => {
        setSplashes(prev => prev.filter(splash => splash.id !== newSplash.id));
      }, 800);
    };

    const handleHover = () => {
      const clickableElements = document.querySelectorAll('a, button, [role="button"], [data-clickable]');
      
      const checkHover = (e) => {
        const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
        const isHoveringClickable = clickableElements.some(el => el.contains(hoveredElement));
        setIsHovering(isHoveringClickable);
      };

      document.addEventListener('mousemove', checkHover);
      return () => document.removeEventListener('mousemove', checkHover);
    };

    document.addEventListener('mousemove', updatePosition);
    const hoverCleanup = handleHover();

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      if (hoverCleanup) hoverCleanup();
    };
  }, []);

  return (
    <>
      <Cursor x={position.x} y={position.y} isHovering={isHovering} />
      {splashes.map(splash => (
        <Splash key={splash.id} x={splash.x} y={splash.y} />
      ))}
    </>
  );
};

export default PaintSplashCursor;
