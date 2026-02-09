
import React from 'react';

interface EditorPanelProps {
  content: any;
  updateContent: (section: string, field: string, value: string) => void;
  onClose: () => void;
}

const EditorPanel: React.FC<EditorPanelProps> = ({ content, updateContent, onClose }) => {
  return (
    <div className="fixed inset-y-0 right-0 w-80 md:w-96 bg-white shadow-2xl z-[100] border-l border-slate-200 flex flex-col animate-in slide-in-from-right duration-300">
      <div className="p-6 bg-slate-900 text-white flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Urejevalnik vsebine</h2>
          <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Spremembe se shranijo sproti</p>
        </div>
        <button onClick={onClose} className="hover:text-red-500 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-slate-50">
        {/* HERO SECTION */}
        <div className="space-y-4">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-wider border-b pb-2">Glavna sekcija (Hero)</h3>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600">Glavni naslov</label>
            <input 
              type="text" 
              className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-red-600 outline-none"
              value={content.hero.title}
              onChange={(e) => updateContent('hero', 'title', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600">Podnaslov / Opis</label>
            <textarea 
              className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-red-600 outline-none h-24"
              value={content.hero.subtitle}
              onChange={(e) => updateContent('hero', 'subtitle', e.target.value)}
            />
          </div>
        </div>

        {/* SERVICES */}
        <div className="space-y-4">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-wider border-b pb-2">Storitve</h3>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600">Nadnaslov</label>
            <input 
              type="text" 
              className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm"
              value={content.services.title}
              onChange={(updateContent ? (e: any) => updateContent('services', 'title', e.target.value) : undefined)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600">Glavni naslov</label>
            <input 
              type="text" 
              className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm"
              value={content.services.subtitle}
              onChange={(e) => updateContent('services', 'subtitle', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="p-6 bg-white border-t border-slate-200 text-center">
        <button 
          onClick={() => {
            localStorage.removeItem('elita_content');
            window.location.reload();
          }}
          className="text-xs font-bold text-red-500 hover:text-red-700 uppercase tracking-widest"
        >
          Ponastavi na privzeto
        </button>
      </div>
    </div>
  );
};

export default EditorPanel;
