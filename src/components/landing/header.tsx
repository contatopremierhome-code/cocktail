import Link from 'next/link';
import { Martini } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/50 backdrop-blur-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Martini className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">Mestre dos Drinks</span>
        </Link>
        <Button asChild className="hidden md:flex" size="lg">
          <Link href="https://www.ggcheckout.com/checkout/v2/VU1EHbdkknKfUXU3JXCx">Obter Receitas</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
