import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Gift, HeartPulse, Sparkles } from 'lucide-react';

const bonuses = [
  {
    icon: Sparkles,
    title: 'The Art of Garnishing',
    description: 'Make any drink look like it costs $25, even with simple ingredients.',
  },
  {
    icon: HeartPulse,
    title: 'Low-Calorie Secrets',
    description: 'Enjoy the party without the sugar crash with our skinny cocktail guide.',
  },
  {
    icon: Gift,
    title: '5-Min Home Bar Setup',
    description: "A budget-friendly guide to the only essential tools you'll ever need.",
  },
];

const Bonuses = () => {
  return (
    <section id="bonuses" className="py-16 sm:py-24 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Get These 3 Exclusive Bonuses <span className="text-primary">(Worth $49)</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Included for free when you choose the Pro Pack today.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {bonuses.map((bonus) => (
            <Card key={bonus.title} className="text-center bg-card/50 backdrop-blur-sm border-slate-800">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <bonus.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{bonus.title}</CardTitle>
                <CardDescription className="pt-2">{bonus.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
