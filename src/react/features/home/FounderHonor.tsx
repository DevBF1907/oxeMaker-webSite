
import React from 'react';

const FounderHonor: React.FC = () => {
  return (
    <section className="py-24 px-6 relative bg-oxe-dark overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 relative">
            <div className="maker-card p-4 -rotate-3 border-2 border-oxe-accent">
              <img 
                src="/img/lidy.jpeg" 
                alt="Idealizadora do Ôxe-Maker" 
                className="w-full h-auto transition-all rounded-sm"
              />
              <div className="mt-4 font-mono text-xs text-oxe-accent uppercase font-bold">
                // idealizadora: lidyane_lira.jpeg
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-4 border-l-4 border-oxe-primary"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-4 border-r-4 border-oxe-yellow"></div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="inline-block mb-6 px-4 py-2 bg-oxe-primary text-white font-mono text-xs font-bold uppercase rotate-1">
              Homenagem Especial
            </div>
            <h2 className="font-logo text-5xl md:text-7xl font-black mb-8 leading-tight uppercase text-white">
              A Mente por trás do <span className="text-oxe-accent">Ôxe-Maker</span>
            </h2>
            <div className="space-y-6 text-white/80 text-xl font-medium leading-relaxed italic">
              <p>
                "O Ôxe-Maker nasceu de um sonho de ver a tecnologia como ferramenta de libertação e transformação social na nossa região. Não é sobre máquinas, é sobre pessoas buildando o próprio destino."
              </p>
              <p className="not-italic font-bold text-oxe-yellow text-2xl">
                — Lidyane Lira
              </p>
              <p className="not-italic text-lg text-white/60 font-mono">
                Idealizadora e alma do projeto, cuja visão de unir Vidas, Escolas e Comunidade transformou a Metropolitana Norte em um polo de inovação popular.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderHonor;
