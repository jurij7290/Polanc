
import React from 'react';

interface ServicesProps {
  content: {
    title: string;
    subtitle: string;
  };
}

const Services: React.FC<ServicesProps> = ({ content }) => {
  const services = [
    {
      title: 'Redni Servis',
      desc: 'Menjava olja, vseh filtrov in 40-točkovni varnostni pregled vozila.',
      icon: '🔧'
    },
    {
      title: 'Računalniška Diagnostika',
      desc: 'Najnovejša oprema za odpravljanje napak na vseh elektronskih sistemih.',
      icon: '💻'
    },
    {
      title: 'Zavorni Sistemi',
      desc: 'Pregled, menjava ploščic, diskov in zavorne tekočine za maksimalno varnost.',
      icon: '🛑'
    },
    {
      title: 'Vzmetenje in Podvozje',
      desc: 'Optimizacija voznih lastnosti in odpravljanje zračnosti na podvozju.',
      icon: '⛓️'
    },
    {
      title: 'Klimatske Naprave',
      desc: 'Polnjenje z R134a ali R1234yf plinom ter dezinfekcija kabinskega prostora.',
      icon: '❄️'
    },
    {
      title: 'Pregled Pred Nakupom',
      desc: 'Strokovno mnenje in temeljit pregled vozila, ki ga nameravate kupiti.',
      icon: '🔍'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12">
        <div className="max-w-xl">
          <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-3">{content.title}</h2>
          <h3 className="text-4xl font-black text-slate-900 leading-tight">{content.subtitle}</h3>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-slate-500">Uporabljamo izključno materiale prve vgradnje (OEM).</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-red-300 transition-all group shadow-sm hover:shadow-md">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
            <p className="text-slate-600 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
