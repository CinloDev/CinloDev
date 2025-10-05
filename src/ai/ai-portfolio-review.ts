'use server';

/**
 * @fileOverview An AI-powered portfolio review tool.
 *
 * - reviewPortfolio - A function that reviews the portfolio and suggests improvements.
 * - ReviewPortfolioInput - The input type for the reviewPortfolio function.
 * - ReviewPortfolioOutput - The return type for the reviewPortfolio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ReviewPortfolioInputSchema = z.object({
  workSamples: z.array(
    z.object({
      title: z.string().describe('The current title of the work sample.'),
      description: z.string().describe('The current description of the work sample.'),
      tags: z.array(z.string()).describe('The current tags associated with the work sample.'),
    })
  ).describe('An array of work samples in the portfolio.'),
});
export type ReviewPortfolioInput = z.infer<typeof ReviewPortfolioInputSchema>;

const ReviewPortfolioOutputSchema = z.object({
  suggestions: z.array(
    z.object({
      title: z.string().describe('The suggested title for the work sample.'),
      description: z.string().describe('The suggested description for the work sample.'),
      tags: z.array(z.string()).describe('The suggested tags for the work sample.'),
    })
  ).describe('An array of suggestions for improving the portfolio work samples.'),
});
export type ReviewPortfolioOutput = z.infer<typeof ReviewPortfolioOutputSchema>;

export async function reviewPortfolio(input: ReviewPortfolioInput): Promise<ReviewPortfolioOutput> {
  return reviewPortfolioFlow(input);
}

const reviewPortfolioPrompt = ai.definePrompt({
  name: 'reviewPortfolioPrompt',
  input: {schema: ReviewPortfolioInputSchema},
  output: {schema: ReviewPortfolioOutputSchema},
  prompt: `You are an AI-powered portfolio review tool. Review the work samples provided and suggest improvements to the titles, tags, and descriptions to improve SEO and overall presentation.

Work Samples:
{{#each workSamples}}
  Title: {{{title}}}
  Description: {{{description}}}
  Tags: {{#each tags}}{{{this}}}, {{/each}}
{{/each}}

Suggestions:
`,
});

const reviewPortfolioFlow = ai.defineFlow(
  {
    name: 'reviewPortfolioFlow',
    inputSchema: ReviewPortfolioInputSchema,
    outputSchema: ReviewPortfolioOutputSchema,
  },
  async input => {
    const {output} = await reviewPortfolioPrompt(input);
    return output!;
  }
);
