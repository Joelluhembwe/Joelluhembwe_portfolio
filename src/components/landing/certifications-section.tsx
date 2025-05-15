
import type { FC } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';

export interface Certificate {
  name: string;
  issuer: string;
  imageUrl?: string; // Optional: URL for the certificate image
  imageHint?: string; // Optional: Hint for AI image generation
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert, index) => (
                  <Card key={index} className="flex flex-col shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:scale-105 overflow-hidden">
                    {cert.imageUrl && (
                      <div className="relative w-full aspect-[16/9] bg-muted">
                        <Image
                          src={cert.imageUrl}
                          alt={`Image for ${cert.name}`}
                          fill
                          style={{ objectFit: 'contain' }} // Use 'contain' to show the whole certificate
                          data-ai-hint={cert.imageHint || "certificate document"}
                        />
                      </div>
                    )}
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">{cert.name}</h3>
                      <p className="text-sm md:text-base text-foreground/80">Issued by: {cert.issuer}</p>
                    </div>
                  </Card>
                ))}
              </div>
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
