import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const plans = [
  {
    name: 'O Iniciante',
    price: 'R$4,90',
    features: ['50 Receitas Essenciais', 'Acesso básico em PDF'],
    isPopular: false,
    cta: 'Comprar Pacote Iniciante',
  },
  {
    name: 'O Profissional',
    price: 'R$9,90',
    features: ['Mais de 500 Receitas Profissionais', 'Atualizações Vitalícias', 'Bônus Exclusivos Incluídos'],
    isPopular: true,
    cta: 'Comprar Pacote Profissional',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Escolha Seu Arsenal
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Pagamento único. Acesso vitalício. Sem assinaturas.
          </p>
        </div>

        <div className="grid max-w-md mx-auto gap-10 lg:max-w-4xl lg:grid-cols-2 items-start">
          {plans.map((plan) => (
            <Card key={plan.name} className={cn('flex flex-col relative', plan.isPopular && 'border-2 border-primary shadow-primary/20 shadow-xl')}>
              {plan.isPopular && (
                <Badge variant="default" className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-1 text-sm">
                  MAIS POPULAR
                </Badge>
              )}
              <CardHeader className="items-center text-center pt-10">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-400">{plan.price}</span>
                  <span className="text-muted-foreground">/ uma única vez</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" className={cn('w-full h-12 text-lg', !plan.isPopular && 'bg-secondary text-secondary-foreground hover:bg-secondary/90')}>
                  <Link href="#">{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
