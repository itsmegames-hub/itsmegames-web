import type { Metadata } from 'next';
import Script from 'next/script';
import { Fredoka, Inter, Orbitron, Share_Tech_Mono, VT323 } from 'next/font/google';
import ClarityInit from '@/app/components/ClarityInit';
import { MotionProvider } from '@/app/components/MotionProvider';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import '@/styles/globals.css';

const languagePreferenceScript = `
  try {
    const urlLanguage = new URLSearchParams(location.search).get('lang');
    if (urlLanguage === 'es' || urlLanguage === 'en') localStorage.setItem('itsmegames_lang', urlLanguage);
    const storedLanguage = localStorage.getItem('itsmegames_lang');
    const language = storedLanguage === 'es' || storedLanguage === 'en' ? storedLanguage : 'en';
    document.documentElement.lang = language;
    document.documentElement.dataset.lang = language;
  } catch {
    document.documentElement.lang = 'en';
    document.documentElement.dataset.lang = 'en';
  }
`;

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--next-font-fredoka',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--next-font-inter',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--next-font-orbitron',
});

const shareTech = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--next-font-sharetech',
});

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--next-font-vt323',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.itsmegames.com/'),
  title: 'ItsMeGames | From Players to Creators',
  description:
    'Join the family. We are creators, gamers and developers. Discover our projects and meet the people behind them.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo-perro.png',
  },
  openGraph: {
    type: 'website',
    url: '/',
    locale: 'en_US',
    siteName: 'ItsMeGames',
    title: 'ItsMeGames | From Players to Creators',
    description:
      'Join the family. We are creators, gamers and developers. Discover our projects and meet the people behind them.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ItsMeGames | From Players to Creators',
    description: 'Join the family. We are creators, gamers and developers.',
  },
  other: {
    'twitter:url': 'https://www.itsmegames.com/',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-lang="en"
      suppressHydrationWarning
      className={`${fredoka.variable} ${inter.variable} ${orbitron.variable} ${shareTech.variable} ${vt323.variable}`}
    >
      <head>
        <style>{`
          html[data-lang='es']:not([data-language-ready]) body {
            visibility: hidden;
            animation: itsmegames-lang-reveal 0s linear 1.5s forwards;
          }
          @keyframes itsmegames-lang-reveal {
            to {
              visibility: visible;
            }
          }
        `}</style>
        <noscript>
          <style>{`html[data-lang='es'] body { visibility: visible !important; }`}</style>
        </noscript>
        <Script id="language-preference" strategy="beforeInteractive">
          {languagePreferenceScript}
        </Script>
      </head>
      <body>
        <MotionProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </MotionProvider>
        <ClarityInit />
      </body>
    </html>
  );
}
