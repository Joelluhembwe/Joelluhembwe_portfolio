import type { FC } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}
type LucideIcon = typeof Github; // Or any other Lucide icon

const socialLinksList: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/Joelluhembwe', icon: Github },
  { name: 'LinkedIn', url: '#', icon: Linkedin }, // Placeholder URL
  { name: 'X (Twitter)', url: '#', icon: Twitter }, // Placeholder URL
];

const SocialLinks: FC = () => {
  return (
    <section id="social-links" className="py-12 md:py-16 bg-secondary/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Connect With Me</h2>
        <div className="flex justify-center space-x-4 md:space-x-6">
          {socialLinksList.map((link) => (
            <Button key={link.name} variant="outline" size="lg" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300 shadow-md hover:shadow-lg">
              <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit my ${link.name} profile`}>
                <link.icon className="w-6 h-6 mr-2" />
                {link.name}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
