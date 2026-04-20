import CallForPapers from '@/components/call-for-papers';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function CallForPapersPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <div className="pt-20">
        <CallForPapers />
      </div>
      <Footer />
    </main>
  );
}
