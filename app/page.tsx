import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import CountdownTimer from '@/components/countdown-timer';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CountdownTimer />
      <Footer />
    </main>
  );
}
