
import { Component } from '@angular/core';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  template: `
    <section id="inscricao" class="py-32 px-6 relative bg-oxe-dark overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-1 bg-oxe-orange shadow-lg"></div>
      <div class="container mx-auto text-center relative z-10">
        <div class="max-w-3xl mx-auto">
          <div class="inline-block mb-10 px-4 py-2 bg-oxe-yellow text-oxe-dark font-mono text-xs font-bold uppercase rotate-2">// fim_do_arquivo.h</div>
          <h2 class="font-logo text-6xl md:text-9xl font-black mb-10 leading-none uppercase text-white drop-shadow-xl">CHEGA NO <br/> <span class="text-oxe-orange">MUTIRÃO!</span></h2>
          <button class="maker-button px-16 py-8 bg-oxe-blue text-white font-logo text-4xl uppercase rounded-sm hover:bg-oxe-orange transition-all">Tô Dentro! ⚡</button>
        </div>
      </div>
    </section>
  `
})
export class FinalCtaComponent {}
