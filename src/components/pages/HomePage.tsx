import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Briefcase, Award } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { motion } from 'framer-motion';
import { useThemeStore } from '@/stores/themeStore';
import { BaseCrudService } from '@/integrations';
import { Projects, Certificates, Coursework } from '@/entities';

export default function HomePage() {
  const { theme } = useThemeStore();
  const [projects, setProjects] = useState<Projects[]>([]);
  const [certificates, setCertificates] = useState<Certificates[]>([]);
  const [coursework, setCoursework] = useState<Coursework[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsResult, certificatesResult, courseworkResult] = await Promise.all([
          BaseCrudService.getAll<Projects>('projects', {}, { limit: 100 }),
          BaseCrudService.getAll<Certificates>('certificates', {}, { limit: 100 }),
          BaseCrudService.getAll<Coursework>('coursework', {}, { limit: 100 }),
        ]);
        setProjects(projectsResult.items);
        setCertificates(certificatesResult.items);
        setCoursework(courseworkResult.items);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className="w-full max-w-[120rem] mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500">
              <Image
                src="https://static.wixstatic.com/media/e6a693_cd0a358e5da4470e9b2d9902a0701688~mv2.png"
                alt="Akhil Nenavath"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Hi I'm <span className="text-blue-500">Akhil Nenavath</span>
            </h1>
            <p className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Full Stack Developer | Problem Solver | Tech Enthusiast
            </p>
          </motion.div>

          {/* Self-Introduction Section */}
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Self-Introduction (About Me!)</h2>
            <p className={`text-base md:text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a passionate full-stack developer with expertise in building scalable web applications. I love solving complex problems through code and creating seamless user experiences. With a strong foundation in modern technologies and best practices, I'm committed to delivering high-quality solutions.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row justify-center gap-4" variants={itemVariants}>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className={`inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-medium transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-800 hover:bg-gray-700 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Links Section - Projects, Experience, Certificates */}
      <section className={`w-full max-w-[120rem] mx-auto px-4 py-16 md:py-24 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Projects Block */}
          <motion.div
            variants={itemVariants}
            className={`p-8 rounded-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} hover:shadow-lg transition-shadow`}
          >
            <div className="flex items-start gap-4 mb-4">
              <Code className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Projects</h3>
                <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Explore my latest web applications, mobile apps, and creative coding projects.
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium transition-colors"
                >
                  View Projects <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Experience Block */}
          <motion.div
            variants={itemVariants}
            className={`p-8 rounded-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} hover:shadow-lg transition-shadow`}
          >
            <div className="flex items-start gap-4 mb-4">
              <Briefcase className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Experience</h3>
                <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Learn about my journey, skills, and professional background in tech.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium transition-colors"
                >
                  About Me <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Certificates Block */}
          <motion.div
            variants={itemVariants}
            className={`p-8 rounded-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} hover:shadow-lg transition-shadow`}
          >
            <div className="flex items-start gap-4 mb-4">
              <Award className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Certificates</h3>
                <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  View my professional certifications and credentials.
                </p>
                <Link
                  to="/certificates"
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium transition-colors"
                >
                  View Credentials <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full max-w-[120rem] mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Tech Stack</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={containerVariants}
          >
            {[
              'React',
              'Java',
              'Core Java',
              'HTML',
              'CSS',
              'JavaScript',
              'SQL',
              'Git',
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-lg text-center font-medium ${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-gray-700'
                    : 'bg-gray-50 hover:bg-gray-100'
                } transition-colors`}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Let's Connect CTA Section */}
      <section className={`w-full max-w-[120rem] mx-auto px-4 py-16 md:py-24 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Let's Connect</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
            >
              Let's Connect <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
