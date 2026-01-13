"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Autoplay from "embla-carousel-autoplay"

const recipes = [
  { id: 'mojito', name: 'Classic Mojito', description: 'Fresh Mint & Lime' },
  { id: 'margarita', name: 'Spicy Passionfruit Margarita', description: 'A Tropical Twist' },
  { id: 'caipirinha', name: 'Traditional Caipirinha', description: 'The Brazilian Classic' },
  { id: 'moscow-mule', name: 'Moscow Mule', description: 'Ginger & Refreshment' },
  { id: 'aperol-spritz', name: 'Aperol Spritz', description: 'The Taste of Summer' },
  { id: 'negroni', name: 'Negroni', description: 'Perfectly Bitter' },
  { id: 'cosmopolitan', name: 'Cosmopolitan', description: 'Elegance & Flavor' },
  { id: 'pina-colada', name: 'Piña Colada', description: 'A Sweet Caribbean Escape' },
  { id: 'dry-martini', name: 'Dry Martini', description: 'Pure Sophistication' },
];

const RecipeShowcase = () => {
  return (
    <section id="recipes" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            A Taste of What You'll Master
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            From timeless classics to modern twists, your journey to making incredible drinks starts here.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full relative"
        >
          <CarouselContent className="-ml-4 pb-16 sm:pb-4">
            {recipes.map((recipe) => {
              const image = PlaceHolderImages.find((p) => p.id === recipe.id);
              return (
                <CarouselItem key={recipe.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-2xl group">
                    <CardContent className="relative aspect-[4/5] p-0">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-2xl font-bold text-white">{recipe.name}</h3>
                        {recipe.description && <p className="text-sm text-primary">{recipe.description}</p>}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex sm:hidden items-center justify-center gap-x-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default RecipeShowcase;
