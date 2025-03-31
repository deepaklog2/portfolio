import React, { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { blogPosts } from '../lib/constants';
import { BlogPostType } from '../lib/types';

// Blog post content maps to store the full content of each post
const blogPostContent: Record<string, React.ReactNode> = {
  'aerogenius-blog': (
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Building AeroGenius: AI-Powered Aviation Safety</h1>
      <div className="flex items-center text-xs sm:text-sm text-light-muted-foreground dark:text-dark-muted-foreground mb-4 sm:mb-8">
        <span className="mr-3 sm:mr-4">March 15, 2024</span>
        <span className="bg-indigo-600 text-white text-xs px-2 py-0.5 sm:py-1 rounded">AI & Aviation</span>
      </div>
      
      <img 
        src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8YWlyY3JhZnQsdGVjaG5vbG9neXx8fHx8fDE3MTY5MDMzMTE&ixlib=rb-4.0.3&q=80&w=900" 
        alt="Aviation maintenance with AI" 
        className="w-full h-auto rounded-lg mb-4 sm:mb-8"
      />
      
      <div className="prose prose-sm sm:prose-base md:prose-lg dark:prose-invert max-w-none">
        <h2>The Challenge: Aviation Maintenance & Safety</h2>
        <p>
          Aircraft maintenance is a critical aspect of aviation safety. Traditional inspection methods rely heavily on human visual inspection, which can be subject to fatigue, oversight, and inconsistency. The consequences of missing a defect can be catastrophic, both in terms of human life and financial cost.
        </p>
        <p>
          When I first conceptualized AeroGenius, I was driven by a simple yet powerful question: <strong>How can we apply modern AI technology to enhance aviation safety?</strong> The answer, as it turned out, would involve sophisticated computer vision algorithms, deep learning models, and a tremendous amount of domain expertise in aviation engineering.
        </p>
        
        <h2>The Solution: AI-Powered Defect Detection</h2>
        <p>
          AeroGenius uses a combination of computer vision and deep learning to automatically detect defects in aircraft components. The system can identify cracks, corrosion, wear, and other anomalies that might escape human detection. Here's how we built it:
        </p>
        
        <h3>1. Data Collection and Preparation</h3>
        <p>
          One of the biggest challenges was acquiring appropriate data. We worked with aviation maintenance companies to collect thousands of images of both defective and non-defective aircraft parts. These images were carefully labeled by experienced aviation engineers.
        </p>
        <p>
          We augmented this dataset with synthetic data generation techniques to increase the variety of defects and scenarios the model would encounter. This involved programmatically adding various types of defects to clean images, simulating different lighting conditions, and applying various transformations.
        </p>
        
        <h3>2. Model Architecture and Training</h3>
        <p>
          For defect detection, we implemented a custom convolutional neural network (CNN) based on a modified RetinaNet architecture. This model was chosen for its efficiency in detecting small objects (like cracks) within larger images.
        </p>
        <p>
          Training was conducted on a distributed GPU cluster, with careful hyperparameter tuning to maximize detection accuracy while minimizing false positives. We implemented a weighted loss function that placed extra emphasis on critical defects that could lead to catastrophic failures.
        </p>
        
        <h3>3. Validation and Refinement</h3>
        <p>
          The initial model achieved an accuracy of 87%, which was promising but insufficient for aviation safety standards. We refined the model through several iterations:
        </p>
        <ul>
          <li>Implementing attention mechanisms to focus on areas likely to contain defects</li>
          <li>Adding a segmentation component to precisely outline the boundaries of defects</li>
          <li>Developing a confidence scoring system to flag uncertain detections for human review</li>
          <li>Fine-tuning with hard examples where the model initially failed</li>
        </ul>
        <p>
          These refinements pushed accuracy to an impressive 95%, exceeding the industry standard for automated inspection systems.
        </p>
        
        <h2>Real-World Implementation</h2>
        <p>
          Deploying AeroGenius in real-world environments required addressing several practical challenges:
        </p>
        <ul>
          <li>Creating a user-friendly interface for maintenance technicians</li>
          <li>Developing a portable hardware solution with high-resolution cameras</li>
          <li>Implementing real-time processing capabilities for immediate feedback</li>
          <li>Building a secure cloud infrastructure for data storage and model updates</li>
        </ul>
        <p>
          We conducted field trials at two major aircraft maintenance facilities, where AeroGenius was used alongside traditional inspection methods. The system identified 23 critical defects that had been missed by human inspectors, potentially preventing serious incidents.
        </p>
        
        <h2>The Impact</h2>
        <p>
          The implementation of AeroGenius has yielded significant benefits:
        </p>
        <ul>
          <li><strong>Enhanced Safety:</strong> 95% defect detection rate, including subtle defects often missed by human inspection</li>
          <li><strong>Time Efficiency:</strong> 60% reduction in inspection time, allowing for more frequent checks</li>
          <li><strong>Cost Savings:</strong> Estimated $3.2 million annual savings per maintenance facility through early defect detection</li>
          <li><strong>Improved Documentation:</strong> Automatic logging and tracking of defects over time, enabling predictive maintenance</li>
        </ul>
        
        <h2>Technical Challenges and Solutions</h2>
        <p>
          Building AeroGenius wasn't without significant challenges:
        </p>
        
        <h3>Challenge 1: Maintaining Accuracy Across Various Lighting Conditions</h3>
        <p>
          Aircraft inspections happen in varied environments with inconsistent lighting. To address this, we implemented a pre-processing pipeline that normalizes images and enhances contrast. We also trained the model on images captured under different lighting conditions to improve its robustness.
        </p>
        
        <h3>Challenge 2: Handling the Diversity of Aircraft Components</h3>
        <p>
          Modern aircraft contain thousands of different components, each with unique characteristics. Rather than building separate models for each component, we developed a hierarchical classification approach that first identifies the component type, then applies component-specific defect detection algorithms.
        </p>
        
        <h3>Challenge 3: Differentiating Between Defects and Normal Wear</h3>
        <p>
          Not all irregularities constitute defects. We implemented a severity classification system that distinguishes between normal wear patterns and actual defects requiring attention. This was achieved through collaboration with aviation engineers who provided expert knowledge to help the system make these distinctions.
        </p>
        
        <h2>Future Developments</h2>
        <p>
          The success of AeroGenius has opened up exciting avenues for future development:
        </p>
        <ul>
          <li>Integration with predictive maintenance systems to forecast potential failures before they occur</li>
          <li>Expansion to other transportation industries, including automotive and rail</li>
          <li>Development of autonomous inspection drones for hard-to-reach areas</li>
          <li>Implementation of AR interfaces allowing technicians to visualize detected issues in real-time</li>
        </ul>
        
        <h2>Lessons Learned</h2>
        <p>
          From a technical perspective, the AeroGenius project taught us valuable lessons:
        </p>
        <ol>
          <li><strong>Domain expertise is crucial.</strong> AI alone isn't enough; we needed aviation engineers to help us understand the nuances of aircraft maintenance.</li>
          <li><strong>Data quality trumps quantity.</strong> A smaller, well-curated dataset proved more valuable than a larger but noisy one.</li>
          <li><strong>Real-world deployment requires more than just a good model.</strong> User experience, hardware integration, and practical workflow considerations were equally important.</li>
          <li><strong>Safety-critical systems demand rigorous validation.</strong> We implemented multiple layers of testing and validation to ensure reliability.</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>
          AeroGenius represents the powerful potential of AI to enhance safety in critical industries. By augmenting human capabilities with artificial intelligence, we've created a system that's more accurate, consistent, and thorough than traditional methods.
        </p>
        <p>
          The project demonstrates how cutting-edge technology can be applied to solve real-world problems with significant impact. As we continue to refine and expand the system, we're excited about the potential to save lives and reduce costs across the aviation industry and beyond.
        </p>
        <p>
          If you're interested in learning more about AeroGenius or have ideas for collaboration, feel free to reach out through the contact form on my portfolio.
        </p>
      </div>
    </div>
  ),
  
  'diabetes-prediction-blog': (
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Revolutionizing Healthcare: My Diabetes Prediction App</h1>
      <div className="flex items-center text-xs sm:text-sm text-light-muted-foreground dark:text-dark-muted-foreground mb-4 sm:mb-8">
        <span className="mr-3 sm:mr-4">February 20, 2024</span>
        <span className="bg-blue-500 text-white text-xs px-2 py-0.5 sm:py-1 rounded">Healthcare</span>
      </div>
      
      <img 
        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8aGVhbHRoLHRlY2h8fHx8fHwxNzE2OTAzMzkw&ixlib=rb-4.0.3&q=80&w=900" 
        alt="Healthcare and technology" 
        className="w-full h-auto rounded-lg mb-4 sm:mb-8"
      />
      
      <div className="prose prose-sm sm:prose-base md:prose-lg dark:prose-invert max-w-none">
        <p>
          Diabetes affects millions globally, and early detection can significantly improve outcomes. 
          In this blog post, I'll share the journey of building my diabetes prediction application that 
          uses machine learning to assess risk factors and provide personalized recommendations.
        </p>
        
        <h2>The Challenge</h2>
        <p>
          Diabetes often goes undiagnosed until complications arise. Traditional diagnostic methods 
          require multiple clinical tests and doctor visits. I wanted to create an accessible tool that 
          could help people assess their risk and take preventive action earlier.
        </p>
        
        {/* More content would go here */}
        <p>Read the full article coming soon...</p>
      </div>
    </div>
  ),
  
  'hiregenius-blog': (
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">The Making of HireGenius: AI for Smarter Recruitment</h1>
      <div className="flex items-center text-xs sm:text-sm text-light-muted-foreground dark:text-dark-muted-foreground mb-4 sm:mb-8">
        <span className="mr-3 sm:mr-4">January 15, 2024</span>
        <span className="bg-light-accent2 dark:bg-dark-accent2 text-light-bg dark:text-dark-bg text-xs px-2 py-0.5 sm:py-1 rounded">AI & Career</span>
      </div>
      
      <img 
        src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2FyZWVyLHRlY2h8fHx8fHwxNzE2OTAzMzgz&ixlib=rb-4.0.3&q=80&w=900" 
        alt="AI-powered recruitment" 
        className="w-full h-auto rounded-lg mb-4 sm:mb-8"
      />
      
      <div className="prose prose-sm sm:prose-base md:prose-lg dark:prose-invert max-w-none">
        <p>
          The recruitment process is often inefficient and biased. HireGenius tackles these issues using 
          AI to match candidates with ideal positions based on skills, experience, and company culture fit. 
          This post details how I built this platform and the challenges overcome along the way.
        </p>
        
        <h2>The Problem</h2>
        <p>
          Traditional recruitment relies heavily on keyword matching and human judgment, leading to 
          missed opportunities and bias. I wanted to create a system that could understand the nuance 
          in both job descriptions and candidate resumes.
        </p>
        
        {/* More content would go here */}
        <p>Read the full article coming soon...</p>
      </div>
    </div>
  ),
  
  // Additional blog posts would be added similarly
};

export function BlogPost() {
  const [location] = useLocation();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [content, setContent] = useState<React.ReactNode | null>(null);
  
  useEffect(() => {
    // Extract the hash from location (e.g., '#aerogenius-blog')
    const hash = location.split('#')[1];
    
    if (hash) {
      // Find the matching blog post
      const matchingPost = blogPosts.find(p => p.link === `#${hash}`);
      setPost(matchingPost || null);
      
      // Get the content for this blog post
      if (hash in blogPostContent) {
        setContent(blogPostContent[hash]);
      } else {
        setContent(
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Blog post content coming soon!</h2>
            <p>We're still working on this article. Please check back later.</p>
          </div>
        );
      }
    }
  }, [location]);
  
  // If no post is found
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist or has been moved.</p>
        <a href="/#blog" className="inline-block mt-6 px-6 py-3 bg-light-accent2 dark:bg-dark-accent2 text-light-bg dark:text-dark-bg rounded-md">
          Back to Blog
        </a>
      </div>
    );
  }
  
  return (
    <div className="bg-light-bg dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <a 
          href="/#blog" 
          className="inline-flex items-center text-light-accent2 dark:text-dark-accent2 mb-4 sm:mb-8 text-sm sm:text-base hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to All Posts
        </a>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-light-surface dark:bg-dark-surface p-4 sm:p-6 md:p-8 rounded-xl shadow-md"
        >
          {content}
        </motion.div>
        
        {/* Related Posts */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 border-b border-light-accent1 dark:border-dark-accent1 pb-2">
            Related Posts
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map(relatedPost => (
              <a 
                key={relatedPost.id} 
                href={relatedPost.link}
                className="bg-light-bg dark:bg-dark-bg border border-light-accent1 dark:border-dark-accent1 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-32 sm:h-40">
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className={`absolute top-2 right-2 text-xs px-2 py-0.5 sm:py-1 rounded ${
                    relatedPost.category.includes('Healthcare') 
                      ? 'bg-blue-500 text-white' 
                      : relatedPost.category.includes('Aviation')
                        ? 'bg-indigo-600 text-white'
                        : relatedPost.category.includes('Career')
                          ? 'bg-light-accent2 dark:bg-dark-accent2 text-light-bg dark:text-dark-bg' 
                          : relatedPost.category.includes('Finance')
                            ? 'bg-green-500 text-white'
                            : relatedPost.category.includes('Entertainment')
                              ? 'bg-purple-500 text-white'
                              : 'bg-light-accent2 dark:bg-dark-accent2 text-light-bg dark:text-dark-bg'
                  }`}>
                    {relatedPost.category}
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-display mb-1 sm:mb-2 line-clamp-1">{relatedPost.title}</h3>
                  <p className="text-light-muted-foreground dark:text-dark-muted-foreground text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-2">{relatedPost.excerpt}</p>
                  <span className="text-xs text-light-muted-foreground dark:text-dark-muted-foreground">
                    {relatedPost.date}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}