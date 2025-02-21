import Navbar from '@/components/layout/navbar/Navbar';
import Hero from '@/components/sections/hero/Hero';
import Values from '@/components/sections/aboutus/AboutUs';
import Footer from '@/components/layout/footer/Footer';
import ImageGallery from '@/components/sections/SiteMap';
import Companies from '@/components/sections/companies/Tenants';


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Values />
      <Companies />
      <ImageGallery />
      <Footer />
    </main>
  );
}