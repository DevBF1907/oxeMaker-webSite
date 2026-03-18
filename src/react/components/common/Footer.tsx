
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-oxe-dark border-t border-white/5 font-mono text-xs">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-white/40">
        <div className="flex flex-col gap-2">
           <p className="text-white/60 font-bold uppercase tracking-widest">/* ÔXE-MAKER-2026 */</p>
           <p>Vidas, Escolas e Comunidades.</p>
           <p>Metropolitana Norte - Recife, Brasil.</p>
        </div>
        
        <div className="flex gap-8 uppercase">
          <a href="#" className="hover:text-oxe-accent transition-colors">Github</a>
          <a href="#" className="hover:text-oxe-accent transition-colors">Insta</a>
          <a href="#" className="hover:text-oxe-accent transition-colors">Discord</a>
        </div>
        
        <div className="text-right flex flex-col gap-2 items-center md:items-end">
          <p>COMPILADO COM SUCESSO EM 2026</p>
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-oxe-accent"></span>
            <span className="w-2 h-2 rounded-full bg-oxe-yellow"></span>
            <span className="w-2 h-2 rounded-full bg-oxe-primary"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
