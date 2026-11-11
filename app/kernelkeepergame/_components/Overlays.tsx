'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const CHARS_PER_TICK = 3;
const TICK_MS = 16;
const HOLD_MS = 500;

/* ---------- Carga: escritura de consola en cada visita, saltable ---------- */

export function BootSequence() {
  const { t } = useLanguage();
  const boot = t.kernelKeeper.boot;
  const total = boot.lines.reduce((sum, line) => sum + line.length, 0);
  // Arranca visible desde el servidor para que cubra la carga de la página
  const [visible, setVisible] = useState(true);
  const [typed, setTyped] = useState(0);

  // Movimiento reducido: sin animación
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- preferencia del navegador, solo existe tras hidratar
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (typed >= total) {
      const done = setTimeout(() => setVisible(false), HOLD_MS);
      return () => clearTimeout(done);
    }
    const next = setTimeout(() => setTyped((n) => Math.min(total, n + CHARS_PER_TICK)), TICK_MS);
    return () => clearTimeout(next);
  }, [visible, typed, total]);

  useEffect(() => {
    if (!visible) return;
    const skip = () => setVisible(false);
    window.addEventListener('keydown', skip);
    return () => window.removeEventListener('keydown', skip);
  }, [visible]);

  if (!visible) return null;

  // Cuántos caracteres de cada línea ya se escribieron
  const lines = boot.lines.map((line, i) => {
    const start = boot.lines.slice(0, i).reduce((sum, l) => sum + l.length, 0);
    return line.slice(0, Math.max(0, typed - start));
  });
  const current = lines.findIndex((line, i) => line.length < boot.lines[i]!.length);
  const caretLine = current === -1 ? lines.length - 1 : current;

  return (
    <div
      className="kk-boot fixed inset-0 z-[100] bg-black text-[var(--ram)] kk-display text-xl sm:text-2xl p-6 sm:p-10 cursor-pointer"
      onClick={() => setVisible(false)}
      role="status"
      aria-label={boot.lines.join(' ')}
    >
      <div className="max-w-3xl space-y-1" aria-hidden="true">
        {lines.map((line, i) =>
          i <= caretLine ? (
            <p key={i} className="min-h-[1.2em]">
              <span className="text-[var(--dim)]">{'> '}</span>
              {line}
              {i === caretLine && <span className="kk-caret" />}
            </p>
          ) : null,
        )}
      </div>
      <p className="absolute bottom-6 left-6 sm:left-10 text-[var(--dim)] text-lg">{boot.skip}</p>
    </div>
  );
}

/* ---------- Easter egg: pantalla azul con un saludo del equipo ---------- */

export function Bsod({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLanguage();
  const bsod = t.kernelKeeper.bsod;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    // Ignoramos la tecla que abrió el diálogo (Enter/Espacio sobre el botón)
    const arm = setTimeout(() => window.addEventListener('keydown', onClose), 150);
    return () => {
      clearTimeout(arm);
      window.removeEventListener('keydown', onClose);
      previous?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="kk-bsod-title"
      onClick={onClose}
      className="fixed inset-0 z-[110] bg-[var(--bsod)] text-white kk-display text-xl sm:text-2xl flex items-center justify-center p-6 cursor-pointer outline-none"
    >
      <div className="max-w-2xl space-y-6">
        <p className="text-center">
          <span id="kk-bsod-title" className="bg-[var(--win)] text-[var(--bsod)] px-3">
            {bsod.title}
          </span>
        </p>
        {bsod.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <p className="text-center pt-4">{bsod.dismiss}</p>
      </div>
    </div>
  );
}
