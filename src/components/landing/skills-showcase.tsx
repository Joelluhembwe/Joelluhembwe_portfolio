import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Database, FileSpreadsheet, BarChartBig, PieChart, Code2, type LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  icon: LucideIcon;
}

const skillsList: Skill[] = [
  { name: 'Excel', icon: FileSpreadsheet },
  { name: 'SQL', icon: Database },
  { name: 'Power BI', icon: BarChartBig },
  { name: 'Tableau', icon: PieChart },
  { name: 'Python', icon: Code2 },
];

const SkillsShowcase: FC = () => {
  return (
    <section id="skills" className="py-12 md:py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          <Lightbulb className="inline-block w-10 h-10 mr-3 text-accent" />
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {skillsList.map((skill) => (
            <Card key={skill.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <skill.icon className="w-12 h-12 text-accent mx-auto mb-3" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg md:text-xl text-primary">{skill.name}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
