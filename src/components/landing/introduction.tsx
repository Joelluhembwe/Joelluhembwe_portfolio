import type { FC } from 'react';

interface IntroductionProps {
  name: string;
  title: string;
}

const Introduction: FC<IntroductionProps> = ({ name, title }) => {
  return (
    <section id="introduction" className="py-16 md:py-24 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
          {name}
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80">
          {title}
        </p>
      </div>
    </section>
  );
};

export default Introduction;
