import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Gift, HeartPulse, Sparkles, Star } from 'lucide-react';

const bonuses = [
  {
    icon: Star,
    title: 'Experiências Memoráveis',
    description: 'Técnicas e boas práticas para criar experiências memoráveis com seus coquetéis.',
  },
  {
    icon: HeartPulse,
    title: 'Receitas de Drinks Sem Álcool',
    description: 'Aproveite a festa sem álcool com nosso guia de mocktails deliciosos e criativos.',
  },
  {
    icon: Gift,
    title: 'Bar em Casa em 5 Minutos',
    description: "Um guia econômico para as únicas ferramentas essenciais que você precisará.",
  },
];

const Bonuses = () => {
  return (
    <section id="bonuses" className="py-16 sm:py-24 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Receba Estes 3 Bônus Exclusivos <span className="text-primary">(no valor de R$49)</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Incluído gratuitamente ao escolher o Pacote Pro hoje.
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
