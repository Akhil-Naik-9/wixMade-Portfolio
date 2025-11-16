import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';
import { BlogPosts } from '@/entities';
import { Image } from '@/components/ui/image';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPosts[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPosts[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [posts, searchTerm, selectedCategory]);

  const loadPosts = async () => {
    try {
      setIsLoading(true);
      const { items } = await BaseCrudService.getAll<BlogPosts>('blogposts');
      // Sort by publication date (newest first)
      const sortedPosts = items.sort((a, b) => {
        const dateA = new Date(a.publicationDate || a._createdDate || 0);
        const dateB = new Date(b.publicationDate || b._createdDate || 0);
        return dateB.getTime() - dateA.getTime();
      });
      setPosts(sortedPosts);
    } catch (error) {
      console.error('Error loading blog posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterPosts = () => {
    let filtered = posts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  };

  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category).filter(Boolean)))];

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-paragraph text-foreground/70">Loading blog posts...</p>
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
            Tech <span className="text-primary">Blog</span>
          </h1>
          <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
            Thoughts on technology, development practices, industry trends, and lessons learned 
            from building modern web applications.
          </p>
        </motion.div>

        {/* Search and Filter */}
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
                placeholder="Search articles..."
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
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </motion.div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glassmorphism-card mb-16 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                <Image
                  src={filteredPosts[0].featuredImage || "https://static.wixstatic.com/media/e6a693_85eb4b8498c64b94bd71eaf923c97236~mv2.png?originWidth=896&originHeight=576"}
                  alt={filteredPosts[0].title || 'Featured post'}
                  width={600}
                  className="w-full h-64 lg:h-full object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full font-paragraph text-xs font-medium">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col justify-center space-y-4">
                {filteredPosts[0].category && (
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-secondary" />
                    <span className="font-paragraph text-sm text-secondary font-medium">
                      {filteredPosts[0].category}
                    </span>
                  </div>
                )}
                
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                  {filteredPosts[0].title}
                </h2>
                
                <p className="font-paragraph text-foreground/80 leading-relaxed">
                  {filteredPosts[0].excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-foreground/60">
                  {filteredPosts[0].author && (
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span className="font-paragraph">{filteredPosts[0].author}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-paragraph">
                      {formatDate(filteredPosts[0].publicationDate || filteredPosts[0]._createdDate)}
                    </span>
                  </div>
                  <span className="font-paragraph">
                    {getReadingTime(filteredPosts[0].content)}
                  </span>
                </div>
                
                <Link
                  to={`/blog/${filteredPosts[0]._id}`}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-paragraph font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2 w-fit"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              className="glassmorphism-card group hover:border-primary/30 transition-all duration-300"
            >
              {/* Post Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <Image
                  src={post.featuredImage || "https://static.wixstatic.com/media/e6a693_93e68cca03b34a9c9edd6f4769f9761e~mv2.png?originWidth=576&originHeight=384"}
                  alt={post.title || 'Blog post'}
                  width={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {post.category && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-background/80 backdrop-blur-sm text-primary px-2 py-1 rounded font-paragraph text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Post Content */}
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors line-clamp-2">
                  <Link to={`/blog/${post._id}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="font-paragraph text-sm text-foreground/70 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Post Meta */}
                <div className="flex items-center justify-between text-xs text-foreground/50">
                  <div className="flex items-center gap-3">
                    {post.author && (
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span className="font-paragraph">{post.author}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span className="font-paragraph">
                        {formatDate(post.publicationDate || post._createdDate)}
                      </span>
                    </div>
                  </div>
                  <span className="font-paragraph">
                    {getReadingTime(post.content)}
                  </span>
                </div>

                {/* Read More Link */}
                <Link
                  to={`/blog/${post._id}`}
                  className="inline-flex items-center gap-2 text-primary font-paragraph text-sm font-medium hover:gap-3 transition-all group"
                >
                  Read More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <p className="font-paragraph text-lg text-foreground/70 mb-4">
              No articles found matching your criteria.
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

      {/* Newsletter CTA */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glassmorphism-card text-center max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="font-paragraph text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Get notified when I publish new articles about web development, 
            technology trends, and programming insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-foreground/5 border border-foreground/10 rounded-lg font-paragraph text-sm focus:outline-none focus:border-primary transition-colors"
            />
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-paragraph font-medium hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}