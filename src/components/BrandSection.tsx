import React from 'react';
import { Shield, Award, Wrench, Clock } from 'lucide-react';

const BrandSection = () => {
  const brands = [
    {
      icon: Shield,
      title: 'Garansi Resmi',
      description: 'Garansi 2 tahun untuk semua hasil pekerjaan'
    },
    {
      icon: Award,
      title: 'Kualitas Premium',
      description: 'Material berkualitas tinggi dari supplier terpercaya'
    },
    {
      icon: Wrench,
      title: 'Tim Profesional',
      description: 'Teknisi berpengalaman dan terlatih'
    },
    {
      icon: Clock,
      title: 'Tepat Waktu',
      description: 'Pengerjaan sesuai timeline yang disepakati'
    }
  ];

  const features = [
    'Free konsultasi dan survey',
    'Harga transparan tanpa biaya tersembunyi',
    'Material berkualitas SNI',
    'Desain custom sesuai keinginan',
    'After sales service terbaik',
    'Tim berpengalaman 5+ tahun'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-5xl font-bold text-gradient mb-4">
            Kenapa Pilih "KARYA ARCHITEAM"?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kami berkomitmen memberikan pelayanan terbaik dengan standar kualitas tinggi 
            untuk setiap project plafond gypsum dan PVC
          </p>
        </div>

        {/* Brand Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                <div className="gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <brand.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {brand.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {brand.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature List */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gradient mb-4">
              Keunggulan Layanan Kami
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
