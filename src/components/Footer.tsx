import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import logoKarya from '@/assets/logo-karya-footer.png';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+628977230266';
    const message = 'Halo KARYA ARCHITEAM, saya tertarik dengan layanan arsitektur dan konstruksi.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img src={logoKarya} alt="KARYA ARCHITEAM Logo" className="h-12 w-auto mr-4" />
              <div>
                <h3 className="text-2xl font-bold">KARYA ARCHITEAM</h3>
                <p className="text-white/80">Architecture & Construction</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              ⭐ Spesialis Jasa Pasang Plafon Gypsum & PVC Kabupaten Tangerang Terpercaya sejak 1 Januari 2019. 
              Melayani area Kabupaten Tangerang dan sekitarnya dengan kualitas premium. 
              Konsultasi & Survey GRATIS!
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/60" />
                <span onClick={handleWhatsAppClick} className="text-white/80 hover:text-white cursor-pointer">
                  +628977230266
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/60" />
                <span className="text-white/80">awan@karya-architeam.my.id</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-white/60" />
                <span className="text-white/80">Jl.raya parung jahe desa, Suka Manah, Kec. Jambe, Kabupaten Tangerang, Banten 15720</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Menu Cepat</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: 'home' },
                { label: 'Gallery', href: 'gallery' },
                { label: 'Project', href: 'project' },
                { label: 'Testimoni', href: 'testimonials' },
                { label: 'Kontak', href: 'contact' }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Layanan Kami</h4>
            <ul className="space-y-3 text-white/80">
              <li>Jasa Pasang Plafon PVC</li>
              <li>Jasa Pasang Plafon Gypsum</li>
              <li>Pasang Molding Dinding</li>
              <li>Renovasi Plafon Rumah</li>
              <li>Partisi Gypsum</li>
              <li>Konsultasi & Survey Gratis</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-white/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
              <p className="text-white/60">
                © {new Date().getFullYear()} KARYA ARCHITEAM — All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-white/60">
                <span>Website Version: {import.meta.env.VITE_APP_VERSION || 'v2.1.0'}</span>
                <span>|</span>
                <span>Last Updated: {import.meta.env.VITE_BUILD_DATE || new Date().toLocaleDateString('id-ID')}</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/karya_architeam/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-300" aria-label="Instagram KARYA ARCHITEAM">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@plafonpvctangerang/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-300" aria-label="TikTok Plafon PVC Tangerang">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.93-1.363-2.151-1.405-3.338h-3.548v13.043c0 .748-.31 1.463-.863 1.986a2.91 2.91 0 01-2.107.863c-1.608 0-2.914-1.306-2.914-2.914 0-1.607 1.306-2.913 2.914-2.913.151 0 .3.012.446.034v-3.6a6.505 6.505 0 00-.446-.016c-3.588 0-6.507 2.918-6.507 6.506 0 3.588 2.919 6.507 6.507 6.507 3.588 0 6.506-2.919 6.506-6.507V8.798a9.85 9.85 0 005.597 1.746v-3.593a5.875 5.875 0 01-2.0-.389z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
