
import React from 'react';
import About from '../home/About';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-oxe-dark">
      <div className="py-12 px-6 border-b border-white/5 mb-12">
        <div className="container mx-auto text-center">
          <h1 className="font-logo text-6xl md:text-8xl font-black mb-4 uppercase text-white leading-none">
              <span className="text-white drop-shadow-[3px_3px_0px_#0030B5]"> Sobre O  Ôxe</span><span className="text-oxe-yellow"> Maker</span>
          </h1>
          
        </div>
      </div>

      <About />

      <div className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="font-logo text-4xl text-white mb-4 uppercase">Nossa <span className="text-oxe-yellow">Missão</span></h3>
              <p className="text-white/70 font-sans text-lg leading-relaxed">
                Democratizar o acesso à tecnologia e à cultura maker para estudantes da rede pública, transformando consumidores de tecnologia em criadores de soluções reais.
              </p>
            </div>
            <div>
              <h3 className="font-logo text-4xl text-white mb-4 uppercase">Nossa <span className="text-oxe-yellow">Visão</span></h3>
              <p className="text-white/70 font-sans text-lg leading-relaxed">
                Ser o principal ecossistema de inovação educacional em Pernambuco, conectando escola, comunidade e mercado através do "aprender fazendo".
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 border border-white/10 text-center">
              <span className="block font-logo text-5xl text-oxe-yellow mb-2">+500</span>
              <span className="block font-mono text-[10px] text-white/40 uppercase">Estudantes Impactados</span>
            </div>
            <div className="bg-white/5 p-6 border border-white/10 text-center">
              <span className="block font-logo text-5xl text-oxe-yellow mb-2">+20</span>
              <span className="block font-mono text-[10px] text-white/40 uppercase">Escolas Parceiras</span>
            </div>
            <div className="bg-white/5 p-6 border border-white/10 text-center">
              <span className="block font-logo text-5xl text-oxe-yellow mb-2">+15</span>
              <span className="block font-mono text-[10px] text-white/40 uppercase">Competições de Robótica</span>
            </div>
            <div className="bg-white/5 p-6 border border-white/10 text-center">
              <span className="block font-logo text-5xl text-oxe-yellow mb-2">+100</span>
              <span className="block font-mono text-[10px] text-white/40 uppercase">Projetos Maker</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-oxe-yellow py-20 px-6 mt-12">
        <div className="container mx-auto text-center">
           <h2 className="font-logo text-4xl md:text-6xl text-black uppercase mb-8">Quer fazer parte dessa história?</h2>
           <p className="text-black/80 font-mono text-lg max-w-2xl mx-auto mb-10">
             Seja como competidor, mentor ou parceiro, o ÔxeMaker é o lugar onde sua ideia ganha vida.
           </p>
           <button className="bg-black text-white font-black uppercase tracking-widest px-10 py-5 shadow-[8px_8px_0px_rgba(255,255,255,0.4)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all duration-200">
             Vem Buildar com a gente
           </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

