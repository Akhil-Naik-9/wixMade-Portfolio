import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex@example.com',
      href: 'mailto:alex@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: 'https://maps.google.com/?q=San+Francisco,+CA'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-primary'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: 'hover:text-primary'
    }
  ];

  const projectTypes = [
    'Web Application Development',
    'Mobile App Development',
    'API Development',
    'Database Design',
    'UI/UX Consultation',
    'Code Review & Optimization',
    'Technical Consulting',
    'Other'
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
          <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and explore 
            how we can work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glassmorphism-card"
          >
            <h2 className="font-heading text-2xl font-semibold mb-6 text-primary">
              Send a Message
            </h2>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-primary">
                  Message Sent!
                </h3>
                <p className="font-paragraph text-foreground/70">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-paragraph text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded-lg font-paragraph text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-paragraph text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded-lg font-paragraph text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-paragraph text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded-lg font-paragraph text-sm focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-background">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-paragraph text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded-lg font-paragraph text-sm focus:outline-none focus:border-primary transition-colors resize-vertical"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-paragraph font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
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

      {/* FAQ Section */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
            Common questions about working together and my development process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              question: "What's your typical project timeline?",
              answer: "Project timelines vary based on complexity, but most web applications take 4-8 weeks from concept to deployment. I'll provide a detailed timeline after understanding your requirements."
            },
            {
              question: "Do you work with existing teams?",
              answer: "Absolutely! I enjoy collaborating with existing development teams, designers, and stakeholders. I can integrate seamlessly into your workflow and development processes."
            },
            {
              question: "What technologies do you specialize in?",
              answer: "I specialize in React, TypeScript, Node.js, and modern web technologies. I'm also experienced with cloud platforms like AWS and various databases including PostgreSQL and MongoDB."
            },
            {
              question: "How do you handle project communication?",
              answer: "I believe in transparent communication with regular updates, progress reports, and scheduled check-ins. I'm flexible with communication tools and can adapt to your preferred workflow."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glassmorphism-card"
            >
              <h3 className="font-heading text-lg font-semibold mb-3 text-primary">
                {faq.question}
              </h3>
              <p className="font-paragraph text-foreground/80 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
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
            Ready to Start Your Project?
          </h2>
          <p className="font-paragraph text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Whether you have a detailed specification or just an idea, I'd love to hear about it. 
            Let's schedule a call to discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:alex@example.com"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-paragraph font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2 justify-center"
            >
              <Mail className="w-4 h-4" />
              Email Me Directly
            </a>
            <a
              href="tel:+15551234567"
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