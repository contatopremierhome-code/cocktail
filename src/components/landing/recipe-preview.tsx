"use client";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

const classicRecipes = [
  {
    id: 'espresso-martini',
    name: 'Espresso Martini',
    imageHint: 'espresso martini',
    ingredients: [
      '50ml de Vodka',
      '35ml de Licor de Café',
      '25ml de Café Espresso Forte',
      '10ml de Xarope de Açúcar',
    ],
    method: 'Bata todos os ingredientes com gelo em uma coqueteleira e coe para uma taça de martini gelada. Decore com grãos de café.'
  },
  {
    id: 'old-fashioned',
    name: 'À Moda Antiga (Old Fashioned)',
    imageHint: 'old fashioned',
    ingredients: [
      '60ml de Bourbon ou Rye Whiskey',
      '1 cubo de açúcar',
      '2-3 gotas de Angostura Bitters',
      '1 lance de água',
      'Casca de laranja para decorar'
    ],
    method: 'Em um copo baixo, macere o açúcar com a Angostura e a água. Adicione uma pedra de gelo grande, o whiskey e mexa bem. Decore com a casca de laranja.'
  }
];

const creativeRecipes = [
  {
    id: 'gin-basil-smash',
    name: 'Gin Basil Smash',
    imageHint: 'gin cocktail',
    ingredients: [
      '60ml de Gin',
      '25ml de Suco de Limão Siciliano',
      '15ml de Xarope de Açúcar',
      'Um punhado de folhas de Manjericão fresco'
    ],
    method: 'Macere o manjericão com o suco de limão e o xarope em uma coqueteleira. Adicione o gin, gelo e bata vigorosamente. Coe duplamente para um copo baixo com gelo.'
  },
  {
    id: 'spicy-margarita-preview',
    name: 'Margarita de Manga Picante',
    imageHint: 'spicy margarita',
    ingredients: [
      '50ml de Tequila Prata',
      '30ml de Suco de Limão',
      '20ml de Purê de Manga',
      '15ml de Licor de Laranja',
      '1 fatia fina de pimenta Jalapeño'
    ],
    method: 'Macere a fatia de jalapeño na coqueteleira. Adicione os outros ingredientes, gelo e bata bem. Coe para um copo com a borda de sal e pimenta.'
  }
];


const RecipePreview = () => {
  return (
    <>
      <section className="py-16 sm:py-24 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
              Uma Amostra dos <span className="text-primary">Clássicos Essenciais</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              A base de todo grande bartender. Domine as receitas que nunca saem de moda.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {classicRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
              E das <span className="text-secondary">Criações Surpreendentes</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Vá além do óbvio e aprenda a criar drinks autorais que vão impressionar.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {creativeRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
          </div>
        </div>
      </section>
    </>
  );
};

const RecipeCard = ({ recipe }: { recipe: any }) => {
  const image = PlaceHolderImages.find(p => p.id === recipe.id);
  return (
    <Card className="overflow-hidden border-slate-800 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-lg">
      <CardContent className="p-0">
        <div className="relative aspect-video">
          {image && (
            <Image
              src={image.imageUrl}
              alt={recipe.name}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
            />
          )}
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
           <h3 className="absolute bottom-4 left-4 text-3xl font-bold text-white">{recipe.name}</h3>
        </div>
        <div className="p-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline -mt-4">
                Ver Ingredientes e Preparo
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div>
                  <h4 className="font-bold text-primary mb-2">Ingredientes:</h4>
                  <ul className="space-y-1.5 mb-4">
                    {recipe.ingredients.map((ing: string) => (
                      <li key={ing} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-1 shrink-0"/>
                        <span className="text-muted-foreground">{ing}</span>
                      </li>
                    ))}
                  </ul>
                  <h4 className="font-bold text-primary mb-2">Modo de Preparo:</h4>
                  <p className="text-muted-foreground">{recipe.method}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </CardContent>
    </Card>
  );
}

export default RecipePreview;
