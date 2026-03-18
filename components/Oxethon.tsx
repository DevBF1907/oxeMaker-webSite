
import React from 'react';

const Oxethon: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="container mx-auto">
        <h1 className="font-logo text-6xl md:text-8xl font-black mb-12 uppercase text-white text-center">
          O <span className="text-oxe-primary">ÔXETHON</span>
        </h1>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-logo text-4xl md:text-6xl font-black mb-6 uppercase text-oxe-accent">
              O Hackathon Arretado
            </h2>
            <p className="text-white/80 text-xl font-medium leading-relaxed mb-8">
              O Ôxethon é a maratona de desenvolvimento e criação do Ôxe-Maker. Durante 48 horas, equipes multidisciplinares trabalham intensamente para criar soluções tecnológicas que impactem positivamente a comunidade local. É o lugar onde o código encontra a realidade e a inovação acontece na prática.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="maker-button bg-oxe-primary text-white px-8 py-4 font-logo text-2xl uppercase rounded-sm shadow-md">
                Inscrever Equipe
              </button>
              <div className="maker-card p-2 inline-block -rotate-1">
                <span className="font-mono text-xs text-oxe-primary uppercase font-bold px-4 py-2">
                  // status: em_desenvolvimento.exe
                </span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="maker-card p-4 rotate-2">
              <img 
                src="https://picsum.photos/seed/oxethon/800/600" 
                alt="Ôxethon" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all rounded-sm"
              />
              <div className="mt-4 font-mono text-xs text-oxe-primary uppercase font-bold">
                log_entry: oxethon_preview.jpg
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-oxe-primary"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-oxe-accent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oxethon;
