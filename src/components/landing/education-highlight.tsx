import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

interface EducationHighlightProps {
  degree: string;
  field: string;
}

const EducationHighlight: FC<EducationHighlightProps> = ({ degree, field }) => {
  return (
    <section id="education" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl md:text-3xl text-primary">
              <GraduationCap className="w-8 h-8 mr-3 text-accent" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">{degree}</h3>
            <p className="text-lg md:text-xl text-foreground/80">{field}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationHighlight;
