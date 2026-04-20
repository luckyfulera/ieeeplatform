import Committee from '@/components/committee';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function CommitteePage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <div className="pt-20">
        <Committee />
      </div>
      <Footer />
    </main>
  );
}
