import type { LucideIcon } from 'lucide-react';
import { Gamepad2, Joystick, Rocket, Tv } from 'lucide-react';

export interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const milestones: Milestone[] = [
  {
    year: '2020',
    title: 'El comienzo',
    description:
      'Nace durante la pandemia como un pasatiempo compartido y un canal de streaming.',
    icon: Gamepad2,
  },
  {
    year: '2021',
    title: 'Comunidad y streaming',
    description: 'El canal de Twitch itsmegames_ se vuelve punto de encuentro.',
    icon: Tv,
  },
  {
    year: '2026',
    title: 'Nace el estudio',
    description:
      'ItsMeGames se convierte en un estudio indie y arranca The Kernel Keeper.',
    icon: Rocket,
  },
  {
    year: '2026',
    title: 'Primer prototipo jugable',
    description: 'La Capa 7 de The Kernel Keeper ya se puede jugar en el navegador.',
    icon: Joystick,
  },
];
