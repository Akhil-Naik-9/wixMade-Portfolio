import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Briefcase, Award } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { motion } from 'framer-motion';
import { useThemeStore } from '@/stores/themeStore';
import { BaseCrudService } from '@/integrations';
import { Projects } from '@/entities';

export default function HomePage() {
  const { theme } = useThemeStore();
  const [projects, setProjects] = useState<Projects[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const result = await BaseCrudService.getAll<Projects>('projects', {}, { limit: 3 });
        setProjects(result.items);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
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
      <section className="w-full max-w-[120rem] mx-auto px-4 py-20 md:py-32">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
                variants={itemVariants}
              >
                Hi, I'm <span className="text-blue-500">Akhil Nenavath</span>
              </motion.h1>
              <motion.p
                className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                variants={itemVariants}
              >
                Full Stack Developer | Problem Solver | Tech Enthusiast
              </motion.p>
            </div>

            <motion.p
              className={`text-base md:text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
              variants={itemVariants}
            >
              I build beautiful, scalable web applications with modern technologies. Passionate about creating seamless user experiences and solving complex problems through code.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View My Work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className={`w-full max-w-sm aspect-square rounded-2xl overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <Image
                src="https://static.wixstatic.com/media/e6a693_cd0a358e5da4470e9b2d9902a0701688~mv2.png"
                alt="Akhil Nenavath"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className={`w-full max-w-[120rem] mx-auto px-4 py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Explore some of my recent work and projects
            </p>
          </motion.div>

          {!isLoading && projects.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {projects.map((project) => (
                <motion.div
                  key={project._id}
                  variants={itemVariants}
                  className={`rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} hover:shadow-lg transition-shadow`}
                >
                  {project.projectImage && (
                    <div className="w-full h-48 overflow-hidden bg-gray-200">
                      <Image
                        src={project.projectImage}
                        alt={project.projectName || 'Project'}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold">{project.projectName}</h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.shortDescription}
                    </p>
                    <Link
                      to={`/projects/${project._id}`}
                      className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium transition-colors"
                    >
                      View Project <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : null}

          <motion.div variants={itemVariants} className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium text-lg transition-colors"
            >
              View All Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-[120rem] mx-auto px-4 py-20">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">What I Do</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Specializing in full-stack development and modern web technologies
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {[
              {
                icon: Code,
                title: 'Web Development',
                description: 'Building responsive and performant web applications with React, TypeScript, and modern frameworks.',
              },
              {
                icon: Briefcase,
                title: 'Full Stack Solutions',
                description: 'End-to-end development from frontend UI to backend APIs, databases, and deployment.',
              },
              {
                icon: Award,
                title: 'Best Practices',
                description: 'Following industry standards, clean code principles, and modern development practices.',
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-8 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} hover:shadow-lg transition-shadow`}
              >
                <skill.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className={`w-full max-w-[120rem] mx-auto px-4 py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Have a project in mind? Let's create something amazing together.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
            >
              Get In Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
