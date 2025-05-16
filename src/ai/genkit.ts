import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI()],
  // model: 'googleai/gemini-2.0-flash', // Incorrect model for text generation
  model: 'googleai/gemini-1.5-flash-latest', // Corrected to a valid and suitable text generation model
});
