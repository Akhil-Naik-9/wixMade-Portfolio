import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CursorPosition {
  x: number;
  y: number;
}

export default function KnifeCursor() {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let velocityX = 0;
    let velocityY = 0;

    const updateMousePosition = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;

      velocityX = newX - lastX;
      velocityY = newY - lastY;

      // Calculate rotation angle based on velocity
      const angle = Math.atan2(velocityY, velocityX) * (180 / Math.PI);
      setRotation(angle);

      setMousePosition({ x: newX, y: newY });
      setIsMoving(true);

      lastX = newX;
      lastY = newY;
    };

    const handleMouseStop = () => {
      setIsMoving(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseStop);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseStop);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Knife cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      >
        <motion.svg
          width="24"
          height="40"
          viewBox="0 0 24 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            rotate: rotation,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
          style={{
            originX: '50%',
            originY: '50%',
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
          }}
        >
          {/* Knife blade */}
          <path
            d="M 12 0 L 14 8 L 14 35 Q 12 38 10 35 L 10 8 Z"
            fill="#000000"
            stroke="#333333"
            strokeWidth="0.5"
          />
          {/* Knife handle */}
          <rect x="9" y="28" width="6" height="8" fill="#8B4513" rx="1" />
          {/* Handle detail */}
          <line x1="12" y1="28" x2="12" y2="36" stroke="#654321" strokeWidth="0.5" />
        </motion.svg>
      </motion.div>

      {/* Trail effect */}
      {isMoving && (
        <motion.div
          className="fixed top-0 left-0 w-1 h-1 rounded-full pointer-events-none z-[9998]"
          style={{
            x: mousePosition.x - 0.5,
            y: mousePosition.y - 0.5,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          }}
          animate={{
            scale: [1, 0],
            opacity: [1, 0],
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
        />
      )}
    </>
  );
}
