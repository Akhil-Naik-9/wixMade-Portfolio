import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  User, 
  Code, 
  BookOpen, 
  GraduationCap, 
  Award, 
  Image as ImageIcon, 
  Mail, 
  ExternalLink,
  Calendar,
  FileText
} from 'lucide-react';

export default function SitemapPage() {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: Home,
      color: 'text-primary',
      pages: [
        { name: 'Home', path: '/', description: 'Welcome page and portfolio overview' },
        { name: 'About', path: '/about', description: 'Personal background and experience' },
        { name: 'Contact', path: '/contact', description: 'Get in touch and project inquiries' }
      ]
    },
    {
      title: 'Portfolio',
      icon: Code,
      color: 'text-secondary',
      pages: [
        { name: 'Projects', path: '/projects', description: 'Complete project portfolio with filtering' },
        { name: 'Project Details', path: '/projects/[id]', description: 'Individual project showcase pages' }
      ]
    },
    {
      title: 'Content',
      icon: BookOpen,
      color: 'text-primary',
      pages: [
        { name: 'Programming Languages', path: '/programming-languages', description: 'Technologies and languages I work with' },
      ]
    },
    {
      title: 'Education',
      icon: GraduationCap,
      color: 'text-secondary',
      pages: [
        { name: 'Certificates', path: '/certificates', description: 'Professional certifications' }
      ]
    },
    {
      title: 'Utility',
      icon: FileText,
      color: 'text-secondary',
      pages: [
        { name: 'Sitemap', path: '/sitemap', description: 'This page - site structure overview' },
        { name: '404 Error', path: '/404', description: 'Page not found error page' }
      ]
    }
  ];

  const externalLinks = [
    { name: 'GitHub Profile', url: 'https://github.com', description: 'Source code repositories' },
    { name: 'LinkedIn Profile', url: 'https://linkedin.com', description: 'Professional network profile' },
    { name: 'Resume/CV', url: '#', description: 'Downloadable resume document' }
  ];

  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Site <span className="text-primary">Map</span>
          </h1>
          <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
            Complete overview of all pages and sections available on this portfolio website. 
            Navigate easily to any content you're looking for.
          </p>
        </motion.div>

        {/* Site Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="glassmorphism-card text-center">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-2">
              {siteStructure.reduce((total, section) => total + section.pages.length, 0)}
            </h3>
            <p className="font-paragraph text-foreground/70">Total Pages</p>
          </div>
          
          <div className="glassmorphism-card text-center">
            <div className="p-3 bg-secondary/10 rounded-lg w-fit mx-auto mb-4">
              <Home className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-secondary mb-2">
              {siteStructure.length}
            </h3>
            <p className="font-paragraph text-foreground/70">Main Sections</p>
          </div>
          
          <div className="glassmorphism-card text-center">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
              <ExternalLink className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-2">
              {externalLinks.length}
            </h3>
            <p className="font-paragraph text-foreground/70">External Links</p>
          </div>
          
          <div className="glassmorphism-card text-center">
            <div className="p-3 bg-secondary/10 rounded-lg w-fit mx-auto mb-4">
              <Calendar className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-secondary mb-2">
              2024
            </h3>
            <p className="font-paragraph text-foreground/70">Last Updated</p>
          </div>
        </motion.div>

        {/* Site Structure */}
        <div className="space-y-12">
          {siteStructure.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="glassmorphism-card"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-foreground/5 rounded-lg">
                  <section.icon className={`w-6 h-6 ${section.color}`} />
                </div>
                <h2 className="font-heading text-2xl font-semibold text-primary">
                  {section.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.pages.map((page, pageIndex) => (
                  <motion.div
                    key={page.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (pageIndex * 0.05) }}
                    className="bg-foreground/5 rounded-lg p-4 hover:bg-primary/10 transition-colors group"
                  >
                    {page.path.includes('[id]') ? (
                      <div>
                        <h3 className="font-heading text-lg font-medium text-secondary mb-2 group-hover:text-secondary/80 transition-colors">
                          {page.name}
                        </h3>
                        <p className="font-paragraph text-sm text-foreground/70 mb-2">
                          {page.description}
                        </p>
                        <span className="font-paragraph text-xs text-foreground/50 font-mono">
                          {page.path}
                        </span>
                      </div>
                    ) : (
                      <Link to={page.path} className="block">
                        <h3 className="font-heading text-lg font-medium text-secondary mb-2 group-hover:text-secondary/80 transition-colors">
                          {page.name}
                        </h3>
                        <p className="font-paragraph text-sm text-foreground/70 mb-2">
                          {page.description}
                        </p>
                        <span className="font-paragraph text-xs text-foreground/50 font-mono">
                          {page.path}
                        </span>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* External Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glassmorphism-card mt-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-foreground/5 rounded-lg">
              <ExternalLink className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-heading text-2xl font-semibold text-primary">
              External Links
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {externalLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 + (index * 0.1) }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-foreground/5 rounded-lg p-4 hover:bg-secondary/10 transition-colors group block"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-heading text-lg font-medium text-secondary group-hover:text-secondary/80 transition-colors">
                      {link.name}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-foreground/50" />
                  </div>
                  <p className="font-paragraph text-sm text-foreground/70">
                    {link.description}
                  </p>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Site Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="glassmorphism-card mt-12 text-center"
        >
          <h2 className="font-heading text-2xl font-semibold mb-6 text-primary">
            Site Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-lg font-medium mb-2 text-secondary">Built With</h3>
              <p className="font-paragraph text-sm text-foreground/70">
                React, TypeScript, Tailwind CSS, Framer Motion
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-medium mb-2 text-secondary">Last Updated</h3>
              <p className="font-paragraph text-sm text-foreground/70">
                {lastUpdated}
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-medium mb-2 text-secondary">Version</h3>
              <p className="font-paragraph text-sm text-foreground/70">
                v2.0.0
              </p>
            </div>
          </div>
          
          <p className="font-paragraph text-foreground/60 text-sm">
            This sitemap provides a comprehensive overview of all available content. 
            If you can't find what you're looking for, feel free to{' '}
            <Link to="/contact" className="text-primary hover:text-primary/80 transition-colors">
              contact me
            </Link>{' '}
            for assistance.
          </p>
        </motion.div>
      </section>
    </div>
  );
}