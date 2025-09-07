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
import BreadcrumbSEO from '@/components/BreadcrumbSEO';

const Index = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '#home' },
    { label: 'Jasa Pasang Plafon Gypsum & PVC Tangerang', active: true }
  ];

  return (
    <>
      {/* SEO-optimized semantic HTML structure */}
      <header>
        <Navbar />
      </header>
      
      <main className="min-h-screen">
        {/* Hero Section with main heading */}
        <HeroSection />
        
        {/* Breadcrumb for SEO */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <BreadcrumbSEO items={breadcrumbItems} />
        </div>
        
        {/* Gallery Section */}
        <section id="gallery" aria-label="Galeri hasil kerja plafond gypsum dan PVC Tangerang">
          <Gallery />
        </section>
        
        {/* Project Section */}
        <section id="project" aria-label="Portfolio jasa pasang plafon gypsum dan PVC Tangerang">
          <ProjectSection />
        </section>
        
        {/* Testimonial Section */}
        <section id="testimonials" aria-label="Testimoni klien jasa pasang plafon Tangerang terpercaya">
          <TestimonialSection />
        </section>
        
        {/* Brand Section */}
        <section id="brands" aria-label="Keunggulan jasa plafon KARYA ARCHITEAM Tangerang">
          <BrandSection />
        </section>
        
        {/* Contact Section */}
        <section id="contact" aria-label="Hubungi jasa pasang plafon terdekat Tangerang untuk konsultasi gratis">
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
