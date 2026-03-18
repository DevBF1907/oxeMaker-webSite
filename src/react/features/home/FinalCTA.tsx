
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section id="inscricao" className="py-32 px-6 relative bg-oxe-dark overflow-hidden">
      {/* Tape decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-oxe-accent shadow-lg"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block mb-10 px-4 py-2 bg-oxe-yellow text-oxe-dark font-mono text-xs font-bold uppercase rotate-2">
            // fim_do_arquivo.h
          </div>
          <h2 className="font-logo text-6xl md:text-9xl font-black mb-10 leading-none uppercase text-white drop-shadow-xl">
            CHEGA NO <br/> <span className="text-oxe-accent">MUTIRÃO!</span>
          </h2>
          <p className="font-mono text-lg md:text-2xl text-white/80 mb-12">
            O Ôxe-Maker 2026 tá chamando. <br className="hidden md:block"/>
            Não importa se você é mestre ou aprendiz, o importante é buildar.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <button className="maker-button group px-16 py-8 bg-oxe-primary text-white font-logo text-4xl uppercase rounded-sm hover:bg-oxe-accent transition-all">
              Tô Dentro! ⚡
            </button>
            
            <div className="flex items-center gap-6 font-mono text-xs text-white/30 uppercase tracking-widest">
              <span>Recife-PE</span>
              <span>•</span>
              <span>2026</span>
              <span>•</span>
              <span>Rede Metropolitana Norte</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
