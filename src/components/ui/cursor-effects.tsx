import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CursorPosition {
  x: number;
  y: number;
}

export default function CursorEffects() {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Handle hover states for interactive elements
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      
      if (target.matches('button, a, [role="button"], input, textarea, select')) {
        setIsHovering(true);
        setCursorVariant('button');
      } else if (target.matches('h1, h2, h3, h4, h5, h6')) {
        setIsHovering(true);
        setCursorVariant('text');
      } else if (target.matches('img, video, canvas')) {
        setIsHovering(true);
        setCursorVariant('media');
      } else if (target.matches('[data-cursor="pointer"]')) {
        setIsHovering(true);
        setCursorVariant('pointer');
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      
      if (target.matches('button, a, [role="button"], input, textarea, select, h1, h2, h3, h4, h5, h6, img, video, canvas, [data-cursor="pointer"]')) {
        setIsHovering(false);
        setCursorVariant('default');
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.body.style.cursor = 'auto';
    };
  }, []);

  const cursorVariants = {
    default: {
      scale: 1,
      backgroundColor: 'rgba(0, 255, 198, 0.8)',
      border: '2px solid rgba(0, 255, 198, 0.4)',
    },
    button: {
      scale: 1.5,
      backgroundColor: 'rgba(0, 255, 198, 0.2)',
      border: '2px solid rgba(0, 255, 198, 1)',
    },
    text: {
      scale: 0.8,
      backgroundColor: 'rgba(100, 255, 218, 0.6)',
      border: '1px solid rgba(100, 255, 218, 0.8)',
    },
    media: {
      scale: 2,
      backgroundColor: 'rgba(0, 255, 198, 0.1)',
      border: '3px solid rgba(0, 255, 198, 0.8)',
    },
    pointer: {
      scale: 1.2,
      backgroundColor: 'rgba(0, 255, 198, 0.6)',
      border: '2px solid rgba(0, 255, 198, 0.9)',
    }
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        animate={{
          ...cursorVariants[cursorVariant as keyof typeof cursorVariants],
          scale: isClicking ? 0.8 : cursorVariants[cursorVariant as keyof typeof cursorVariants].scale,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9998]"
        style={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          backgroundColor: 'rgba(0, 255, 198, 0.4)',
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 0.6,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: 0.1,
        }}
      />

      {/* Outer ring for special interactions */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-12 h-12 rounded-full border-2 pointer-events-none z-[9997]"
          style={{
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            borderColor: 'rgba(0, 255, 198, 0.3)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: cursorVariant === 'media' ? 1.5 : 1,
            opacity: 1,
            rotate: 360,
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            rotate: {
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />
      )}

      {/* Click ripple effect */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 pointer-events-none z-[9996]"
          style={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            borderColor: 'rgba(0, 255, 198, 0.8)',
          }}
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
        />
      )}
    </>
  );
}