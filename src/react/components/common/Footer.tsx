
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-oxe-dark border-t border-white/5 font-mono text-xs">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-white/40">
        <div className="flex flex-col gap-2">
           <h4 className="font-logo text-3xl md:text-4xl text-white uppercase tracking-tight drop-shadow-[2px_2px_0px_#0030B5]">
             ÔXE <span className="text-oxe-accent">MAKER</span> 2026
           </h4>
           <p className="font-mono text-oxe-yellow text-sm uppercase font-bold">
             // formando cidadãs e cidadãos críticos e responsáveis
           </p>
        </div>
        
        
        <div className="flex items-center">
          <img 
            src="/img/logos claras.png" 
            alt="Logos" 
            className="h-12 md:h-16 w-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
