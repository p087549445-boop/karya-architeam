import React from 'react';
import { CheckCircle, Clock, Users, Star } from 'lucide-react';

const ProjectSection = () => {
  const stats = [
    {
      icon: CheckCircle,
      number: '6+',
      label: 'Tahun Beroperasi',
      color: 'text-primary'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Layanan Konsultasi',
      color: 'text-secondary'
    },
    {
      icon: Users,
      number: '100%',
      label: 'Fokus Kualitas',
      color: 'text-accent'
    },
    {
      icon: Star,
      number: '2019',
      label: 'Berdiri Sejak',
      color: 'text-primary'
    }
  ];

  const projects = [
    {
      title: 'Plafon Gypsum',
      description: 'Pemasangan plafond gypsum berkualitas dengan berbagai pilihan desain modern sesuai kebutuhan.',
      category: 'Residential',
      area: 'Custom'
    },
    {
      title: 'Plafon PVC',
      description: 'Plafond PVC tahan lama, anti rayap, dan tahan air cocok untuk berbagai jenis ruangan.',
      category: 'Commercial',
      area: 'Custom'
    },
    {
      title: 'Molding Dinding',
      description: 'Pemasangan molding dinding untuk mempercantik interior ruangan Anda dengan hasil rapi.',
      category: 'Interior',
      area: 'Custom'
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
            Melayani jasa pasang plafon gypsum dan PVC di area Kabupaten Tangerang sejak 1 Januari 2019. 
            Kualitas terjamin dengan tim berpengalaman. Konsultasi gratis!
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
