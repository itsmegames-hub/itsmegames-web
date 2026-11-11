'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Crosshair, DoorOpen, Instagram, Mail, MonitorDot, Twitch, Zap } from 'lucide-react';
import RichText from '@/app/kernelkeepergame/_components/RichText';
import { DocIcon, LockedDriveIcon, UsbIcon } from '@/app/kernelkeepergame/_components/PixelIcons';
import { Window } from '@/app/kernelkeepergame/_components/Window';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import logoPerro from '@/public/brand/logo-perro.png';

const CONTACT_EMAIL = 'bruno.aresubarella@itsmegames.com';

/* ---------- El planteo: registro recuperado ---------- */

export function Story() {
  const { t } = useLanguage();
  const story = t.kernelKeeper.story;

  return (
    <Window id="story" title={story.window} icon={<DocIcon className="w-4 h-4" />}>
      <h2 className="sr-only">{story.title}</h2>
      <ol className="kk-terminal p-4 sm:p-6 space-y-4 text-[15px]">
        {story.lines.map((line, i) => (
          <li key={line} className="flex gap-3">
            <span className="kk-display text-lg text-[var(--dim)] shrink-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="text-[var(--ink)]">
              <RichText text={line} strongClassName="text-[var(--ram)] font-semibold" />
            </span>
          </li>
        ))}
        <li aria-hidden="true">
          <span className="kk-caret text-[var(--ram)]" />
        </li>
      </ol>
    </Window>
  );
}

/* ---------- Cómo se juega ---------- */

const FEATURE_ICONS = [Crosshair, Zap, DoorOpen, MonitorDot];
const FEATURE_COLORS = ['var(--danger)', 'var(--cyan)', 'var(--rom)', 'var(--ram)'];

export function HowToPlay() {
  const { t } = useLanguage();
  const how = t.kernelKeeper.howToPlay;

  return (
    <Window id="how" title={how.window} icon={<UsbIcon className="w-4 h-4" />}>
      <h2 className="text-5xl text-[#111] mb-5">{how.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {how.items.map((item, i) => {
          const Icon = FEATURE_ICONS[i] ?? Zap;
          return (
            <div key={item.title} className="kk-terminal p-4 flex gap-4">
              <Icon
                className="w-8 h-8 shrink-0 mt-0.5"
                style={{ color: FEATURE_COLORS[i] }}
                aria-hidden="true"
              />
              <div>
                <h3 className="text-2xl mb-1" style={{ color: FEATURE_COLORS[i] }}>
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--ink)]">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Window>
  );
}

/* ---------- El dilema: héroe o villano (glitch una vez al entrar en pantalla) ---------- */

export function Dilemma() {
  const { t } = useLanguage();
  const dilemma = t.kernelKeeper.dilemma;
  const ref = useRef<HTMLParagraphElement>(null);
  const [corrupted, setCorrupted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setCorrupted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 sm:py-32 text-center relative">
      <div
        className="absolute inset-0 -z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,42,42,0.12),transparent_65%)]"
        aria-hidden="true"
      />
      <p className="relative kk-display text-2xl text-[var(--dim)] mb-8">{dilemma.pre}</p>
      <h2 className="relative max-w-4xl mx-auto">
        <span
          ref={ref}
          className={`inline-block kk-chroma text-5xl sm:text-7xl text-[var(--ink)] leading-[0.95] ${
            corrupted ? 'kk-glitch-once' : ''
          }`}
        >
          {dilemma.question}
        </span>
      </h2>
    </section>
  );
}

/* ---------- Próximamente: unidad no montada (el botón Reintentar abre el easter egg) ---------- */

export function LockedDrive({ onRetry }: { onRetry: () => void }) {
  const { t } = useLanguage();
  const locked = t.kernelKeeper.locked;

  return (
    <Window
      id="locked"
      title={locked.window}
      tone="amber"
      icon={<LockedDriveIcon className="w-4 h-4" />}
      onClose={onRetry}
    >
      <div className="flex flex-col sm:flex-row gap-5 items-start">
        <LockedDriveIcon className="w-16 h-16 shrink-0" />
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl text-[#111] mb-2">{locked.title}</h2>
          <p className="text-[#222] mb-1">{locked.text}</p>
          <p className="kk-display text-lg text-[#6b4700] mb-5">{locked.detail}</p>
          <button
            type="button"
            onClick={onRetry}
            className="kk-bevel-btn kk-display text-xl px-5 py-1"
          >
            {locked.retry}
          </button>
        </div>
      </div>
    </Window>
  );
}

/* ---------- Créditos ---------- */

export function Credits() {
  const { t } = useLanguage();
  const credits = t.kernelKeeper.credits;

  return (
    <Window id="credits" title={credits.window} icon={<DocIcon className="w-4 h-4" />}>
      <h2 className="text-5xl text-[#111] mb-4">{credits.title}</h2>
      <div className="kk-terminal p-4 sm:p-6 text-sm">
        <p className="text-[var(--dim)] mb-4">{credits.command}</p>
        <dl className="space-y-3">
          {credits.members.map((member) => (
            <div key={member.name} className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-x-4">
              <dt className="text-[var(--ram)] font-semibold">
                <span className="text-[var(--dim)]">[OK]</span> {member.name}
              </dt>
              <dd className="text-[var(--ink)] pl-10 sm:pl-0">{member.role}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-[var(--rom)]">{credits.studio}</p>
      </div>
    </Window>
  );
}

/* ---------- Pie ---------- */

export function GameFooter() {
  const { t } = useLanguage();
  const footer = t.kernelKeeper.footer;

  const link =
    'inline-flex flex-wrap items-center gap-x-2 text-[var(--ink)] hover:text-[var(--cyan)] transition-colors break-all';

  return (
    <footer className="relative z-10 border-t border-[rgba(0,229,255,0.15)] mt-24 pb-14">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8 md:items-center justify-between text-sm">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-white p-1.5 flex items-center justify-center shrink-0">
            <Image src={logoPerro} alt="ItsMeGames" className="w-full h-full object-contain" />
          </span>
          <div>
            <p className="kk-display text-2xl text-[var(--ink)] leading-none">
              ItsMeGames © {new Date().getFullYear()}
            </p>
            <p className="text-[var(--dim)]">
              <em>{footer.tagline}</em> · {footer.location}
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
          <span className="sr-only">{footer.followLabel}</span>
          <a
            href="https://www.instagram.com/itsmegames_/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            <Instagram className="w-4 h-4 shrink-0 text-[var(--cyan)]" aria-hidden="true" />{' '}
            @itsmegames_
          </a>
          <a
            href="https://www.twitch.tv/itsmegames_"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            <Twitch className="w-4 h-4 shrink-0 text-[var(--cyan)]" aria-hidden="true" />{' '}
            itsmegames_
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className={link}>
            <Mail className="w-4 h-4 shrink-0 text-[var(--cyan)]" aria-hidden="true" />
            <span className="text-[var(--dim)]">{footer.contactLabel}:</span> {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
