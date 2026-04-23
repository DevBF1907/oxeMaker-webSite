import React from 'react';
import Countdown from '../../components/common/Countdown';
import Logo from '../../components/common/Logo';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-12 overflow-hidden px-6">
      {/* Decorative Blueprint elements */}
      <div className="absolute top-20 left-10 opacity-10 pointer-events-none">
        <div className="w-64 h-64 border-2 border-dashed border-oxe-primary rounded-full"></div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 pointer-events-none">
        <div className="w-96 h-96 border-2 border-oxe-accent rotate-45"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="flex justify-center mb-10">
           <Logo className="w-64 h-64 md:w-80 md:h-80" />
        </div>
      
        
        <h1 className="font-logo text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6 max-w-5xl mx-auto uppercase">
          <span className="text-white drop-shadow-[3px_3px_0px_#0030B5]">Ôxe </span>
          <span className="text-oxe-yellow drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">Maker </span>
         <span className="text-white drop-shadow-[3px_3px_0px_#0030B5]"> 2026</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white font-mono leading-relaxed mb-10 drop-shadow-md">
          Evento de robótica e cultura geek para estudantes da rede pública estadual de PE
        </p>

       <button className="mb-12 bg-oxe-yellow text-black font-black uppercase tracking-widest px-8 py-4 rounded-none border-2 border-oxe-yellow shadow-[6px_6px_0px_#000]
 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all duration-200 text-lg md:text-xl">
  Inscreva-se
</button>

<div className="flex flex-col items-center gap-8">
  <div className="p-6 border-b-4 border-oxe-yellow inline-block text-center">
    <Countdown />
    <p className="mt-4 font-mono text-white/70 font-semibold uppercase tracking-widest">
      02 de Julho de 2026
    </p>
  </div>
</div>
      </div>
    </section>
  );
};

export default Hero;
