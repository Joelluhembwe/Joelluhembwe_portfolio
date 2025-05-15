
import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';

export interface Certificate {
  name: string;
  issuer: string;
  // Optionally, you could add a year or a link to the certificate
  // year?: string;
  // url?: string;
}

interface CertificationsSectionProps {
  certificates: Certificate[];
}

const CertificationsSection: FC<CertificationsSectionProps> = ({ certificates }) => {
  return (
    <section id="certifications" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl md:text-3xl text-primary">
              <Award className="w-8 h-8 mr-3 text-accent" />
              My Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            {certificates.length > 0 ? (
              <ul className="space-y-4">
                {certificates.map((cert, index) => (
                  <li key={index} className="p-4 border rounded-md shadow-sm bg-secondary/30">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">{cert.name}</h3>
                    <p className="text-sm md:text-base text-foreground/80">Issued by: {cert.issuer}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-base md:text-lg text-muted-foreground">
                No certifications listed yet.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CertificationsSection;
