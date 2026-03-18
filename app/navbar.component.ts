import { Component } from '@angular/core';
import { LogoComponent } from './logo.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-oxe-dark/80 backdrop-blur-md border-b border-white/5 px-6 py-2">
      <div class="container mx-auto flex justify-between items-center">
        <a href="#" class="flex items-center gap-4">
          <app-logo className="w-16 h-16"></app-logo>
          <div class="hidden sm:block font-logo text-2xl uppercase tracking-tighter">
            <span class="text-white">ÔXE</span><span class="text-oxe-orange">MAKER</span>
          </div>
        </a>
        
        <div class="hidden md:flex space-x-6 font-mono text-[10px] uppercase font-bold text-white/50">
          <a href="#sobre" class="hover:text-oxe-orange transition-colors">01_CORRE</a>
          <a href="#atividades" class="hover:text-oxe-green transition-colors">02_MASSA</a>
          <a href="#programacao" class="hover:text-oxe-blue transition-colors">03_PLANO</a>
        </div>

        <button class="maker-button bg-oxe-orange text-white px-5 py-2 font-logo text-xl uppercase rounded-sm shadow-md">
          Buildar!
        </button>
      </div>
    </nav>
  `
})
export class NavbarComponent {}