import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
