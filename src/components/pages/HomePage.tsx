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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section with Glitching Effect */}
      <section className="h-screen grid place-items-center relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 via-gray-50/30 to-gray-100/50"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50/30 via-transparent to-gray-100/40"></div>
        <div className="text-center z-10 max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="font-paragraph text-lg text-gray-600 mb-2 text-center md:text-xl">
              Hi I'm a
            </p>
            <h1 className="font-paragraph text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900">
              {title}
            </h1>
            
            <p className="font-paragraph text-base md:text-lg max-w-2xl mx-auto text-gray-600">
              Crafting digital experiences with modern technologies. 
              Passionate about clean code, innovative solutions, and continuous learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 w-full">
              <Link 
                to="/projects"
                className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-all flex items-center gap-2 shadow-lg"
              >
                View My Work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-black bg-white text-black px-8 py-3 rounded-lg font-paragraph font-medium hover:bg-gray-50 transition-all"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Diagonal accent lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent transform rotate-12"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent transform -rotate-12"></div>
        <div className="absolute top-1/3 right-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent transform rotate-6"></div>
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
                <div className="p-3 bg-gray-100 rounded-lg border border-gray-200">
                  <Code className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900">Projects</h3>
              </div>
              <p className="font-paragraph mb-4 text-gray-600">
                Explore my latest web applications, mobile apps, and creative coding projects.
              </p>
              <div className="flex items-center text-gray-900 font-paragraph font-medium group-hover:gap-3 transition-all">
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
                <div className="p-3 bg-gray-100 rounded-lg border border-gray-200">
                  <Briefcase className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900">Experience</h3>
              </div>
              <p className="font-paragraph mb-4 text-gray-600">
                Learn about my journey, skills, and professional background in tech.
              </p>
              <div className="flex items-center text-gray-900 font-paragraph font-medium group-hover:gap-3 transition-all">
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
                <div className="p-3 bg-gray-100 rounded-lg border border-gray-200">
                  <Award className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900">Certificates</h3>
              </div>
              <p className="font-paragraph mb-4 text-gray-600">
                View my professional certifications and achievements.
              </p>
              <div className="flex items-center text-gray-900 font-paragraph font-medium group-hover:gap-3 transition-all">
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
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              I'm Akhil Nenavath
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Highlighted Profile Image */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gray-300 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              
              {/* Image container */}
              <div className="relative bg-white rounded-full p-2">
                <Image
                  src="https://static.wixstatic.com/media/e6a693_a094366e46494a0e8518891f93ca4ea6~mv2.png"
                  alt="Akhil Nenavath - Professional Developer"
                  width={200}
                  className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover rounded-full border-4 border-gray-200 shadow-lg group-hover:shadow-xl transition-all duration-500"
                />
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
          <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Tech Stack
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: 'React' },
            { name: 'Java' },
            { name: 'Core Java' },
            { name: 'HTML' },
            { name: 'CSS' },
            { name: 'JavaScript' },
            { name: 'SQL' },
            { name: 'Git' }
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 text-center p-6 hover:border-gray-300 hover:shadow-md transition-all group relative overflow-hidden rounded-lg"
            >
              <span className="font-paragraph font-medium text-sm relative z-10 text-gray-900">{skill.name}</span>
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
          className="bg-white border border-gray-200 rounded-lg text-center max-w-4xl mx-auto p-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Let's Connect
          </h2>
          <p className="font-paragraph text-lg mb-8 max-w-2xl mx-auto text-gray-600">
            I'm always interested in new opportunities and collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-black text-white px-8 py-3 rounded-lg font-paragraph font-medium hover:bg-gray-900 transition-all shadow-lg"
            >
              Start a Conversation
            </Link>
            <Link 
              to="/projects"
              className="border-2 border-black bg-white text-black px-8 py-3 rounded-lg font-paragraph font-medium hover:bg-gray-50 transition-all"
            >
              View My Portfolio
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
