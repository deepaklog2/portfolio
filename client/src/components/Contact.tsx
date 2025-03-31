import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faGithub, faLinkedinIn, faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

type ContactFormValues = z.infer<typeof formSchema>;

export function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      const response = await apiRequest('POST', '/api/contact', data);
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
          variant: "default",
        });
        form.reset();
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section 
      id="contact" 
      className="py-16 sm:py-20 bg-light-bg dark:bg-dark-bg grid-bg transition-colors duration-300 relative"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-2xl sm:text-3xl font-cyber mb-3 sm:mb-4 text-center neon-text"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          GET IN <span className="text-light-accent2 dark:text-dark-accent2">TOUCH</span>
        </motion.h2>
        
        <motion.p 
          className="text-center text-sm sm:text-base text-light-muted-foreground dark:text-dark-muted-foreground mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Have a project in mind or want to collaborate? Let's talk!
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-lg sm:text-xl font-display mb-4 sm:mb-6 border-b border-light-accent1 dark:border-dark-accent1 pb-2 inline-block">
              Contact Information
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-light-surface dark:bg-dark-surface border border-light-accent1 dark:border-dark-accent1 p-2 sm:p-3 rounded-lg">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-light-accent2 dark:text-dark-accent2 text-sm sm:text-base" />
                </div>
                <div>
                  <h4 className="font-display text-sm sm:text-base mb-0.5 sm:mb-1">Location</h4>
                  <p className="text-xs sm:text-sm text-light-muted-foreground dark:text-dark-muted-foreground">
                    Royapuram, Chennai, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-light-surface dark:bg-dark-surface border border-light-accent1 dark:border-dark-accent1 p-2 sm:p-3 rounded-lg">
                  <FontAwesomeIcon icon={faEnvelope} className="text-light-accent2 dark:text-dark-accent2 text-sm sm:text-base" />
                </div>
                <div>
                  <h4 className="font-display text-sm sm:text-base mb-0.5 sm:mb-1">Email</h4>
                  <a 
                    href="mailto:teaksmile30@gmail.com" 
                    className="text-xs sm:text-sm text-light-muted-foreground dark:text-dark-muted-foreground hover:text-light-accent2 dark:hover:text-dark-accent2 transition-colors"
                  >
                    teaksmile30@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-light-surface dark:bg-dark-surface border border-light-accent1 dark:border-dark-accent1 p-2 sm:p-3 rounded-lg">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-light-accent2 dark:text-dark-accent2 text-sm sm:text-base" />
                </div>
                <div>
                  <h4 className="font-display text-sm sm:text-base mb-0.5 sm:mb-1">WhatsApp</h4>
                  <p className="text-xs sm:text-sm text-light-muted-foreground dark:text-dark-muted-foreground">
                    +91 6381687588 (WhatsApp only)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-light-surface dark:bg-dark-surface border border-light-accent1 dark:border-dark-accent1 p-2 sm:p-3 rounded-lg">
                  <FontAwesomeIcon icon={faGithub} className="text-light-accent2 dark:text-dark-accent2 text-sm sm:text-base" />
                </div>
                <div>
                  <h4 className="font-display text-sm sm:text-base mb-0.5 sm:mb-1">GitHub</h4>
                  <a 
                    href="https://github.com/deepaklog2" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs sm:text-sm text-light-muted-foreground dark:text-dark-muted-foreground hover:text-light-accent2 dark:hover:text-dark-accent2 transition-colors"
                  >
                    https://github.com/deepaklog2
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-6 sm:mt-10">
              <h3 className="text-lg sm:text-xl font-display mb-4 sm:mb-6 border-b border-light-accent1 dark:border-dark-accent1 pb-2 inline-block">
                Connect with Me
              </h3>
              <div className="flex space-x-3 sm:space-x-4">
                <a 
                  href="https://www.linkedin.com/in/deepak-raj-r-290856235/" 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-light-surface dark:bg-dark-surface border border-light-accent1 dark:border-dark-accent1 flex items-center justify-center hover:bg-light-accent1 dark:hover:bg-dark-accent1 hover:bg-opacity-20 dark:hover:bg-opacity-20 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-light-accent2 dark:text-dark-accent2 text-sm sm:text-base" />
                </a>
                <a 
                  href="https://x.com/Venom021830" 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-light-surface dark:bg-dark-surface border border-light-accent1 dark:border-dark-accent1 flex items-center justify-center hover:bg-light-accent1 dark:hover:bg-dark-accent1 hover:bg-opacity-20 dark:hover:bg-opacity-20 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} className="text-light-accent2 dark:text-dark-accent2 text-sm sm:text-base" />
                </a>
                <a 
                  href="https://www.instagram.com/dee_pakrajr/" 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-light-surface dark:bg-dark-surface border border-light-accent1 dark:border-dark-accent1 flex items-center justify-center hover:bg-light-accent1 dark:hover:bg-dark-accent1 hover:bg-opacity-20 dark:hover:bg-opacity-20 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-light-accent2 dark:text-dark-accent2 text-sm sm:text-base" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-light-surface dark:bg-dark-surface border border-light-accent1 dark:border-dark-accent1 flex items-center justify-center hover:bg-light-accent1 dark:hover:bg-dark-accent1 hover:bg-opacity-20 dark:hover:bg-opacity-20 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="text-light-accent2 dark:text-dark-accent2 text-sm sm:text-base" />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="bg-light-surface dark:bg-dark-surface p-4 sm:p-6 rounded-lg border border-light-accent1 dark:border-dark-accent1 order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg sm:text-xl font-display mb-4 sm:mb-6">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm sm:text-base">Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Your name"
                          className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm bg-light-bg dark:bg-dark-bg border border-light-accent1 dark:border-dark-accent1 rounded-md focus:outline-none focus:border-light-accent2 dark:focus:border-dark-accent2 transition-colors"
                        />
                      </FormControl>
                      <FormMessage className="text-xs sm:text-sm" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm sm:text-base">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Your email"
                          className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm bg-light-bg dark:bg-dark-bg border border-light-accent1 dark:border-dark-accent1 rounded-md focus:outline-none focus:border-light-accent2 dark:focus:border-dark-accent2 transition-colors"
                        />
                      </FormControl>
                      <FormMessage className="text-xs sm:text-sm" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm sm:text-base">Subject</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Subject"
                          className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm bg-light-bg dark:bg-dark-bg border border-light-accent1 dark:border-dark-accent1 rounded-md focus:outline-none focus:border-light-accent2 dark:focus:border-dark-accent2 transition-colors"
                        />
                      </FormControl>
                      <FormMessage className="text-xs sm:text-sm" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm sm:text-base">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={4}
                          placeholder="Your message"
                          className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm bg-light-bg dark:bg-dark-bg border border-light-accent1 dark:border-dark-accent1 rounded-md focus:outline-none focus:border-light-accent2 dark:focus:border-dark-accent2 transition-colors resize-none"
                        />
                      </FormControl>
                      <FormMessage className="text-xs sm:text-sm" />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 mt-2 bg-light-accent2 dark:bg-dark-accent2 text-light-bg dark:text-dark-bg text-sm sm:text-base font-bold rounded-md hover:bg-opacity-80 transition-all duration-300"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
