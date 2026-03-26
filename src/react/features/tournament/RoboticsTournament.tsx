
import React from 'react';
import { TOURNAMENT_SCHEDULE } from '../../core/constants';

const RoboticsTournament: React.FC = () => {
  const competitions = [
    {
      title: 'Buzz Line',
      description: 'A competição de Buzz Line desafia os participantes a construir robôs que seguem uma linha com precisão e velocidade. É o teste definitivo de sensores e algoritmos de controle.',
      image: 'https://picsum.photos/seed/buzzline/800/600'
    },
    {
      title: 'Buzz PRO',
      description: 'A categoria Buzz PRO eleva o nível com obstáculos complexos, cruzamentos e velocidades muito maiores. Apenas para os robôs mais refinados.',
      image: 'https://picsum.photos/seed/buzzpro/800/600'
    },
    {
      title: 'Sumô de Robôs',
      description: 'Dois robôs entram, um robô sai! No Sumô, o objetivo é empurrar o oponente para fora do dojo. Força, tração e estratégia são fundamentais.',
      image: 'https://picsum.photos/seed/sumo/800/600'
    },
    {
      title: 'Combate de Robôs',
      description: 'Destruição total na arena! Robôs equipados com armas ativas lutam até que um seja imobilizado. É a categoria mais emocionante e barulhenta do torneio.',
      image: 'https://picsum.photos/seed/combat/800/600'
    },
    {
      title: 'OBR (Olimpíada Brasileira de Robótica)',
      description: 'A modalidade OBR simula um ambiente de desastre onde o robô deve resgatar vítimas de forma autônoma, superando obstáculos e terrenos difíceis.',
      image: 'https://picsum.photos/seed/obr/800/600'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="container mx-auto">
        <h1 className="font-logo text-6xl md:text-8xl font-black mb-12 uppercase text-white text-center">
          Torneio de <span className="text-oxe-accent">Robótica</span>
        </h1>
        
        <div className="space-y-24 mb-32">
          {competitions.map((comp, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h2 className="font-logo text-4xl md:text-6xl font-black mb-6 uppercase text-oxe-yellow">
                  {comp.title}
                </h2>
                <p className="text-white/80 text-xl font-medium leading-relaxed mb-8">
                  {comp.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <button className="maker-button bg-oxe-primary text-white px-6 py-3 font-logo text-xl uppercase rounded-sm shadow-md">
                    Inscrever Equipe
                  </button>
                  <div className="maker-card p-2 inline-block -rotate-1">
                    <span className="font-mono text-xs text-oxe-accent uppercase font-bold px-4 py-2">
                      // categoria: {comp.title.toLowerCase().replace(/\s+/g, '_')}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="maker-card p-4 rotate-2">
                  <img 
                    src={comp.image} 
                    alt={comp.title} 
                    className="w-full h-auto transition-all rounded-sm"
                  />
                  <div className="mt-4 font-mono text-xs text-oxe-accent uppercase font-bold">
                    log_entry: {comp.title.toLowerCase().replace(/\s+/g, '_')}_preview.jpg
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-oxe-primary"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-oxe-accent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Programação Section */}
        <section id="programacao-torneio" className="mb-32">
          <div className="mb-16">
            <h2 className="font-logo text-5xl md:text-7xl font-black mb-4 uppercase">
              Cronograma do <span className="text-oxe-accent">Torneio</span>
            </h2>
            <div className="h-2 w-24 bg-oxe-primary mb-4"></div>
            <p className="font-mono text-white/60">log_tournament_schedule: v1.0.beta</p>
          </div>

          <div className="grid gap-4 max-w-5xl">
            {TOURNAMENT_SCHEDULE.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col md:flex-row gap-6 p-6 bg-white/5 border border-white/10 hover:border-oxe-accent transition-all group relative overflow-hidden"
              >
                <div className="md:w-32 flex-shrink-0 font-logo text-4xl text-oxe-accent italic">
                  {item.time}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-logo text-2xl text-white uppercase group-hover:text-oxe-accent transition-colors">
                      {item.activity}
                    </h4>
                    <span className="font-mono text-[10px] text-oxe-primary border border-oxe-primary px-2 py-0.5 uppercase">
                      {item.location}
                    </span>
                  </div>
                  <p className="font-sans text-white/50 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
                {/* Visual Glitch Element */}
                <div className="absolute top-0 right-0 w-1 h-full bg-oxe-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Mapa Section */}
        <section id="mapa-escola">
          <div className="mb-16 text-right">
            <h2 className="font-logo text-5xl md:text-7xl font-black mb-4 uppercase">
              Mapa do <span className="text-oxe-yellow">Campo de Batalha</span>
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
                O torneio acontecerá no ginásio e pátio central da ETE José de Alencar. Prepare-se para um ambiente imersivo com tecnologia e cultura maker.
              </p>
              <div className="font-mono text-[10px] text-oxe-accent">
                #ETE_JOSE_DE_ALENCAR #OLINDA #MAKER_VIBES
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RoboticsTournament;
