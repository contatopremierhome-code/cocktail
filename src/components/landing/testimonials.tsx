import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    quote: "Nunca pensei que seria tão fácil fazer drinks tão bons em casa. O livro de receitas é super detalhado e as dicas são de ouro. Virei o bartender oficial da turma!",
    name: 'Juliana S.',
    location: 'São Paulo, SP',
    avatarId: 'avatar-1',
  },
  {
    quote: 'Comprei o pacote profissional e é incrível a quantidade de receitas. As atualizações vitalícias são um bônus fantástico. Já economizei uma grana fazendo meus próprios coquetéis.',
    name: 'Ricardo M.',
    location: 'Rio de Janeiro, RJ',
    avatarId: 'avatar-2',
  },
  {
    quote: 'Eu era um completo iniciante, mas com o guia "O Iniciante", já estou impressionando meus amigos. As instruções são claras e os ingredientes fáceis de achar. Recomendo!',
    name: 'Fernanda L.',
    location: 'Belo Horizonte, MG',
    avatarId: 'avatar-3',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            O Que Nossos Mestres Dizem
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Veja como transformamos entusiastas em verdadeiros mestres da mixologia.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => {
             const avatarImage = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
            return (
            <Card key={testimonial.name} className="bg-card/50 backdrop-blur-sm border-slate-800 p-6">
              <CardContent className="p-0">
                <blockquote className="text-lg mb-4">"{testimonial.quote}"</blockquote>
                <div className="flex items-center gap-4">
                  {avatarImage && (
                     <Avatar>
                        <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )})}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
