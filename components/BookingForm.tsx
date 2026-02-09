
import React, { useState } from 'react';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    car: '',
    serviceType: '',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic for sending data would go here
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center px-4">
        <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-4xl font-bold mb-4">Hvala za vaše zaupanje!</h2>
        <p className="text-xl text-slate-300 mb-8">
          Prejeli smo vaše naročilo. Naš svetovalec vas bo poklical v najkrajšem možnem času za potrditev termina.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-red-500 font-bold hover:underline"
        >
          Rezerviraj še en termin
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-3">Rezervacija</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Zagotovite si svoj termin še danes</h3>
          
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Izpolnite spodnji obrazec ali nas pokličite direktno na <a href="tel:+38670741751" className="text-white font-bold hover:text-red-500">+386 70 741 751</a>. Odzovemo se takoj.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-white/5 p-3 rounded-lg mr-4 border border-white/10">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Delovni Čas</h4>
                <p className="text-slate-400">Pon - Pet: 08:00 - 17:00</p>
                <p className="text-slate-400">Sobota: 08:00 - 12:00</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-white/5 p-3 rounded-lg mr-4 border border-white/10">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Lokacija</h4>
                <p className="text-slate-400">Log 29, Log, 8294 Boštanj</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 text-slate-900 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Ime in Priimek</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-600 transition-all"
                  placeholder="Janez Novak"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Telefon</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-600 transition-all"
                  placeholder="041 123 456"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Znamka & Model Vozila</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-600 transition-all"
                  placeholder="BMW X5 (2020)"
                  value={formData.car}
                  onChange={(e) => setFormData({...formData, car: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Tip Storitve</label>
                <select 
                  required
                  className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-600 transition-all"
                  value={formData.serviceType}
                  onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                >
                  <option value="">Izberite storitev</option>
                  <option value="redni-servis">Redni servis</option>
                  <option value="diagnostika">Diagnostika</option>
                  <option value="zavore">Zavorne obloge</option>
                  <option value="drugo">Drugo</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Želen datum</label>
              <input 
                type="date" 
                required
                className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-600 transition-all"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Opombe (neobvezno)</label>
              <textarea 
                className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-600 transition-all h-32"
                placeholder="Opišite težavo ali specifične želje..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-slate-900 text-white font-black py-4 rounded-xl hover:bg-slate-800 transition-all transform hover:scale-[1.02] shadow-xl"
            >
              POŠLJI POVPRAŠEVANJE
            </button>
            <p className="text-xs text-center text-slate-500">
              S klikom na gumb se strinjate z obdelavo osebnih podatkov za namen rezervacije.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
