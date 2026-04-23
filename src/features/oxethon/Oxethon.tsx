
import React, { useEffect } from 'react';

const Oxethon: React.FC = () => {
  const formsLink = 'https://forms.gle/SEU_LINK_AQUI';
  const editalLink = '/editais/edital_oxethon.pdf';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-20">
      <div className="bg-oxe-dark border-b border-white/5 py-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="font-logo text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-8 max-w-5xl mx-auto uppercase">
            <span className="text-white drop-shadow-[3px_3px_0px_#0030B5]">O </span>
            <span className="text-oxe-yellow drop-shadow-[3px_3px_0px_#050D34]">ÔXETHON</span>
          </h1>
          <p className="font-mono text-white/50 max-w-2xl mx-auto">
            A maratona de desenvolvimento e criação do Ôxe-Maker. 48 horas de inovação intensa para impactar a comunidade.
          </p>
        </div>
      </div>

      <div className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-logo text-4xl md:text-6xl font-black mb-6 uppercase text-oxe-yellow">
                O Hackathon Arretado
              </h2>
              <p className="text-white/80 text-xl font-medium leading-relaxed mb-8">
                O Ôxethon é a maratona de desenvolvimento e criação do Ôxe-Maker. Durante 48 horas, equipes multidisciplinares trabalham intensamente para criar soluções tecnológicas que impactem positivamente a comunidade local. É o lugar onde o código encontra a realidade e a inovação acontece na prática.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href={formsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="maker-button bg-oxe-primary text-white px-8 py-4 font-logo text-2xl uppercase rounded-sm shadow-md hover:brightness-110 transition-all text-center"
                >
                  Inscrever Equipe
                </a>
                <a 
                  href={editalLink}
                  download
                  className="maker-button border-2 border-oxe-accent bg-transparent text-oxe-accent px-8 py-4 font-logo text-2xl uppercase rounded-sm shadow-md hover:bg-oxe-accent hover:text-oxe-dark transition-colors text-center"
                >
                  Baixe o Edital
                </a>
                <div className="maker-card p-2 inline-block -rotate-1">
                  <span className="font-mono text-xs text-oxe-accent uppercase font-bold px-4 py-2">
                    // status: em_desenvolvimento.exe
                  </span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="maker-card p-4 rotate-2">
                <img 
                  src="/img/oxethon.png" 
                  alt="Ôxethon" 
                  className="w-full h-auto transition-all rounded-sm"
                />
                <div className="mt-4 font-mono text-xs text-oxe-accent uppercase font-bold">
                  log_entry: oxethon_preview.png
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-oxe-primary"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-oxe-accent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oxethon;
