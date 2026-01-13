import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    quote: "I never thought it would be so easy to make such good drinks at home. The recipe book is super detailed and the tips are golden. I became the official bartender of the group!",
    name: 'John D.',
    avatarId: 'avatar-4',
  },
  {
    quote: "I bought the pro package and the amount of recipes is incredible. The lifetime updates are a fantastic bonus. I've already saved a lot of money making my own cocktails.",
    name: 'Ricardo M.',
    avatarId: 'avatar-2',
  },
  {
    quote: 'I was a complete beginner, but with the "Beginner" guide, I\'m already impressing my friends. The instructions are clear and the ingredients are easy to find. I recommend it!',
    name: 'Frank L.',
    avatarId: 'avatar-3',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            See how we've turned enthusiasts into true cocktail masters.
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
