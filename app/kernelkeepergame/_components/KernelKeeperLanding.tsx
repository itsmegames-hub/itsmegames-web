'use client';

import { useCallback, useEffect, useState } from 'react';
import Layer7 from '@/app/kernelkeepergame/_components/Layer7';
import KernelKeeperHero from '@/app/kernelkeepergame/_components/Hero';
import { BootSequence, Bsod } from '@/app/kernelkeepergame/_components/Overlays';
import {
  Credits,
  Dilemma,
  GameFooter,
  HowToPlay,
  LockedDrive,
  Story,
} from '@/app/kernelkeepergame/_components/Sections';
import SignupForm from '@/app/kernelkeepergame/_components/SignupForm';
import TopBar from '@/app/kernelkeepergame/_components/TopBar';
import { Taskbar, WindowProvider } from '@/app/kernelkeepergame/_components/Window';
import '@/styles/kernel-keeper.css';

const FX_KEY = 'kk_fx';
const FONT_KEY = 'kk_font';

function readPref(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writePref(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Preferencia solo para esta sesión
  }
}

export default function KernelKeeperLanding({ fontClassName }: { fontClassName: string }) {
  const [fx, setFx] = useState(true);
  const [legible, setLegible] = useState(false);
  const [bsodOpen, setBsodOpen] = useState(false);

  // Preferencias guardadas; sin preferencia, respetamos prefers-reduced-motion
  useEffect(() => {
    const storedFx = readPref(FX_KEY);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- leer preferencias del navegador tras hidratar
    setFx(storedFx ? storedFx === 'on' : !reduced);
    setLegible(readPref(FONT_KEY) === 'legible');
  }, []);

  const toggleFx = () =>
    setFx((value) => {
      writePref(FX_KEY, value ? 'off' : 'on');
      return !value;
    });
  const toggleLegible = () =>
    setLegible((value) => {
      writePref(FONT_KEY, value ? 'default' : 'legible');
      return !value;
    });
  const closeBsod = useCallback(() => setBsodOpen(false), []);

  return (
    <div
      className={`kk-root relative ${fontClassName}`}
      data-fx={fx ? 'on' : 'off'}
      data-font={legible ? 'legible' : 'default'}
    >
      <div className="kk-backdrop" aria-hidden="true" />
      <div className="kk-crt" aria-hidden="true" />

      <WindowProvider>
        <TopBar fx={fx} onToggleFx={toggleFx} legible={legible} onToggleLegible={toggleLegible} />

        <main className="relative z-10 max-w-6xl mx-auto px-4 pt-14 flex flex-col gap-16 sm:gap-20">
          <KernelKeeperHero />
          <Story />
          <Layer7 />
          <HowToPlay />
          <Dilemma />
          <LockedDrive onRetry={() => setBsodOpen(true)} />
          <SignupForm />
          <Credits />
        </main>

        <GameFooter />
        <Taskbar />
      </WindowProvider>

      <BootSequence />
      <Bsod open={bsodOpen} onClose={closeBsod} />
    </div>
  );
}
