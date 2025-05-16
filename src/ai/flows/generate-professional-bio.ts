
// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview A professional bio generator AI agent.
 *
 * - generateProfessionalBio - A function that handles the bio generation process.
 * - GenerateProfessionalBioInput - The input type for the generateProfessionalBio function.
 * - GenerateProfessionalBioOutput - The return type for the generateProfessionalBio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProfessionalBioInputSchema = z.object({
  name: z.string().describe('The full name of the person.'),
  degree: z.string().describe('The degree of the person, including institution if relevant.'), // Updated description
  skills: z.array(z.string()).describe('The skills of the person.'),
  githubLink: z.string().optional().describe('The link to the person\'s GitHub profile.'), // Kept in schema if used elsewhere, but removed from prompt
  linkedinLink: z.string().optional().describe('The link to the person\'s LinkedIn profile.'), // Kept in schema
  xLink: z.string().optional().describe('The link to the person\'s X profile.'), // Kept in schema
});
export type GenerateProfessionalBioInput = z.infer<
  typeof GenerateProfessionalBioInputSchema
>;

const GenerateProfessionalBioOutputSchema = z.object({
  bio: z.string().describe('A concise and engaging professional bio.'),
});
export type GenerateProfessionalBioOutput = z.infer<
  typeof GenerateProfessionalBioOutputSchema
>;

export async function generateProfessionalBio(
  input: GenerateProfessionalBioInput
): Promise<GenerateProfessionalBioOutput> {
  return generateProfessionalBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProfessionalBioPrompt',
  input: {schema: GenerateProfessionalBioInputSchema},
  output: {schema: GenerateProfessionalBioOutputSchema},
  prompt: `You are an expert in writing professional biographies.

  Given the following information, write a concise and engaging professional bio for the person.
  The bio should be approximately 2-4 sentences long.
  Focus on the person's professional background, skills, and education. Do not include social media links in the bio text.

  Name: {{{name}}}
  Degree and University: {{{degree}}}
  Skills: {{#each skills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  `,
});

const generateProfessionalBioFlow = ai.defineFlow(
  {
    name: 'generateProfessionalBioFlow',
    inputSchema: GenerateProfessionalBioInputSchema,
    outputSchema: GenerateProfessionalBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output || typeof output.bio !== 'string' || output.bio.trim() === '') {
        console.error('Professional bio generation failed or returned invalid output from AI model:', output);
        throw new Error('Failed to generate a valid professional bio from the AI model.');
    }
    return output;
  }
);

