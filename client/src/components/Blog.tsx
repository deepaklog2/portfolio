import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { blogPosts } from '../lib/constants';

export function Blog() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section 
      id="blog" 
      className="py-16 sm:py-20 bg-light-surface dark:bg-dark-surface transition-colors duration-300 relative"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-2xl sm:text-3xl font-cyber mb-3 sm:mb-4 text-center neon-text"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          LATEST <span className="text-light-accent2 dark:text-dark-accent2">BLOG</span>
        </motion.h2>
        
        <motion.p 
          className="text-center text-sm sm:text-base text-light-muted-foreground dark:text-dark-muted-foreground mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Insights, experiences, and technical articles from my journey.
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              className="bg-light-bg dark:bg-dark-bg border border-light-accent1 dark:border-dark-accent1 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
            >
              <div className="relative h-40 sm:h-48">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover" 
                />
                <div className={`absolute top-2 right-2 text-xs px-2 py-1 rounded ${
                  post.category.includes('Healthcare') 
                    ? 'bg-blue-500 text-white' 
                    : post.category.includes('Aviation')
                      ? 'bg-indigo-600 text-white'
                      : post.category.includes('Career')
                        ? 'bg-light-accent2 dark:bg-dark-accent2 text-light-bg dark:text-dark-bg'
                        : post.category.includes('Finance')
                          ? 'bg-green-500 text-white'
                          : post.category.includes('Entertainment')
                            ? 'bg-purple-500 text-white'
                            : 'bg-light-accent2 dark:bg-dark-accent2 text-light-bg dark:text-dark-bg'
                }`}>
                  {post.category}
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-display mb-2 line-clamp-1">{post.title}</h3>
                <p className="text-light-muted-foreground dark:text-dark-muted-foreground text-xs sm:text-sm mb-3 line-clamp-3">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-light-muted-foreground dark:text-dark-muted-foreground">
                    {post.date}
                  </span>
                  <a 
                    href={post.link} 
                    className="text-light-accent2 dark:text-dark-accent2 text-xs sm:text-sm hover:underline"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All Posts Button */}
        <motion.div 
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="#" 
            className="inline-block px-4 sm:px-6 py-2 sm:py-3 border border-light-accent1 dark:border-dark-accent1 text-light-foreground dark:text-dark-foreground text-sm sm:text-base font-bold rounded-md hover:bg-light-accent1 dark:hover:bg-dark-accent1 hover:bg-opacity-10 dark:hover:bg-opacity-10 transition-all duration-300"
          >
            VIEW ALL BLOG POSTS
          </a>
        </motion.div>
      </div>
    </section>
  );
}
