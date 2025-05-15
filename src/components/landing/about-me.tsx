import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCircle } from 'lucide-react';

interface AboutMeProps {
  bio: string | null;
}

const AboutMe: FC<AboutMeProps> = ({ bio }) => {
  return (
    <section id="about-me" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <Card className="shadow-lg">
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
      </div>
    </section>
  );
};

export default AboutMe;
