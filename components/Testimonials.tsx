
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Marko J.',
      car: 'Audi A6 Quattro',
      text: 'Najboljši servis za Audije v Ljubljani. Končno nekdo, ki ve, kako se pravilno servisira S-Tronic menjalnik.',
      rating: 5
    },
    {
      name: 'Peter L.',
      car: 'BMW M340i',
      text: 'Izjemno korektni, držijo se dogovorjenih rokov in cen. Uporabljajo samo najboljše materiale. Priporočam!',
      rating: 5
    },
    {
      name: 'Sabina K.',
      car: 'Mercedes GLC',
      text: 'Zelo prijazno osebje in vrhunska storitev. Avto dela kot nov, cena pa precej nižja kot na pooblaščenem servisu.',
      rating: 5
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-3">Mnenja strank</h2>
        <h3 className="text-4xl font-black text-slate-900">Več kot tisoč zadovoljnih voznikov</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-slate-50 p-8 rounded-2xl relative shadow-sm border border-slate-100">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 italic mb-6 leading-relaxed">"{t.text}"</p>
            <div>
              <h4 className="font-bold text-slate-900">{t.name}</h4>
              <p className="text-slate-500 text-sm">{t.car}</p>
            </div>
            <div className="absolute -top-4 -right-4 text-6xl text-slate-200 opacity-50 font-serif">"</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
