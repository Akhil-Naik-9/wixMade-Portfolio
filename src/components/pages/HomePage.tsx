import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Briefcase, Award } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { useThemeStore } from '@/stores/themeStore';

export default function HomePage() {
  const { theme } = useThemeStore();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className={`relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="z-10 max-w-[120rem] mx-auto px-4 py-24">
          {/* Introduction Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-8 mb-24"
          >
            <h1 className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-center`}>
              <span className="font-normal">Hi</span> I'm Akhil Nenavath
            </h1>
            
            {/* Profile Image */}
            <div className="relative group">
              <div className={`absolute -inset-1 ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'} rounded-full blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}></div>
              
              <div className={`relative ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-full p-2`}>
                <Image
                  src="https://static.wixstatic.com/media/e6a693_65e7d4ea8cfe41b09718e3e1d6bb0256~mv2.png"
                  alt="Akhil Nenavath - Professional Developer"
                  width={200}
                  className={`w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover rounded-full border-4 ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'} shadow-lg group-hover:shadow-xl transition-all duration-500`}
                />
              </div>
            </div>
          </motion.div>

          {/* Self-Introduction Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center space-y-8 pb-16"
          >
            <div className="space-y-6 max-w-4xl">
              <h2 className={`font-heading text-4xl md:text-5xl lg:text-5xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-center`}>
                Self-Introduction/About Me!
              </h2>
              
              <p className={`font-paragraph text-base md:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-center leading-relaxed`}>Good evening. My name is Akhil Nenavath. I am currently studying in the third year of Computer Science and Engineering at Sreenidhi Institute of Science and Technology. Based on market demand as well as my personal interest, I chose full-stack development. Full-stack development mainly consists of three parts: frontend, backend, and database. As per fresher-level requirements, I have learned the necessary skills in each area. In the frontend, I have worked with HTML, CSS, and JavaScript. In the backend, I have knowledge of Core Java, Advanced Java, and basic programming algorithms. On the database side, I have a basic understanding of SQL, PL/SQL, and CRUD operations. I am continuously improving my technical and communication skills to become a skilled software developer.</p>
            </div>
          </motion.div>

          {/* Call-to-Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center pb-24"
          >
            <div className="w-full flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center">
              <Link 
                to="/projects"
                className={`${theme === 'dark' ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'} px-10 py-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-lg whitespace-nowrap w-full sm:w-auto`}
              >
                View My Work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/contact"
                className={`border-2 ${theme === 'dark' ? 'border-white bg-gray-900 text-white hover:bg-gray-800' : 'border-black bg-white text-black hover:bg-gray-50'} px-10 py-4 rounded-lg font-paragraph font-medium transition-all text-center whitespace-nowrap w-full sm:w-auto`}
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className={`py-20 px-4 max-w-[120rem] mx-auto ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Projects Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300'} border rounded-lg p-6 group cursor-pointer hover:shadow-md transition-all`}
          >
            <Link to="/projects" className="block h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-200'}`}>
                  <Code className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
                </div>
                <h3 className={`font-heading text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Projects</h3>
              </div>
              <p className={`font-paragraph mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Explore my latest web applications, mobile apps, and creative coding projects.
              </p>
              <div className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-paragraph font-medium group-hover:gap-3 transition-all`}>
                View Projects <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300'} border rounded-lg p-6 group cursor-pointer hover:shadow-md transition-all`}
          >
            <Link to="/about" className="block h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-200'}`}>
                  <Briefcase className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
                </div>
                <h3 className={`font-heading text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Experience</h3>
              </div>
              <p className={`font-paragraph mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Learn about my journey, skills, and professional background in tech.
              </p>
              <div className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-paragraph font-medium group-hover:gap-3 transition-all`}>
                About Me <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </motion.div>

          {/* Certificates Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300'} border rounded-lg p-6 group cursor-pointer hover:shadow-md transition-all`}
          >
            <Link to="/certificates" className="block h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg border ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-200'}`}>
                  <Award className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
                </div>
                <h3 className={`font-heading text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Certificates</h3>
              </div>
              <p className={`font-paragraph mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                View my professional certifications and achievements.
              </p>
              <div className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-paragraph font-medium group-hover:gap-3 transition-all`}>
                View Credentials <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className={`py-20 px-4 max-w-[120rem] mx-auto ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className={`font-heading text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
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
              className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300'} border text-center p-6 hover:shadow-md transition-all group relative overflow-hidden rounded-lg`}
            >
              <span className={`font-paragraph font-medium text-sm relative z-10 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 max-w-[120rem] mx-auto ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg text-center max-w-4xl mx-auto p-12`}
        >
          <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Let's Connect
          </h2>
          <p className={`font-paragraph text-lg mb-8 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm always interested in new opportunities and collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className={`${theme === 'dark' ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'} px-8 py-3 rounded-lg font-paragraph font-medium transition-all shadow-lg`}
            >
              Start a Conversation
            </Link>
            <Link 
              to="/projects"
              className={`border-2 ${theme === 'dark' ? 'border-white bg-gray-900 text-white hover:bg-gray-800' : 'border-black bg-white text-black hover:bg-gray-50'} px-8 py-3 rounded-lg font-paragraph font-medium transition-all`}
            >
              View My Portfolio
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
