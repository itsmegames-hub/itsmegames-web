'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import logoPerro from '@/public/brand/logo-perro.png';

interface TopBarProps {
  fx: boolean;
  onToggleFx: () => void;
  legible: boolean;
  onToggleLegible: () => void;
}

export default function TopBar({ fx, onToggleFx, legible, onToggleLegible }: TopBarProps) {
  const { language, setLanguage, t } = useLanguage();
  const ui = t.kernelKeeper.ui;

  const chip =
    'kk-display text-lg leading-none px-2.5 py-1 border transition-colors cursor-pointer';
  const chipOn = 'border-[var(--cyan)] text-[var(--cyan)] bg-[rgba(0,229,255,0.08)]';
  const chipOff = 'border-[var(--dim)]/40 text-[var(--dim)] hover:text-[var(--ink)]';

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[rgba(7,9,13,0.85)] backdrop-blur border-b border-[rgba(0,229,255,0.15)]">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <span className="w-8 h-8 rounded-full bg-white p-1 flex items-center justify-center">
            <Image src={logoPerro} alt="" className="w-full h-full object-contain" />
          </span>
          <span className="kk-display text-xl text-[var(--ink)] group-hover:text-[var(--cyan)] transition-colors hidden sm:inline">
            {ui.home}
          </span>
        </Link>

        <div
          role="group"
          aria-label={ui.settingsLabel}
          className="flex items-center gap-1.5 sm:gap-2"
        >
          <div role="group" aria-label={t.switch.ariaLabel} className="flex">
            {(['es', 'en'] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                aria-pressed={language === lang}
                title={lang === 'es' ? t.switch.esTitle : t.switch.enTitle}
                className={`${chip} ${language === lang ? chipOn : chipOff} ${lang === 'es' ? '' : '-ml-px'}`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={onToggleFx}
            aria-pressed={fx}
            title={ui.photosensitivity}
            className={`${chip} ${fx ? chipOn : chipOff}`}
          >
            {ui.fx}: {fx ? ui.on : ui.off}
          </button>
          <button
            type="button"
            onClick={onToggleLegible}
            aria-pressed={legible}
            title={ui.legibleFont}
            aria-label={ui.legibleFont}
            className={`${chip} ${legible ? chipOn : chipOff}`}
          >
            Aa
          </button>
        </div>
      </div>
    </header>
  );
}
