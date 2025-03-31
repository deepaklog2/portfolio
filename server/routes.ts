import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from 'zod';

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the request body
      const result = contactFormSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: 'Validation error',
          errors: result.error.errors
        });
      }
      
      // Store the contact message
      const message = await storage.createMessage(result.data);
      
      return res.status(201).json({ 
        message: 'Message sent successfully',
        id: message.id
      });
    } catch (error) {
      console.error('Error saving contact message:', error);
      return res.status(500).json({ message: 'Failed to send message. Please try again later.' });
    }
  });

  // API endpoint to get all messages (for admin purposes)
  app.get('/api/messages', async (req, res) => {
    try {
      const messages = await storage.getAllMessages();
      return res.status(200).json(messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
      return res.status(500).json({ message: 'Failed to fetch messages.' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
