import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'naika0362@gmail.com',
      href: 'mailto:naika0362@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9908988488',
      href: 'tel:+919908988488'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: 'https://maps.google.com/?q=Hyderabad,+India'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Akhil-Naik-9',
      color: 'hover:text-primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/akhil-nenavath-78430a2ba',
      color: 'hover:text-primary'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: 'hover:text-primary'
    }
  ];

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
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Let's discuss your project and explore 
            how we can work together to create something amazing.
          </p>
          
          {/* Quick Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <button
              onClick={() => {
                setShowContactInfo(true);
                // Also open email client
                window.location.href = "mailto:naika0362@gmail.com?subject=Project Inquiry&body=Hi Akhil,%0D%0A%0D%0AI'd like to discuss a project with you.%0D%0A%0D%0APlease let me know when would be a good time to connect.%0D%0A%0D%0ABest regards";
              }}
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-paragraph font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/25"
            >
              <Mail className="w-5 h-5" />
              Email Me Now
            </button>
            <p className="font-paragraph text-sm text-foreground/60 mt-3">
              Click to open your email client and show contact information below
            </p>
          </motion.div>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information - Show after Email Now is clicked */}
          {showContactInfo && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="glassmorphism-card">
                <h3 className="font-heading text-xl font-semibold mb-6 text-secondary">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-3 bg-foreground/5 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-paragraph text-sm text-foreground/70">{info.label}</p>
                        <p className="font-paragraph font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Always visible sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Details - Only show if not already shown above */}
            {!showContactInfo && (
              <div className="glassmorphism-card">
                <h3 className="font-heading text-xl font-semibold mb-6 text-secondary">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-3 bg-foreground/5 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-paragraph text-sm text-foreground/70">{info.label}</p>
                        <p className="font-paragraph font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Availability */}
            <div className="glassmorphism-card">
              <h3 className="font-heading text-xl font-semibold mb-6 text-secondary">
                Availability
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-paragraph font-medium">Response Time</p>
                    <p className="font-paragraph text-sm text-foreground/70">Usually within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-paragraph font-medium">Currently Available</p>
                    <p className="font-paragraph text-sm text-foreground/70">Open for new projects</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glassmorphism-card">
              <h3 className="font-heading text-xl font-semibold mb-6 text-secondary">
                Connect Online
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-foreground/5 rounded-lg transition-colors ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
              <p className="font-paragraph text-sm text-foreground/70 mt-4">
                Follow me for updates on projects, tech insights, and industry news.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glassmorphism-card text-center max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="font-paragraph text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Whether you have a detailed specification or just an idea, I'd love to hear about it. 
            Let's schedule a call to discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:naika0362@gmail.com?subject=Project Inquiry&body=Hi Akhil,%0D%0A%0D%0AI'd like to discuss a project with you.%0D%0A%0D%0APlease let me know when would be a good time to connect.%0D%0A%0D%0ABest regards"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-paragraph font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2 justify-center"
            >
              <Mail className="w-4 h-4" />
              Email Me Directly
            </a>
            <a
              href="tel:+919908988488"
              className="border border-secondary text-secondary px-8 py-3 rounded-lg font-paragraph font-medium hover:bg-secondary/10 transition-colors inline-flex items-center gap-2 justify-center"
            >
              <Phone className="w-4 h-4" />
              Schedule a Call
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}