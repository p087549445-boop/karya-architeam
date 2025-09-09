import React from 'react';
import PhotoSlider from './PhotoSlider';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-16">
      {/* Running Text Promo */}
      <div className="gradient-primary overflow-hidden whitespace-nowrap py-3">
        <div className="animate-marquee text-white font-semibold text-lg">
          🔥 JASA PASANG PLAFON GYPSUM & PVC TANGERANG TERPERCAYA - Diskon 20% Bulan Ini! 🔥 
          ⭐ Plafon Terdekat Berkualitas Premium | Tukang Berpengalaman 5+ Tahun | Garansi 2 Tahun ⭐ 
          📞 WhatsApp: +628977230266 | Konsultasi & Survey GRATIS se-Jabodetabek 📞
        </div>
      </div>

      {/* Hero Content */}
      <div className="gradient-hero min-h-[90vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Header Text */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block">KARYA ARCHITEAM</span>
            </h1>
            <h2 className="text-2xl md:text-6xl font-semibold mb-8">
              <span className="block text-gradient">JASA PASANG PLAFON</span>
              <span className="block text-gradient">GYPSUM & PVC TANGERANG</span>
            </h2>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              ⭐ Spesialis Plafon Gypsum & PVC Tangerang Terpercaya sejak 2019 <br />
              🏠 500+ Project Selesai | 🎯 Konsultasi GRATIS | 📞 Fast Response <br />
              Melayani: Plafon Rumah, Kantor, Ruko, Molding Dinding | Area Tangerang & Jakarta
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
