import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Code, GraduationCap, MapPin } from 'lucide-react';
import React from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showEnterButton, setShowEnterButton] = useState(false);

  const introSteps = [
    {
      text: "Hi, I am Akhil",
      subtext: "Full Stack Developer",
      icon: Code,
      delay: 0
    },
    {
      text: "Computer Science Student",
      subtext: "Passionate about technology",
      icon: GraduationCap,
      delay: 1500
    },
    {
      text: "Building the future",
      subtext: "One line of code at a time",
      icon: Code,
      delay: 3000
    }
  ];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Show each step with delays
    introSteps.forEach((step, index) => {
      const timer = setTimeout(() => {
        setCurrentStep(index);
      }, step.delay);
      timers.push(timer);
    });

    // Show enter button after all steps complete
    const buttonTimer = setTimeout(() => {
      setShowEnterButton(true);
    }, 4500);
    timers.push(buttonTimer);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  const handleEnterClick = () => {
    setIsVisible(false);
    setTimeout(onComplete, 800); // Wait for exit animation
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-background flex items-center justify-center"
        >
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(0, 255, 198, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(100, 255, 218, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 20%, rgba(0, 255, 198, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 80%, rgba(100, 255, 218, 0.1) 0%, transparent 50%)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            />
          </div>

          {/* Content container */}
          <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="flex justify-center"
                >
                  <div className="p-6 bg-primary/10 rounded-full border border-primary/20">
                    {React.createElement(introSteps[currentStep].icon, {
                      className: "w-12 h-12 text-primary"
                    })}
                  </div>
                </motion.div>

                {/* Main text */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="font-heading text-4xl md:text-5xl font-bold text-foreground"
                >
                  {introSteps[currentStep].text.split(' ').map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                      className="inline-block mr-3"
                    >
                      {word === 'Akhil' ? (
                        <span className="text-primary">{word}</span>
                      ) : (
                        word
                      )}
                    </motion.span>
                  ))}
                </motion.h1>

                {/* Subtext */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="font-paragraph text-lg text-foreground/70"
                >
                  {introSteps[currentStep].subtext}
                </motion.p>

                {/* Progress indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1 }}
                  className="flex justify-center space-x-2 mt-8"
                >
                  {introSteps.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index <= currentStep ? 'bg-primary' : 'bg-foreground/20'
                      }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: index <= currentStep ? 1 : 0.7 }}
                      transition={{ duration: 0.3, delay: 1 + (index * 0.1) }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enter Portfolio Button */}
          <AnimatePresence>
            {showEnterButton && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
              >
                <motion.button
                  onClick={handleEnterClick}
                  className="px-8 py-4 bg-primary text-primary-foreground font-heading font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enter the Portfolio
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                y: [null, -100, -200],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}