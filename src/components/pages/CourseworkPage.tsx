import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, ExternalLink, Award, BookOpen } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { Coursework } from '@/entities';
import { Image } from '@/components/ui/image';

export default function CourseworkPage() {
  const [coursework, setCoursework] = useState<Coursework[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCoursework();
  }, []);

  const loadCoursework = async () => {
    try {
      setIsLoading(true);
      const { items } = await BaseCrudService.getAll<Coursework>('coursework');
      // Sort by completion date (newest first)
      const sortedCoursework = items.sort((a, b) => {
        const dateA = new Date(a.completionDate || a._createdDate || 0);
        const dateB = new Date(b.completionDate || b._createdDate || 0);
        return dateB.getTime() - dateA.getTime();
      });
      setCoursework(sortedCoursework);
    } catch (error) {
      console.error('Error loading coursework:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long'
    });
  };

  const getGradeColor = (grade: string | undefined) => {
    if (!grade) return 'text-foreground/70';
    const upperGrade = grade.toUpperCase();
    if (upperGrade.includes('A') || upperGrade.includes('EXCELLENT') || upperGrade.includes('DISTINCTION')) {
      return 'text-primary';
    }
    if (upperGrade.includes('B') || upperGrade.includes('GOOD') || upperGrade.includes('MERIT')) {
      return 'text-secondary';
    }
    return 'text-foreground/70';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-paragraph text-foreground/70">Loading coursework...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Academic <span className="text-primary">Coursework</span>
          </h1>
          <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
            A comprehensive overview of my academic journey, including completed courses, 
            certifications, and specialized training programs.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="glassmorphism-card text-center">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-2">
              {coursework.length}
            </h3>
            <p className="font-paragraph text-foreground/70">Courses Completed</p>
          </div>
          
          <div className="glassmorphism-card text-center">
            <div className="p-3 bg-secondary/10 rounded-lg w-fit mx-auto mb-4">
              <GraduationCap className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-secondary mb-2">
              {Array.from(new Set(coursework.map(c => c.institution).filter(Boolean))).length}
            </h3>
            <p className="font-paragraph text-foreground/70">Institutions</p>
          </div>
          
          <div className="glassmorphism-card text-center">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-2">
              {coursework.filter(c => c.certificateUrl).length}
            </h3>
            <p className="font-paragraph text-foreground/70">With Certificates</p>
          </div>
        </motion.div>

        {/* Coursework Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursework.map((course, index) => (
            <motion.div
              key={course._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glassmorphism-card group hover:border-primary/30 transition-all duration-300"
            >
              {/* Course Image */}
              {course.courseImage && (
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <Image
                    src={course.courseImage}
                    alt={course.courseTitle || 'Course'}
                    width={400}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )}

              {/* Course Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                    {course.courseTitle}
                  </h3>
                  {course.institution && (
                    <p className="font-paragraph text-secondary font-medium mb-3">
                      {course.institution}
                    </p>
                  )}
                  {course.courseDescription && (
                    <p className="font-paragraph text-sm text-foreground/70 line-clamp-3">
                      {course.courseDescription}
                    </p>
                  )}
                </div>

                {/* Course Details */}
                <div className="space-y-3">
                  {course.completionDate && (
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-foreground/50" />
                      <span className="font-paragraph text-sm text-foreground/70">
                        Completed: {formatDate(course.completionDate)}
                      </span>
                    </div>
                  )}
                  
                  {course.gradeResult && (
                    <div className="flex items-center gap-3">
                      <Award className="w-4 h-4 text-foreground/50" />
                      <span className={`font-paragraph text-sm font-medium ${getGradeColor(course.gradeResult)}`}>
                        Grade: {course.gradeResult}
                      </span>
                    </div>
                  )}
                </div>

                {/* Certificate Link */}
                {course.certificateUrl && (
                  <div className="pt-4 border-t border-foreground/10">
                    <a
                      href={course.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-paragraph text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {coursework.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="p-4 bg-foreground/5 rounded-full w-fit mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-foreground/50" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-4">No Coursework Found</h3>
            <p className="font-paragraph text-foreground/70">
              Coursework information will be displayed here once available.
            </p>
          </motion.div>
        )}
      </section>

      {/* Learning Philosophy */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glassmorphism-card text-center max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Continuous <span className="text-secondary">Learning</span>
          </h2>
          <p className="font-paragraph text-lg text-foreground/70 mb-8 leading-relaxed">
            I believe in the power of continuous learning and staying updated with the latest 
            technologies and industry best practices. Each course and certification represents 
            a step forward in my professional development journey.
          </p>
          <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
            From foundational computer science concepts to cutting-edge frameworks and tools, 
            my coursework reflects a commitment to both depth and breadth in technical knowledge.
          </p>
        </motion.div>
      </section>

      {/* Skills Gained */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Skills <span className="text-primary">Acquired</span>
          </h2>
          <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
            Key competencies developed through academic coursework and professional training
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { category: 'Programming', skills: ['Python', 'JavaScript', 'Java', 'C++'] },
            { category: 'Web Development', skills: ['React', 'Node.js', 'HTML/CSS', 'REST APIs'] },
            { category: 'Data & Databases', skills: ['SQL', 'MongoDB', 'Data Analysis', 'PostgreSQL'] },
            { category: 'Tools & Methods', skills: ['Git', 'Agile', 'Testing', 'DevOps'] }
          ].map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glassmorphism-card"
            >
              <h3 className="font-heading text-lg font-semibold mb-4 text-primary">
                {skillGroup.category}
              </h3>
              <div className="space-y-2">
                {skillGroup.skills.map((skill) => (
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
    </div>
  );
}