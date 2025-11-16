import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Mail } from 'lucide-react';

export default function NotFoundPage() {
  const glitchVariants = {
    initial: { opacity: 1, x: 0 },
    animate: {
      opacity: [1, 0.8, 1],
      x: [0, -2, 2, 0],
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: 'loop' as const,
        repeatDelay: 2
      }
    }
  };

  const popularLinks = [
    { name: 'Projects', href: '/projects', description: 'View my latest work' },
    { name: 'About', href: '/about', description: 'Learn more about me' },
    { name: 'Projects', href: '/projects', description: 'View my work' },
    { name: 'Contact', href: '/contact', description: 'Get in touch' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Glitch Effect 404 */}
        <motion.div
          variants={glitchVariants}
          initial="initial"
          animate="animate"
          className="mb-8"
        >
          <h1 className="font-heading text-8xl md:text-9xl font-bold text-primary mb-4 relative">
            404
            <span className="absolute inset-0 text-secondary opacity-30 transform translate-x-1">
              404
            </span>
            <span className="absolute inset-0 text-destructive opacity-20 transform -translate-x-1">
              404
            </span>
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Page Not <span className="text-primary">Found</span>
          </h2>
          <p className="font-paragraph text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Oops! The page you're looking for seems to have vanished into the digital void. 
            It might have been moved, deleted, or perhaps it never existed in the first place.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link
            to="/"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-paragraph font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2 justify-center"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border border-secondary text-secondary px-8 py-3 rounded-lg font-paragraph font-medium hover:bg-secondary/10 transition-colors inline-flex items-center gap-2 justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </motion.div>

        {/* Popular Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="font-heading text-xl font-semibold mb-8 text-secondary">
            Popular Pages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
              >
                <Link
                  to={link.href}
                  className="glassmorphism-card block text-left hover:border-primary/30 transition-all duration-300 group"
                >
                  <h4 className="font-heading text-lg font-semibold text-primary group-hover:text-primary/80 transition-colors mb-2">
                    {link.name}
                  </h4>
                  <p className="font-paragraph text-sm text-foreground/70">
                    {link.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search Suggestion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="glassmorphism-card max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Search className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <h3 className="font-heading text-lg font-semibold text-primary">
                Looking for something specific?
              </h3>
              <p className="font-paragraph text-sm text-foreground/70">
                Try searching or browse through my work
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/projects"
              className="flex-1 bg-foreground/5 hover:bg-primary/10 px-4 py-3 rounded-lg font-paragraph text-sm transition-colors text-center"
            >
              Browse Projects
            </Link>
            <Link
              to="/certificates"
              className="flex-1 bg-foreground/5 hover:bg-primary/10 px-4 py-3 rounded-lg font-paragraph text-sm transition-colors text-center"
            >
              View Certificates
            </Link>
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="font-paragraph text-foreground/60 mb-4">
            Still can't find what you're looking for?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-primary font-paragraph font-medium hover:text-primary/80 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Contact me for help
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-secondary/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/15 rounded-full animate-pulse delay-500"></div>
        
        {/* Diagonal accent lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent transform rotate-12 opacity-50"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent transform -rotate-12 opacity-50"></div>
      </div>
    </div>
  );
}