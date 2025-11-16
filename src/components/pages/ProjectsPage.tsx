import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';
import { Projects } from '@/entities';
import { Image } from '@/components/ui/image';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Projects[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Projects[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  
  const projectsPerPage = 6;

  useEffect(() => {
    loadProjects();
  }, []);

  useEffect(() => {
    filterProjects();
  }, [projects, searchTerm, selectedCategory]);

  const loadProjects = async () => {
    try {
      setIsLoading(true);
      const { items } = await BaseCrudService.getAll<Projects>('projects');
      
      // Filter out specific projects that should not be displayed
      const projectsToExclude = [
        'Image Gallery',
        'Product Landing Page', 
        'Interactive Quiz Application',
        'Weather Dashboard'
      ];
      
      const filteredItems = items.filter(project => 
        !projectsToExclude.some(excludedName => 
          project.projectName?.toLowerCase().includes(excludedName.toLowerCase())
        )
      );
      
      setProjects(filteredItems);
    } catch (error) {
      console.error('Error loading projects:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterProjects = () => {
    let filtered = projects;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.projectName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.shortDescription?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.skillsUsed?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    setFilteredProjects(filtered);
    setCurrentPage(1);
  };

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category).filter(Boolean)))];

  // Pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-paragraph text-foreground/70">Loading projects...</p>
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
          <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
            A collection of web applications, mobile apps, and creative coding projects 
            that showcase my skills and passion for development.
          </p>
        <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            My <span className="text-primary">Projects</span>
          </h1>
          </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glassmorphism-card mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full lg:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-foreground/5 border border-foreground/10 rounded-lg font-paragraph text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-foreground/50 w-4 h-4" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 font-paragraph text-sm focus:outline-none focus:border-primary transition-colors"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-background">
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="font-paragraph text-sm text-foreground/70">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glassmorphism-card group hover:border-primary/30 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <Image
                  src={project.projectImage || "https://static.wixstatic.com/media/e6a693_0984e99a2417425da9ad38ef4be8f3c6~mv2.png?originWidth=384&originHeight=192"}
                  alt={project.projectName || 'Project'}
                  width={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                    {project.projectName}
                  </h3>
                  <p className="font-paragraph text-sm text-foreground/70 line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Category and Date */}
                <div className="flex items-center justify-between text-xs text-foreground/50">
                  {project.category && (
                    <div className="flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      <span className="font-paragraph">{project.category}</span>
                    </div>
                  )}
                  {project.completionDate && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span className="font-paragraph">{formatDate(project.completionDate)}</span>
                    </div>
                  )}
                </div>

                {/* Skills */}
                {project.skillsUsed && (
                  <div className="flex flex-wrap gap-2">
                    {project.skillsUsed.split(',').slice(0, 3).map((skill, i) => (
                      <span
                        key={i}
                        className="font-paragraph text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                      >
                        {skill.trim()}
                      </span>
                    ))}
                    {project.skillsUsed.split(',').length > 3 && (
                      <span className="font-paragraph text-xs text-foreground/50">
                        +{project.skillsUsed.split(',').length - 3} more
                      </span>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                {(project.liveDemoUrl || project.githubRepoUrl) && (
                  <div className="flex gap-2 pt-4">
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-secondary text-secondary rounded-lg hover:bg-secondary/10 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubRepoUrl && (
                      <a
                        href={project.githubRepoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-secondary text-secondary rounded-lg hover:bg-secondary/10 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center gap-4"
          >
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-foreground/20 rounded-lg font-paragraph text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary transition-colors"
            >
              Previous
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg font-paragraph text-sm transition-colors ${
                    currentPage === page
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-foreground/20 hover:border-primary'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-foreground/20 rounded-lg font-paragraph text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary transition-colors"
            >
              Next
            </button>
          </motion.div>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <p className="font-paragraph text-lg text-foreground/70 mb-4">
              No projects found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-paragraph font-medium hover:bg-primary/90 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </section>
    </div>
  );
}