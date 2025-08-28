import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '6269730266';
    const message = 'Halo KARYA ARCHITEAM, saya tertarik dengan layanan arsitektur dan konstruksi. Mohon informasi lebih lanjut.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Scroll to Top Button - Right Side */}
      {showScrollTop && (
        <div className="fixed right-6 bottom-6 z-50">
          <Button
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full gradient-primary text-white shadow-2xl hover:scale-110 transition-all duration-300 group"
          >
            <ArrowUp className="h-6 w-6 group-hover:animate-bounce" />
          </Button>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;