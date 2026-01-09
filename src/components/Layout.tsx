import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Moon, Sun } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollToTop } from '@/lib/scroll-to-top';
import LoadingScreen from '@/components/ui/loading-screen';
import { useThemeStore } from '@/stores/themeStore';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [hasShownLoading, setHasShownLoading] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useThemeStore();

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
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Loading Screen */}
      {showLoadingScreen && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      {/* Main App Content */}
      <div className={showLoadingScreen ? 'hidden' : 'block'}>
        <ScrollToTop />
        {/* Header */}
        <header className={`fixed top-0 left-0 right-0 z-50 ${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-b`}>
          <nav className="max-w-[120rem] mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className={`text-xl font-bold ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'} transition-colors flex items-center space-x-2`}
            >
              <Image 
                src="https://static.wixstatic.com/media/e6a693_cd0a358e5da4470e9b2d9902a0701688~mv2.png"
                alt="Akhil Nenavath Logo"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span>Akhil Nenavath</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? theme === 'dark' ? 'text-white' : 'text-gray-900'
                      : theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Social Links and Theme Toggle - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://github.com/Akhil-Naik-9"
                target="_blank"
                rel="noopener noreferrer"
                className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/akhil-nenavath-78430a2ba"
                target="_blank"
                rel="noopener noreferrer"
                className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <Link
                to="/contact#get-in-touch"
                className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>

              {/* Theme Toggle Buttons */}
              <div className="flex items-center gap-2 ml-4 pl-4 border-l" style={{ borderColor: theme === 'dark' ? '#374151' : '#e5e7eb' }}>
                <button
                  onClick={() => setTheme('light')}
                  className={`p-2 rounded-lg transition-colors ${
                    theme === 'light'
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  aria-label="Light mode"
                  title="Light Mode"
                >
                  <Sun className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-800 text-blue-400'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-label="Dark mode"
                  title="Dark Mode"
                >
                  <Moon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              {/* Mobile Theme Toggle */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setTheme('light')}
                  className={`p-2 rounded-lg transition-colors ${
                    theme === 'light'
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  aria-label="Light mode"
                  title="Light Mode"
                >
                  <Sun className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-800 text-blue-400'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  aria-label="Dark mode"
                  title="Dark Mode"
                >
                  <Moon className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'} transition-colors`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden ${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-b mx-4 mb-4 rounded-lg`}
            >
              <div className="py-4 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                      location.pathname === item.href
                        ? theme === 'dark' ? 'text-white bg-gray-800' : 'text-gray-900 bg-gray-100'
                        : theme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Social Links */}
                <div className={`flex items-center justify-center space-x-6 pt-4 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
                  <a
                    href="https://github.com/Akhil-Naik-9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/akhil-nenavath-78430a2ba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <Link
                    to="/contact#get-in-touch"
                    className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
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
      <footer className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border-t mt-20`}>
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
                  className="w-8 h-8 rounded-full object-cover"
                />
                <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Akhil Nenavath</h3>
              </div>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                Full Stack Developer passionate about creating innovative digital experiences.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Akhil-Naik-9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/akhil-nenavath-78430a2ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <Link
                  to="/contact#get-in-touch"
                  className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>Quick Links</h4>
              <ul className="space-y-2">
                {navigation.slice(0, 3).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>More</h4>
              <ul className="space-y-2">
                {navigation.slice(3).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/sitemap"
                    className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  >
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={`border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} mt-8 pt-8 text-center`}>
            <p className={`${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} text-sm`}>© 2025 Akhil Nenavath. All rights reserved. Built with passion and modern web technologies.</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
