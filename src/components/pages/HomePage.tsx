import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Briefcase, Award } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function HomePage() {
  const nameVariants = {
    initial: { opacity: 1 },
    animate: {
      opacity: [1, 0.2, 1],
      transition: { duration: 0.2 }
    }
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.02,
        repeat: Infinity,
        repeatType: 'loop' as const
      }
    }
  };

  const name = "Akhil Nenavath";
  const title = "Full Stack Developer";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Glitching Effect */}
      <section className="h-screen grid place-items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-teal/5 via-transparent to-secondary/5"></div>
        <div className="text-center z-10 max-w-6xl mx-auto px-4">
          <motion.h1 
            className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
            variants={containerVariants}
            animate="animate"
          >
            {name.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={nameVariants}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-paragraph text-xl md:text-2xl text-secondary">
              {title} & Creative Problem Solver
            </h2>
            
            <p className="font-paragraph text-base md:text-lg max-w-2xl mx-auto text-foreground/80">
              Crafting digital experiences with modern technologies. 
              Passionate about clean code, innovative solutions, and continuous learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link 
                to="/projects"
                data-cursor="pointer"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-paragraph font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                View My Work <ArrowRight className="w-4 h-4" />
              </Link>
              <a 
                href="mailto:naika0362@gmail.com?subject=Project Inquiry&body=Hi Akhil,%0D%0A%0D%0AI'd like to discuss a project with you.%0D%0A%0D%0APlease let me know when would be a good time to connect.%0D%0A%0D%0ABest regards"
                data-cursor="pointer"
                className="border border-primary text-primary px-8 py-3 rounded-lg font-paragraph font-medium hover:bg-primary/10 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Diagonal accent lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-teal/30 to-transparent transform rotate-12"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent transform -rotate-12"></div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Projects Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glassmorphism-card group cursor-pointer"
            data-cursor="pointer"
          >
            <Link to="/projects" className="block h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">Projects</h3>
              </div>
              <p className="font-paragraph text-foreground/70 mb-4">
                Explore my latest web applications, mobile apps, and creative coding projects.
              </p>
              <div className="flex items-center text-primary font-paragraph font-medium group-hover:gap-3 transition-all">
                View Projects <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glassmorphism-card group cursor-pointer"
            data-cursor="pointer"
          >
            <Link to="/about" className="block h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">Experience</h3>
              </div>
              <p className="font-paragraph text-foreground/70 mb-4">
                Learn about my journey, skills, and professional background in tech.
              </p>
              <div className="flex items-center text-secondary font-paragraph font-medium group-hover:gap-3 transition-all">
                About Me <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </motion.div>



          {/* Certificates Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glassmorphism-card group cursor-pointer"
            data-cursor="pointer"
          >
            <Link to="/certificates" className="block h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">Certificates</h3>
              </div>
              <p className="font-paragraph text-foreground/70 mb-4">
                View my professional certifications and achievements.
              </p>
              <div className="flex items-center text-secondary font-paragraph font-medium group-hover:gap-3 transition-all">
                View Credentials <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            'React', 'Java', 'Core Java', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Git'
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphism-card text-center p-6 hover:border-primary/30 transition-colors"
            >
              <span className="font-paragraph font-medium text-sm">{skill}</span>
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
            Connect Me
          </h2>
          <p className="font-paragraph text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              data-cursor="pointer"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-paragraph font-medium hover:bg-primary/90 transition-colors"
            >
              Start a Conversation
            </Link>
            <Link 
              to="/projects"
              data-cursor="pointer"
              className="border border-secondary text-secondary px-8 py-3 rounded-lg font-paragraph font-medium hover:bg-secondary/10 transition-colors"
            >
              View My Portfolio
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}