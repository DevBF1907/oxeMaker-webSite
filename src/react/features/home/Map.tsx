
import React from 'react';

const Map: React.FC = () => {
  return (
    <section id="mapa-evento" className="py-24 px-6 bg-oxe-dark/50">
      <div className="container mx-auto">
        <div className="mb-16 text-right">
          <h2 className="font-logo text-5xl md:text-7xl font-black mb-4 uppercase text-white">
            Mapa do <span className="text-oxe-yellow">Evento</span>
          </h2>
          <div className="h-2 w-24 bg-oxe-yellow mb-4 ml-auto"></div>
          <p className="font-mono text-white/60">location: ETE José de Alencar</p>
        </div>

        <div className="relative">
          <div className="maker-card p-4 bg-oxe-dark border-2 border-oxe-yellow/30 overflow-hidden">
            <div className="aspect-video bg-white/5 flex items-center justify-center relative overflow-hidden group">
              {/* Placeholder image for the map */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px]"></div>
              
              <div className="text-center z-10 px-6">
                <div className="font-logo text-4xl md:text-6xl text-white/20 uppercase mb-4 select-none">
                  ARTE DO MAPA EM BREVE
                </div>
                <p className="font-mono text-xs text-oxe-yellow uppercase tracking-widest">
                  [ renderizando_planta_baixa_ete_jose_de_alencar.obj ]
                </p>
              </div>

              {/* Simulated UI elements for the map */}
              <div className="absolute top-8 left-8 p-4 border border-white/10 bg-black/40 backdrop-blur-sm hidden md:block">
                <div className="font-mono text-[10px] text-oxe-accent mb-2">STATUS: AGUARDANDO_ARTE</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-oxe-primary"></div>
                    <span className="font-mono text-[9px] text-white/60 uppercase">ARENA PRINCIPAL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-oxe-accent"></div>
                    <span className="font-mono text-[9px] text-white/60 uppercase">PITS / BOXES</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-oxe-yellow"></div>
                    <span className="font-mono text-[9px] text-white/60 uppercase">ÁREA GEEK</span>
                  </div>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-oxe-yellow"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-oxe-yellow"></div>
            </div>
            
            <div className="mt-4 flex justify-between items-center font-mono text-[10px] text-white/30">
              <span>COORDINATES: -7.9427, -34.8724</span>
              <span className="uppercase text-oxe-yellow animate-pulse">● sistema_ativo</span>
            </div>
          </div>
          
          {/* Legend/Info card floating */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:-bottom-8 lg:-left-8 lg:max-w-xs p-6 bg-oxe-neutral border border-white/10 shadow-2xl rotate-1">
            <h5 className="font-logo text-xl text-white mb-2 uppercase">Localização</h5>
            <p className="text-xs text-white/70 leading-relaxed mb-4">
              O evento acontecerá no ginásio e pátio central da ETE José de Alencar. Prepare-se para um ambiente imersivo com tecnologia e cultura maker.
            </p>
            <div className="font-mono text-[10px] text-oxe-accent">
              #ETE_JOSE_DE_ALENCAR #OLINDA #MAKER_VIBES
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
