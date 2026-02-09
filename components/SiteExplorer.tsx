
import React from 'react';

interface SiteExplorerProps {
  onClose: () => void;
}

const SiteExplorer: React.FC<SiteExplorerProps> = ({ onClose }) => {
  const sections = [
    {
      id: 'domov',
      title: 'Domov',
      description: 'Glavna stran s predstavitvijo in poudarki.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'storitve',
      title: 'Storitve',
      description: 'Podroben pregled vseh servisnih storitev.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 'mnenja',
      title: 'Mnenja',
      description: 'Kaj o nas pravijo naše stranke.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      id: 'narocanje',
      title: 'Naročanje',
      description: 'Obrazec za rezervacijo termina.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in duration-300">
      <div className="max-w-4xl w-full">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-black text-white">Pregled strani</h2>
            <p className="text-slate-400 mt-2">Izberite del strani, ki si ga želite ogledati.</p>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavigate(section.id)}
              className="group bg-white/5 border border-white/10 p-8 rounded-3xl text-left hover:bg-red-600/10 hover:border-red-600/50 transition-all transform hover:-translate-y-1"
            >
              <div className="text-red-500 mb-6 group-hover:scale-110 transition-transform">
                {section.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{section.title}</h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                {section.description}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm">
                Avtoservis Blaž Polanc s.p. • Boštanj
            </p>
        </div>
      </div>
    </div>
  );
};

export default SiteExplorer;
