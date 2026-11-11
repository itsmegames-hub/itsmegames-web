'use client';

import { KERNEL_KEEPER_PROTOTYPE_URL } from '@/lib/data/games';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function KernelKeeperHero() {
  const { t } = useLanguage();
  const { hero, ui } = t.kernelKeeper;

  return (
    <section className="kk-crosshair relative min-h-[calc(100svh-3.5rem)] flex items-center py-16">
      <div className="w-full flex flex-col items-center text-center">
        <div className="flex flex-col items-center">
          <p className="kk-display text-lg sm:text-xl text-[var(--amber)] mb-5 flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 bg-[var(--amber)]" aria-hidden="true" />
            {hero.status}
          </p>

          <h1 className="kk-chroma text-[var(--ink)] text-[clamp(3.5rem,14vw,10rem)] leading-[0.85] uppercase mb-6">
            The Kernel
            <br />
            <span className="kk-phosphor">Keeper</span>
          </h1>

          <p className="kk-display text-2xl sm:text-3xl text-[var(--danger)] mb-3">
            {hero.tagline}
          </p>
          <p className="text-[var(--dim)] text-sm mb-10">{hero.genre}</p>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-start justify-center">
            <div>
              <a
                href={KERNEL_KEEPER_PROTOTYPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="kk-display inline-flex items-center justify-center gap-2 w-full sm:w-auto text-2xl uppercase px-6 py-3 bg-[var(--cyan)] text-[var(--bg)] hover:bg-white transition-colors shadow-[0_0_30px_-6px_rgba(0,229,255,0.7)]"
              >
                ▶ {hero.play}
              </a>
              <p className="kk-touch-only mt-2 text-xs text-[var(--amber)] max-w-[260px] mx-auto">
                {hero.mobileNotice}
              </p>
            </div>
            <a
              href="#win-beta"
              className="kk-display inline-flex items-center justify-center gap-2 text-2xl uppercase px-6 py-3 border-2 border-[var(--ram)] text-[var(--ram)] hover:bg-[rgba(57,255,20,0.1)] transition-colors"
            >
              {'>'} {hero.beta}
            </a>
          </div>

          <p className="mt-10 text-[11px] text-[var(--dim)] max-w-md mx-auto">
            {ui.photosensitivity}
          </p>
        </div>
      </div>
    </section>
  );
}
