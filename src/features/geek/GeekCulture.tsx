
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GeekCulture: React.FC = () => {
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

  const categories = [
    {
      id: 'cosplay',
      title: 'Cosplay',
      description: 'Vista-se como seu personagem favorito de animes, games, filmes ou séries! O desfile de Cosplay premia a criatividade, a fidelidade ao personagem e a performance no palco.',
      image: "/img/calango-cosplay.jpeg",
      formsLink: 'https://docs.google.com/forms/d/e/1FAIpQLSd4R3JcsSD_8gPA9DwBJ3HMes4C9Z5YwhQk57AadqcZn6wGug/viewform',
      editalLink: '/editais/edital_cosplay.pdf'
    },
    {
      id: 'kpop',
      title: 'Dança de K-pop',
      description: 'Mostre seu talento na dance com as coreografias mais icônicas do K-pop! O concurso de dança reúne grupos e solistas em uma competição cheia de energia e estilo.',
      image: '/img/k-pop.png',
      formsLink: 'https://forms.gle/SEU_LINK_AQUI',
      editalLink: '/editais/edital_kpop.pdf'
    },
    {
      id: 'justdance',
      title: 'Just Dance',
      description: 'Prepare-se para brilhar na pista com o Just Dance! Mostre seus melhores movimentos e divirta-se em uma competição cheia de ritmo e energia.',
      image: '/img/calango-just.jpeg',
      formsLink: 'https://forms.gle/SEU_LINK_AQUI'
    }
  ];

  return (
    <div className="pt-20">
      <div className="bg-oxe-dark border-b border-white/5 py-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="font-logo text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-8 max-w-5xl mx-auto uppercase">
            <span className="text-white drop-shadow-[3px_3px_0px_#0030B5]">Cultura</span>
            <span className="text-oxe-yellow drop-shadow-[3px_3px_0px_#050D34]"> GEEK</span>
          </h1>
          <p className="font-mono text-white/50 max-w-2xl mx-auto">
            O ponto de encontro da criatividade e da paixão. Celebre o universo geek com desfiles, dança e muita diversão.
          </p>
        </div>
      </div>

      <div className="py-24 px-6">
        <div className="container mx-auto">
          <div className="space-y-24">
            {categories.map((cat, index) => (
              <div 
                key={index} 
                id={cat.id}
                className={`grid lg:grid-cols-2 gap-16 items-center scroll-mt-32 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="font-logo text-4xl md:text-6xl font-black mb-6 uppercase text-oxe-yellow">
                    {cat.title}
                  </h2>
                  <p className="text-white/80 text-xl font-medium leading-relaxed mb-8">
                    {cat.description}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    {cat.formsLink && (
                      <a 
                        href={cat.formsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="maker-button bg-oxe-primary text-white px-6 py-3 font-logo text-xl uppercase rounded-sm shadow-md hover:brightness-110 transition-all text-center"
                      >
                        Inscrever-se
                      </a>
                    )}
                    {cat.editalLink && (
                      <a 
                        href={cat.editalLink}
                        download
                        className="maker-button border-2 border-oxe-accent bg-transparent text-oxe-accent px-6 py-3 font-logo text-xl uppercase rounded-sm shadow-md hover:bg-oxe-accent hover:text-oxe-dark transition-colors text-center"
                      >
                        Baixe o Edital
                      </a>
                    )}
                    <div className="maker-card p-2 inline-block -rotate-1">
                      <span className="font-mono text-xs text-oxe-accent uppercase font-bold px-4 py-2">
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
                    <div className="mt-4 font-mono text-xs text-oxe-accent uppercase font-bold">
                      log_entry: {cat.title.toLowerCase().replace(/\s+/g, '_')}_preview.png
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-oxe-primary"></div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-oxe-accent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeekCulture;
