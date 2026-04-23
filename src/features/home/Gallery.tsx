import React from 'react';
import { GALLERY } from '../../core/constants';

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-24 bg-oxe-dark px-6">
      <div className="container mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-logo text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-2 uppercase italic">
              
              <span className="text-white drop-shadow-[3px_3px_0px_#0030B5]">
                6 ANOS DE
              </span>

              <span className="text-oxe-yellow drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
                {' '}EVOLUÇÃO
              </span>

              <br/>

              <span className="text-white text-2xl md:text-3xl block mt-4 font-semibold border-b-2 border-oxe-yellow inline-block pb-1">
  De ideias simples a projetos que mudam vidas
</span>
            </h2>

            <p className="text-white/50 max-w-xl">
              O ÔXE Maker não começou ontem. São anos impactando estudantes, criando oportunidades
              e transformando curiosidade em tecnologia real.
            </p>
          </div>
        </div>

        {/* Galeria */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer border border-white/5"
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-oxe-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                
                <h4 className="text-xl font-logo font-bold text-white uppercase italic">
                  {item.title}
                </h4>

            

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;