
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
  githubUrl: string;
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
    socialLinksList.push({ name: 'X (Twitter)', url: xUrl, icon: Twitter, ariaLabel: 'Visit my X (Twitter) profile' });
  }
  
  // Fallback for default links if specific ones aren't provided or are placeholders
  // This section can be adjusted based on desired placeholder behavior
  if (socialLinksList.length === 0) {
     // If no valid URLs provided via props, show default GitHub and placeholders
     socialLinksList.push({ name: 'GitHub', url: 'https://github.com/Joelluhembwe', icon: Github, ariaLabel: 'Visit my GitHub profile' });
     socialLinksList.push({ name: 'LinkedIn', url: '#', icon: Linkedin, ariaLabel: 'LinkedIn profile (placeholder)' });
     socialLinksList.push({ name: 'X (Twitter)', url: '#', icon: Twitter, ariaLabel: 'X (Twitter) profile (placeholder)' });
  } else {
    // Ensure GitHub is always present if not already added by props and other links exist
    if (!socialLinksList.find(link => link.name === 'GitHub') && githubUrl) {
        socialLinksList.unshift({ name: 'GitHub', url: githubUrl, icon: Github, ariaLabel: 'Visit my GitHub profile' });
    } else if (!socialLinksList.find(link => link.name === 'GitHub')) {
        // Add default GitHub if no other links and no githubUrl prop
        socialLinksList.unshift({ name: 'GitHub', url: 'https://github.com/Joelluhembwe', icon: Github, ariaLabel: 'Visit my GitHub profile' });
    }

    // Add placeholder for LinkedIn if not provided by props and other links exist
    if (!socialLinksList.find(link => link.name === 'LinkedIn')) {
        socialLinksList.push({ name: 'LinkedIn', url: '#', icon: Linkedin, ariaLabel: 'LinkedIn profile (placeholder)' });
    }
    // Add placeholder for X if not provided by props and other links exist
    if (!socialLinksList.find(link => link.name === 'X (Twitter)')) {
        socialLinksList.push({ name: 'X (Twitter)', url: '#', icon: Twitter, ariaLabel: 'X (Twitter) profile (placeholder)' });
    }
  }


  if (socialLinksList.length === 0) {
    return null; // Don't render the section if there are no links to show
  }

  return (
    <section id="social-links" className="py-12 md:py-16 bg-secondary/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Connect With Me</h2>
        <div className="flex justify-center space-x-4 md:space-x-6">
          {socialLinksList.map((link) => (
            <Button 
              key={link.name} 
              variant="outline" 
              size="lg" 
              asChild 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300 shadow-md hover:shadow-lg"
              disabled={link.url === '#'}
            >
              <Link href={link.url} target={link.url === '#' ? undefined : "_blank"} rel="noopener noreferrer" aria-label={link.ariaLabel}>
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
