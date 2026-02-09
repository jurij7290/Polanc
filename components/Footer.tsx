
import React from 'react';

const Footer: React.FC = () => {
  const LogoIcon = () => (
    <svg className="w-20 h-20 mb-6" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 60C15 35.1472 35.1472 15 60 15C84.8528 15 105 35.1472 105 60" stroke="#991B1B" strokeWidth="2" strokeLinecap="round" opacity="0.2"/>
      <path d="M22 55C24 48 28 42 34 36" stroke="#EF4444" strokeWidth="5" strokeLinecap="round" />
      <path d="M42 30C48 26 55 24 62 24" stroke="#DC2626" strokeWidth="6" strokeLinecap="round" />
      <path d="M72 24C80 25 88 28 95 34" stroke="#B91C1C" strokeWidth="7" strokeLinecap="round" />
      <path d="M100 42C103 48 105 55 105 62" stroke="#991B1B" strokeWidth="8" strokeLinecap="round" />
      <path 
        d="M5 58C15 58 22 57 28 54L48 42C55 38 70 36 85 36C98 36 108 45 112 52L115 58H5Z" 
        fill="white" 
      />
      <circle cx="28" cy="58" r="5" fill="#0F172A" stroke="#EF4444" strokeWidth="1" />
      <circle cx="95" cy="58" r="5" fill="#0F172A" stroke="#EF4444" strokeWidth="1" />
    </svg>
  );

  return (
    <footer className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <LogoIcon />
            <span className="text-3xl font-black tracking-normal mb-1 block leading-tight uppercase italic">
              AVTOSERVIS
            </span>
            <div className="flex items-center mb-6">
              <span className="text-red-500 font-bold tracking-widest uppercase">
                BLAŽ POLANC s.p.
              </span>
              <div className="ml-3 flex space-x-1 opacity-40">
                <div className="w-8 h-[2px] bg-white"></div>
                <div className="w-4 h-[2px] bg-white"></div>
                <div className="w-2 h-[2px] bg-white"></div>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm mb-8">
              Zaupanja vreden partner za vaš avtomobil. Smo družinsko podjetje z dolgoletno tradicijo in strastjo do vrhunskega servisiranja vseh znamk vozil.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Povezave</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#domov" className="hover:text-red-500 transition-colors">Domov</a></li>
              <li><a href="#storitve" className="hover:text-red-500 transition-colors">Storitve</a></li>
              <li><a href="#mnenja" className="hover:text-red-500 transition-colors">Mnenja strank</a></li>
              <li><a href="#narocanje" className="hover:text-red-500 transition-colors">Rezervacija termina</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Pravne info</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-red-500 transition-colors">Splošni pogoji</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Politika zasebnosti</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Piškotki</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Avtoservis Blaž Polanc s.p. Vse pravice pridržane.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
