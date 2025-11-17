import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Mail, Phone, ExternalLink, Eye } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const [imageError, setImageError] = useState(false);

  const skills = {
    frontend: ['HTML5', 'CSS', 'JavaScript'],
    backend: ['Java', 'Core Java', 'MongoDB'],
    tools: ['Git', 'AWS', 'VS Code']
  };

  const experience = [];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      school: 'Sreenidhi Institute of Science and Technology',
      period: '2023 - 2027 (Expected)',
      gpa: '7.9/10.0',
      relevant: ['Data Structures', 'Algorithms', 'Web Development', 'Database Systems']
    },
    {
      degree: 'Intermediate (MPC)',
      school: 'Sri Medhavi Junior College',
      period: '2021 - 2023',
      gpa: '951/1000',
      relevant: ['Mathematics', 'Physics', 'Chemistry']
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h1>
            <p className="font-paragraph text-lg text-foreground/80 mb-8 leading-relaxed">
              I'm a computer science student who loves building websites and apps. 
              I enjoy learning new technologies and turning creative ideas into working software. 
              My goal is to create digital solutions that are both useful and easy to use.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/resume"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-paragraph font-medium hover:bg-primary/90 transition-colors flex items-center gap-2 justify-center"
              >
                <Eye className="w-4 h-4" />
                View Resume
              </Link>
              <Link 
                to="/contact"
                className="border border-secondary text-secondary px-6 py-3 rounded-lg font-paragraph font-medium hover:bg-secondary/10 transition-colors flex items-center gap-2 justify-center"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glassmorphism-card">
              <Image
                src={imageError ? "https://static.wixstatic.com/media/e6a693_99e3256982b541c4abe4b3d6e8c1dec7~mv2.png?originWidth=384&originHeight=384" : "https://static.wixstatic.com/media/e6a693_b4b0f7ce9f5d47ecb63841098e35fdaa~mv2.jpg"}
                alt="Akhil Nenavath - Full Stack Developer"
                width={400}
                className="w-full h-96 object-cover object-top scale-110 rounded-xl mb-6 border-[0px] border-[undefined] border-none"
                onError={() => setImageError(true)}
                focalPointX={49.999947471937965}
                focalPointY={47.59764155830116} />
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-foreground/70">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-paragraph text-sm">Hyderabad, India</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-paragraph text-sm">Available for opportunities</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="font-paragraph text-sm">naika0362@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glassmorphism-card"
            >
              <h3 className="font-heading text-xl font-semibold mb-4 capitalize text-primary">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="space-y-2">
                {skillList.map((skill) => (
                  <div
                    key={skill}
                    className="font-paragraph text-sm text-foreground/80 bg-foreground/5 px-3 py-2 rounded-lg"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Experience Section */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-secondary">Experience</span>
          </h2>
          <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
            Beginning my professional journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glassmorphism-card text-center"
          >
            <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
              I'm a fresher looking forward to starting my professional journey in software development. 
              I'm eager to apply my academic knowledge and skills to real-world projects and contribute 
              to innovative solutions while continuing to learn and grow in the field.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Education Section */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Education</span>
          </h2>
          <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
            Academic background and foundation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glassmorphism-card"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-primary mb-1">
                    {edu.degree}
                  </h3>
                  <a 
                    href="https://sreenidhi.edu.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-paragraph text-lg font-medium text-secondary mb-2 hover:text-secondary/80 transition-colors inline-flex items-center gap-1 group"
                  >
                    {edu.school}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
                <div className="text-right">
                  <p className="font-paragraph text-sm text-foreground/70">{edu.period}</p>
                  <p className="font-paragraph text-sm text-foreground/70">CGPA: {edu.gpa}</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-paragraph font-semibold text-foreground mb-2">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.relevant.map((course) => (
                    <span
                      key={course}
                      className="font-paragraph text-sm text-foreground/80 bg-primary/10 px-3 py-1 rounded-lg"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Personal Interests */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glassmorphism-card text-center max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Beyond Coding / <span className="text-secondary">Hobbies</span>
          </h2>
          <p className="font-paragraph text-lg text-foreground/70 mb-8 leading-relaxed">
            When I'm not coding, I like taking photos, playing chess, and trying new recipes. 
            I also enjoy working on open-source projects and learning about new technology 
            through podcasts and tech events.
          </p>
          <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
            Having different hobbies helps me think better and solve problems in new ways 
            when I'm programming.
          </p>
        </motion.div>
      </section>
    </div>
  );
}