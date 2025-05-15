
import type { FC } from 'react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface IntroductionProps {
  name: string;
  title: string;
  avatarUrl: string;
}

const Introduction: FC<IntroductionProps> = ({ name, title, avatarUrl }) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <section id="introduction" className="py-16 md:py-24 text-center bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <Avatar className="w-32 h-32 md:w-40 md:h-40 mb-6 shadow-lg border-4 border-accent transition-all duration-300 ease-in-out hover:scale-105">
          <AvatarImage src={avatarUrl} alt={name} data-ai-hint="profile portrait" />
          <AvatarFallback className="text-4xl md:text-5xl bg-primary text-primary-foreground">{initials}</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-2">
          {name}
        </h1>
        <p className="text-xl md:text-2xl text-accent font-semibold">
          {title}
        </p>
      </div>
    </section>
  );
};

export default Introduction;
