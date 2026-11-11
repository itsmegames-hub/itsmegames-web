/** Prototipo jugable (Capa 7) de The Kernel Keeper. */
export const KERNEL_KEEPER_PROTOTYPE_URL = 'https://kernel-keeper-web.vercel.app/';

export interface Game {
  id: number;
  title: string;
  status: string;
  stage: string;
  tagline: string;
  hook: string;
  color: string;
  tags: string[];
  url: string;
  prototypeUrl?: string;
}

export const games: Game[] = [
  {
    id: 1,
    title: 'THE KERNEL KEEPER',
    status: 'EN DESARROLLO',
    stage: 'Capa 7 jugable',
    tagline: 'El sistema está podrido. Vos sos la purga.',
    hook: 'Roguelite twin-stick táctico en un escritorio de los 90 convertido en campo de batalla.',
    color: 'from-cyan-500 to-blue-600',
    tags: ['Roguelite', 'TwinStick', 'TechHorror'],
    url: '/kernelkeepergame',
    prototypeUrl: KERNEL_KEEPER_PROTOTYPE_URL,
  },
];
