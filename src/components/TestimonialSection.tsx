import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Budi Santoso',
      location: 'Jakarta Selatan',
      rating: 5,
      text: 'Pelayanan KARYA ARCHITEAM sangat memuaskan! Desain arsitektur dan konstruksi yang dipasang di rumah saya sangat rapi dan berkualitas. Tim kerja profesional dan tepat waktu.',
      image: '👨‍💼'
    },
    {
      name: 'Sari Dewi',
      location: 'Bekasi',
      rating: 5,
      text: 'Sudah beberapa kali bekerja sama dengan KARYA ARCHITEAM untuk project klien. Hasil selalu memuaskan dan sesuai dengan desain yang diinginkan. Highly recommended!',
      image: '👩‍💻'
    },
    {
      name: 'Ahmad Rahman',
      location: 'Tangerang',
      rating: 5,
      text: 'Konstruksi dan renovasi di kantor saya sangat bagus. Harga kompetitif, kualitas premium, dan pelayanan yang memuaskan. Terima kasih KARYA ARCHITEAM!',
      image: '👨‍💼'
    },
    {
      name: 'Linda Permata',
      location: 'Depok',
      rating: 5,
      text: 'KARYA ARCHITEAM adalah partner terpercaya untuk project konstruksi. Kualitas material bagus, pengerjaan rapi, dan komunikasi yang baik selama project berlangsung.',
      image: '👩‍🏗️'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-gradient mb-4">
            Reviews Klien
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kepuasan klien adalah prioritas utama kami. Berikut adalah testimoni 
            dari klien yang telah mempercayakan project plafond kepada kami
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote className="h-16 w-16 text-primary" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">
                  {testimonials[currentTestimonial].image}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  📍 {testimonials[currentTestimonial].location}
                </p>
                
                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-6">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-center text-foreground leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
