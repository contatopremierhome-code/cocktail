import { Button } from '@/components/ui/button';
import Link from 'next/link';

const StickyCta = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-lg p-4 border-t md:hidden">
      <Button asChild size="lg" className="w-full h-12 text-lg">
        <Link href="#pricing">Obtenha o Pacote com +500 Receitas Agora</Link>
      </Button>
    </div>
  );
};

export default StickyCta;
