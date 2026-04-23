import { ScheduleItem, Sponsor, Feature, GalleryItem } from './types';

export const EVENT_DATE = new Date('2026-07-02T09:00:00');

export const FEATURES: Feature[] = [
 {
    title: 'Oficinas Práticas',
    description:
      'Aqui é mão na massa de verdade. Nada de só assistir — você constrói, testa, erra e aprende na prática.',
    icon: '🛠️',
  },
  {
    title: 'Conexões que Transformam',
    description:
      'Gente boa se encontra aqui. Troque ideia com mentores, faça contatos e abra portas pra oportunidades reais.',
    icon: '🔗',
  },
  {
    title: 'Competições ÔXE-MAKER',
    description:
      'Robótica, cosplay, K-pop e desafios insanos. Mostre seu talento e dispute pra ver quem manda melhor.',
    icon: '🏆',
  },
  {
    title: 'Oxethon: Hackathon Arretado',
    description:
      '48 horas no modo turbo. Ideia, código e café até virar projeto de verdade.',
    icon: '🚀',
  },
  {
    title: 'Mostra de Projetos',
    description:
      'Vem mostrar o que você criou, trocar ideia e se inspirar com projetos que resolvem problemas de verdade.',
    icon: '🧪',
  },
  {
    title: 'Premiações e Reconhecimento',
    description:
      'Seu esforço vale prêmio. Destaque-se, ganhe reconhecimento e saia daqui com moral e novas oportunidades.',
    icon: '🏅',
  },
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
  { id: 1, url: 'public/img/logo01oxemaker.jpeg', title: 'Ôxe Maker 2021' },
  { id: 2, url: 'public/img/oxemaker-logo01.jpeg', title: 'Ôxe Maker 2022' },
  { id: 3, url: 'https://picsum.photos/600/400?random=32', title: 'Ôxe Maker 2023' },
  { id: 4, url: 'https://picsum.photos/600/400?random=33', title: 'Ôxe Maker 2024' },
  { id: 5, url: 'public/img/logoOxemaker05.jpeg', title: 'Ôxe Maker 2025' },
  { id: 6, url: 'public/img/logo06oxemaker.jpeg', title: 'Ôxe Maker 2026' }
];
