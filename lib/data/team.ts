export interface TeamMember {
  name: string;
  role: string;
  emoji: string;
  image: string;
  description: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Brunito',
    role: 'Founder & Game Director',
    emoji: '🎮',
    image: '/team/brunito.png',
    description:
      'El cerebro detrás de todo. Fanático de los videojuegos y de vivir nuevas aventuras.',
  },
  {
    name: 'Maxi',
    role: 'Legal & Community Manager',
    emoji: '⚖️',
    image: '/team/maxi.png',
    description: 'Cuida nuestras espaldas legales y mantiene viva la llama de la comunidad.',
  },
  {
    name: 'Lucas',
    role: 'Lead Artist',
    emoji: '🖌️',
    image: '/team/lucas.png',
    description:
      'Fanático de los videojuegos. Dibuja con el corazón; su pasión es jugar y divertirse.',
  },
  {
    name: 'Nico',
    role: 'Sound Design',
    emoji: '🎧',
    image: '/team/nico.jpg',
    description: 'Gordo compu, productor Techno, DJ y Developer. I am IronMan.',
  },
  {
    name: 'Azul',
    role: 'UX/UI Designer, Web Developer & QA',
    emoji: '🎨',
    image: '/team/azul.png',
    description:
      'Arquitecta de interfaces. Fusiona los requisitos del sistema con un diseño visual impactante.',
  },
  {
    name: 'Fran',
    role: 'Tech Lead',
    emoji: '💻',
    image: '/team/fran.jpg',
    description:
      'El arquitecto del código. Lidera la tecnología para llevar el rendimiento al siguiente nivel.',
  },
  {
    name: 'Valen',
    role: 'Level Designer & Gameplay Programmer',
    emoji: '🗺️',
    image: '/team/valen.png',
    description:
      'Arquitecto de niveles. Diseña los mundos, programa el gameplay y le da forma a los conceptos del juego.',
  },
];
