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
        
        <div className="inline-block mb-6">
          <span className="tape text-white font-mono text-sm uppercase font-bold shadow-lg">
             // status: pronto_para_buildar.exe
          </span>
        </div>
        
        <h1 className="font-logo text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-8 max-w-5xl mx-auto uppercase">
          <span className="text-white drop-shadow-[3px_3px_0px_#0030B5]">Educação para a cidadania</span><br/>
          <span className="text-oxe-accent drop-shadow-[3px_3px_0px_#ffffff]">Digital & Midiática</span><br/>
          <span className="text-oxe-yellow text-3xl md:text-5xl block mt-4 drop-shadow-[2px_2px_0px_#050D34]">formando cidadãs e cidadãos críticos e responsáveis</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-white/80 font-mono leading-relaxed mb-12">
          Hackeando o futuro com as mãos, <br className="hidden md:block"/>
          porque aprender é buildar a própria realidade.
        </p>

        <div className="bg-black/20 p-4 rounded-sm border border-white/5 inline-block">
          <Countdown />
          <p className="mt-4 font-mono text-oxe-accent font-bold uppercase tracking-widest">
            02 de Julho de 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
