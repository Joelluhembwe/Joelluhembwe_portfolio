
import { generateProfessionalBio, type GenerateProfessionalBioInput } from '@/ai/flows/generate-professional-bio';
import Introduction from '@/components/landing/introduction';
import AboutMe from '@/components/landing/about-me';
import SkillsShowcase from '@/components/landing/skills-showcase';
import EducationHighlight from '@/components/landing/education-highlight';
import ProjectsShowcase, { type Project } from '@/components/landing/projects-showcase';
import SocialLinks from '@/components/landing/social-links';
import ContactMe from '@/components/landing/contact-me';
import ResumeSection from '@/components/landing/resume-section'; 
import CertificationsSection, { type Certificate } from '@/components/landing/certifications-section';
import { Separator } from '@/components/ui/separator';

export default async function HomePage() {
  const name = "Joel Luhembwe Watshala";
  const title = "Data Analyst";
  const degree = "Bachelor's Degree";
  const field = "Computer Science";
  const university = "Cavendish University Zambia";
  const skills = ["Excel", "SQL", "Power BI", "Tableau", "Python"];
  const githubLink = "https://github.com/Joelluhembwe";
  const linkedinLink = "https://linkedin.com/in/joel-luhembwe"; 
  const xLink = "https://x.com/joel_luhembwe"; 
  // IMPORTANT: Save your profile picture as 'profile.jpg'
  // in the 'public' folder at the root of your project.
  // The final path for the image file must be: your-project-folder/public/profile.jpg
  const avatarUrl = "/profile.jpg"; 
  const email = "joel.watshala@example.com";
  const resumeUrl = "/placeholder-resume.pdf"; 

  const bioInput: GenerateProfessionalBioInput = {
    name,
    degree: `${degree} in ${field} at ${university}`, // Added university to bio input for richer context
    skills,
    githubLink,
    linkedinLink,
    xLink,
  };

  let professionalBio: string | null = null;
  const fallbackBio = "Experienced Data Analyst passionate about uncovering insights from data. Proficient in a variety of data analysis tools and programming languages. Currently seeking new opportunities to leverage data for impactful decision-making.";

  try {
    const bioOutput = await generateProfessionalBio(bioInput);
    if (bioOutput && typeof bioOutput.bio === 'string' && bioOutput.bio.trim() !== '') {
      professionalBio = bioOutput.bio;
    } else {
      console.error("Failed to generate professional bio: AI returned invalid, empty, or missing bio field in output.", bioOutput);
      professionalBio = fallbackBio;
    }
  } catch (err) {
    console.error("Failed to generate professional bio: An exception occurred during AI generation.");
    if (err instanceof Error) {
        console.error("Error Name:", err.name);
        console.error("Error Message:", err.message);
        if (err.stack) {
            console.error("Error Stack:", err.stack);
        }
    } else {
        // Attempt to stringify if it's not a standard Error object
        try {
            console.error("Raw error object:", JSON.stringify(err, null, 2));
        } catch (stringifyError) {
            console.error("Raw error object (could not stringify):", err);
        }
    }
    professionalBio = fallbackBio;
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

  const certifications: Certificate[] = [
    { 
      name: "Work Smart with Excel", 
      issuer: "Microsoft", 
      imageUrl: "https://placehold.co/400x300.png", 
      imageHint: "excel certificate" 
    },
    { 
      name: "100 Days of Coding: The Complete Python Pro Bootcamp", 
      issuer: "Udemy", 
      imageUrl: "https://placehold.co/400x300.png", 
      imageHint: "python certificate" 
    },
    { 
      name: "The Complete SQL Bootcamp: Go from Zero to Hero", 
      issuer: "Udemy", 
      imageUrl: "https://placehold.co/400x300.png", 
      imageHint: "sql certificate" 
    },
    { 
      name: "Complete Data Analyst Bootcamp: From Basics To Advanced", 
      issuer: "Udemy", 
      imageUrl: "https://placehold.co/400x300.png", 
      imageHint: "data analyst certificate" 
    }
  ];


  return (
    <div className="min-h-screen flex flex-col">
      <Introduction name={name} title={title} avatarUrl={avatarUrl} />

      <main className="flex-grow">
        <AboutMe bio={professionalBio} />
        <Separator className="my-8 md:my-12" />
        <ProjectsShowcase projects={projects} />
        <Separator className="my-8 md:my-12" />
        <SkillsShowcase />
        <Separator className="my-8 md:my-12" />
        <EducationHighlight degree={degree} field={field} university={university} />
        <Separator className="my-8 md:my-12" />
        <CertificationsSection certificates={certifications} />
        <Separator className="my-8 md:my-12" />
        <ResumeSection resumeUrl={resumeUrl} /> 
        <Separator className="my-8 md:my-12" />
        <SocialLinks githubUrl={githubLink} linkedinUrl={linkedinLink} xUrl={xLink} />
        <Separator className="my-8 md:my-12" />
        <ContactMe email={email} />
      </main>

      <footer className="py-8 text-center text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
