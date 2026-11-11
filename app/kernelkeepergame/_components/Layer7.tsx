'use client';

import { useState, type ComponentType } from 'react';
import {
  ChatIcon,
  HydraIcon,
  MediaIcon,
  PaintIcon,
  PinballIcon,
  SheetIcon,
} from '@/app/kernelkeepergame/_components/PixelIcons';
import { Window } from '@/app/kernelkeepergame/_components/Window';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  paint: PaintIcon,
  sheet: SheetIcon,
  media: MediaIcon,
  pinball: PinballIcon,
  chat: ChatIcon,
};

export default function Layer7() {
  const { t } = useLanguage();
  const { layer7, ui } = t.kernelKeeper;
  const [selected, setSelected] = useState<string>(layer7.zones[0]?.id ?? 'paint');

  const isHydra = selected === 'hydra';
  const zone = layer7.zones.find((z) => z.id === selected);
  const SelectedIcon = isHydra ? HydraIcon : ICONS[selected];

  const iconBtn =
    'group flex flex-col items-center gap-1.5 p-2 w-[112px] text-center outline-offset-2';
  const label = (active: boolean, danger = false) =>
    `text-[13px] leading-tight px-1 ${
      active
        ? danger
          ? 'bg-[var(--danger)] text-white'
          : 'bg-[var(--win-bar)] text-white'
        : danger
          ? 'text-[var(--danger)]'
          : 'text-[var(--ink)]'
    }`;

  return (
    <div className="flex flex-col gap-6">
      <header>
        <p className="kk-display text-xl text-[var(--cyan)]">{layer7.tag}</p>
        <h2 className="kk-chroma text-6xl sm:text-7xl text-[var(--ink)] uppercase">
          {layer7.title}
        </h2>
        <p className="mt-3 text-[var(--dim)] max-w-2xl">{layer7.intro}</p>
      </header>

      <Window id="desktop" title={layer7.window} bodyClassName="p-0">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] min-h-[380px] bg-[#0c3a3a] bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:12px_12px]">
          {/* Íconos del escritorio */}
          <div
            role="listbox"
            aria-label={layer7.title}
            className="flex md:flex-col flex-wrap gap-1 p-3 md:pr-6 content-start"
          >
            {layer7.zones.map((z) => {
              const Icon = ICONS[z.id];
              const active = selected === z.id;
              return (
                <button
                  key={z.id}
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => setSelected(z.id)}
                  className={iconBtn}
                >
                  {Icon && <Icon className="w-10 h-10" />}
                  <span className={label(active)}>{z.file}</span>
                </button>
              );
            })}
            <button
              type="button"
              role="option"
              aria-selected={isHydra}
              onClick={() => setSelected('hydra')}
              className={`${iconBtn} kk-glitch-hover`}
            >
              <HydraIcon className="w-10 h-10" />
              <span className={label(isHydra, true)}>{layer7.hydra.file}</span>
            </button>
          </div>

          {/* Ventana del programa seleccionado */}
          <div className="p-3 sm:p-6 flex items-start justify-center">
            <div key={selected} className="kk-window w-full max-w-xl" aria-live="polite">
              <div className="kk-titlebar" data-tone={isHydra ? 'danger' : 'default'}>
                {SelectedIcon && <SelectedIcon className="w-4 h-4" />}
                <span className="truncate">{isHydra ? layer7.hydra.file : zone?.file}</span>
              </div>
              <div className="p-4 sm:p-5 space-y-4">
                {isHydra ? (
                  <>
                    <p className="kk-display text-2xl text-[var(--danger)] kk-glitch-once">
                      ⚠ {layer7.hydra.warning}
                    </p>
                    <h3 className="text-4xl text-[#111]">{layer7.hydra.name}</h3>
                    <p className="text-[#222]">{layer7.hydra.text}</p>
                  </>
                ) : (
                  zone && (
                    <>
                      <h3 className="text-4xl text-[#111]">{zone.name}</h3>
                      <p className="text-[#222]">{zone.line}</p>
                    </>
                  )
                )}
                <div className="kk-art-pending aspect-video flex items-center justify-center text-2xl">
                  {ui.artPending}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="px-3 py-1.5 text-xs text-[#333] border-t border-[#7b7f83]">{layer7.hint}</p>
      </Window>
    </div>
  );
}
