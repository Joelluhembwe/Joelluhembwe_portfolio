
import AboutMe from '@/components/landing/about-me';
import SkillsShowcase from '@/components/landing/skills-showcase';
import EducationHighlight from '@/components/landing/education-highlight';
import ProjectsShowcase, { type Project } from '@/components/landing/projects-showcase';
import SocialLinks from '@/components/landing/social-links';
import ContactMe from '@/components/landing/contact-me';
import ResumeSection from '@/components/landing/resume-section';
import CertificationsSection, { type Certificate } from '@/components/landing/certifications-section';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
  const email = "joelluhembwe16@gmail.com";
  const phoneNumber = "+260975202152";
  const resumeUrl = "/placeholder-resume.pdf";

  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  const professionalBio = "Joel Luhembwe Watshala is a skilled data analyst with a Bachelor's Degree in Computer Science from Cavendish University Zambia. His expertise encompasses data manipulation and visualization using tools such as Excel, SQL, Power BI, Tableau, and Python. Joel's background provides a strong foundation for leveraging data to support strategic decision-making, complemented by storytelling and strong communication skills.";

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
    },
    {
      name: "Predictive Maintenance System",
      description: "Built a predictive maintenance system for industrial equipment, reducing downtime by 20% using Python and time-series analysis.",
      imageUrl: "https://placehold.co/600x400.png",
      projectUrl: "https://github.com/Joelluhembwe/predictive-maintenance",
      technologies: ["Python", "Scikit-learn", "Pandas", "Time Series"],
      imageHint: "industrial iot"
    },
    {
      name: "E-commerce Recommendation Engine",
      description: "Designed and implemented a recommendation engine for an e-commerce platform, increasing user engagement and sales.",
      imageUrl: "https://placehold.co/600x400.png",
      projectUrl: "https://github.com/Joelluhembwe/ecommerce-recommender",
      technologies: ["Python", "Surprise", "Collaborative Filtering", "API"],
      imageHint: "online shopping"
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
    },
    {
      name: "Supply Chain Logistics",
      issuer: "Rutgers the State University of New Jersey / Coursera",
      imageUrl: "https://placehold.co/400x300.png", // Replace with your actual image path e.g., /certs/supply-chain-logistics-rutgers.png
      imageHint: "logistics certificate"
    }
  ];


  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* New Hero Section with Profile on Left, About Me on Right */}
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Side: Profile Info */}
          <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center md:items-start text-center md:text-left">
            <Avatar className="w-56 h-56 md:w-72 md:h-72 mb-6 shadow-lg border-4 border-accent transition-all duration-300 ease-in-out hover:scale-105">
              <AvatarImage src={avatarUrl} alt={name} data-ai-hint="profile portrait" />
              <AvatarFallback className="text-7xl md:text-8xl bg-primary text-primary-foreground">{initials}</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1">
              {name}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-accent font-semibold mb-6 md:mb-0">
              {title}
            </p>
          </div>

          {/* Right Side: About Me Card */}
          <div id="about-me" className="w-full md:w-2/3 lg:w-3/4 pt-0 md:pt-4"> {/* id for navigation, added padding top for md screens */}
            <AboutMe bio={professionalBio} />
          </div>
        </div>
      </section>

      <main className="flex-grow container mx-auto px-4"> {/* Ensure main content is also containerized */}
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
        <SocialLinks
          githubUrl={githubLink}
          linkedinUrl={linkedinLink}
          xUrl={xLink}
          email={email}
          phoneNumber={phoneNumber}
        />
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
