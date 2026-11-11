import { permanentRedirect } from 'next/navigation';

// Nombre anterior del juego: la URL vieja redirige a la nueva.
export default function Layer8GameRedirect() {
  permanentRedirect('/kernelkeepergame');
}
