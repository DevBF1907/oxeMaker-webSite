
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
              <span className="text-white drop-shadow-[3px_3px_0px_#0030B5]"> O Ôxe </span>
              <span className="text-oxe-yellow drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]"> Maker </span>

            </h2>
            <div className="space-y-6 text-white/80 text-xl font-medium leading-relaxed">
              <p>
             O Ôxe Maker surgiu da ideia de trazer para os jovens da Regional Metropolitana Norte da Rede Estadual de Educação de
              Pernambuco um evento que conseguisse reunir elementos da Robótica, Cultura Maker e do Universo Geek, 
              contemplando aspectos vivenciados por essa juventude cosmopolita e possibilitando a exposição dos 
              projetos desenvolvidos pelas Escolas Estaduais da Regional: tecnologia e educação de mãos dadas na era digital
               possibilitando uma viagem, sem sair do lugar, numa miscelânea de diversão, Iniciação Científica, Protagonismo Juvenil e 
               uma boa dose Maker de “Faça você mesmo!”. O formato do projeto – que está em sua sexta edição – foi idealizado pela Professora Lidyane Lira – 
               responsável pelas ações ligadas à Robótica e Cultura Maker da Metronorte, no intuito de fomentar práticas ligadas às áreas mencionadas.

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
