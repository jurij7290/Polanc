
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SiteExplorer from './components/SiteExplorer';
import AIChat from './components/AIChat';

const DEFAULT_CONTENT = {
  hero: {
    title: 'Specijalist za vaše vozilo',
    subtitle: 'Večletne izkušnje servisiranja znamk BMW, Audi, Mercedes-Benz. Uporabljamo sodobno diagnostiko in izkušnje.'
  },
  services: {
    title: 'Kaj počnemo',
    subtitle: 'Vrhunska oskrba za vaš jekleni konjiček'
  }
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);
  const [content] = useState(() => {
    const saved = localStorage.getItem('elita_content');
    return saved ? JSON.parse(saved) : DEFAULT_CONTENT;
  });

  return (
    <div className="relative min-h-screen">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        openExplorer={() => setIsExplorerOpen(true)}
      />
      
      <main>
        <section id="domov">
          <Hero content={content.hero} />
        </section>

        <section id="storitve" className="py-20 bg-slate-50">
          <Services content={content.services} />
        </section>

        <section id="mnenja" className="py-20 bg-white">
          <Testimonials />
        </section>

        <section id="narocanje" className="py-20 bg-slate-900 text-white">
          <BookingForm />
        </section>
      </main>

      <Footer />
      <AIChat />

      {isExplorerOpen && (
        <SiteExplorer onClose={() => setIsExplorerOpen(false)} />
      )}
    </div>
  );
};

export default App;
