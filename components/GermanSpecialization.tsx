
import React from 'react';

interface GermanSpecializationProps {
  content: {
    title: string;
    subtitle: string;
    description: string;
  };
}

const GermanSpecialization: React.FC<GermanSpecializationProps> = ({ content }) => {
  const brands = [
    {
      name: 'BMW',
      model: 'M Performance Specialist',
      img: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&q=80&w=800',
      description: 'Popolno poznavanje xDrive sistemov in TwinPower Turbo motorjev.'
    },
    {
      name: 'Audi',
      model: 'Quattro Expertise',
      img: 'https://images.unsplash.com/photo-1606148047413-56834571946a?auto=format&fit=crop&q=80&w=800',
      description: 'Strokovnjaki za S-Tronic menjalnike in napredno TFSI tehnologijo.'
    },
    {
      name: 'Mercedes-Benz',
      model: 'AMG Service Center',
      img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
      description: 'Precizno vzdrževanje 4MATIC pogonov in vrhunska diagnostika.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-3">{content.title}</h2>
        <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{content.subtitle}</h3>
        <p className="max-w-2xl mx-auto text-slate-600 text-lg">
          {content.description}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {brands.map((brand) => (
          <div key={brand.name} className="group relative bg-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="h-64 overflow-hidden">
              <img 
                src={brand.img} 
                alt={brand.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-3xl font-black text-slate-900">{brand.name}</h4>
                <span className="text-xs font-bold bg-slate-900 text-white px-3 py-1 rounded-full">{brand.model}</span>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {brand.description}
              </p>
              <button className="flex items-center text-slate-900 font-bold hover:text-red-600 transition-colors">
                Preberi več o servisu {brand.name}
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GermanSpecialization;
