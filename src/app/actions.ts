'use server';

import * as z from 'zod';
import { portfolioReviewer } from '@/ai/flows/portfolio-reviewer';

// Contact Form Action
const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function sendContactMessageAction(data: z.infer<typeof contactSchema>) {
  const parsedData = contactSchema.parse(data);

  // In a real application, you would send an email, save to a database, etc.
  console.log('New contact message received:', parsedData);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: 'Message sent successfully!' };
}


// AI Review Action
const reviewSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.string(),
});

export async function reviewPortfolioItemAction(data: z.infer<typeof reviewSchema>) {
  const parsedData = reviewSchema.parse(data);

  try {
    const result = await portfolioReviewer(parsedData);
    return result;
  } catch (error) {
    console.error('Error calling AI portfolio reviewer:', error);
    return null;
  }
}
