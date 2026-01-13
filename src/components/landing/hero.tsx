import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

const Hero = () => {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-cocktail');

  return (
    <section id="hero" className="relative pt-20">
       <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/80 z-0"></div>
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Become the <span className="text-primary">Official Bartender</span> of Every Party.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-lg text-muted-foreground sm:text-xl">
              Master over 500 professional cocktail recipes with simple ingredients you already have at home. No fancy equipment needed.
            </p>
            <div className="mt-10 hidden sm:flex flex-col sm:flex-row items-center justify-center gap-4 lg:justify-start">
              <Button asChild size="lg" className="h-14 text-lg w-full sm:w-auto">
                <Link href="#pricing">Get Started Now</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            {heroImage && (
              <div className="relative w-full max-w-sm lg:max-w-md">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary via-orange-500 to-fuchsia-500 opacity-20 blur-3xl"></div>
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={600}
                  height={800}
                  priority
                  className="relative rounded-3xl shadow-2xl"
                  data-ai-hint={heroImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
