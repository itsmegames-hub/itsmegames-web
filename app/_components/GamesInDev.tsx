'use client';

import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { games, type Game } from '@/lib/data/games';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface GameCardProps {
  game: Game;
  index: number;
}

const VT323 = { fontFamily: 'var(--font-vt323)' };

/** Escribe el texto letra por letra cuando la card entra en pantalla. */
function useTypewriter(text: string, start: boolean, speed = 35) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- preferencia del navegador, solo existe tras hidratar
      setCount(text.length);
      return;
    }
     
    setCount(0);
    const id = setInterval(() => {
      setCount((n) => {
        if (n >= text.length) {
          clearInterval(id);
          return n;
        }
        return n + 1;
      });
    }, speed);
    return () => clearInterval(id);
  }, [text, start, speed]);

  return { shown: text.slice(0, count), done: count >= text.length };
}

function GameCard({ game, index }: GameCardProps) {
  const { t } = useLanguage();
  const isKernelKeeper = game.id === 1;
  const gameTitle = isKernelKeeper ? t.games.layer8.title : game.title;
  const gameStage = isKernelKeeper ? t.games.layer8.stage : game.stage;
  const gameTagline = isKernelKeeper ? t.games.layer8.tagline : game.tagline;
  const gameHook = isKernelKeeper ? t.games.layer8.hook : game.hook;
  const gameTags = isKernelKeeper ? t.games.layer8.tags : game.tags;

  const screenRef = useRef<HTMLAnchorElement>(null);
  const inView = useInView(screenRef, { once: true, amount: 0.6 });
  const tagline = useTypewriter(gameTagline, inView);

  // "THE KERNEL KEEPER" → "THE KERNEL" + "KEEPER" para resaltar la última palabra
  const titleWords = gameTitle.split(' ');
  const titleLast = titleWords.pop();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative group h-full"
    >
      <div className="relative p-5 sm:p-6 bg-white border border-brand-green/10 rounded-3xl h-full flex flex-col shadow-sm group-hover:shadow-[0_18px_40px_-16px_rgba(24,122,52,0.35)] transition-shadow duration-300">
        {/* --- Monitor --- */}
        <Link
          ref={screenRef}
          href={game.url}
          aria-label={`${gameTitle} — ${t.games.viewGame}`}
          className="block rounded-[22px] bg-brand-light border border-brand-green/15 p-3 pb-2 shadow-[inset_0_-3px_0_rgba(0,0,0,0.06)] focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-green/30"
        >
          {/* Pantalla CRT */}
          <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden bg-[#06110a] shadow-[inset_0_0_40px_rgba(0,0,0,0.9)]">
            {/* Resplandor de fósforo */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.14),transparent_70%)] opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Scanlines */}
            <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_2px,rgba(0,0,0,0.28)_3px)]" />
            {/* Viñeta */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.65)_100%)]" />

            <div className="relative h-full flex flex-col justify-between p-4 sm:p-5" style={VT323}>
              <div className="flex items-center justify-between text-[#39ff14]/60 text-sm sm:text-base">
                <span>{'>'} KERNEL_KEEPER.SYS</span>
                <span className="flex items-center gap-1.5 text-[#39ff14]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-pulse" />
                  {gameStage.toUpperCase()}
                </span>
              </div>

              <div>
                <h3
                  className="text-[2.6rem] sm:text-5xl leading-[0.85] text-[#e8f5ec] uppercase [text-shadow:0_0_14px_rgba(57,255,20,0.35)]"
                  style={VT323}
                >
                  {titleWords.join(' ')}
                  <br />
                  <span className="text-[#39ff14]">{titleLast}</span>
                </h3>
                <p
                  className="mt-3 text-lg sm:text-xl text-[#ff5a5c] min-h-[1.5em]"
                  aria-label={gameTagline}
                >
                  <span aria-hidden="true">
                    {tagline.shown}
                    <span
                      className={`inline-block w-[0.5em] h-[0.9em] align-[-0.1em] ml-0.5 bg-[#39ff14] ${
                        tagline.done ? 'animate-pulse' : ''
                      }`}
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Marco inferior: logo y LED */}
          <div className="flex items-center justify-between px-1 pt-2">
            <span className="font-fredoka text-[10px] font-bold tracking-wider text-brand-green/70 uppercase">
              ItsMeGames
            </span>
            <span className="w-2 h-2 rounded-full bg-brand-green shadow-[0_0_6px_rgba(24,122,52,0.8)]" />
          </div>
        </Link>
        {/* Pie del monitor */}
        <div
          className="mx-auto w-16 h-3 bg-brand-light border-x border-brand-green/10"
          aria-hidden="true"
        />
        <div
          className="mx-auto w-32 h-2 rounded-full bg-brand-light border border-brand-green/10"
          aria-hidden="true"
        />

        {/* --- Info --- */}
        <p className="mt-5 text-gray-600 text-sm leading-relaxed font-satoshi font-medium text-center">
          {gameHook}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-3 mb-6">
          {gameTags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono text-brand-green border border-brand-green/10 bg-brand-green/5 px-2 py-0.5 rounded font-semibold"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          {game.prototypeUrl && (
            <a
              href={game.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center gap-2 py-3 px-4 rounded-xl border border-brand-green bg-brand-green text-white hover:bg-brand-green/90 hover:shadow-[0_0_15px_rgba(24,122,52,0.3)] transition-all duration-300 font-fredoka font-bold text-xs tracking-wider uppercase"
            >
              ▶ {t.games.playPrototype}
            </a>
          )}
          <Link
            href={game.url}
            className="flex-1 flex justify-center items-center gap-2 py-3 px-4 rounded-xl border border-brand-green/20 bg-brand-green/5 text-brand-green hover:bg-brand-green hover:text-white hover:border-brand-green transition-all duration-300 font-fredoka font-bold text-xs tracking-wider uppercase"
          >
            <span>{t.games.viewGame}</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function GamesInDev() {
  const { t } = useLanguage();

  return (
    <section id="games" className="relative w-full py-8 md:py-12 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-tan/5 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-brand-green animate-spin-slow" />
            <span className="text-brand-green font-fredoka text-xs tracking-wider uppercase">
              {t.games.badge}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-fredoka font-black text-brand-dark text-center mb-4 tracking-normal uppercase">
            {t.games.titlePre}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-tan text-glow">
              {t.games.titleHighlight}
            </span>
          </h2>
          <p className="text-gray-600 font-satoshi text-center max-w-2xl text-sm md:text-base leading-relaxed">
            {t.games.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {games.map((game, index) => (
            <div key={game.id} className="w-full max-w-[480px]">
              <GameCard game={game} index={index} />
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-green to-brand-tan rounded-full blur opacity-40 group-hover:opacity-100 transition duration-300"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
