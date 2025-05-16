
import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Briefcase, ExternalLink } from 'lucide-react';

export interface Project {
  name: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
  technologies: string[];
  imageHint?: string;
}

interface ProjectsShowcaseProps {
  projects: Project[];
}

const ProjectsShowcase: FC<ProjectsShowcaseProps> = ({ projects }) => {
  return (
    <section id="projects" className="pt-6 md:pt-8 pb-12 md:pb-16 bg-secondary/30"> {/* Reduced top padding */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          <Briefcase className="inline-block w-10 h-10 mr-3 text-accent" />
          My Projects
        </h2>
        {projects.length === 0 ? (
          <p className="text-center text-muted-foreground text-lg">No projects to display yet. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.name} className="flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105">
                <CardHeader>
                  <div className="relative w-full aspect-[16/9] rounded-t-md overflow-hidden mb-4">
                    <Image
                      src={project.imageUrl}
                      alt={project.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      data-ai-hint={project.imageHint || "project abstract"}
                    />
                  </div>
                  <CardTitle className="text-xl md:text-2xl text-primary">{project.name}</CardTitle>
                  <CardDescription className="text-foreground/80 h-20 overflow-hidden text-ellipsis">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                {project.projectUrl && project.projectUrl !== '#' && (
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsShowcase;
