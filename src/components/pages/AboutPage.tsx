import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Mail, Phone, ExternalLink } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function AboutPage() {
  const skills = {
    frontend: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Framer Motion'],
    backend: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'],
    tools: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code', 'Postman'],
    concepts: ['RESTful APIs', 'GraphQL', 'Microservices', 'CI/CD', 'Agile', 'TDD']
  };

  const experience = [
    {
      title: 'Frontend Developer',
      company: 'TechCorp Solutions',
      period: '2023 - Present',
      location: 'San Francisco, CA',
      description: 'Developing responsive web applications using React and TypeScript. Collaborated with design teams to implement pixel-perfect UI components.',
      achievements: [
        'Improved application performance by 40% through code optimization',
        'Led the migration from JavaScript to TypeScript',
        'Mentored 3 junior developers'
      ]
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'StartupXYZ',
      period: '2022 - 2023',
      location: 'Remote',
      description: 'Built full-stack applications using MERN stack. Worked on both frontend and backend development.',
      achievements: [
        'Developed 5+ feature-complete web applications',
        'Implemented automated testing reducing bugs by 60%',
        'Contributed to open-source projects'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of California, Berkeley',
      period: '2020 - 2024',
      gpa: '3.8/4.0',
      relevant: ['Data Structures', 'Algorithms', 'Web Development', 'Database Systems']
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
              I'm a passionate full-stack developer with a love for creating innovative digital experiences. 
              With a strong foundation in computer science and hands-on experience in modern web technologies, 
              I enjoy solving complex problems and bringing ideas to life through code.
            </p>
            <p className="font-paragraph text-lg text-foreground/80 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge through blog posts and mentoring fellow developers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-paragraph font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </button>
              <a 
                href="mailto:akhil@example.com"
                className="border border-secondary text-secondary px-6 py-3 rounded-lg font-paragraph font-medium hover:bg-secondary/10 transition-colors flex items-center gap-2 justify-center"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
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
                src="https://static.wixstatic.com/media/e6a693_34f4f9fe7c154faba16c6ce9a75e5294~mv2.png?originWidth=384&originHeight=384"
                alt="Akhil Nenavath - Full Stack Developer"
                width={400}
                className="w-full h-96 object-cover rounded-xl mb-6"
              />
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-foreground/70">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-paragraph text-sm">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-paragraph text-sm">Available for opportunities</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="font-paragraph text-sm">akhil@example.com</span>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            Professional journey and key accomplishments
          </p>
        </motion.div>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glassmorphism-card"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-primary mb-1">
                    {job.title}
                  </h3>
                  <p className="font-paragraph text-lg font-medium text-secondary mb-2">
                    {job.company}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-paragraph text-sm text-foreground/70">{job.period}</p>
                  <p className="font-paragraph text-sm text-foreground/70">{job.location}</p>
                </div>
              </div>
              
              <p className="font-paragraph text-foreground/80 mb-4">
                {job.description}
              </p>
              
              <div>
                <h4 className="font-paragraph font-semibold text-foreground mb-2">Key Achievements:</h4>
                <ul className="space-y-1">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="font-paragraph text-sm text-foreground/70 flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
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
                  <p className="font-paragraph text-lg font-medium text-secondary mb-2">
                    {edu.school}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-paragraph text-sm text-foreground/70">{edu.period}</p>
                  <p className="font-paragraph text-sm text-foreground/70">GPA: {edu.gpa}</p>
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
            Beyond <span className="text-secondary">Coding</span>
          </h2>
          <p className="font-paragraph text-lg text-foreground/70 mb-8 leading-relaxed">
            When I'm not immersed in code, I enjoy photography, hiking in the Bay Area trails, 
            playing chess, and experimenting with new cooking recipes. I'm also passionate about 
            contributing to open-source projects and staying up-to-date with the latest tech trends 
            through podcasts and tech conferences.
          </p>
          <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
            I believe that diverse interests and experiences make me a better developer, 
            bringing fresh perspectives to problem-solving and creative thinking.
          </p>
        </motion.div>
      </section>
    </div>
  );
}