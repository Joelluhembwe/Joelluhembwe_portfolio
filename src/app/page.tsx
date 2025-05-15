
import { generateProfessionalBio, type GenerateProfessionalBioInput } from '@/ai/flows/generate-professional-bio';
import Introduction from '@/components/landing/introduction';
import AboutMe from '@/components/landing/about-me';
import SkillsShowcase from '@/components/landing/skills-showcase';
import EducationHighlight from '@/components/landing/education-highlight';
import ProjectsShowcase, { type Project } from '@/components/landing/projects-showcase';
import SocialLinks from '@/components/landing/social-links';
import ContactMe from '@/components/landing/contact-me'; // Import the new component
import { Separator } from '@/components/ui/separator';

export default async function HomePage() {
  const name = "Joel Luhembwe Watshala";
  const title = "Data Analyst";
  const degree = "Bachelor's Degree";
  const field = "Computer Science";
  const skills = ["Excel", "SQL", "Power BI", "Tableau", "Python"];
  const githubLink = "https://github.com/Joelluhembwe";
  const linkedinLink = "https://linkedin.com/in/joel-luhembwe"; 
  const xLink = "https://x.com/joel_luhembwe"; 
  const avatarUrl = "https://placehold.co/128x128.png"; 
  const email = "joel.watshala@example.com"; // Example email

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
    professionalBio = "Experienced Data Analyst passionate about uncovering insights from data. Proficient in a variety of data analysis tools and programming languages. Currently seeking new opportunities to leverage data for impactful decision-making.";
  }

  const projects: Project[] = [
    {
      name: "Dynamic Pricing Model",
      description: "Developed a dynamic pricing model for e-commerce, optimizing revenue by 15% using Python and SQL.",
      imageUrl: "https://placehold.co/600x400.png",
      projectUrl: "https://github.com/Joelluhembwe/dynamic-pricing",
      technologies: ["Python", "SQL", "Machine Learning", "Flask"],
      imageHint: "data charts"
    },
    {
      name: "Sales Dashboard Pro",
      description: "Created an interactive sales dashboard with Power BI, providing real-time insights for decision-makers.",
      imageUrl: "https://placehold.co/600x400.png",
      projectUrl: "https://github.com/Joelluhembwe/Sales-Dashboard-Pro", 
      technologies: ["Power BI", "DAX", "Data Modeling"],
      imageHint: "dashboard interface"
    },
    {
      name: "Customer Segmentation Analysis",
      description: "Performed customer segmentation using Tableau and R to identify key customer groups and tailor marketing strategies.",
      imageUrl: "https://placehold.co/600x400.png",
      projectUrl: "https://github.com/Joelluhembwe/Customer-Segmentation",
      technologies: ["Tableau", "R", "Statistics", "Excel"],
      imageHint: "customer analytics"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* The Introduction component is now the first piece of content after the global Header */}
      <Introduction name={name} title={title} avatarUrl={avatarUrl} />

      <main className="flex-grow">
        <AboutMe bio={professionalBio} />
        <Separator className="my-8 md:my-12" />
        <ProjectsShowcase projects={projects} />
        <Separator className="my-8 md:my-12" />
        <SkillsShowcase />
        <Separator className="my-8 md:my-12" />
        <EducationHighlight degree={degree} field={field} />
        <Separator className="my-8 md:my-12" />
        <SocialLinks githubUrl={githubLink} linkedinUrl={linkedinLink} xUrl={xLink} />
        <Separator className="my-8 md:my-12" /> {/* Separator before ContactMe */}
        <ContactMe email={email} /> {/* Add the ContactMe section */}
      </main>

      <footer className="py-8 text-center text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
