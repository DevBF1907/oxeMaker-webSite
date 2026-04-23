
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/components/common/Logo';

const competitions = [
  { id: 'buzzline', title: 'Buzz Line', to: '/torneio#buzzline' },
  { id: 'buzzpro', title: 'Buzz PRO', to: '/torneio#buzzpro' },
  { id: 'sumo', title: 'Sumô de Robôs', to: '/torneio#sumo' },
  { id: 'combate', title: 'Combate de Robôs', to: '/torneio#combate' },
  { id: 'obr', title: 'OBR', to: '/torneio#obr' },
];

const geekCategories = [
  { id: 'cosplay', title: 'Cosplay', to: '/geek#cosplay' },
  { id: 'kpop', title: 'Dança K-pop', to: '/geek#kpop' },
];

const eventCategories = [
  { 
    title: 'Robótica', 
    to: '/torneio', 
    items: competitions 
  },
  { 
    title: 'Cultura Geek', 
    to: '/geek', 
    items: geekCategories 
  },
  { 
    title: 'Oficinas Maker', 
    to: '/oficinas',
    items: []
  },
  { 
    title: 'Oxethon 2026', 
    to: '/oxethon',
    items: []
  }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [eventsDropdown, setEventsDropdown] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleOpenMenu = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setEventsDropdown(true);
      if (window.innerWidth < 1024) {
        setIsOpen(true);
      }
    };

    window.addEventListener('open-oxe-events', handleOpenMenu);
    return () => window.removeEventListener('open-oxe-events', handleOpenMenu);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setEventsDropdown(false);
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { to: "/", label: "INÍCIO", color: "hover:text-white" },
    { to: "/programacao", label: "PROGRAMAÇÃO", color: "hover:text-oxe-yellow" },
    { to: "/mapa", label: "MAPA", color: "hover:text-oxe-yellow" },
    { to: "#", label: "EVENTOS", color: "hover:text-oxe-yellow", hasDropdown: true, isMega: true, dropdownState: eventsDropdown, setDropdown: setEventsDropdown },
    { to: "/sobre", label: "SOBRE", color: "hover:text-oxe-yellow" },
  ];

  const triggerEventsMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-oxe-events'));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-oxe-dark border-b border-white/10 px-4 md:px-8 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <Logo className="w-14 h-14 md:w-20 md:h-20" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-12 font-logo text-sm uppercase font-black text-white/40">
          {navLinks.map((link, index) => {
            const hasDropdown = link.hasDropdown;
            const hoverColor = link.color.replace('hover:', '');
            return (
              <div 
                key={link.label} 
                className="relative group/nav"
                onMouseEnter={() => hasDropdown && link.setDropdown!(true)}
                onMouseLeave={() => hasDropdown && link.setDropdown!(false)}
              >
                <Link
                  to={link.to}
                  className={`${link.color} transition-all tracking-wider flex items-center gap-3 group cursor-pointer text-left py-4`}
                >
                  <span className={`font-mono text-[10px] ${hoverColor}/30 group-hover:${hoverColor} transition-colors font-bold`}>{String(index).padStart(2, '0')}</span>
                  <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    {link.label}
                    {hasDropdown && (
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${link.dropdownState ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </Link>

                {/* Desktop Dropdown */}
                {hasDropdown && (
                  <div className={`absolute top-full left-0 pt-2 z-50 transition-all duration-300 ${link.dropdownState ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                    {link.isMega && (
                      <div className="bg-oxe-dark border border-white/10 shadow-2xl rounded-sm overflow-hidden w-[400px] p-6 grid grid-cols-2 gap-8">
                        {eventCategories.map((cat) => (
                          <div key={cat.title}>
                            <Link 
                              to={cat.to}
                              className="block font-logo text-sm text-oxe-yellow mb-3 hover:translate-x-1 transition-transform uppercase tracking-widest"
                              onClick={() => setEventsDropdown(false)}
                            >
                              {cat.title}
                            </Link>
                            <div className="flex flex-col space-y-2">
                              {cat.items.map(item => (
                                <Link
                                  key={item.id}
                                  to={item.to}
                                  className="text-[10px] text-white/50 hover:text-white uppercase tracking-wider font-mono transition-colors"
                                  onClick={() => setEventsDropdown(false)}
                                >
                                  {item.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
          
          {/* Inscreva-se Button Desktop */}
          <button 
            onClick={triggerEventsMenu}
            className="bg-oxe-yellow text-black px-6 py-2.5 font-logo text-base uppercase tracking-widest border-2 border-oxe-yellow shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200"
          >
            Inscreva-se
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col items-end justify-center w-10 h-10 gap-1.5 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`}></div>
          <div className={`h-0.5 bg-oxe-accent transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-6'}`}></div>
          <div className={`h-0.5 bg-oxe-primary transition-all duration-300 ${isOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-4'}`}></div>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`lg:hidden fixed inset-y-0 right-0 w-full sm:w-80 bg-oxe-dark border-l border-white/10 shadow-2xl transition-transform duration-500 ease-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 pb-12 px-8">
          <div className="mb-12">
            <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.5em] block mb-4">// navegação_principal</span>
            <div className="h-px w-full bg-gradient-to-r from-oxe-accent/50 to-transparent"></div>
          </div>

          <div className="flex flex-col space-y-6">
            {navLinks.map((link, index) => {
              const hoverColor = link.color.replace('hover:', '');
              return (
                <div key={link.label}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => link.setDropdown!(!link.dropdownState)}
                        className="group flex items-center gap-4 w-full"
                      >
                        <span className={`font-mono text-xs ${hoverColor}/40`}>{String(index).padStart(2, '0')}</span>
                        <span className={`font-logo text-3xl uppercase text-white group-hover:${hoverColor} transition-colors tracking-tight`}>
                          {link.label}
                        </span>
                        <svg
                          className={`w-4 h-4 ${hoverColor}/50 transition-transform duration-200 ml-auto ${link.dropdownState ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown sub-items */}
                      {link.dropdownState && (
                        <div className="ml-10 mt-2 space-y-4 border-l-2 border-white/10 pl-3">
                          {link.isMega && (
                             eventCategories.map(cat => (
                               <div key={cat.title}>
                                 <Link 
                                   to={cat.to}
                                   className="block font-logo text-lg text-oxe-yellow uppercase tracking-widest mb-2"
                                   onClick={() => setIsOpen(false)}
                                 >
                                   {cat.title}
                                 </Link>
                                 <div className="flex flex-col space-y-1 ml-2">
                                   {cat.items.map(item => (
                                     <Link
                                       key={item.id}
                                       to={item.to}
                                       className="text-[10px] text-white/50 uppercase font-mono"
                                       onClick={() => setIsOpen(false)}
                                     >
                                       {item.title}
                                     </Link>
                                   ))}
                                 </div>
                               </div>
                             ))
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.to}
                      className="group flex items-center gap-4"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className={`font-mono text-xs ${hoverColor}/40`}>{String(index).padStart(2, '0')}</span>
                      <span className={`font-logo text-3xl uppercase text-white group-hover:${hoverColor} transition-colors tracking-tight`}>
                        {link.label}
                      </span>
                    </Link>
                  )}
                </div>
              );
            })}
            
            {/* Inscreva-se Button Mobile */}
            <button 
              onClick={triggerEventsMenu}
              className="mt-4 bg-oxe-yellow text-black px-6 py-4 font-logo text-2xl uppercase tracking-widest border-2 border-oxe-yellow shadow-[4px_4px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-200 text-center"
            >
              Inscreva-se
            </button>
          </div>

          <div className="mt-auto">
            <div className="p-6 bg-oxe-neutral rounded-xl border border-white/10">
              <p className="font-mono text-[9px] text-white/40 uppercase leading-relaxed">
                Ôxe-Maker 2026<br/>
                Metropolitana Norte<br/>
                Vidas • Escolas • Comunidade
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile drawer */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
