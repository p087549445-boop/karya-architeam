import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const handleMapClick = () => {
    // Open Google Maps or similar mapping app
    const coordinates = '-6.200000,106.816666'; // Jakarta coordinates (replace with actual)
    const mapUrl = `https://www.google.com/maps?q=${coordinates}`;
    window.open(mapUrl, '_blank');
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '6282321926681';
    const message = 'Halo WKS, saya tertarik dengan layanan plafond gypsum dan PVC. Mohon informasi lebih lanjut.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hubungi Kami
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Siap melayani konsultasi dan pemasangan plafond gypsum & PVC untuk project Anda. 
            Hubungi kami sekarang untuk mendapatkan penawaran terbaik!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Informasi Kontak
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Alamat</h4>
                    <p className="text-white/80">
                      Jakarta, Indonesia<br />
                      (Lokasi akan disesuaikan dengan project)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
                    <p className="text-white/80">+62 823-2192-6681</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-white/80">info@wks-plafond.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Jam Operasional</h4>
                    <p className="text-white/80">
                      Senin - Sabtu: 08:00 - 17:00<br />
                      Minggu: 08:00 - 12:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                💬 Chat via WhatsApp
              </Button>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Lokasi & Area Layanan
            </h3>
            
            {/* Map Placeholder */}
            <div 
              onClick={handleMapClick}
              className="relative h-64 bg-white/20 rounded-xl overflow-hidden cursor-pointer group hover:bg-white/30 transition-all duration-300"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-semibold mb-2">
                    Klik untuk Buka Maps
                  </h4>
                  <p className="text-sm opacity-80">
                    Melayani area Jakarta, Bogor, Depok, Tangerang, Bekasi
                  </p>
                </div>
              </div>
              
              {/* Overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
            </div>

            {/* Service Areas */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Area Layanan:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {['Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi', 'Karawang'].map((area) => (
                  <div key={area} className="bg-white/10 rounded-lg px-3 py-2 text-white/80">
                    📍 {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;