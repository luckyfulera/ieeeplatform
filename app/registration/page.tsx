import Registration from '@/components/registration';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <div className="pt-20">
        <Registration />
      </div>
      <Footer />
    </main>
  );
}
