
import React from 'react';

const Workshops: React.FC = () => {
  const workshops = [
    {
      title: 'Soldagem para Iniciantes',
      day: '02 de Julho',
      time: '10:00 - 12:00',
      instructor: 'Mestre Faísca',
      description: 'Aprenda as técnicas básicas de soldagem eletrônica e monte seu primeiro circuito arretado.'
    },
    {
      title: 'Introdução ao Arduino',
      day: '02 de Julho',
      time: '14:00 - 16:00',
      instructor: 'Eng. Bitola',
      description: 'Dê vida aos seus projetos! Aprenda a programar microcontroladores e controlar sensores e atuadores.'
    },
    {
      title: 'Modelagem 3D com Tinkercad',
      day: '03 de Julho',
      time: '09:00 - 11:00',
      instructor: 'Profa. Polígono',
      description: 'Crie seus próprios objetos em 3D e entenda como funciona a impressão 3D na prática.'
    },
    {
      title: 'Robótica com Sucata',
      day: '03 de Julho',
      time: '15:00 - 17:00',
      instructor: 'Recicla-Man',
      description: 'Transforme o que seria lixo em tecnologia! Oficina prática de reaproveitamento de materiais.'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="container mx-auto">
        <h1 className="font-logo text-6xl md:text-8xl font-black mb-12 uppercase text-white text-center">
          Nossas <span className="text-oxe-primary">Oficinas</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {workshops.map((workshop, index) => (
            <div key={index} className="maker-card p-8 flex flex-col h-full border-2 border-oxe-primary/30 hover:border-oxe-primary transition-colors">
              <div className="flex justify-between items-center mb-6 gap-2">
                <div className="bg-oxe-primary text-white px-2 py-1 font-mono text-[10px] md:text-xs font-bold uppercase whitespace-nowrap">
                  {workshop.day}
                </div>
                <div className="font-mono text-base md:text-xl text-oxe-accent font-bold whitespace-nowrap">
                  {workshop.time}
                </div>
              </div>
              
              <h2 className="font-logo text-4xl font-black mb-2 uppercase text-white leading-tight">
                {workshop.title}
              </h2>

              <div className="mb-6 flex items-center gap-2">
                <span className="font-mono text-[10px] text-oxe-yellow uppercase font-bold tracking-widest">
                  // oficineiro:
                </span>
                <span className="font-mono text-sm text-white/90 font-bold">
                  {workshop.instructor}
                </span>
              </div>
              
              <div className="w-full h-px bg-white/10 mb-6"></div>
              
              <p className="text-white/70 text-lg mb-10 flex-grow leading-relaxed">
                {workshop.description}
              </p>
              
              <div className="flex justify-center mt-auto">
                <button className="maker-button bg-oxe-primary text-white px-12 py-4 font-logo text-2xl uppercase rounded-sm shadow-md w-full sm:w-auto">
                  Garantir Vaga
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workshops;
