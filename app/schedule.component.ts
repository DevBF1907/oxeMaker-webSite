
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="programacao" class="py-24 px-6 relative bg-oxe-dark">
      <div class="container mx-auto">
        <div class="mb-16">
          <h2 class="font-logo text-6xl md:text-8xl font-black mb-4 uppercase">O <span class="text-oxe-orange">PLANO</span></h2>
          <p class="font-mono text-oxe-sand/60">log_cronograma: v1.0.final</p>
        </div>

        <div class="max-w-4xl space-y-4">
          <div *ngFor="let item of schedule" class="flex flex-col md:flex-row gap-6 p-6 border border-white/10 hover:border-oxe-blue hover:bg-white/5 transition-all group">
            <div class="md:w-32 flex-shrink-0 font-logo text-4xl text-oxe-blue italic">{{item.time}}</div>
            <div class="flex-grow">
              <div class="flex items-center gap-3 mb-2">
                 <h4 class="font-logo text-2xl text-white uppercase group-hover:text-oxe-blue">{{item.activity}}</h4>
                 <span class="font-mono text-[10px] text-oxe-green border border-oxe-green px-2 py-0.5 uppercase">{{item.location}}</span>
              </div>
              <p class="font-sans text-sm text-oxe-sand/50 leading-relaxed">{{item.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ScheduleComponent {
  schedule = [
    { time: '08:30', activity: 'Abrir o Galpão', location: 'Entrada', description: 'Chegança e café forte.' },
    { time: '10:00', activity: 'Manifesto: Vidas e Bits', location: 'Arena', description: 'Por que a gente inventa?' },
    { time: '14:30', activity: 'Duelo de Robôs', location: 'Ringue', description: 'As máquinas vão pro chão.' },
    { time: '18:30', activity: 'Check-out', location: 'Arena', description: 'Planos para o amanhã.' }
  ];
}
