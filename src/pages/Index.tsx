import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Gallery from '@/components/Gallery';
import ProjectSection from '@/components/ProjectSection';
import TestimonialSection from '@/components/TestimonialSection';
import BrandSection from '@/components/BrandSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const Index = () => {
  return (
    <>
      {/* SEO-optimized semantic HTML structure */}
      <header>
        <Navbar />
      </header>
      
      <main className="min-h-screen">
        {/* Hero Section with main heading */}
        <HeroSection />
        
        {/* Gallery Section */}
        <section id="gallery" aria-label="Galeri hasil kerja plafond gypsum dan PVC">
          <Gallery />
        </section>
        
        {/* Project Section */}
        <section id="project" aria-label="Portfolio proyek arsitektur dan konstruksi">
          <ProjectSection />
        </section>
        
        {/* Testimonial Section */}
        <section id="testimonials" aria-label="Testimoni klien KARYA ARCHITEAM">
          <TestimonialSection />
        </section>
        
        {/* Brand Section */}
        <section id="brands" aria-label="Brand dan mitra KARYA ARCHITEAM">
          <BrandSection />
        </section>
        
        {/* Contact Section */}
        <section id="contact" aria-label="Hubungi KARYA ARCHITEAM untuk konsultasi">
          <ContactSection />
        </section>
      </main>
      
      <footer>
        <Footer />
      </footer>
      
      <FloatingButtons />
    </>
  );
};

export default Index;
