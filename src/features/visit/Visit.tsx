
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Schedule from '../home/Schedule';
import Map from '../home/Map';

const Visit: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="pt-20">
      <div className="bg-oxe-dark border-b border-white/5 py-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="font-logo text-6xl md:text-8xl font-black mb-4 uppercase text-white">
            Informações de <span className="text-oxe-yellow">Visita</span>
          </h1>
          <p className="font-mono text-white/50 max-w-2xl mx-auto">
            Prepare-se para a melhor experiência maker do ano. Confira o cronograma das atividades e localize-se no mapa do evento.
          </p>
        </div>
      </div>
      
      <Schedule />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <Map />
    </div>
  );
};

export default Visit;
