import { ScheduleItem, Sponsor, Feature, GalleryItem } from './types';

export const EVENT_DATE = new Date('2026-07-02T09:00:00');

export const FEATURES: Feature[] = [
  {
    title: 'Papo de Bancada',
    description: 'Bora ouvir quem já queimou muito dedo de solda e construiu o futuro no quintal de casa.',
    icon: '🗣️'
  },
  {
    title: 'Mutirão de Build',
    description: 'Pegue seus componentes e venha buildar o impossível em 48 horas de café e código.',
    icon: '⚡'
  },
  {
    title: 'Duelo de Sucata',
    description: 'Arena aberta! Robôs feitos na raça disputando quem é o rei da Metropolitana Norte.',
    icon: '🤖'
  },
  {
    title: 'Hackeando o Barro',
    description: 'Mistura de artesania com bits. Oficinas práticas pra você botar a mão na massa de verdade.',
    icon: '🛠️'
  },
  {
    title: 'Varal de Ideias',
    description: 'Exponha seu projeto, troque uma ideia e veja como a gente hackeia a vida real.',
    icon: '💡'
  },
  {
    title: 'Conexão Arretada',
    description: 'Encontre sua galera, monte seu squad e saia daqui com planos pra mudar o mundo.',
    icon: '🤝'
  }
];

export const SCHEDULE: ScheduleItem[] = [
  { time: '08:30', activity: 'Abrir o Galpão', location: 'Entrada Principal', description: 'Chegança, café forte e entrega dos kits de sobrevivência maker.' },
  { time: '10:00', activity: 'Manifesto: Vidas e Bits', location: 'Palco Arena', description: 'Por que a gente inventa? Um papo sobre transformar a comunidade.' },
  { time: '14:30', activity: 'Hora do Aperreio (Duelo)', location: 'Arena Arduino', description: 'As máquinas vão pro chão. Que vença o melhor código!' },
  { time: '18:30', activity: 'Check-out & Planos', location: 'Palco Arena', description: 'O que a gente buildou hoje e o que vem por aí.' }
];

export const TOURNAMENT_SCHEDULE: ScheduleItem[] = [
  { time: '09:00', activity: 'Credenciamento Equipes', location: 'Arena de Robótica', description: 'Check-in das equipes, inspeção técnica e homologação dos robôs.' },
  { time: '10:00', activity: 'Abertura Oficial', location: 'Arena de Robótica', description: 'Apresentação dos juízes, regras e sorteio das chaves de combate.' },
  { time: '10:30', activity: 'Início das Rodadas: Buzz Line', location: 'Pista de Seguidores', description: 'Primeiras baterias das categorias Buzz Line e Buzz PRO.' },
  { time: '13:00', activity: 'Intervalo para Almoço', location: 'Pátio Central', description: 'Pausa para recarregar as energias (e as baterias).' },
  { time: '14:00', activity: 'Sumô e Combate', location: 'Dojo & Arena de Combate', description: 'Início das lutas de Sumô e Combate de Robôs. Muita adrenalina!' },
  { time: '16:30', activity: 'Finais OBR', location: 'Arena OBR', description: 'As melhores equipes de resgate disputam o título regional.' },
  { time: '17:30', activity: 'Premiação', location: 'Palco Principal', description: 'Entrega de troféus, medalhas e certificados para os vencedores.' }
];

export const SPONSORS: Sponsor[] = [
  { name: 'Sertão Dynamics', logo: 'https://picsum.photos/200/100?random=1', tier: 'Diamond' },
  { name: 'Cuscuz Chips', logo: 'https://picsum.photos/200/100?random=2', tier: 'Diamond' },
  { name: 'Drone Rapadura', logo: 'https://picsum.photos/200/100?random=3', tier: 'Gold' },
  { name: 'Sol & Bits', logo: 'https://picsum.photos/200/100?random=4', tier: 'Gold' }
];

export const GALLERY: GalleryItem[] = [
  { id: 1, url: 'https://picsum.photos/600/400?random=30', title: 'Mãos Sujas, Mente Limpa' },
  { id: 2, url: 'https://picsum.photos/600/400?random=31', title: 'A Primeira Solda' },
  { id: 3, url: 'https://picsum.photos/600/400?random=32', title: 'Arena de Robôs' },
  { id: 4, url: 'https://picsum.photos/600/400?random=33', title: 'Oficina de Barro' },
  { id: 5, url: 'https://picsum.photos/600/400?random=34', title: 'Protótipos Comunitários' },
  { id: 6, url: 'https://picsum.photos/600/400?random=35', title: 'Conexão Maker' }
];
