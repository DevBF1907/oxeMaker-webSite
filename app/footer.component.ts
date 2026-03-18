
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="py-12 px-6 bg-oxe-dark border-t border-white/5 font-mono text-xs text-white/40">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
           <p class="text-white/60 font-bold uppercase">/* ÔXE-MAKER-2026 */</p>
           <p>Vidas, Escolas e Comunidades.</p>
        </div>
        <div class="flex gap-8 uppercase">
          <a href="#" class="hover:text-oxe-blue">Github</a>
          <a href="#" class="hover:text-oxe-blue">Instagram</a>
        </div>
        <div class="text-right">COMPILADO COM SUCESSO EM 2026</div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
