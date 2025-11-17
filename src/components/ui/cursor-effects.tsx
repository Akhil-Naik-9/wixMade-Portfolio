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
      backgroundColor: 'rgba(139, 92, 246, 0.7)', // Electric purple
      border: '2px solid rgba(236, 72, 153, 0.5)', // Hot pink border
    },
    button: {
      scale: 1.8,
      backgroundColor: 'rgba(236, 72, 153, 0.3)', // Hot pink
      border: '3px solid rgba(139, 92, 246, 1)', // Electric purple border
    },
    text: {
      scale: 0.6,
      backgroundColor: 'rgba(249, 115, 22, 0.6)', // Cyber orange
      border: '1px solid rgba(249, 115, 22, 0.9)',
    },
    media: {
      scale: 2.5,
      backgroundColor: 'rgba(16, 185, 129, 0.2)', // Neon green
      border: '4px solid rgba(16, 185, 129, 0.8)',
    },
    pointer: {
      scale: 1.4,
      backgroundColor: 'rgba(59, 130, 246, 0.5)', // Electric blue
      border: '2px solid rgba(59, 130, 246, 0.9)',
    }
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          borderRadius: cursorVariant === 'text' ? '2px' : cursorVariant === 'media' ? '8px' : '50%',
        }}
        animate={{
          ...cursorVariants[cursorVariant as keyof typeof cursorVariants],
          scale: isClicking ? 0.6 : cursorVariants[cursorVariant as keyof typeof cursorVariants].scale,
          rotate: cursorVariant === 'media' ? 45 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.3,
        }}
      />

      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9998]"
        style={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          backgroundColor: 'rgba(236, 72, 153, 0.4)', // Hot pink trail
        }}
        animate={{
          scale: isHovering ? 3 : 1.5,
          opacity: isHovering ? 0.9 : 0.7,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 18,
          delay: 0.08,
        }}
      />

      {/* Outer ring for special interactions */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-16 h-16 border-2 pointer-events-none z-[9997]"
          style={{
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            borderColor: cursorVariant === 'button' ? 'rgba(139, 92, 246, 0.4)' : 
                        cursorVariant === 'media' ? 'rgba(16, 185, 129, 0.4)' :
                        'rgba(249, 115, 22, 0.4)',
            borderRadius: cursorVariant === 'text' ? '8px' : '50%',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: cursorVariant === 'media' ? 1.8 : cursorVariant === 'button' ? 1.3 : 1,
            opacity: 1,
            rotate: cursorVariant === 'media' ? 360 : cursorVariant === 'button' ? 180 : 0,
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 12,
            rotate: {
              duration: cursorVariant === 'media' ? 3 : 1.5,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />
      )}

      {/* Click ripple effect */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 w-12 h-12 border-3 pointer-events-none z-[9996]"
          style={{
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            borderColor: 'rgba(139, 92, 246, 0.9)', // Electric purple ripple
            borderRadius: '50%',
            borderWidth: '3px',
          }}
          initial={{ scale: 0.3, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
        />
      )}

      {/* Secondary click particles */}
      {isClicking && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9995]"
              style={{
                x: mousePosition.x - 4,
                y: mousePosition.y - 4,
                backgroundColor: i % 2 === 0 ? 'rgba(236, 72, 153, 0.8)' : 'rgba(139, 92, 246, 0.8)',
              }}
              initial={{ 
                scale: 0, 
                x: mousePosition.x - 4, 
                y: mousePosition.y - 4,
                opacity: 1 
              }}
              animate={{ 
                scale: [0, 1, 0],
                x: mousePosition.x - 4 + (Math.cos(i * 60 * Math.PI / 180) * 40),
                y: mousePosition.y - 4 + (Math.sin(i * 60 * Math.PI / 180) * 40),
                opacity: [1, 0.8, 0]
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.05
              }}
            />
          ))}
        </>
      )}
    </>
  );
}