import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import Method from '@/components/landing/Method';
import WaitlistSection from '@/components/landing/WaitlistSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <div 
          className="bg-cover bg-center"
          style={{ backgroundImage: "url('/background-new.png')" }}
        >
          <Hero />
          <About />
          <Method />
          <WaitlistSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
