
import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageCircle } from 'lucide-react'; // Using MessageCircle as a general contact icon
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ContactMeProps {
  email: string;
}

const ContactMe: FC<ContactMeProps> = ({ email }) => {
  return (
    <section id="contact-me" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl md:text-3xl text-primary">
              <MessageCircle className="w-8 h-8 mr-3 text-accent" />
              Get in Touch
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              Feel free to reach out to me through any of the social platforms linked above, or send me an email directly.
            </p>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300 shadow-md hover:shadow-lg rounded-full px-8 py-3">
              <Link href={`mailto:${email}`}>
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactMe;
