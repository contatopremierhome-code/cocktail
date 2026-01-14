import { Button } from '@/components/ui/button';
import Link from 'next/link';

const VideoCta = () => {
  return (
    <section id="video-cta" className="py-16 sm:py-24 bg-slate-900/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl mb-8">
          Sua Jornada Começa Agora
        </h2>
        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-primary/20">
          <video
            src="https://i.imgur.com/DorAhjm.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="mt-10">
           <Button asChild size="lg" className="h-16 text-lg sm:text-xl font-bold">
                <Link href="https://www.ggcheckout.com/checkout/v2/VU1EHbdkknKfUXU3JXCx">QUERO ACESSO IMEDIATO POR R$9,90</Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoCta;
