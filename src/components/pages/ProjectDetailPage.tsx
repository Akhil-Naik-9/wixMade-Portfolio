import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Clock } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { Projects } from '@/entities';
import { Image } from '@/components/ui/image';

const projectImageMap: { [key: string]: string } = {
  'dashboard-application': 'https://static.wixstatic.com/media/e6a693_168fb10f4f474b7aa323a9363f698e49~mv2.png?originWidth=576&originHeight=384',
  'e-commerce-platform': 'https://static.wixstatic.com/media/e6a693_02b4bd13d21f446791cfbaa452f64886~mv2.png?originWidth=576&originHeight=384',
  'social-media-app': 'https://static.wixstatic.com/media/e6a693_fda96aec10994e50b3401eaa86995b92~mv2.png?originWidth=576&originHeight=384',
  'task-management-system': 'https://static.wixstatic.com/media/e6a693_ac69b8e5c21841b5bc2b8c7d0d83d084~mv2.png?originWidth=576&originHeight=384',
  'real-estate-portal': 'https://static.wixstatic.com/media/e6a693_6d46e2ce323e47a793b7655fbb98d334~mv2.png?originWidth=576&originHeight=384',
  'fitness-tracker': 'https://static.wixstatic.com/media/e6a693_b1cd51f1a49c4f8ab22d0ac23d8c7d8e~mv2.png?originWidth=576&originHeight=384',
};

const getProjectImageUrl = (projectName: string | undefined): string => {
  if (!projectName) {
    return "https://static.wixstatic.com/media/e6a693_1df2ecedb021472ea5e86c141f988f70~mv2.png?originWidth=576&originHeight=384";
  }
  
  const imageName = projectName.toLowerCase().replace(/\s+/g, '-');
  return projectImageMap[imageName] || "https://static.wixstatic.com/media/e6a693_1df2ecedb021472ea5e86c141f988f70~mv2.png?originWidth=576&originHeight=384";
};

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Projects | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      loadProject(id);
    }
  }, [id]);

  const loadProject = async (projectId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const projectData = await BaseCrudService.getById<Projects>('projects', projectId);
      setProject(projectData);
    } catch (error) {
      console.error('Error loading project:', error);
      setError('Project not found');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-paragraph text-foreground/70">Loading project...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="font-paragraph text-foreground/70 mb-8">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/projects"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-paragraph font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back Button */}
      <div className="max-w-[120rem] mx-auto px-4 pt-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-paragraph text-foreground/70 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

      {/* Project Header */}
      <section className="py-12 px-4 max-w-[120rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glassmorphism-card p-0 overflow-hidden block-hover-border">
              <Image
                src={getProjectImageUrl(project.projectName)}
                alt={project.projectName || 'Project'}
                width={600}
                className="w-full h-96 object-cover"
              />
            </div>
          </motion.div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                {project.projectName}
              </h1>
              <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Project Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.category && (
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Tag className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-paragraph text-xs text-foreground/50 uppercase tracking-wide">Category</p>
                    <p className="font-paragraph text-sm font-medium">{project.category}</p>
                  </div>
                </div>
              )}

              {project.completionDate && (
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Calendar className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="font-paragraph text-xs text-foreground/50 uppercase tracking-wide">Completed</p>
                    <p className="font-paragraph text-sm font-medium">{formatDate(project.completionDate)}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-paragraph font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.githubRepoUrl && (
                <a
                  href={project.githubRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-secondary text-secondary px-6 py-3 rounded-lg font-paragraph font-medium hover:bg-secondary/10 transition-colors flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 px-4 max-w-[120rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glassmorphism-card block-hover-border"
            >
              <h2 className="font-heading text-2xl font-semibold mb-6 text-primary">
                Project Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="font-paragraph text-foreground/80 leading-relaxed text-base">
                  {project.fullDescription || project.shortDescription}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skills Used */}
            {project.skillsUsed && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="glassmorphism-card block-hover-border"
              >
                <h3 className="font-heading text-lg font-semibold mb-4 text-secondary">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.skillsUsed.split(',').map((skill, index) => (
                    <span
                      key={index}
                      className="font-paragraph text-sm bg-primary/10 text-primary px-3 py-1 rounded-lg"
                    >
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Project Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glassmorphism-card block-hover-border"
            >
              <h3 className="font-heading text-lg font-semibold mb-4 text-secondary">
                Project Links
              </h3>
              <div className="space-y-3">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-foreground/5 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <ExternalLink className="w-4 h-4 text-primary group-hover:text-primary/80" />
                    <span className="font-paragraph text-sm">Live Demo</span>
                  </a>
                )}
                {project.githubRepoUrl && (
                  <a
                    href={project.githubRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-foreground/5 rounded-lg hover:bg-secondary/10 transition-colors group"
                  >
                    <Github className="w-4 h-4 text-secondary group-hover:text-secondary/80" />
                    <span className="font-paragraph text-sm">Source Code</span>
                  </a>
                )}
              </div>
            </motion.div>

            {/* Project Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="glassmorphism-card block-hover-border"
            >
              <h3 className="font-heading text-lg font-semibold mb-4 text-secondary">
                Project Details
              </h3>
              <div className="space-y-3">
                {project.category && (
                  <div className="flex items-center justify-between">
                    <span className="font-paragraph text-sm text-foreground/70">Category</span>
                    <span className="font-paragraph text-sm font-medium">{project.category}</span>
                  </div>
                )}
                {project.completionDate && (
                  <div className="flex items-center justify-between">
                    <span className="font-paragraph text-sm text-foreground/70">Completed</span>
                    <span className="font-paragraph text-sm font-medium">{formatDate(project.completionDate)}</span>
                  </div>
                )}
                {project.skillsUsed && (
                  <div className="flex items-center justify-between">
                    <span className="font-paragraph text-sm text-foreground/70">Technologies</span>
                    <span className="font-paragraph text-sm font-medium">{project.skillsUsed.split(',').length}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glassmorphism-card text-center block-hover-border"
        >
          <h3 className="font-heading text-xl font-semibold mb-6">
            Explore More Projects
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-paragraph font-medium hover:bg-primary/90 transition-colors"
            >
              View All Projects
            </Link>
            <Link
              to="/contact"
              className="border border-secondary text-secondary px-6 py-3 rounded-lg font-paragraph font-medium hover:bg-secondary/10 transition-colors"
            >
              Discuss a Project
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}