
import React from 'react';
import Map from '../home/Map';

const MapPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-oxe-dark">
      <div className="py-12 px-6 border-b border-white/5 mb-12">
        <div className="container mx-auto text-center">
          <h1 className="font-logo text-6xl md:text-8xl font-black mb-4 uppercase text-white leading-none">
            MAPA DO <span className="text-oxe-yellow">EVENTO</span>
          </h1>
          <p className="font-mono text-white/50 max-w-2xl mx-auto uppercase tracking-widest text-sm">
            // Localize-se: explore cada zona da Arena ÔxeMaker.
          </p>
        </div>
      </div>

      <Map />

      <div className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white/5 p-8 border border-white/10 relative overflow-hidden group hover:border-oxe-yellow transition-colors">
            <div className="absolute top-0 right-0 p-2 font-mono text-[10px] text-white/20">01_</div>
            <h3 className="font-logo text-3xl text-oxe-yellow mb-4 uppercase">Endereço</h3>
            <p className="text-white/70 font-mono text-sm leading-relaxed">
              ETE José de Alencar<br/>
              Av. Getúlio Vargas, s/n<br/>
              Bairro Novo, Olinda - PE<br/>
              CEP: 53030-010
            </p>
          </div>

          <div className="bg-white/5 p-8 border border-white/10 relative overflow-hidden group hover:border-oxe-yellow transition-colors">
            <div className="absolute top-0 right-0 p-2 font-mono text-[10px] text-white/20">02_</div>
            <h3 className="font-logo text-3xl text-oxe-yellow mb-4 uppercase">Como Chegar</h3>
            <p className="text-white/70 font-mono text-sm leading-relaxed">
              Localizada em frente à orla de Olinda. <br/><br/>
              <span className="text-white/40">Ônibus:</span> Linhas que passam pela Av. Getúlio Vargas.<br/>
              <span className="text-white/40">Carro:</span> Estacionamento disponível nos arredores.
            </p>
          </div>

          <div className="bg-white/5 p-8 border border-white/10 relative overflow-hidden group hover:border-oxe-yellow transition-colors">
            <div className="absolute top-0 right-0 p-2 font-mono text-[10px] text-white/20">03_</div>
            <h3 className="font-logo text-3xl text-oxe-yellow mb-4 uppercase">Referências</h3>
            <p className="text-white/70 font-mono text-sm leading-relaxed">
              Próximo ao Shopping Patteo Olinda e à Faculdade de Olinda (FOCCA). Siga a sinalização do evento na entrada principal.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/maps/search/ETE+Jos%C3%A9+de+Alencar+Olinda" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-oxe-yellow text-black font-black uppercase tracking-widest px-8 py-4 border-2 border-oxe-yellow shadow-[6px_6px_0px_#fff] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all duration-200"
          >
            Abrir no Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
