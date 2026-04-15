import React from 'react';
import { FEATURES } from '../../core/constants';

const Features: React.FC = () => {
  return (
    <section id="atividades" className="py-24 bg-black/20 px-6">
      <div className="container mx-auto">
        <div className="mb-20">
          <h2 className="font-logo text-4xl sm:text-6xl md:text-8xl font-black mb-6 uppercase">
            Mão na <span className="text-oxe-accent">Massa</span>
          </h2>
          <p className="font-mono text-white/60 text-lg">
            Aqui o sistema é bruto: menos conversa, mais protótipo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className="maker-card p-8 group hover:-translate-y-2 transition-transform relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 font-mono text-[10px] opacity-20 uppercase">
                mod_0{idx+1}
              </div>
              <div className="mb-6 text-4xl group-hover:scale-110 transition-transform inline-block">
                {feature.icon}
              </div>
              <h3 className="font-logo text-3xl font-bold mb-4 text-white uppercase group-hover:text-oxe-accent transition-colors">
                {feature.title}
              </h3>
              <p className="font-sans text-white/70 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
