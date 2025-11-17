import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Calendar, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResumePage() {
  const handleDownloadResume = () => {
    // Create resume content as a .docx file
    const resumeContent = `
AKHIL NENAVATH
Full Stack Developer

Contact Information:
Email: naika0362@gmail.com
Location: Hyderabad, India
Phone: Available upon request

EDUCATION
Bachelor of Technology in Computer Science and Engineering
Sreenidhi Institute of Science and Technology
2023 - 2027 (Expected)
CGPA: 7.9/10.0

Relevant Coursework:
• Data Structures and Algorithms
• Web Development
• Database Systems
• Software Engineering

TECHNICAL SKILLS
Frontend Development:
• HTML5, CSS3, JavaScript
• React.js, Modern UI/UX Design
• Responsive Web Design

Backend Development:
• Java, Core Java
• MongoDB Database
• RESTful API Development

Tools & Technologies:
• Git Version Control
• AWS Cloud Services
• VS Code IDE
• Agile Development

PROJECTS
Portfolio Website
• Developed a responsive personal portfolio using React and modern web technologies
• Implemented dynamic content management with CMS integration
• Features project showcases, certificate displays, and contact functionality

Web Applications
• Built various web applications demonstrating full-stack development skills
• Utilized modern frameworks and best practices for scalable solutions
• Focus on user experience and performance optimization

CERTIFICATIONS
• Various technical certifications in web development and programming
• Continuous learning through online platforms and courses

PERSONAL INTERESTS
• Photography and creative visual arts
• Open-source project contributions
• Technology trend research and development
• Problem-solving and algorithmic thinking

CAREER OBJECTIVE
Seeking opportunities to apply my technical skills and passion for software development in a dynamic environment. Eager to contribute to innovative projects while continuing to learn and grow as a professional developer.
`;

    // Create a blob with the resume content
    const blob = new Blob([resumeContent], { 
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
    });
    
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Akhil_Nenavath_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the object URL
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="py-8 px-4 max-w-[120rem] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/about" 
            className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to About
          </Link>
          <button 
            onClick={handleDownloadResume}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-paragraph font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>
      </section>

      {/* Resume Content */}
      <section className="px-4 max-w-4xl mx-auto pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white text-gray-900 p-8 md:p-12 rounded-lg shadow-2xl"
        >
          {/* Header */}
          <div className="text-center mb-8 border-b border-gray-200 pb-6">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              AKHIL NENAVATH
            </h1>
            <p className="font-paragraph text-xl text-gray-600 mb-4">Full Stack Developer</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                naika0362@gmail.com
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Hyderabad, India
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                +91 9908988488
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              EDUCATION
            </h2>
            <div className="mb-4">
              <h3 className="font-paragraph text-lg font-semibold text-gray-800">
                Bachelor of Technology in Computer Science and Engineering
              </h3>
              <p className="font-paragraph text-gray-700">Sreenidhi Institute of Science and Technology</p>
              <p className="font-paragraph text-gray-600">2023 - 2027 (Expected) | CGPA: 7.9/10.0</p>
            </div>
            <div>
              <h4 className="font-paragraph font-semibold text-gray-800 mb-2">Relevant Coursework:</h4>
              <ul className="font-paragraph text-gray-700 space-y-1">
                <li>• Data Structures and Algorithms</li>
                <li>• Web Development</li>
                <li>• Database Systems</li>
                <li>• Software Engineering</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-paragraph text-lg font-semibold text-gray-800 mb-2">Frontend Development</h3>
                <ul className="font-paragraph text-gray-700 space-y-1">
                  <li>• HTML5, CSS3, JavaScript</li>
                  <li>• React.js, Modern UI/UX Design</li>
                  <li>• Responsive Web Design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-paragraph text-lg font-semibold text-gray-800 mb-2">Backend Development</h3>
                <ul className="font-paragraph text-gray-700 space-y-1">
                  <li>• Java, Core Java</li>
                  <li>• MongoDB Database</li>
                  <li>• RESTful API Development</li>
                </ul>
              </div>
              <div>
                <h3 className="font-paragraph text-lg font-semibold text-gray-800 mb-2">Tools & Technologies</h3>
                <ul className="font-paragraph text-gray-700 space-y-1">
                  <li>• Git Version Control</li>
                  <li>• AWS Cloud Services</li>
                  <li>• VS Code IDE</li>
                  <li>• Agile Development</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              PROJECTS
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-paragraph text-lg font-semibold text-gray-800">Portfolio Website</h3>
                <ul className="font-paragraph text-gray-700 space-y-1 mt-2">
                  <li>• Developed a responsive personal portfolio using React and modern web technologies</li>
                  <li>• Implemented dynamic content management with CMS integration</li>
                  <li>• Features project showcases, certificate displays, and contact functionality</li>
                </ul>
              </div>
              <div>
                <h3 className="font-paragraph text-lg font-semibold text-gray-800">Web Applications</h3>
                <ul className="font-paragraph text-gray-700 space-y-1 mt-2">
                  <li>• Built various web applications demonstrating full-stack development skills</li>
                  <li>• Utilized modern frameworks and best practices for scalable solutions</li>
                  <li>• Focus on user experience and performance optimization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              CERTIFICATIONS
            </h2>
            <ul className="font-paragraph text-gray-700 space-y-1">
              <li>• Various technical certifications in web development and programming</li>
              <li>• Continuous learning through online platforms and courses</li>
            </ul>
          </div>

          {/* Personal Interests */}
          <div className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              PERSONAL INTERESTS
            </h2>
            <ul className="font-paragraph text-gray-700 space-y-1">
              <li>• Photography and creative visual arts</li>
              <li>• Open-source project contributions</li>
              <li>• Technology trend research and development</li>
              <li>• Problem-solving and algorithmic thinking</li>
            </ul>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              CAREER OBJECTIVE
            </h2>
            <p className="font-paragraph text-gray-700 leading-relaxed">
              Seeking opportunities to apply my technical skills and passion for software development in a dynamic environment. 
              Eager to contribute to innovative projects while continuing to learn and grow as a professional developer.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}