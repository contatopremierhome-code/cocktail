import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import RecipeShowcase from '@/components/landing/recipe-showcase';
import Pricing from '@/components/landing/pricing';
import Bonuses from '@/components/landing/bonuses';
import Faq from '@/components/landing/faq';
import StickyCta from '@/components/landing/sticky-cta';
import Footer from '@/components/landing/footer';
import Testimonials from '@/components/landing/testimonials';
import MainProduct from '@/components/landing/main-product';
import RecipePreview from '@/components/landing/recipe-preview';
import VideoCta from '@/components/landing/video-cta';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <RecipeShowcase />
        <MainProduct />
        <RecipePreview />
        <Bonuses />
        <Testimonials />
        <Pricing />
        <Faq />
        <VideoCta />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
