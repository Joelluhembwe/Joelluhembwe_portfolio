
import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCircle } from 'lucide-react';

interface AboutMeProps {
  bio: string | null;
}

const AboutMe: FC<AboutMeProps> = ({ bio }) => {
  return (
    // Removed outer section and id="about-me" as it's now handled by the parent in page.tsx
    // Removed py-12 md:py-16 and container mx-auto px-4 for better composability
    <Card className="shadow-lg h-full"> {/* Added h-full to see if it helps alignment in flex */}
      <CardHeader>
        <CardTitle className="flex items-center text-2xl md:text-3xl text-primary">
          <UserCircle className="w-8 h-8 mr-3 text-accent" />
          About Me
        </CardTitle>
      </CardHeader>
      <CardContent>
        {bio ? (
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed whitespace-pre-wrap">
            {bio}
          </p>
        ) : (
          <p className="text-base md:text-lg text-muted-foreground">
            Loading bio...
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default AboutMe;
