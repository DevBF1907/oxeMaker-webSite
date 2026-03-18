
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="sobre" class="py-24 px-6 relative bg-oxe-dark">
      <div class="container mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="order-2 lg:order-1 relative">
             <div class="maker-card p-4 rotate-2">
                <img src="https://picsum.photos/800/600?random=44" alt="Maker" class="w-full grayscale hover:grayscale-0 transition-all"/>
                <div class="mt-4 font-mono text-xs text-oxe-orange uppercase font-bold">log_entry: oficina_comunitaria_01.jpg</div>
             </div>
             <div class="absolute -bottom-8 -right-8 bg-oxe-green p-4 font-logo text-2xl text-white rounded-lg -rotate-6 shadow-xl">MAKER DE RAÇA!</div>
          </div>

          <div class="order-1 lg:order-2">
            <h2 class="font-logo text-6xl md:text-8xl font-black mb-8 leading-tight uppercase text-white">
              O <span class="text-oxe-orange">CORRE</span>
            </h2>
            <div class="space-y-6 text-oxe-sand/90 text-xl font-medium leading-relaxed">
              <p>O <strong>ÔXE-MAKER</strong> não é palestra de gravata. É mutirão! Juntamos quem sabe com quem quer aprender pra resolver o aperreio da comunidade.</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 font-mono text-sm">
                <div class="flex items-center gap-3 p-3 bg-white/5 border-l-4 border-oxe-blue">01_ Vidas reais</div>
                <div class="flex items-center gap-3 p-3 bg-white/5 border-l-4 border-oxe-green">02_ Escolas Makers</div>
                <div class="flex items-center gap-3 p-3 bg-white/5 border-l-4 border-oxe-yellow">03_ Comunidade Unida</div>
                <div class="flex items-center gap-3 p-3 bg-white/5 border-l-4 border-oxe-orange">04_ Justiça pra Todos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
