import React from 'react';
import { CheckCircle, Clock, Users, Star } from 'lucide-react';

const ProjectSection = () => {
  const stats = [
    {
      icon: CheckCircle,
      number: '500+',
      label: 'Project Selesai',
      color: 'text-primary'
    },
    {
      icon: Clock,
      number: '5+',
      label: 'Tahun Pengalaman',
      color: 'text-secondary'
    },
    {
      icon: Users,
      number: '1000+',
      label: 'Klien Puas',
      color: 'text-accent'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Rating Kepuasan',
      color: 'text-primary'
    }
  ];

  const projects = [
    {
      title: 'Rumah Tinggal Mewah',
      description: 'Pemasangan plafond gypsum dengan desain modern dan pencahayaan LED tersembunyi.',
      category: 'Residential',
      area: '200m²'
    },
    {
      title: 'Kantor Corporate',
      description: 'Plafond PVC premium untuk ruang kantor dengan sistem akustik terbaik.',
      category: 'Commercial',
      area: '500m²'
    },
    {
      title: 'Hotel Bintang 5',
      description: 'Desain plafond gypsum mewah untuk lobby dan suite room hotel premium.',
      category: 'Hospitality',
      area: '1000m²'
    }
  ];

  return (
    <section id="project" className="py-20 gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
            Portfolio Jasa Pasang Plafon Tangerang
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Terpercaya sejak 2019 dengan 500+ project plafon gypsum dan PVC selesai di area Tangerang, Jakarta & sekitarnya. 
            Kualitas terjamin, harga bersaing, garansi 2 tahun. Konsultasi gratis!
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className={`h-12 w-12 ${stat.color}`} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="text-white/60 text-sm">
                Area: {project.area}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
