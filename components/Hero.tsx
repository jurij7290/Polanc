
import React from 'react';

interface HeroProps {
  content: {
    title: string;
    subtitle: string;
  };
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const renderTitle = () => {
    const highlightTrigger = 'nemška vozila';
    if (content.title.includes(highlightTrigger)) {
      const parts = content.title.split(highlightTrigger);
      return (
        <>
          {parts[0]}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">{highlightTrigger}</span>
          {parts[1]}
        </>
      );
    }
    
    const words = content.title.split(' ');
    if (words.length > 2) {
      const mainPart = words.slice(0, words.length - 2).join(' ');
      const highlightPart = words.slice(words.length - 2).join(' ');
      return (
        <>
          {mainPart}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">{highlightPart}</span>
        </>
      );
    }

    return content.title;
  };

  const HeroLogo = () => (
    <div className="mb-8 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-forwards">
      <svg className="w-32 h-20 md:w-48 md:h-28" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 60C15 35.1472 35.1472 15 60 15C84.8528 15 105 35.1472 105 60" stroke="#991B1B" strokeWidth="1" strokeLinecap="round" opacity="0.1"/>
        <path d="M22 55C24 48 28 42 34 36" stroke="#EF4444" strokeWidth="5" strokeLinecap="round" />
        <path d="M42 30C48 26 55 24 62 24" stroke="#DC2626" strokeWidth="6" strokeLinecap="round" />
        <path d="M72 24C80 25 88 28 95 34" stroke="#B91C1C" strokeWidth="7" strokeLinecap="round" />
        <path d="M100 42C103 48 105 55 105 62" stroke="#991B1B" strokeWidth="8" strokeLinecap="round" />
        <path 
          d="M5 58C15 58 22 57 28 54L48 42C55 38 70 36 85 36C98 36 108 45 112 52L115 58H5Z" 
          fill="white" 
        />
        <path d="M48 44C60 39 75 39 88 40" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="120" y1="58" x2="80" y2="58" stroke="white" strokeWidth="1" opacity="0.3" />
        <line x1="120" y1="62" x2="85" y2="62" stroke="white" strokeWidth="1" opacity="0.2" />
        <line x1="120" y1="66" x2="90" y2="66" stroke="white" strokeWidth="1" opacity="0.1" />
        <circle cx="28" cy="58" r="5" fill="#0F172A" stroke="#EF4444" strokeWidth="1" />
        <circle cx="95" cy="58" r="5" fill="#0F172A" stroke="#EF4444" strokeWidth="1" />
      </svg>
    </div>
  );

  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555214107-f2e7c48c8373?auto=format&fit=crop&q=80&w=2000')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-red-600/20 text-red-500 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-red-600/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span>NA VOLJO SO PROSTI TERMINI</span>
          </div>
          
          <HeroLogo />
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            {renderTitle()}
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            {content.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <a 
              href="#narocanje"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-lg text-center transition-all shadow-lg shadow-red-600/25 transform hover:-translate-y-1"
            >
              Naročite se na servis
            </a>
            <a 
              href="tel:+38670741751"
              className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 rounded-lg font-bold text-lg text-center transition-all shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Pokliči: 070 741 751
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
