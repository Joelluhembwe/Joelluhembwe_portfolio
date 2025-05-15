import { generateProfessionalBio, type GenerateProfessionalBioInput } from '@/ai/flows/generate-professional-bio';
import Introduction from '@/components/landing/introduction';
import AboutMe from '@/components/landing/about-me';
import SkillsShowcase from '@/components/landing/skills-showcase';
import EducationHighlight from '@/components/landing/education-highlight';
import SocialLinks from '@/components/landing/social-links';
import { Separator } from '@/components/ui/separator';

export default async function HomePage() {
  const name = "Joel Luhembwe Watshala";
  const title = "Data Analyst";
  const degree = "Bachelor's Degree";
  const field = "Computer Science";
  const skills = ["Excel", "SQL", "Power BI", "Tableau", "Python"];
  const githubLink = "https://github.com/Joelluhembwe";
  // LinkedIn and X links are optional in AI prompt and UI will use placeholders
  const linkedinLink = undefined; 
  const xLink = undefined;

  const bioInput: GenerateProfessionalBioInput = {
    name,
    degree: `${degree} in ${field}`,
    skills,
    githubLink,
    linkedinLink,
    xLink,
  };

  let professionalBio: string | null = null;
  try {
    const bioOutput = await generateProfessionalBio(bioInput);
    professionalBio = bioOutput.bio;
  } catch (error) {
    console.error("Failed to generate professional bio:", error);
    // You could set a default bio or an error message here
    professionalBio = "Experienced Data Analyst passionate about uncovering insights from data. Proficient in a variety of data analysis tools and programming languages. Currently seeking new opportunities to leverage data for impactful decision-making.";
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Introduction name={name} title={title} />
      </header>

      <main className="flex-grow">
        <AboutMe bio={professionalBio} />
        <Separator className="my-8 md:my-12" />
        <SkillsShowcase />
        <Separator className="my-8 md:my-12" />
        <EducationHighlight degree={degree} field={field} />
        <Separator className="my-8 md:my-12" />
        <SocialLinks />
      </main>

      <footer className="py-8 text-center text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
