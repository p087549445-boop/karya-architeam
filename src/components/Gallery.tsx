import React, { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import slider1 from '@/assets/slider-1.jpg';
import slider2 from '@/assets/slider-2.jpg';
import slider3 from '@/assets/slider-3.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: slider1,
      title: 'Plafond Gypsum Modern',
      category: 'Gypsum'
    },
    {
      id: 2,
      src: slider2,
      title: 'Plafond PVC Berkualitas',
      category: 'PVC'
    },
    {
      id: 3,
      src: slider3,
      title: 'Plafond Gypsum Mewah',
      category: 'Gypsum'
    },
    {
      id: 4,
      src: slider1,
      title: 'Desain Minimalis',
      category: 'Gypsum'
    },
    {
      id: 5,
      src: slider2,
      title: 'PVC Premium',
      category: 'PVC'
    },
    {
      id: 6,
      src: slider3,
      title: 'Luxury Design',
      category: 'Gypsum'
    }
  ];

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closePreview = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Gallery Karya Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lihat koleksi hasil pekerjaan plafond gypsum dan PVC berkualitas tinggi 
            yang telah kami kerjakan untuk berbagai klien
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
              onClick={() => handleImageClick(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-primary text-xs font-semibold rounded-full">
                      {image.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full">
            {/* Back Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={closePreview}
              className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 z-10"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>

            {/* Close Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={closePreview}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 z-10"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-full object-contain rounded-lg animate-scale-in"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;