import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Link from 'next/link';

const MainProduct = () => {
  const image = PlaceHolderImages.find(p => p.id === 'main-product-book');
  
  return (
    <section id="main-product" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Get Your Hands on The Ultimate Guide with <span className="text-primary">500+ Drink Recipes</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            The secret of the best bartenders, now revealed to you. From classic recipes to signature creations, everything you need to become a true Cocktail Master.
          </p>
        </div>
        
        <div className="flex justify-center items-center flex-col">
            {image && (
                <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={800}
                    height={600}
                    className="rounded-lg shadow-2xl mx-auto mb-10 transform transition-transform duration-300 hover:scale-105"
                    data-ai-hint={image.imageHint}
                />
            )}
            <Button asChild size="lg" className="h-14 text-lg">
                <Link href="#pricing">I WANT MY GUIDE NOW!</Link>
            </Button>
        </div>

      </div>
    </section>
  );
}

export default MainProduct;
