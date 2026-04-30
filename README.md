<div align="center">
  <img width="1200" height="475" alt="Ôxe-Maker Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

<div align="center">

# Ôxe-Maker 2026

**Robótica · Cultura Maker · Cultura Geek**

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

*Formando cidadãs e cidadãos críticos e responsáveis*

</div>

---

## Sobre o Evento

O **Ôxe-Maker** é o principal evento de robótica e cultura geek para estudantes da rede pública estadual de Pernambuco, focado na Regional Metropolitana Norte. Em sua **6ª edição (2021–2026)**, o evento une robótica, cultura maker e universo geek em uma jornada de protagonismo juvenil, iniciação científica e aprendizado "mão na massa".

> *"O Ôxe-Maker nasce de um sonho de ver a tecnologia como ferramenta de libertação e transformação social na nossa região. Não se trata de máquinas, mas de pessoas construindo o próprio destino."*
> 
> — **Profa. Lidyane Lira**, Idealizadora e Fundadora

### Impacto Histórico

| Alunos Impactados | Escolas Parceiras | Competições | Projetos Makers |
|:---:|:---:|:---:|:---:|
| **2.000+** | **58+** | **9+** | **90+** |

### Quando e Onde

| | |
|---|---|
| **Data** | 02 e 03 de Julho de 2026 |
| **Horário** | 07:00 – 17:30 |
| **Local** | **ETE José de Alencar** — Ginásio e Pátio Central |
| **Endereço** | Av. Getúlio Vargas, s/n, Bairro Novo, Olinda – PE, 53030-010 |
| **Referência** | Próximo ao Shopping Patteo Olinda e FOCCA |

---

## Atrações

### Competições de Robótica

| Competição | Descrição |
|---|---|
| **Buzz Line** | Robôs seguidores de linha — precisão e velocidade |
| **Buzz PRO** | Seguidores avançados com obstáculos e interseções complexas |
| **Sumô de Robôs** | Dois robôs entram, um sai — empurre o oponente para fora do dojo |
| **Combate de Robôs** | Combate com armas ativas até imobilização |
| **OBR** | Olimpíada Brasileira de Robótica — resgate autônimo de vítimas |

### Cultura Geek

- **Desfile de Cosplay** — Julgado por criatividade, fidelidade e performance
- **Dança de K-pop** — Coreografias icônicas em grupos ou solo
- **Just Dance** — Competição de dança e ritmo

### Ôxethon — Hackathon Arretado

48 horas de imersão onde equipes multidisciplinares criam soluções tecnológicas com impacto real na comunidade local.

### Oficinas Maker

| Oficina | Data | Horário | Instrutor |
|---|---|---|---|
| Soldagem para Iniciantes | 02/07 | 10:00–12:00 | Mestre Faísca |
| Introdução ao Arduino | 02/07 | 14:00–16:00 | Eng. Bitola |
| Modelagem 3D com Tinkercad | 03/07 | 09:00–11:00 | Profa. Polígono |
| Robótica com Sucata | 03/07 | 15:00–17:00 | Recicla-Man |

### Programação Completa

#### Dia 1 — 02/07

| Horário | Atividade | Local |
|---|---|---|
| 07:00–08:00 | Credenciamento | Hall de entrada |
| 08:00–12:00 | Início OBR / Ôxethon | Auditório |
| 09:00–09:30 | Cerimônia de abertura | Auditório |
| 09:30–10:00 | Apresentação cultural | Auditório |

#### Dia 2 — 03/07

| Horário | Atividade | Local |
|---|---|---|
| 07:00–08:00 | Credenciamento | Hall de entrada |
| 08:00–12:00 | OBR | Auditório |
| 09:00–10:30 | Desfile de Cosplay | Quadra |
| 10:30–12:00 | Batalha de K-pop | Quadra |

---

## Tecnologias do Projeto

Este site é o portal oficial do evento, desenvolvido com:

| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://reactjs.org/) | 19.x | Framework UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.8.x | Tipagem estática |
| [Vite](https://vitejs.dev/) | 6.x | Build tool e dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Estilização |
| [React Router](https://reactrouter.com/) | 7.x | Roteamento |
| [Lucide React](https://lucide.dev/) | latest | Ícones |

### Estrutura do Projeto

```
src/
├── components/
│   ├── common/          # Componentes reutilizáveis
│   │   ├── AnimatedCounter.tsx
│   │   ├── Footer.tsx
│   │   ├── Logo.tsx
│   │   ├── Navbar.tsx
│   │   └── ScrollToTop.tsx
│   └── layout/          # Layouts da aplicação
│       └── MainLayout.tsx
├── core/                # Tipos e constantes globais
│   ├── constants.ts
│   └── types.ts
├── features/            # Páginas por seção do evento
│   ├── about/           # Página Sobre
│   ├── geek/            # Cultura Geek
│   ├── home/            # Página Inicial
│   ├── oxethon/         # Hackathon
│   ├── tournament/      # Torneio de Robótica
│   ├── visit/           # Visita, Mapa e Programação
│   └── workshops/       # Oficinas
├── public/              # Assets estáticos
│   ├── img/
│   └── editais/
├── App.tsx              # Rotas da aplicação
├── index.tsx            # Entry point
└── index.css            # Estilos globais + tema
```

### Rotas

| Rota | Página |
|---|---|
| `/` | Home |
| `/programacao` | Programação completa |
| `/mapa` | Mapa do evento |
| `/sobre` | Sobre o Ôxe-Maker |
| `/torneio` | Torneio de Robótica |
| `/geek` | Cultura Geek |
| `/oxethon` | Hackathon |
| `/oficinas` | Oficinas Maker |

---

## Começando

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm**, **yarn** ou **pnpm**

### Instalação

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/oxeMaker-webSite.git
cd oxeMaker-webSite

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run lint` | Verificação de tipos com TypeScript |
| `npm run preview` | Preview do build de produção |

---

## Design System

O projeto utiliza um design system próprio chamado **Maker Design System**, baseado na identidade visual do Ôxe-Maker:

### Cores

| Cor | Hex | Uso |
|---|---|---|
| Ôxe Dark | `#050D34` | Fundo principal |
| Ôxe Primary | `#0030B5` | Azul institucional |
| Ôxe Accent | `#01B1FD` | Azul destaque |
| Ôxe Yellow | `#FCC140` | Amarelo energético |
| Ôxe Neutral | `#1E292D` | Cinza escuro |

### Tipografia

| Fonte | Uso |
|---|---|
| **Inter** | Corpo de texto |
| **Space Mono** | Código e labels técnicas |
| **Londrina Solid** | Logo e headings display |

### Componentes CSS Customizados

- `.maker-card` — Cards com borda e sombra estilo maker
- `.maker-button` — Botões com efeito de sombra sólida
- `.tape` — Label estilo fita adesiva
- `.animate-rotate` — Rotação lenta contínua

---

## Valores do Evento

<div align="center">

**Vidas Reais** · **Escolas Makers** · **Comunidade Unida** · **Justiça pra Todos**

</div>

---

## Contribuindo

Contribuições são bem-vindas! Siga os passos:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## Licença

Este projeto é desenvolvido para o **Ôxe-Maker 2026** — ETE José de Alencar, Olinda/PE.

---

<div align="center">

**Ôxe-Maker 2026** — *Metropolitana Norte · Vidas · Escolas · Comunidade*

</div>
