
import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FileText, Download } from 'lucide-react';

interface ResumeSectionProps {
  resumeUrl: string;
}

const ResumeSection: FC<ResumeSectionProps> = ({ resumeUrl }) => {
  return (
    <section id="resume" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl md:text-3xl text-primary">
              <FileText className="w-8 h-8 mr-3 text-accent" />
              My Resume
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6">
              Interested in learning more about my professional background and qualifications?
              You can view or download my resume by clicking the button below.
            </p>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300 shadow-md hover:shadow-lg rounded-full px-8 py-3"
            >
              <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2" />
                View My Resume
              </Link>
            </Button>
            {resumeUrl === '/placeholder-resume.pdf' && (
                 <p className="text-sm text-muted-foreground mt-4">
                    (Note: This is a placeholder. Please replace <code>/placeholder-resume.pdf</code> with your actual resume file in the <code>public</code> folder and update the link in <code>src/app/page.tsx</code>.)
                 </p>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ResumeSection;
