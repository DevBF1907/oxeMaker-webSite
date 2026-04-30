import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* IMAGEM */}
          <div className="order-2 lg:order-1 relative">
            <div className="maker-card p-4 rotate-2">
              <img 
                src="/img/logo06oxemaker.jpeg" 
                alt="Participantes do evento Ôxe Maker em atividade maker"
                className="w-full h-auto object-cover rounded-lg transition-all"
              />
              <div className="mt-4 font-mono text-xs text-oxe-accent uppercase font-bold">
                MASCOTE: ZÉ_CALANGO.jpg
              </div>
            </div>

            {/* Sticker */}
            <div className="absolute -bottom-8 -right-8 bg-oxe-primary p-4 font-logo text-2xl text-white rounded-lg -rotate-6 shadow-xl">
              MAKER DE RAÇA!
            </div>
          </div>

          {/* TEXTO */}
          <div className="order-1 lg:order-2">
            <h2 className="font-logo text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-8 uppercase">
              <span className="text-white drop-shadow-[3px_3px_0px_#0030B5]">
                {' '}O Ôxe{' '}
              </span>
              <span className="text-oxe-yellow drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
                Maker
              </span>
            </h2>

            <div className="space-y-6 text-white/80 text-base md:text-lg lg:text-xl leading-loose max-w-3xl">
              
              <p>
                O Ôxe Maker surgiu da ideia de trazer para os jovens da Regional Metropolitana Norte da Rede Estadual de Educação de Pernambuco um evento que reunisse 
                <span className="text-white"> Robótica</span>, 
                <span className="text-white"> Cultura Maker</span> e o 
                <span className="text-white"> Universo Geek</span>.
              </p>

              <p>
                A proposta contempla aspectos vivenciados por essa juventude cosmopolita, possibilitando a exposição dos projetos desenvolvidos pelas Escolas Estaduais da Regional.
              </p>

              <p>
                É tecnologia e educação de mãos dadas na era digital, proporcionando uma verdadeira viagem — sem sair do lugar — em uma mistura de diversão, iniciação científica e protagonismo juvenil.
              </p>

              <p>
                O projeto, atualmente em sua sexta edição, foi idealizado pela Professora Lidyane Lira com o objetivo de fomentar práticas ligadas à Robótica e Cultura Maker.
              </p>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 font-mono text-sm">
              
              <div className="flex items-center gap-3 p-3 bg-white/5 border-l-4 border-oxe-primary rounded-md">
                <span className="text-oxe-primary font-bold">01_</span> Vidas reais
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/5 border-l-4 border-oxe-accent rounded-md">
                <span className="text-oxe-accent font-bold">02_</span> Escolas Makers
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/5 border-l-4 border-oxe-yellow rounded-md">
                <span className="text-oxe-yellow font-bold">03_</span> Comunidade Unida
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/5 border-l-4 border-oxe-primary rounded-md">
                <span className="text-oxe-primary font-bold">04_</span> Justiça pra Todos
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;