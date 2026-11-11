import type { Metadata } from 'next';
import { Atkinson_Hyperlegible, IBM_Plex_Mono } from 'next/font/google';
import KernelKeeperLanding from '@/app/kernelkeepergame/_components/KernelKeeperLanding';

const plexMono = IBM_Plex_Mono({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--kk-plex',
});

// Alternativa legible: solo se descarga si alguien la activa
const legible = Atkinson_Hyperlegible({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--kk-legible',
  preload: false,
});

const META = {
  en: {
    title: 'The Kernel Keeper | ItsMeGames',
    description:
      'The system is rotten. You are the purge. A tactical twin-stick roguelite shooter set on a 90s desktop turned battlefield. Play the prototype.',
    locale: 'en_US',
  },
  es: {
    title: 'The Kernel Keeper | ItsMeGames',
    description:
      'El sistema está podrido. Vos sos la purga. Un roguelite twin-stick shooter táctico en un escritorio de los 90 convertido en campo de batalla. Jugá el prototipo.',
    locale: 'es_AR',
  },
};

// El sitio no tiene rutas por idioma: /kernelkeepergame?lang=es da la versión en español
// para buscadores y previsualizaciones en redes.
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const { lang } = await searchParams;
  const meta = lang === 'es' ? META.es : META.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: lang === 'es' ? '/kernelkeepergame?lang=es' : '/kernelkeepergame',
      languages: { en: '/kernelkeepergame', es: '/kernelkeepergame?lang=es' },
    },
    openGraph: {
      type: 'website',
      siteName: 'ItsMeGames',
      title: meta.title,
      description: meta.description,
      locale: meta.locale,
      url: lang === 'es' ? '/kernelkeepergame?lang=es' : '/kernelkeepergame',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

export default function KernelKeeperGamePage() {
  return <KernelKeeperLanding fontClassName={`${plexMono.variable} ${legible.variable}`} />;
}
