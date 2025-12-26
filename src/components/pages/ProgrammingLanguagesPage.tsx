import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Star, Calendar, ExternalLink, BookOpen, Coffee, Zap, Rocket } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ProgrammingLanguage {
  id: string;
  name: string;
  description: string;
  proficiencyLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  yearsOfExperience: number;
  keyFeatures: string[];
  projects: string[];
  resources: { name: string; url: string }[];
  icon: string;
  color: string;
  lucideIcon: React.ReactNode;
}

const programmingLanguages: ProgrammingLanguage[] = [
  {
    id: 'java',
    name: 'Java',
    description: 'A versatile, object-oriented programming language known for its platform independence and robust ecosystem. Widely used in enterprise applications, Android development, and large-scale systems.',
    proficiencyLevel: 'Advanced',
    yearsOfExperience: 4,
    keyFeatures: [
      'Object-Oriented Programming',
      'Platform Independence (Write Once, Run Anywhere)',
      'Strong Memory Management',
      'Rich Standard Library',
      'Multithreading Support',
      'Enterprise-Grade Security'
    ],
    projects: [
      'E-commerce Web Application',
      'RESTful API Services',
      'Spring Boot Microservices',
      'Android Mobile Apps'
    ],
    resources: [
      { name: 'Oracle Java Documentation', url: 'https://docs.oracle.com/en/java/' },
      { name: 'Spring Framework', url: 'https://spring.io/' },
      { name: 'Java Code Geeks', url: 'https://www.javacodegeeks.com/' }
    ],
    icon: '☕',
    color: 'from-orange-500 to-red-600',
    lucideIcon: <Coffee className="w-6 h-6" />
  },
  {
    id: 'c',
    name: 'C',
    description: 'A foundational programming language that provides low-level access to memory and system resources. Essential for system programming, embedded systems, and understanding computer fundamentals.',
    proficiencyLevel: 'Intermediate',
    yearsOfExperience: 3,
    keyFeatures: [
      'Low-Level Memory Management',
      'Procedural Programming Paradigm',
      'Minimal Runtime Dependencies',
      'Direct Hardware Access',
      'Efficient Performance',
      'Foundation for Other Languages'
    ],
    projects: [
      'System Utilities',
      'Embedded System Programs',
      'Data Structures Implementation',
      'Operating System Components'
    ],
    resources: [
      { name: 'C Programming Language (K&R)', url: 'https://en.wikipedia.org/wiki/The_C_Programming_Language' },
      { name: 'GNU C Library', url: 'https://www.gnu.org/software/libc/' },
      { name: 'Learn C Programming', url: 'https://www.learn-c.org/' }
    ],
    icon: '⚡',
    color: 'from-blue-500 to-purple-600',
    lucideIcon: <Zap className="w-6 h-6" />
  },
  {
    id: 'java-core',
    name: 'Java Core',
    description: 'Deep understanding of Java fundamentals including JVM internals, garbage collection, concurrency, and advanced language features. Focus on core concepts that power enterprise Java applications.',
    proficiencyLevel: 'Expert',
    yearsOfExperience: 4,
    keyFeatures: [
      'JVM Architecture & Internals',
      'Garbage Collection Optimization',
      'Concurrency & Threading',
      'Collections Framework Mastery',
      'Design Patterns Implementation',
      'Performance Tuning'
    ],
    projects: [
      'High-Performance Web Services',
      'Concurrent Data Processing Systems',
      'Custom Framework Development',
      'JVM Performance Optimization'
    ],
    resources: [
      { name: 'Effective Java by Joshua Bloch', url: 'https://www.oreilly.com/library/view/effective-java/9780134686097/' },
      { name: 'Java Concurrency in Practice', url: 'https://jcip.net/' },
      { name: 'OpenJDK Documentation', url: 'https://openjdk.org/' }
    ],
    icon: '🚀',
    color: 'from-green-500 to-teal-600',
    lucideIcon: <Rocket className="w-6 h-6" />
  }
];

const proficiencyColors = {
  'Beginner': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  'Intermediate': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Advanced': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Expert': 'bg-green-500/20 text-green-300 border-green-500/30'
};

export default function ProgrammingLanguagesPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="max-w-[120rem] mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Code className="w-5 h-5 text-primary" />
              <span className="font-paragraph text-sm text-primary">Programming Expertise</span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Programming <span className="text-primary">Languages</span>
            </h1>
            <p className="font-paragraph text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
              Explore my expertise in various programming languages, from foundational systems programming 
              to enterprise application development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Languages Grid */}
      <section className="py-20 px-4">
        <div className="max-w-[120rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programmingLanguages.map((language, index) => (
              <motion.div
                key={language.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="glassmorphism-card h-full group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`text-4xl p-3 rounded-lg bg-gradient-to-r ${language.color} bg-clip-text`}>
                          {language.icon}
                        </div>
                        <div className="text-primary">
                          {language.lucideIcon}
                        </div>
                      </div>
                      <Badge className={proficiencyColors[language.proficiencyLevel]}>
                        {language.proficiencyLevel}
                      </Badge>
                    </div>
                    <CardTitle className="font-heading text-2xl">{language.name}</CardTitle>
                    <CardDescription className="font-paragraph text-foreground/70">
                      {language.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Experience */}
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="font-paragraph text-sm">
                        {language.yearsOfExperience} years of experience
                      </span>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-heading text-sm font-semibold mb-3">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {language.keyFeatures.slice(0, 3).map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {language.keyFeatures.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{language.keyFeatures.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="font-heading text-sm font-semibold mb-3">Notable Projects</h4>
                      <ul className="space-y-1">
                        {language.projects.slice(0, 2).map((project) => (
                          <li key={project} className="font-paragraph text-sm text-foreground/70 flex items-center gap-2">
                            <Star className="w-3 h-3 text-primary flex-shrink-0" />
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Resources */}
                    <div>
                      <h4 className="font-heading text-sm font-semibold mb-3">Learning Resources</h4>
                      <div className="space-y-2">
                        {language.resources.slice(0, 2).map((resource) => (
                          <a
                            key={resource.name}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-paragraph text-sm text-primary hover:text-primary/80 transition-colors"
                          >
                            <BookOpen className="w-3 h-3" />
                            {resource.name}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-20 px-4 bg-foreground/5">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
              Programming <span className="text-primary">Philosophy</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="glassmorphism-card text-center">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="font-heading text-xl font-semibold mb-3">Problem-Solving Focus</h3>
                <p className="font-paragraph text-foreground/70">
                  Approaching complex challenges with analytical thinking and efficient algorithms.
                </p>
              </div>
              <div className="glassmorphism-card text-center">
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="font-heading text-xl font-semibold mb-3">Clean Code Practices</h3>
                <p className="font-paragraph text-foreground/70">
                  Writing maintainable, readable, and well-documented code following industry standards.
                </p>
              </div>
              <div className="glassmorphism-card text-center">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="font-heading text-xl font-semibold mb-3">Continuous Learning</h3>
                <p className="font-paragraph text-foreground/70">
                  Staying updated with language evolution and emerging programming paradigms.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}