import { CheckCircle2, BookOpenCheck, PartyPopper, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

const features = [
  {
    icon: BookOpenCheck,
    text: 'Acesso completo ao E-book com +500 Receitas de Drinks',
  },
  {
    icon: PartyPopper,
    text: 'Manual de Como Criar seu Mini Bar de Drinks em Casa (Bônus)',
  },
  {
    icon: ShieldCheck,
    text: 'Acesso Vitalício e Atualizações Futuras Gratuitas',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
        <Card className="flex flex-col relative border-2 border-primary shadow-primary/20 shadow-xl overflow-hidden">
            <CardHeader className="items-center text-center p-6 bg-card/80">
              <CardTitle className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
                OFERTA ESPECIAL POR TEMPO LIMITADO
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground mt-2">
                Acesso Imediato a Todo o Conteúdo. Sem Mensalidades.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 sm:p-10 flex-1">
              <div className="text-center mb-8">
                <p className="text-xl text-muted-foreground line-through">De R$147,00</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="text-sm">Por apenas</span>
                  <span className="text-6xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-400">R$9,90</span>
                </div>
                <p className="text-lg font-semibold text-primary mt-2 animate-pulse">Pagamento Único!</p>
              </div>

              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <feature.icon className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <span className="text-base sm:text-lg">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-6 bg-card/80 border-t border-border">
              <Button asChild size="lg" className="w-full h-16 text-lg sm:text-xl font-bold">
                <Link href="https://www.ggcheckout.com/checkout/v2/VU1EHbdkknKfUXU3JXCx">QUERO ACESSO IMEDIATO POR R$9,90</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
