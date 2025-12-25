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

  const title = "Full Stack Developer";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Glitching Effect */}
      <section className="h-screen grid place-items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/10 via-hot-pink/5 to-electric-blue/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyber-orange/5 via-transparent to-neon-green/8"></div>
        <div className="text-center z-10 max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="font-paragraph text-lg text-gray-700 mb-2 text-center md:text-xl">
              Hi I'm a
            </p>
            <h1 className="font-paragraph text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-hot-pink to-electric-blue bg-clip-text text-transparent">
              {title}
            </h1>
            
            <p className="font-paragraph text-base md:text-lg max-w-2xl mx-auto text-gray-700">
              Crafting digital experiences with modern technologies. 
              Passionate about clean code, innovative solutions, and continuous learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 w-full">
              <Link 
                to="/projects"
                className="bg-gradient-to-r from-electric-purple to-hot-pink px-8 py-3 rounded-lg font-medium hover:from-electric-purple/90 hover:to-hot-pink/90 transition-all flex items-center gap-2 shadow-lg shadow-electric-purple/25 font-alef-regular text-[#121213ff]"
              >
                View My Work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-transparent bg-gradient-to-r from-cyber-orange to-neon-green bg-clip-border text-white px-8 py-3 rounded-lg font-paragraph font-medium hover:shadow-lg hover:shadow-cyber-orange/25 transition-all relative overflow-hidden group"
              >
                <span className="relative z-10 text-[#171616ff]">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-orange/10 to-neon-green/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Diagonal accent lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-purple/40 to-transparent transform rotate-12"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-r from-transparent via-hot-pink/40 to-transparent transform -rotate-12"></div>
        <div className="absolute top-1/3 right-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-orange/30 to-transparent transform rotate-6"></div>
      </section>
      {/* Featured Sections */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto text-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Projects Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-lg p-6 group cursor-pointer hover:border-gray-300 hover:shadow-md transition-all"
          >
            <Link to="/projects" className="block h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-100 rounded-lg border border-purple-200">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900">Projects</h3>
              </div>
              <p className="font-paragraph mb-4 text-gray-600">
                Explore my latest web applications, mobile apps, and creative coding projects.
              </p>
              <div className="flex items-center text-purple-600 font-paragraph font-medium group-hover:gap-3 transition-all">
                View Projects <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white border border-gray-200 rounded-lg p-6 group cursor-pointer hover:border-gray-300 hover:shadow-md transition-all"
          >
            <Link to="/about" className="block h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-100 rounded-lg border border-orange-200">
                  <Briefcase className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900">Experience</h3>
              </div>
              <p className="font-paragraph mb-4 text-gray-600">
                Learn about my journey, skills, and professional background in tech.
              </p>
              <div className="flex items-center text-orange-600 font-paragraph font-medium group-hover:gap-3 transition-all">
                About Me <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </motion.div>



          {/* Certificates Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white border border-gray-200 rounded-lg p-6 group cursor-pointer hover:border-gray-300 hover:shadow-md transition-all"
          >
            <Link to="/certificates" className="block h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg border border-blue-200">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900">Certificates</h3>
              </div>
              <p className="font-paragraph mb-4 text-gray-600">
                View my professional certifications and achievements.
              </p>
              <div className="flex items-center text-blue-600 font-paragraph font-medium group-hover:gap-3 transition-all">
                View Credentials <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Profile Section - Moved above Tech Stack */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Heading above photo */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-electric-purple via-hot-pink to-cyber-orange bg-clip-text drop-shadow-lg text-[#171616ff]">
              I'm Akhil Nenavath
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-purple to-hot-pink mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Highlighted Profile Image */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-electric-purple via-hot-pink to-cyber-orange rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative bg-background rounded-full p-2">
                <Image
                  src="https://static.wixstatic.com/media/e6a693_a094366e46494a0e8518891f93ca4ea6~mv2.png"
                  alt="Akhil Nenavath - Professional Developer"
                  width={200}
                  className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover rounded-full border-4 border-electric-purple/30 shadow-2xl shadow-electric-purple/25 group-hover:shadow-hot-pink/25 transition-all duration-500"
                />
                
                {/* Floating accent elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-hot-pink to-cyber-orange rounded-full animate-bounce delay-100"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-neon-green to-electric-blue rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Tech Stack Section */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-primary">
            Tech Stack
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: 'React', color: 'from-electric-blue to-mint-teal' },
            { name: 'Java', color: 'from-coral-red to-cyber-orange' },
            { name: 'Core Java', color: 'from-sunset-yellow to-hot-pink' },
            { name: 'HTML', color: 'from-electric-purple to-electric-blue' },
            { name: 'CSS', color: 'from-neon-green to-mint-teal' },
            { name: 'JavaScript', color: 'from-hot-pink to-electric-purple' },
            { name: 'SQL', color: 'from-cyber-orange to-coral-red' },
            { name: 'Git', color: 'from-electric-blue to-neon-green' }
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphism-card text-center p-6 hover:border-electric-purple/30 transition-all group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              <span className="font-paragraph font-medium text-sm relative z-10 text-primary-foreground">{skill.name}</span>
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-neon-green via-electric-blue to-electric-purple bg-clip-text text-primary-foreground">
            Connect Me
          </h2>
          <p className="font-paragraph text-lg mb-8 max-w-2xl mx-auto text-primary-foreground">
            I'm always interested in new opportunities and collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-neon-green to-electric-blue px-8 py-3 rounded-lg font-paragraph font-medium hover:from-neon-green/90 hover:to-electric-blue/90 transition-all shadow-lg shadow-neon-green/25 text-[#131313ff]"
            >
              Start a Conversation
            </Link>
            <Link 
              to="/projects"
              className="border-2 border-transparent bg-gradient-to-r from-hot-pink to-electric-purple bg-clip-border text-white px-8 py-3 rounded-lg font-paragraph font-medium hover:shadow-lg hover:shadow-hot-pink/25 transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">View My Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-hot-pink/10 to-electric-purple/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
