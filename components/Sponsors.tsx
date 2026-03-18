
import React from 'react';
import { SPONSORS } from '../constants';

const Sponsors: React.FC = () => {
  return (
    <section className="py-24 bg-oxe-dark border-t border-white/5 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-xs font-bold text-white/40 uppercase tracking-[0.4em] mb-4 italic">Aliança Tecnológica</h4>
          <h2 className="text-3xl md:text-4xl font-logo font-black uppercase italic text-white">Patrocinadores</h2>
        </div>

        {/* Diamond Tier */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <span className="px-4 py-1 rounded-full bg-oxe-accent/10 text-oxe-accent text-[10px] font-black uppercase tracking-widest border border-oxe-accent/20">Diamond Sponsors</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {SPONSORS.filter(s => s.tier === 'Diamond').map((s, i) => (
              <div key={i} className="aspect-[2/1] bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 p-8">
                <img src={s.logo} alt={s.name} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Lower Tiers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {SPONSORS.filter(s => s.tier !== 'Diamond').map((s, i) => (
            <div key={i} className="aspect-[2/1] bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100 p-6">
               <img src={s.logo} alt={s.name} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
