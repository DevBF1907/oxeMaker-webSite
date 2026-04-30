
import React from 'react';
import Schedule from '../home/Schedule';

const SchedulePage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-oxe-dark">
      <div className="py-12 px-6 border-b border-white/5 mb-12">
        <div className="container mx-auto text-center">
          <h1 className="font-logo text-5xl md:text-7xl lg:text-8xl font-black mb-4 uppercase text-white leading-none">
            CRONOGRAMA DO <span className="text-oxe-yellow">EVENTO</span>
          </h1>
          <p className="font-mono text-white/50 max-w-2xl mx-auto uppercase tracking-widest text-sm">
            // O Plano: cada minuto focado em inovação e aprendizado.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 mb-16">
        <div className="bg-oxe-yellow/10 border-l-4 border-oxe-yellow p-6 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <h3 className="font-logo text-2xl text-oxe-yellow uppercase mb-1">Aviso Importante</h3>
            <p className="text-white/70 font-mono text-sm">Os horários podem sofrer pequenas alterações conforme o andamento do Evento.</p>
          </div>
          <div className="flex gap-4">
             <div className="text-center">
                <span className="block font-logo text-3xl text-white">08h</span>
                <span className="block font-mono text-[10px] text-white/40 uppercase">Abertura</span>
             </div>
             <div className="text-center border-l border-white/10 pl-4">
                <span className="block font-logo text-3xl text-white">17h</span>
                <span className="block font-mono text-[10px] text-white/40 uppercase">Encerramento</span>
             </div>
          </div>
        </div>
      </div>

      <Schedule showTitle={false} />

      <div className="container mx-auto px-6 py-24 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-logo text-4xl text-white mb-6 uppercase">O que <span className="text-oxe-yellow">esperar?</span></h3>
            <ul className="space-y-4 font-mono text-sm text-white/60">
              <li className="flex gap-3"><span className="text-oxe-yellow">▸</span> Competições de robótica em alto nível</li>
              <li className="flex gap-3"><span className="text-oxe-yellow">▸</span> Oficinas práticas para todas as idades</li>
              <li className="flex gap-3"><span className="text-oxe-yellow">▸</span> Arena Geek com cosplay e K-pop</li>
              <li className="flex gap-3"><span className="text-oxe-yellow">▸</span> Network com a comunidade maker de Pernambuco</li>
            </ul>
          </div>
          <div className="bg-white/5 p-8 border border-white/10 relative">
            <h3 className="font-logo text-3xl text-white mb-4 uppercase">Dica Maker</h3>
            <p className="text-white/70 font-mono text-sm leading-relaxed mb-6">
              Recomendamos chegar cedo para o credenciamento e garantir seu lugar nas oficinas, que possuem vagas limitadas por ordem de chegada.
            </p>
            <div className="font-mono text-[10px] text-oxe-yellow uppercase tracking-widest animate-pulse">
              [ status: sistema_pronto_para_buildar ]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
