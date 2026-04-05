
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "INÍCIO", color: "hover:text-white" },
    { to: "/torneio", label: "ROBÓTICA", color: "hover:text-oxe-accent" },
    { to: "/oficinas", label: "OFICINAS", color: "hover:text-oxe-primary" },
    { to: "/geek", label: "GEEK", color: "hover:text-oxe-yellow" },
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
          {navLinks.map((link, index) => (
            <Link 
              key={link.to} 
              to={link.to} 
              className={`${link.color} transition-all tracking-[0.2em] flex items-right gap-3 group`}
            >
              <span className="text-oxe-accent/30 group-hover:text-oxe-accent transition-colors">{String(index).padStart(2, '0')}</span>
              <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
            </Link>
          ))}
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
              <Link 
                key={link.to} 
                to={link.to} 
                className="group flex items-center gap-4"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-mono text-xs text-oxe-accent/40">{String(index).padStart(2, '0')}</span>
                <span className="font-logo text-3xl uppercase text-white group-hover:text-oxe-accent transition-colors tracking-tight">
                  {link.label}
                </span>
              </Link>
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
