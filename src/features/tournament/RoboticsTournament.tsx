
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TOURNAMENT_SCHEDULE } from '../../core/constants';

const RoboticsTournament: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash]);

  const competitions = [
    {
      id: 'buzzline',
      title: 'Buzz Line',
      description: 'A competição de Buzz Line desafia os participantes a construir robôs que seguem uma linha com precisão e velocidade. É o teste definitivo de sensores e algoritmos de controle.',
      image: '/img/buzzline.png',
      formsLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdFEmR2FsT9fwvZZjLlXCztOeZimsvnidaMZOBrRYKDA3u_Kg/viewform',
      editalLink: '/editais/edital-buzzline.pdf'
    },
    {
      id: 'buzzpro',
      title: 'Buzz PRO',
      description: 'A categoria Buzz PRO eleva o nível com obstáculos complexos, cruzamentos e velocidades muito maiores. Apenas para os robôs mais refinados.',
      image: '/img/buzzpro.png',
      formsLink: 'https://forms.gle/SEU_LINK_AQUI',
      editalLink: '/editais/edital-buzzline.pdf'
    },
    {
      id: 'sumo',
      title: 'Sumô de Robôs',
      description: 'Dois robôs entram, um robô sai! No Sumô, o objetivo é empurrar o oponente para fora do dojo. Força, tração e estratégia são fundamentais.',
      image: '/img/sumo.png',
      formsLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeOckNfYCA_BdjSqGzWB88LSFskNIXUzmN4hGjTZ1QBykE2VQ/viewform',
      editalLink: '/editais/edital-sumo.pdf'
    },
    {
      id: 'combate',
      title: 'Combate de Robôs',
      description: 'Destruição total na arena! Robôs equipados com armas ativas lutam até que um seja imobilizado. É a categoria mais emocionante e barulhenta do torneio.',
      image: 'https://picsum.photos/seed/combat/800/600',
      formsLink: 'https://forms.gle/SEU_LINK_AQUI',
      editalLink: 'https://robocore-eventos.s3.sa-east-1.amazonaws.com/public/Regras+-+Combate+Cupim.pdf'
    },
    {
      id: 'obr',
      title: 'OBR (Olimpíada Brasileira de Robótica)',
      description: 'A modalidade OBR simula um ambiente de desastre onde o robô deve resgatar vítimas de forma autônoma, superando obstáculos e terrenos difíceis.',
      image: '/img/mascote-obr.png',
      formsLink: 'https://obr.robocup.org.br/participe-da-obr/',
      editalLink: '/editais/edital-obr.pdf'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="container mx-auto">
        <h1 className="font-logo text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-12 uppercase text-white text-center">
          <span className="text-white drop-shadow-[3px_3px_0px_#0030B5]">Torneio de</span>
          <span className="text-oxe-yellow"> Robótica</span>
        </h1>
        
        <div className="space-y-24">
          {competitions.map((comp, index) => (
            <div 
              key={index} 
              id={comp.id}
              className={`grid lg:grid-cols-2 gap-16 items-center scroll-mt-32 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h2 className="font-logo text-4xl md:text-6xl font-black mb-6 uppercase text-oxe-yellow">
                  {comp.title}
                </h2>
                <p className="text-white/80 text-xl font-medium leading-relaxed mb-8">
                  {comp.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href={comp.formsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="maker-button bg-oxe-primary text-white px-6 py-3 font-logo text-xl uppercase rounded-sm shadow-md hover:brightness-110 transition-all text-center"
                  >
                    Inscrever Equipe
                  </a>
                  <a 
                    href={comp.editalLink}
                    download
                    className="maker-button border-2 border-oxe-accent bg-transparent text-oxe-accent px-6 py-3 font-logo text-xl uppercase rounded-sm shadow-md hover:bg-oxe-accent hover:text-oxe-dark transition-colors text-center"
                  >
                    Baixe o Edital
                  </a>
                  <div className="maker-card p-2 inline-block -rotate-1">
                    <span className="font-mono text-xs text-oxe-accent uppercase font-bold px-4 py-2">
                      // categoria: {comp.title.toLowerCase().replace(/\s+/g, '_')}
                    </span>
                  </div>
                </div>
              </div>
              
              <div
                className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
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
      </div>
    </div>
  );
};

export default RoboticsTournament;
