
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-oxe-dark border-t border-white/5 font-mono text-xs">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-white/40">
        <div className="flex flex-col gap-2">
           <h4 className="font-logo text-2xl md:text-4xl font-black uppercase">
         <span className="text-white drop-shadow-[3px_3px_0px_#0030B5]"> Ôxe</span><span className="text-oxe-yellow"> Maker </span>
           <span className="text-white drop-shadow-[3px_3px_0px_#0030B5]"> 2026</span>
           </h4>
           <p className="font-mono text-oxe-yellow text-sm uppercase font-bold">
             // formando cidadãs e cidadãos críticos e responsáveis
           </p>
        </div>
       
        
        <div className="flex items-center">
          <img 
            src="/img/logos-claras.png" 
            alt="Logos" 
            className="h-12 md:h-16 w-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
