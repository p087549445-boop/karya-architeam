import React from 'react';
import PhotoSlider from './PhotoSlider';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-16">
      {/* Running Text Promo */}
      <div className="gradient-primary overflow-hidden whitespace-nowrap py-3">
        <div className="animate-marquee text-white font-semibold text-lg">
          🔥 PROMO SPESIAL: Dapatkan diskon 20% untuk pemasangan plafond gypsum & PVC! Hubungi kami sekarang juga! 🔥 
          ✨ Kualitas terbaik, harga terjangkau, garansi resmi ✨ 
          📞 WhatsApp: +628977230266 📞
        </div>
      </div>

      {/* Hero Content */}
      <div className="gradient-hero min-h-[90vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Header Text */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block">KARYA</span>
              <span className="block">ARCHITEAM</span>
            </h1>
            <h2 className="text-sm md:text-3xl font-semibold mb-8">
              <span className="block text-gradient">PLAFOND</span>
              <span className="block text-gradient">GYPSUM & PVC</span>
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Jasa Pasang Plafon Gypsum & PVC Tangerang <br /> solusi terbaik untuk langit-langit rumah dan kantor Anda. 
              Dengan kualitas premium dan desain modern yang elegan.
            </p>
          </div>

          {/* Photo Slider */}
          <PhotoSlider />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
