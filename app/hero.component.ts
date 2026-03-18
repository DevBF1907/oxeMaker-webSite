import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  template: `
    <section class="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden px-6">
      <div class="container mx-auto text-center relative z-10">
        <div class="flex justify-center mb-10">
           <app-logo className="w-64 h-64 md:w-80 md:h-80"></app-logo>
        </div>
        
        <div class="inline-block mb-6">
          <span class="tape text-white font-mono text-sm uppercase font-bold shadow-lg">
             // status: pronto_para_buildar.exe
          </span>
        </div>
        
        <h1 class="font-logo text-5xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-6">
          <span class="text-white drop-shadow-[4px_4px_0px_#d15e14]">VIDA, ESCOLA</span><br/>
          <span class="text-oxe-blue drop-shadow-[4px_4px_0px_#ffffff]">& COMUNIDADE</span>
        </h1>

        <p class="max-w-2xl mx-auto text-lg md:text-2xl text-oxe-sand font-mono leading-relaxed mb-12">
          Hackeando o futuro with as mãos, <br class="hidden md:block"/>
          porque aprender é buildar a própria realidade.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <button class="maker-button px-10 py-5 bg-oxe-orange text-white font-logo text-3xl uppercase rounded-sm transition-all hover:-translate-y-1">
            Bora Buildar!
          </button>
          <button class="px-10 py-5 bg-transparent border-2 border-white/20 text-white font-logo text-3xl uppercase rounded-sm hover:bg-white/5">
            O Plano de Ação
          </button>
        </div>

        <div class="flex flex-wrap justify-center gap-4 mt-8">
          <div *ngFor="let unit of timerUnits" class="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 min-w-[100px]">
            <span class="text-4xl font-mono font-black text-oxe-yellow">{{unit.value | number:'2.0'}}</span>
            <span class="text-[10px] uppercase tracking-widest font-bold mt-1 text-white/40">{{unit.label}}</span>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent implements OnInit, OnDestroy {
  targetDate = new Date('2026-07-02T09:00:00').getTime();
  timerUnits = [
    { label: 'Dias', value: 0 },
    { label: 'Horas', value: 0 },
    { label: 'Minutos', value: 0 },
    { label: 'Segundos', value: 0 }
  ];
  private timerId: any;

  ngOnInit() {
    this.updateTimer();
    this.timerId = setInterval(() => this.updateTimer(), 1000);
  }

  ngOnDestroy() {
    if (this.timerId) clearInterval(this.timerId);
  }

  updateTimer() {
    const now = new Date().getTime();
    const diff = this.targetDate - now;

    if (diff > 0) {
      this.timerUnits[0].value = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.timerUnits[1].value = Math.floor((diff / (1000 * 60 * 60)) % 24);
      this.timerUnits[2].value = Math.floor((diff / 1000 / 60) % 60);
      this.timerUnits[3].value = Math.floor((diff / 1000) % 60);
    }
  }
}