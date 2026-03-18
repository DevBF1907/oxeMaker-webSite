
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="atividades" class="py-24 bg-black/20 px-6">
      <div class="container mx-auto">
        <div class="mb-20">
          <h2 class="font-logo text-6xl md:text-8xl font-black mb-6 uppercase">Mão na <span class="text-oxe-green">Massa</span></h2>
          <p class="font-mono text-oxe-sand/60 text-lg">Aqui o sistema é bruto: menos conversa, mais protótipo.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let f of features; let i = index" class="maker-card p-8 group hover:-translate-y-2 transition-transform relative overflow-hidden">
            <div class="absolute top-0 right-0 p-2 font-mono text-[10px] opacity-20 uppercase">mod_0{{i+1}}</div>
            <div class="mb-6 text-4xl">{{f.icon}}</div>
            <h3 class="font-logo text-3xl font-bold mb-4 text-white uppercase group-hover:text-oxe-blue transition-colors">{{f.title}}</h3>
            <p class="font-sans text-oxe-sand/70 leading-relaxed text-sm">{{f.description}}</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class FeaturesComponent {
  features = [
    { title: 'Papo de Bancada', description: 'Bora ouvir quem já queimou muito dedo de solda.', icon: '🗣️' },
    { title: 'Mutirão de Build', description: 'Pegue seus componentes e venha buildar o impossível.', icon: '⚡' },
    { title: 'Duelo de Sucata', description: 'Robôs feitos na raça disputando a arena.', icon: '🤖' },
    { title: 'Hackeando o Barro', description: 'Mistura de artesania com bits de verdade.', icon: '🛠️' },
    { title: 'Varal de Ideias', description: 'Exponha seu projeto e hackeie a vida real.', icon: '💡' },
    { title: 'Conexão Arretada', description: 'Encontre sua galera e saia com planos.', icon: '🤝' }
  ];
}
