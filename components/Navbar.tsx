
import React from 'react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
  openExplorer: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen, openExplorer }) => {
  const navLinks = [
    { name: 'Domov', href: '#domov' },
    { name: 'Storitve', href: '#storitve' },
    { name: 'Mnenja', href: '#mnenja' },
    { name: 'Naročanje', href: '#narocanje' },
  ];

  const LogoIcon = () => (
    <svg className="w-12 h-12 md:w-16 md:h-16 mr-3" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 60C15 35.1472 35.1472 15 60 15C84.8528 15 105 35.1472 105 60" stroke="#991B1B" strokeWidth="2" strokeLinecap="round" opacity="0.2"/>
      <path d="M22 55C24 48 28 42 34 36" stroke="#EF4444" strokeWidth="5" strokeLinecap="round" />
      <path d="M42 30C48 26 55 24 62 24" stroke="#DC2626" strokeWidth="6" strokeLinecap="round" />
      <path d="M72 24C80 25 88 28 95 34" stroke="#B91C1C" strokeWidth="7" strokeLinecap="round" />
      <path d="M100 42C103 48 105 55 105 62" stroke="#991B1B" strokeWidth="8" strokeLinecap="round" />
      <path 
        d="M5 58C15 58 22 57 28 54L48 42C55 38 70 36 85 36C98 36 108 45 112 52L115 58H5Z" 
        fill="white" 
      />
      <path d="M48 44C60 39 75 39 88 40" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="28" cy="58" r="5" fill="#0F172A" stroke="#EF4444" strokeWidth="1" />
      <circle cx="95" cy="58" r="5" fill="#0F172A" stroke="#EF4444" strokeWidth="1" />
    </svg>
  );

  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 bg-blur text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#domov" className="flex items-center group">
              <LogoIcon />
              <div className="flex flex-col leading-none">
                <span className="text-2xl md:text-3xl font-black tracking-normal text-white uppercase italic group-hover:text-red-500 transition-colors">
                  AVTOSERVIS
                </span>
                <div className="flex items-center mt-0.5">
                  <span className="text-[10px] md:text-xs font-bold text-red-500 tracking-wider uppercase">
                    BLAŽ POLANC s.p.
                  </span>
                  <div className="ml-2 flex space-x-0.5 opacity-60">
                    <div className="w-4 h-[2px] bg-white"></div>
                    <div className="w-2 h-[2px] bg-white"></div>
                    <div className="w-1 h-[2px] bg-white"></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={openExplorer}
                className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/20 px-4 py-2 rounded-lg text-sm font-bold transition-all"
              >
                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>PREGLED</span>
              </button>
              <a
                href="#narocanje"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105"
              >
                REZERVIRAJ TERMIN
              </a>
            </div>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block hover:bg-slate-800 px-3 py-4 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                openExplorer();
              }}
              className="w-full text-left hover:bg-slate-800 px-3 py-4 rounded-md text-base font-medium text-red-500"
            >
              PREGLED STRANI
            </button>
            <a
              href="#narocanje"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full bg-red-600 text-center text-white px-3 py-4 rounded-md text-base font-bold"
            >
              REZERVIRAJ TERMIN
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
