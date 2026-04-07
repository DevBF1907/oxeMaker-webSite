
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const competitions = [
  { id: 'buzzline', title: 'Buzz Line' },
  { id: 'buzzpro', title: 'Buzz PRO' },
  { id: 'sumo', title: 'Sumô de Robôs' },
  { id: 'combate', title: 'Combate de Robôs' },
  { id: 'obr', title: 'OBR' },
];

const geekCategories = [
  { id: 'cosplay', title: 'Cosplay' },
  { id: 'kpop', title: 'Dança K-pop' },
];

const eventInfo = [
  { id: 'programacao', title: 'O Plano' },
  { id: 'mapa-evento', title: 'O Mapa' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [roboticsDropdown, setRoboticsDropdown] = useState(false);
  const [geekDropdown, setGeekDropdown] = useState(false);
  const [eventDropdown, setEventDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { to: "/", label: "INÍCIO", color: "hover:text-white" },
    { to: "/visita", label: "VISITA", color: "hover:text-oxe-accent", hasDropdown: true, dropdownItems: eventInfo, dropdownState: eventDropdown, setDropdown: setEventDropdown },
    { to: "/torneio", label: "ROBÓTICA", color: "hover:text-oxe-accent", hasDropdown: true, dropdownItems: competitions, dropdownState: roboticsDropdown, setDropdown: setRoboticsDropdown },
    { to: "/oficinas", label: "OFICINAS", color: "hover:text-oxe-primary" },
    { to: "/geek", label: "GEEK", color: "hover:text-oxe-yellow", hasDropdown: true, dropdownItems: geekCategories, dropdownState: geekDropdown, setDropdown: setGeekDropdown },
    { to: "/oxethon", label: "OXETHON", color: "hover:text-oxe-primary" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-oxe-dark border-b border-white/10 px-4 md:px-8 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <Logo className="w-14 h-14 md:w-20 md:h-20" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-12 font-mono text-xs uppercase font-bold text-white/40">
          {navLinks.map((link, index) => {
            const hasDropdown = link.hasDropdown;
            return (
              <div 
                key={link.label} 
                className="relative group/nav"
                onMouseEnter={() => hasDropdown && link.setDropdown!(true)}
                onMouseLeave={() => hasDropdown && link.setDropdown!(false)}
              >
                <Link
                  to={link.to}
                  className={`${link.color} transition-all tracking-[0.2em] flex items-center gap-3 group cursor-pointer text-left py-4`}
                >
                  <span className={`${link.color.replace('hover:', '')}/30 group-hover:${link.color.replace('hover:', '')} transition-colors`}>{String(index).padStart(2, '0')}</span>
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
                    <div className="bg-oxe-dark border border-white/10 shadow-2xl rounded-sm overflow-hidden w-48 py-1">
                      {link.dropdownItems!.map((item) => (
                        <Link
                          key={item.id}
                          to={link.to === "/" ? `/#${item.id}` : `${link.to}#${item.id}`}
                          className={`block px-4 py-3 hover:bg-white/5 text-white/70 ${link.color} font-logo text-[11px] uppercase tracking-[0.2em] transition-colors border-b border-white/5 last:border-0`}
                          onClick={() => link.setDropdown!(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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
            {navLinks.map((link, index) => (
              <div key={link.label}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => link.setDropdown!(!link.dropdownState)}
                      className="group flex items-center gap-4 w-full"
                    >
                      <span className="font-mono text-xs text-oxe-accent/40">{String(index).padStart(2, '0')}</span>
                      <span className="font-logo text-3xl uppercase text-white group-hover:text-oxe-accent transition-colors tracking-tight">
                        {link.label}
                      </span>
                      <svg
                        className={`w-4 h-4 text-oxe-accent/50 transition-transform duration-200 ml-auto ${link.dropdownState ? 'rotate-180' : ''}`}
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
                      <div className="ml-10 mt-2 space-y-1 border-l-2 border-white/10 pl-3">
                        <Link
                          to={link.to}
                          onClick={() => setIsOpen(false)}
                          className="block py-1 font-mono text-xs text-white/30 hover:text-white transition-colors"
                        >
                          ver página completa →
                        </Link>
                        {link.dropdownItems!.map((item) => (
                          <Link
                            key={item.id}
                            to={link.to === "/" ? `/#${item.id}` : `${link.to}#${item.id}`}
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-left py-2 px-2 text-white/60 hover:text-oxe-accent transition-colors font-logo text-sm uppercase font-bold"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.to}
                    className="group flex items-center gap-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="font-mono text-xs text-oxe-accent/40">{String(index).padStart(2, '0')}</span>
                    <span className="font-logo text-3xl uppercase text-white group-hover:text-oxe-accent transition-colors tracking-tight">
                      {link.label}
                    </span>
                  </Link>
                )}
              </div>
            ))}
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
