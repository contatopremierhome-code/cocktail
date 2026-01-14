import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

const bonuses = [
  {
    id: 'bonus-mini-bar',
    title: 'Manual de Como Criar seu Mini Bar de Drinks em Casa',
    description: 'Monte seu bar com o essencial sem gastar muito. Impressione com pouco.',
    price: 'R$49,00'
  },
];

const Bonuses = () => {
  return (
    <section id="bonuses" className="py-16 sm:py-24 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Receba um <span className="text-primary">Bônus Exclusivo</span> (avaliado em R$49)
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-2xl text-green-400 font-bold animate-pulse">
            GRÁTIS, SOMENTE HOJE!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 max-w-md mx-auto">
          {bonuses.map((bonus) => {
            const image = PlaceHolderImages.find(p => p.id === bonus.id);
            return (
              <div key={bonus.title} className="text-center">
                <div className="relative inline-block">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={400}
                      height={500}
                      className="rounded-lg shadow-2xl mx-auto mb-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-primary/30"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                   <Badge className="absolute top-4 right-4 text-base" variant="destructive">BÔNUS</Badge>
                </div>
                <h3 className="text-xl font-bold">{bonus.title}</h3>
                <p className="text-muted-foreground mt-2 mb-2">{bonus.description}</p>
                <p className="text-lg font-semibold">
                  <span className="line-through text-muted-foreground/80">{bonus.price}</span>
                  <span className="text-primary ml-2">Hoje: Grátis!</span>
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
