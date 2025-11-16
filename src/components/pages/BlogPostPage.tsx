import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { BlogPosts } from '@/entities';
import { Image } from '@/components/ui/image';

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPosts | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPosts[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      loadPost(id);
    }
  }, [id]);

  const loadPost = async (postId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Load the specific post
      const postData = await BaseCrudService.getById<BlogPosts>('blogposts', postId);
      setPost(postData);
      
      // Load related posts (same category, excluding current post)
      const { items: allPosts } = await BaseCrudService.getAll<BlogPosts>('blogposts');
      const related = allPosts
        .filter(p => p._id !== postId && p.category === postData.category)
        .slice(0, 3);
      setRelatedPosts(related);
    } catch (error) {
      console.error('Error loading blog post:', error);
      setError('Blog post not found');
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

  const getReadingTime = (content: string | undefined) => {
    if (!content) return '1 min read';
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readingTime} min read`;
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post?.title || '';

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-paragraph text-foreground/70">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="font-paragraph text-foreground/70 mb-8">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/blog"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-paragraph font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
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
          to="/blog"
          className="inline-flex items-center gap-2 font-paragraph text-foreground/70 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="py-12 px-4 max-w-4xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {post.category && (
            <div className="flex items-center justify-center gap-2 mb-4">
              <Tag className="w-4 h-4 text-secondary" />
              <span className="font-paragraph text-sm text-secondary font-medium uppercase tracking-wide">
                {post.category}
              </span>
            </div>
          )}
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          {post.excerpt && (
            <p className="font-paragraph text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-8">
              {post.excerpt}
            </p>
          )}

          {/* Article Meta */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/60 mb-8">
            {post.author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="font-paragraph font-medium">{post.author}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="font-paragraph">
                {formatDate(post.publicationDate || post._createdDate)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="font-paragraph">{getReadingTime(post.content)}</span>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center justify-center gap-4">
            <span className="font-paragraph text-sm text-foreground/70 flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share:
            </span>
            <div className="flex gap-2">
              <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-foreground/5 hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-4 h-4 text-foreground/70 hover:text-primary" />
              </a>
              <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-foreground/5 hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-foreground/70 hover:text-primary" />
              </a>
              <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-foreground/5 hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-4 h-4 text-foreground/70 hover:text-primary" />
              </a>
            </div>
          </div>
        </motion.header>

        {/* Featured Image */}
        {post.featuredImage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="glassmorphism-card p-0 overflow-hidden">
              <Image
                src={post.featuredImage}
                alt={post.title || 'Article featured image'}
                width={800}
                className="w-full h-96 object-cover"
              />
            </div>
          </motion.div>
        )}

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glassmorphism-card"
        >
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content ? (
              <div 
                className="font-paragraph text-foreground/90 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: post.content.replace(/\n/g, '<br />') 
                }}
              />
            ) : (
              <p className="font-paragraph text-foreground/90 leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </div>
        </motion.div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-4 max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Related <span className="text-primary">Articles</span>
            </h2>
            <p className="font-paragraph text-foreground/70">
              More articles you might find interesting
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <motion.article
                key={relatedPost._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism-card group hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <Image
                    src={relatedPost.featuredImage || "https://static.wixstatic.com/media/e6a693_8b2feb3dc7274649ad8a3a09a82f123c~mv2.png?originWidth=384&originHeight=128"}
                    alt={relatedPost.title || 'Related post'}
                    width={400}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-3">
                  {relatedPost.category && (
                    <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded font-paragraph text-xs font-medium">
                      {relatedPost.category}
                    </span>
                  )}
                  
                  <h3 className="font-heading text-lg font-semibold text-primary group-hover:text-primary/80 transition-colors line-clamp-2">
                    <Link to={`/blog/${relatedPost._id}`}>
                      {relatedPost.title}
                    </Link>
                  </h3>
                  
                  <p className="font-paragraph text-sm text-foreground/70 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-foreground/50">
                    <span className="font-paragraph">
                      {formatDate(relatedPost.publicationDate || relatedPost._createdDate)}
                    </span>
                    <span className="font-paragraph">
                      {getReadingTime(relatedPost.content)}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glassmorphism-card text-center max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Enjoyed This Article?
          </h2>
          <p className="font-paragraph text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            If you found this helpful, check out my other articles or get in touch 
            to discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-paragraph font-medium hover:bg-primary/90 transition-colors"
            >
              Read More Articles
            </Link>
            <Link
              to="/contact"
              className="border border-secondary text-secondary px-6 py-3 rounded-lg font-paragraph font-medium hover:bg-secondary/10 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}