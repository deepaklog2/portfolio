import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ProjectType } from '../lib/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { projects } from '../lib/constants';

export function Projects() {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const filterCategories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'finance', name: 'Finance' },
    { id: 'security', name: 'Security' }
  ];

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.categories.includes(filter)
  );

  return (
    <section 
      id="projects" 
      className="py-20 bg-light-surface dark:bg-dark-surface transition-colors duration-300 relative"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl font-cyber mb-4 text-center neon-text"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          MY <span className="text-light-accent2 dark:text-dark-accent2">PROJECTS</span>
        </motion.h2>
        
        <motion.p 
          className="text-center text-light-muted-foreground dark:text-dark-muted-foreground mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A showcase of my technical capabilities and creative solutions.
        </motion.p>
        
        {/* Filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 overflow-x-auto px-1"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filterCategories.map((category) => (
            <button 
              key={category.id}
              className={`filter-btn px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md hover:bg-light-accent2 dark:hover:bg-dark-accent2 hover:text-light-bg dark:hover:text-dark-bg transition-colors duration-300 whitespace-nowrap ${
                filter === category.id 
                  ? 'bg-light-accent2 dark:bg-dark-accent2 text-light-bg dark:text-dark-bg' 
                  : 'bg-light-bg dark:bg-dark-bg text-light-foreground dark:text-dark-foreground'
              }`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              isInView={isInView} 
            />
          ))}
        </div>
        
        {/* View More Projects button */}
        <motion.div 
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button className="px-4 sm:px-6 py-2 sm:py-3 border border-light-accent1 dark:border-dark-accent1 text-light-foreground dark:text-dark-foreground text-sm sm:text-base font-bold rounded-md hover:bg-light-accent1 dark:hover:bg-dark-accent1 hover:bg-opacity-20 dark:hover:bg-opacity-20 transition-all duration-300">
            VIEW MORE PROJECTS
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isInView }: { project: ProjectType; index: number; isInView: boolean }) {
  return (
    <motion.div 
      className="project-card border border-light-accent1 dark:border-dark-accent1 rounded-lg overflow-hidden bg-light-bg dark:bg-dark-bg group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
      data-category={project.categories.join(' ')}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-light-bg dark:from-dark-bg to-transparent opacity-70"></div>
        <div className="absolute bottom-2 left-3 flex gap-1">
          {project.categories.map((category) => {
            const isAccent1 = category === 'ai';
            return (
              <span 
                key={`${project.id}-${category}`}
                className={`text-xs px-2 py-1 rounded ${
                  isAccent1 
                    ? 'bg-light-accent1 dark:bg-dark-accent1 text-light-foreground dark:text-dark-foreground' 
                    : 'bg-light-accent2 dark:bg-dark-accent2 text-light-bg dark:text-dark-bg'
                }`}
              >
                {category === 'ai' ? 'AI' : category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            );
          })}
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-display mb-2 line-clamp-1">{project.title}</h3>
        <p className="text-light-muted-foreground dark:text-dark-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={`${project.id}-${tech}`} className="px-2 py-0.5 sm:py-1 bg-light-surface dark:bg-dark-surface text-xs rounded">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 sm:py-1 bg-light-surface dark:bg-dark-surface text-xs rounded">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
        <div className="flex justify-between items-center">
          <a 
            href={project.detailsLink} 
            className="text-light-accent2 dark:text-dark-accent2 hover:underline text-xs sm:text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Details
          </a>
          <div className="flex gap-3 sm:gap-4">
            <a 
              href={project.githubLink} 
              className="text-light-foreground dark:text-dark-foreground hover:text-light-accent2 dark:hover:text-dark-accent2 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                className="text-light-foreground dark:text-dark-foreground hover:text-light-accent2 dark:hover:text-dark-accent2 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
