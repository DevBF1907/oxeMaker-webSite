
import React from 'react';

const GeekCulture: React.FC = () => {
  const categories = [
    {
      title: 'Cosplay',
      description: 'Vista-se como seu personagem favorito de animes, games, filmes ou séries! O concurso de Cosplay premia a criatividade, a fidelidade ao personagem e a performance no palco.',
      image: "/img/calango-cosplay.jpeg"
    },
    {
      title: 'Dança de K-pop',
      description: 'Mostre seu talento na dança com as coreografias mais icônicas do K-pop! O concurso de dança reúne grupos e solistas em uma competição cheia de energia e estilo.',
      image: 'https://picsum.photos/seed/kpop/800/600'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="container mx-auto">
        <h1 className="font-logo text-6xl md:text-8xl font-black mb-12 uppercase text-white text-center">
          Cultura <span className="text-oxe-yellow">GEEK</span>
        </h1>
        
        <div className="space-y-24">
          {categories.map((cat, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h2 className="font-logo text-4xl md:text-6xl font-black mb-6 uppercase text-oxe-accent">
                  {cat.title}
                </h2>
                <p className="text-white/80 text-xl font-medium leading-relaxed mb-8">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <button className="maker-button bg-oxe-yellow text-black px-6 py-3 font-logo text-xl uppercase rounded-sm shadow-md">
                    Inscrever-se
                  </button>
                  <div className="maker-card p-2 inline-block -rotate-1">
                    <span className="font-mono text-xs text-oxe-yellow uppercase font-bold px-4 py-2">
                      // categoria: {cat.title.toLowerCase().replace(/\s+/g, '_')}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="maker-card p-4 rotate-2">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-auto transition-all rounded-sm"
                  />
                  <div className="mt-4 font-mono text-xs text-oxe-yellow uppercase font-bold">
                    log_entry: {cat.title.toLowerCase().replace(/\s+/g, '_')}_preview.jpg
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-oxe-yellow"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-oxe-accent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeekCulture;
