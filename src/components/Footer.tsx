import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
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
              Spesialis arsitektur dan konstruksi dengan pengalaman profesional. 
              Melayani area Tangerang dan sekitarnya dengan kualitas terbaik dan desain inovatif.
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
                <span className="text-white/80">Suka Manah, Kec. Jambe, Kabupaten Tangerang, Banten</span>
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
                { label: 'Testimoni', href: 'testimonial' },
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
              <li>Desain Arsitektur</li>
              <li>Konstruksi Bangunan</li>
              <li>Renovasi</li>
              <li>Interior Design</li>
              <li>Konsultasi Gratis</li>
              <li>Project Management</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-white/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} KARYA ARCHITEAM </br> - Jasa Pasang Plafon Gypsum & PVC Tangerang.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
