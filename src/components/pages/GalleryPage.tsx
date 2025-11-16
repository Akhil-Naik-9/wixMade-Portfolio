import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Eye, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';
import { PhotoGalleries } from '@/entities';
import { Image } from '@/components/ui/image';

export default function GalleryPage() {
  const [galleries, setGalleries] = useState<PhotoGalleries[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadGalleries();
  }, []);

  const loadGalleries = async () => {
    try {
      setIsLoading(true);
      const { items } = await BaseCrudService.getAll<PhotoGalleries>('photogalleries');
      // Sort by date published (newest first)
      const sortedGalleries = items.sort((a, b) => {
        const dateA = new Date(a.datePublished || a._createdDate || 0);
        const dateB = new Date(b.datePublished || b._createdDate || 0);
        return dateB.getTime() - dateA.getTime();
      });
      setGalleries(sortedGalleries);
    } catch (error) {
      console.error('Error loading galleries:', error);
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

  const getPhotoCount = (gallery: PhotoGalleries) => {
    let count = 0;
    if (gallery.photoOne) count++;
    if (gallery.photoTwo) count++;
    if (gallery.photoThree) count++;
    return count;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-paragraph text-foreground/70">Loading galleries...</p>
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
            Photo <span className="text-primary">Gallery</span>
          </h1>
          <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
            A visual journey through my projects, experiences, and creative moments. 
            Explore collections of photos that tell the story behind the code.
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
              <ImageIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-2">
              {galleries.length}
            </h3>
            <p className="font-paragraph text-foreground/70">Photo Collections</p>
          </div>
          
          <div className="glassmorphism-card text-center">
            <div className="p-3 bg-secondary/10 rounded-lg w-fit mx-auto mb-4">
              <Eye className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-secondary mb-2">
              {galleries.reduce((total, gallery) => total + getPhotoCount(gallery), 0)}
            </h3>
            <p className="font-paragraph text-foreground/70">Total Photos</p>
          </div>
          
          <div className="glassmorphism-card text-center">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-2">
              {new Date().getFullYear()}
            </h3>
            <p className="font-paragraph text-foreground/70">Latest Year</p>
          </div>
        </motion.div>

        {/* Featured Gallery */}
        {galleries.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glassmorphism-card mb-16 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                <Image
                  src={galleries[0].coverImage || "https://static.wixstatic.com/media/e6a693_3101e9cb105344b58b3e1540c70284fc~mv2.png?originWidth=576&originHeight=384"}
                  alt={galleries[0].galleryName || 'Featured gallery'}
                  width={600}
                  className="w-full h-64 lg:h-full object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full font-paragraph text-xs font-medium">
                    Featured
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full font-paragraph text-xs">
                    {getPhotoCount(galleries[0])} photos
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                  {galleries[0].galleryName}
                </h2>
                
                <p className="font-paragraph text-foreground/80 leading-relaxed">
                  {galleries[0].galleryDescription}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-paragraph">
                      {formatDate(galleries[0].datePublished || galleries[0]._createdDate)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4" />
                    <span className="font-paragraph">
                      {getPhotoCount(galleries[0])} photos
                    </span>
                  </div>
                </div>
                
                <Link
                  to={`/gallery/${galleries[0]._id}`}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-paragraph font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2 w-fit"
                >
                  View Gallery <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleries.slice(1).map((gallery, index) => (
            <motion.div
              key={gallery._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              className="glassmorphism-card group hover:border-primary/30 transition-all duration-300"
            >
              {/* Gallery Cover */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <Image
                  src={gallery.coverImage || "https://static.wixstatic.com/media/e6a693_d2eaebb650cd42cbb82bfdb4a1add0b6~mv2.png?originWidth=576&originHeight=384"}
                  alt={gallery.galleryName || 'Gallery'}
                  width={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 right-3">
                  <span className="bg-background/80 backdrop-blur-sm text-foreground px-2 py-1 rounded font-paragraph text-xs">
                    {getPhotoCount(gallery)} photos
                  </span>
                </div>
              </div>

              {/* Gallery Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors line-clamp-2">
                    <Link to={`/gallery/${gallery._id}`}>
                      {gallery.galleryName}
                    </Link>
                  </h3>
                  
                  {gallery.galleryDescription && (
                    <p className="font-paragraph text-sm text-foreground/70 line-clamp-3 mt-2">
                      {gallery.galleryDescription}
                    </p>
                  )}
                </div>

                {/* Gallery Meta */}
                <div className="flex items-center justify-between text-xs text-foreground/50">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span className="font-paragraph">
                      {formatDate(gallery.datePublished || gallery._createdDate)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-3 h-3" />
                    <span className="font-paragraph">
                      {getPhotoCount(gallery)} photos
                    </span>
                  </div>
                </div>

                {/* View Gallery Link */}
                <Link
                  to={`/gallery/${gallery._id}`}
                  className="inline-flex items-center gap-2 text-primary font-paragraph text-sm font-medium hover:gap-3 transition-all group"
                >
                  View Gallery <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {galleries.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="p-4 bg-foreground/5 rounded-full w-fit mx-auto mb-6">
              <ImageIcon className="w-8 h-8 text-foreground/50" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-4">No Galleries Found</h3>
            <p className="font-paragraph text-foreground/70">
              Photo galleries will be displayed here once available.
            </p>
          </motion.div>
        )}
      </section>

      {/* Photography Philosophy */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glassmorphism-card text-center max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Visual <span className="text-secondary">Storytelling</span>
          </h2>
          <p className="font-paragraph text-lg text-foreground/70 mb-8 leading-relaxed">
            Photography allows me to capture moments and tell stories beyond code. 
            Each gallery represents a different aspect of my journey - from project showcases 
            and team collaborations to personal adventures and creative explorations.
          </p>
          <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
            These visual narratives complement my technical work, showing the human side 
            of development and the experiences that shape my perspective as a creator.
          </p>
        </motion.div>
      </section>

      {/* Gallery Categories */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Gallery <span className="text-primary">Categories</span>
          </h2>
          <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
            Different types of visual content you'll find in my galleries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              category: 'Project Showcases', 
              description: 'Behind-the-scenes and final results of development projects',
              icon: '💻'
            },
            { 
              category: 'Team Events', 
              description: 'Collaborative moments and team building activities',
              icon: '👥'
            },
            { 
              category: 'Tech Conferences', 
              description: 'Learning experiences and networking at industry events',
              icon: '🎤'
            },
            { 
              category: 'Creative Work', 
              description: 'Personal photography and artistic explorations',
              icon: '🎨'
            }
          ].map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glassmorphism-card text-center"
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="font-heading text-lg font-semibold mb-3 text-primary">
                {category.category}
              </h3>
              <p className="font-paragraph text-sm text-foreground/70">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}