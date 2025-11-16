import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Image as ImageIcon, Download, Share2, ZoomIn } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { PhotoGalleries } from '@/entities';
import { Image } from '@/components/ui/image';

export default function GalleryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [gallery, setGallery] = useState<PhotoGalleries | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      loadGallery(id);
    }
  }, [id]);

  const loadGallery = async (galleryId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const galleryData = await BaseCrudService.getById<PhotoGalleries>('photogalleries', galleryId);
      setGallery(galleryData);
    } catch (error) {
      console.error('Error loading gallery:', error);
      setError('Gallery not found');
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

  const getPhotos = () => {
    if (!gallery) return [];
    const photos = [];
    if (gallery.photoOne) photos.push(gallery.photoOne);
    if (gallery.photoTwo) photos.push(gallery.photoTwo);
    if (gallery.photoThree) photos.push(gallery.photoThree);
    return photos;
  };

  const photos = getPhotos();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-paragraph text-foreground/70">Loading gallery...</p>
        </div>
      </div>
    );
  }

  if (error || !gallery) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Gallery Not Found</h1>
          <p className="font-paragraph text-foreground/70 mb-8">
            The gallery you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/gallery"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-paragraph font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Gallery
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
          to="/gallery"
          className="inline-flex items-center gap-2 font-paragraph text-foreground/70 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Gallery
        </Link>
      </div>

      {/* Gallery Header */}
      <section className="py-12 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {gallery.galleryName}
          </h1>
          
          {gallery.galleryDescription && (
            <p className="font-paragraph text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-8">
              {gallery.galleryDescription}
            </p>
          )}

          {/* Gallery Meta */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/60 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="font-paragraph">
                {formatDate(gallery.datePublished || gallery._createdDate)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              <span className="font-paragraph">{photos.length} photos</span>
            </div>
          </div>

          {/* Share Button */}
          <button className="inline-flex items-center gap-2 bg-foreground/5 hover:bg-primary/10 px-4 py-2 rounded-lg font-paragraph text-sm transition-colors">
            <Share2 className="w-4 h-4" />
            Share Gallery
          </button>
        </motion.div>

        {/* Cover Image */}
        {gallery.coverImage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="glassmorphism-card p-0 overflow-hidden">
              <Image
                src={gallery.coverImage}
                alt={gallery.galleryName || 'Gallery cover'}
                width={1200}
                className="w-full h-96 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedPhoto(gallery.coverImage!)}
              />
            </div>
          </motion.div>
        )}

        {/* Photo Grid */}
        {photos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="font-heading text-2xl font-semibold mb-8 text-center">
              Gallery <span className="text-primary">Photos</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glassmorphism-card p-0 overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <div className="relative">
                    <Image
                      src={photo}
                      alt={`${gallery.galleryName} - Photo ${index + 1}`}
                      width={400}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-primary text-primary-foreground p-3 rounded-full">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* No Photos Message */}
        {photos.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="p-4 bg-foreground/5 rounded-full w-fit mx-auto mb-6">
              <ImageIcon className="w-8 h-8 text-foreground/50" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-4">No Photos Available</h3>
            <p className="font-paragraph text-foreground/70">
              This gallery doesn't have any photos yet.
            </p>
          </motion.div>
        )}
      </section>

      {/* Gallery Actions */}
      <section className="py-12 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glassmorphism-card text-center"
        >
          <h3 className="font-heading text-xl font-semibold mb-6">
            Explore More Galleries
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/gallery"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-paragraph font-medium hover:bg-primary/90 transition-colors"
            >
              View All Galleries
            </Link>
            <Link
              to="/projects"
              className="border border-secondary text-secondary px-6 py-3 rounded-lg font-paragraph font-medium hover:bg-secondary/10 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Photo Modal */}
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedPhoto}
              alt="Enlarged photo"
              width={800}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-foreground p-2 rounded-full hover:bg-background transition-colors"
            >
              ✕
            </button>
            
            {/* Download Button */}
            <a
              href={selectedPhoto}
              download
              className="absolute bottom-4 right-4 bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-colors"
              title="Download photo"
            >
              <Download className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}