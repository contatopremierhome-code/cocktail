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
  { id: 'mojito', name: 'Mojito Clássico', description: 'Menta Fresca & Limão' },
  { id: 'margarita', name: 'Margarita de Maracujá Picante', description: 'Um Toque Tropical' },
  { id: 'caipirinha', name: 'Caipirinha Tradicional', description: 'O Clássico Brasileiro' },
  { id: 'moscow-mule', name: 'Moscow Mule', description: 'Gengibre & Refrescância' },
  { id: 'aperol-spritz', name: 'Aperol Spritz', description: 'O Sabor do Verão' },
  { id: 'negroni', name: 'Negroni', description: 'Perfeitamente Amargo' },
  { id: 'cosmopolitan', name: 'Cosmopolitan', description: 'Elegância & Sabor' },
  { id: 'pina-colada', name: 'Piña Colada', description: 'Uma Doce Fuga Caribenha' },
  { id: 'dry-martini', name: 'Dry Martini', description: 'Pura Sofisticação' },
];

const RecipeShowcase = () => {
  return (
    <section id="recipes" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Uma Prova do Que Você Vai Dominar
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            De clássicos atemporais a toques modernos, sua jornada para fazer drinks incríveis começa aqui.
          </p>
        </div>

        <div className="relative">
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
            className="w-full"
          >
            <CarouselContent className="-ml-4">
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
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden sm:inline-flex" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden sm:inline-flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default RecipeShowcase;
