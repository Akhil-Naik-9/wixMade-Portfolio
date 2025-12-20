import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollToTop } from '@/lib/scroll-to-top';
import LoadingScreen from '@/components/ui/loading-screen';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [hasShownLoading, setHasShownLoading] = useState(false);
  const location = useLocation();

  // Show loading screen only once per session
  useEffect(() => {
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoadingScreen');
    if (hasSeenLoading) {
      setShowLoadingScreen(false);
      setHasShownLoading(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoadingScreen(false);
    setHasShownLoading(true);
    sessionStorage.setItem('hasSeenLoadingScreen', 'true');
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Certificates', href: '/certificates' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Loading Screen */}
      {showLoadingScreen && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {/* Main App Content */}
      <div className={showLoadingScreen ? 'hidden' : 'block'}>
        <ScrollToTop />
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 glassmorphism-nav">
        <nav className="max-w-[120rem] mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="font-heading text-xl font-bold bg-gradient-to-r from-electric-purple to-hot-pink bg-clip-text text-transparent hover:from-electric-purple/80 hover:to-hot-pink/80 transition-all flex items-center space-x-2"
            >
              <Image 
                src="https://static.wixstatic.com/media/e6a693_cd0a358e5da4470e9b2d9902a0701688~mv2.png"
                alt="Akhil Nenavath Logo"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover bg-black p-1"
              />
              <span>Akhil Nenavath</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-paragraph text-sm font-medium transition-colors hover:text-electric-purple ${
                    location.pathname === item.href
                      ? 'text-electric-purple'
                      : 'text-foreground/70'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Social Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://github.com/Akhil-Naik-9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-electric-purple transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/akhil-nenavath-78430a2ba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-hot-pink transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <Link
                to="/contact#get-in-touch"
                className="text-foreground/70 hover:text-cyber-orange transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-foreground hover:text-electric-purple transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glassmorphism-card mx-4 mb-4"
            >
              <div className="py-4 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-2 font-paragraph text-sm font-medium transition-colors hover:text-electric-purple ${
                      location.pathname === item.href
                        ? 'text-electric-purple bg-electric-purple/10'
                        : 'text-foreground/70'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Social Links */}
                <div className="flex items-center justify-center space-x-6 pt-4 border-t border-foreground/10">
                  <a
                    href="https://github.com/Akhil-Naik-9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-electric-purple transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/akhil-nenavath-78430a2ba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-hot-pink transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <Link
                    to="/contact#get-in-touch"
                    className="text-foreground/70 hover:text-cyber-orange transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Main Content */}
      <main className="pt-20">
        <Outlet />
      </main>
      {/* Footer */}
      <footer className="bg-background border-t border-foreground/10 mt-20">
        <div className="max-w-[120rem] mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image 
                  src="https://static.wixstatic.com/media/e6a693_cd0a358e5da4470e9b2d9902a0701688~mv2.png"
                  alt="Akhil Nenavath Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover bg-black p-1"
                />
                <h3 className="font-heading text-xl font-bold bg-gradient-to-r from-electric-purple to-hot-pink bg-clip-text text-transparent">Akhil Nenavath</h3>
              </div>
              <p className="font-paragraph text-foreground/70 mb-4">
                Full Stack Developer passionate about creating innovative digital experiences.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Akhil-Naik-9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-electric-purple transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/akhil-nenavath-78430a2ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-hot-pink transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <Link
                  to="/contact#get-in-touch"
                  className="text-foreground/70 hover:text-cyber-orange transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.slice(0, 3).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="font-paragraph text-foreground/70 hover:text-electric-purple transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">More</h4>
              <ul className="space-y-2">
                {navigation.slice(3).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="font-paragraph text-foreground/70 hover:text-hot-pink transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/sitemap"
                    className="font-paragraph text-foreground/70 hover:text-cyber-orange transition-colors"
                  >
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-foreground/10 mt-8 pt-8 text-center">
            <p className="font-paragraph text-foreground/50 text-sm">{"© 2025 Akhil Nenavath. All rights reserved. Built with passion and modern web technologies."}</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}