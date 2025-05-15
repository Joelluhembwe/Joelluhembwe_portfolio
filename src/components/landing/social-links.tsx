
import type { FC } from 'react';
import { Github, Linkedin, Twitter, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface SocialLinkItem {
  name: string;
  url: string;
  icon: LucideIcon;
  ariaLabel: string;
}

interface SocialLinksProps {
  githubUrl?: string;
  linkedinUrl?: string;
  xUrl?: string;
}

const SocialLinks: FC<SocialLinksProps> = ({ githubUrl, linkedinUrl, xUrl }) => {
  const socialLinksList: SocialLinkItem[] = [];

  if (githubUrl && githubUrl !== '#') {
    socialLinksList.push({ name: 'GitHub', url: githubUrl, icon: Github, ariaLabel: 'Visit my GitHub profile' });
  }
  if (linkedinUrl && linkedinUrl !== '#') {
    socialLinksList.push({ name: 'LinkedIn', url: linkedinUrl, icon: Linkedin, ariaLabel: 'Visit my LinkedIn profile' });
  }
  if (xUrl && xUrl !== '#') {
    socialLinksList.push({ name: 'X', url: xUrl, icon: Twitter, ariaLabel: 'Visit my X (Twitter) profile' });
  }
  
  if (socialLinksList.length === 0) {
    // Optionally, provide default placeholders if no links are given and you still want to show the section
    // For now, returning null if no valid links are provided.
    return null; 
  }

  return (
    <section id="social-links" className="py-12 md:py-16 bg-secondary/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Connect With Me</h2>
        <div className="flex justify-center items-center space-x-4 md:space-x-6">
          {socialLinksList.map((link) => (
            <Button 
              key={link.name} 
              variant="outline" 
              size="lg" 
              asChild 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300 shadow-md hover:shadow-lg rounded-full px-6 py-3"
            >
              <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel}>
                <link.icon className="w-5 h-5 mr-2" />
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
