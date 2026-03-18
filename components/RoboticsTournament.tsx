
import React from 'react';

const RoboticsTournament: React.FC = () => {
  const competitions = [
    {
      title: 'Buzz Line',
      description: 'A competição de Buzz Line desafia os participantes a construir robôs que seguem uma linha com precisão e velocidade. É o teste definitivo de sensores e algoritmos de controle.',
      image: 'https://picsum.photos/seed/buzzline/800/600'
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
        
        <div className="space-y-24">
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
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all rounded-sm"
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
      </div>
    </div>
  );
};

export default RoboticsTournament;
