
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="maker-card p-4 rotate-2">
                <img 
                  src="/public/calango-logo.png" 
                  alt="Maker Working" 
                  className="w-full h-auto transition-all background-blue"
                />
                <div className="mt-4 font-mono text-xs text-oxe-accent uppercase font-bold">
                  log_entry: oficina_comunitaria_01.jpg
                </div>
             </div>
             {/* Floating component sticker */}
             <div className="absolute -bottom-8 -right-8 bg-oxe-primary p-4 font-logo text-2xl text-white rounded-lg -rotate-6 shadow-xl">
                MAKER DE RAÇA!
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-logo text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-8 uppercase">
              <span className="text-white drop-shadow-[3px_3px_0px_#0030B5]">Sobre o</span>
              <span className="text-oxe-accent drop-shadow-[3px_3px_0px_#ffffff]"> Ôxe-Maker</span><br/>
              <span className="text-oxe-yellow text-2xl md:text-3xl block mt-4 drop-shadow-[2px_2px_0px_#050D34]">Transformando ideias em realidade</span>
            </h2>
            <div className="space-y-6 text-white/80 text-xl font-medium leading-relaxed">
              <p>
              O ÔXE Maker nasce para transformar ideias em realidade. Como o maior evento de robótica e cultura maker em linha reta da GRE Metropolitana Norte/PE, reunimos mentes criativas para construir, colaborar e inovar juntos.

Aqui, aprender é fazer. Criar é compartilhar.

Nossa linguagem é o código, mas nosso impacto vai muito além.

              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 font-mono text-sm">
                <div className="flex items-center gap-3 p-3 bg-white/5 border-l-4 border-oxe-primary">
                   <span className="text-oxe-primary font-bold">01_</span> Vidas reais
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 border-l-4 border-oxe-accent">
                   <span className="text-oxe-accent font-bold">02_</span> Escolas Makers
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 border-l-4 border-oxe-yellow">
                   <span className="text-oxe-yellow font-bold">03_</span> Comunidade Unida
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 border-l-4 border-oxe-primary">
                   <span className="text-oxe-primary font-bold">04_</span> Justiça pra Todos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
