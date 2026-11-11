'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

/* ---------- Gestor de ventanas: qué ventanas están minimizadas ---------- */

interface WindowManager {
  minimized: { id: string; title: string }[];
  minimize: (id: string, title: string) => void;
  restore: (id: string) => void;
  isMinimized: (id: string) => boolean;
}

const WindowContext = createContext<WindowManager | null>(null);

export function WindowProvider({ children }: { children: ReactNode }) {
  const [minimized, setMinimized] = useState<{ id: string; title: string }[]>([]);

  const value: WindowManager = {
    minimized,
    minimize: (id, title) =>
      setMinimized((list) => (list.some((w) => w.id === id) ? list : [...list, { id, title }])),
    restore: (id) => {
      setMinimized((list) => list.filter((w) => w.id !== id));
      requestAnimationFrame(() => {
        const el = document.getElementById(`win-${id}`);
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el?.querySelector<HTMLElement>('[data-win-focus]')?.focus({ preventScroll: true });
      });
    },
    isMinimized: (id) => minimized.some((w) => w.id === id),
  };

  return <WindowContext.Provider value={value}>{children}</WindowContext.Provider>;
}

function useWindows() {
  const ctx = useContext(WindowContext);
  if (!ctx) throw new Error('useWindows must be used inside WindowProvider');
  return ctx;
}

/* ---------- Ventana ---------- */

interface WindowProps {
  id: string;
  title: string;
  icon?: ReactNode;
  tone?: 'default' | 'danger' | 'amber';
  /** Acción del botón cerrar. Si no se pasa, la ventana no lo muestra. */
  onClose?: () => void;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
}

export function Window({
  id,
  title,
  icon,
  tone = 'default',
  onClose,
  className = '',
  bodyClassName = 'p-5 sm:p-6',
  children,
}: WindowProps) {
  const { t } = useLanguage();
  const { minimize, restore, isMinimized } = useWindows();
  const collapsed = isMinimized(id);

  return (
    <section id={`win-${id}`} aria-label={title} className={`kk-window scroll-mt-24 ${className}`}>
      <div className="kk-titlebar" data-tone={tone}>
        {icon && (
          <span className="shrink-0" aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="truncate flex-1">{title}</span>
        <button
          type="button"
          data-win-focus
          className="kk-winbtn"
          aria-expanded={!collapsed}
          aria-controls={`win-body-${id}`}
          aria-label={collapsed ? t.kernelKeeper.ui.restore : t.kernelKeeper.ui.minimize}
          title={collapsed ? t.kernelKeeper.ui.restore : t.kernelKeeper.ui.minimize}
          onClick={() => (collapsed ? restore(id) : minimize(id, title))}
        >
          {collapsed ? '□' : '_'}
        </button>
        {onClose && (
          <button
            type="button"
            className="kk-winbtn"
            aria-label={t.kernelKeeper.ui.close}
            title={t.kernelKeeper.ui.close}
            onClick={onClose}
          >
            ×
          </button>
        )}
      </div>
      <div id={`win-body-${id}`} hidden={collapsed} className={bodyClassName}>
        {children}
      </div>
    </section>
  );
}

/* ---------- Barra de tareas inventada + progreso de scroll en bloques de RAM ---------- */

const RAM_BLOCKS = 10;

export function Taskbar() {
  const { t } = useLanguage();
  const ui = t.kernelKeeper.ui;
  const { minimized, restore } = useWindows();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const filled = Math.round(progress * RAM_BLOCKS);

  return (
    <nav
      aria-label={ui.taskbarLabel}
      className="fixed bottom-0 inset-x-0 z-50 kk-window !shadow-none flex items-center gap-2 px-2 py-1.5"
    >
      <button
        type="button"
        className="kk-bevel-btn kk-display text-lg px-2 py-0.5 shrink-0 flex items-center gap-1.5"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={ui.scrollTop}
        title={ui.scrollTop}
      >
        <span
          className="inline-block w-3 h-3 bg-[var(--cyan)] border border-black"
          aria-hidden="true"
        />
        KK
      </button>

      <div className="flex-1 flex gap-1.5 overflow-x-auto min-w-0">
        {minimized.map((w) => (
          <button
            key={w.id}
            type="button"
            className="kk-bevel-btn kk-display text-base px-2 py-0.5 truncate max-w-[160px] shrink-0"
            onClick={() => restore(w.id)}
            title={`${ui.restore}: ${w.title}`}
          >
            {w.title}
          </button>
        ))}
      </div>

      <div
        className="kk-inset !bg-[#020403] flex items-center gap-1.5 px-2 py-1 shrink-0"
        role="progressbar"
        aria-label={ui.memLabel}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100)}
      >
        <span className="kk-display text-[var(--ram)] text-base leading-none">{ui.memLabel}</span>
        <span className="flex gap-[2px]" aria-hidden="true">
          {Array.from({ length: RAM_BLOCKS }, (_, i) => (
            <span
              key={i}
              className="w-[6px] sm:w-2 h-3 transition-colors"
              style={{ background: i < filled ? 'var(--ram)' : 'rgba(57,255,20,0.15)' }}
            />
          ))}
        </span>
      </div>
    </nav>
  );
}
