'use client';

import Image from 'next/image';
import { ChevronDown, Joystick } from 'lucide-react';
import { motion } from 'motion/react';
import { KERNEL_KEEPER_PROTOTYPE_URL } from '@/lib/data/games';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import logoPerro from '@/public/brand/logo-perro.png';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-12 py-8 md:py-12 min-h-[calc(100vh-80px)]">
      {/* Área de Texto */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-left flex-1"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-fredoka mb-4 leading-[1.1] text-brand-dark uppercase tracking-normal">
          {t.hero.titleLine1} <br className="hidden sm:inline" />
          {t.hero.titleLine2Pre}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-tan text-glow">
            {t.hero.titleLine2Highlight}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 max-w-xl font-satoshi leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        {/* Insignia Decorativa */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-green/20 bg-brand-green/10 text-brand-green font-fredoka text-xs sm:text-sm font-medium"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
          {t.hero.badge}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <a
            href={KERNEL_KEEPER_PROTOTYPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-brand-green text-white font-fredoka font-bold text-sm tracking-wider uppercase shadow-[0_8px_20px_-6px_rgba(24,122,52,0.5)] hover:bg-brand-green/90 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Joystick className="w-4 h-4" />
            {t.hero.playPrototype}
          </a>
        </motion.div>
      </motion.div>

      {/* Área Visual de la Mascota */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
        className="flex-1 flex justify-center items-center relative w-full max-w-[160px] sm:max-w-[220px] lg:max-w-[380px]"
      >
        {/* Luces decorativas de fondo */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/15 to-brand-tan/10 rounded-full blur-[60px] -z-10 animate-pulse"></div>

        {/* Contenedor Flotante Principal */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-40 h-40 sm:w-52 sm:h-52 lg:w-90 lg:h-90 rounded-full bg-gradient-to-b from-white to-brand-light p-[2px] border border-brand-green/15 shadow-[0_8px_30px_rgba(24,122,52,0.06)] overflow-visible group"
        >
          {/* Brillo interno al hacer hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          {/* Imagen de la mascota */}
          <div className="w-full h-full rounded-full bg-white/95 flex items-center justify-center overflow-visible p-3 relative">
            <Image
              src={logoPerro}
              alt="It's Me Games Mascot"
              className="w-full h-full object-contain transform group-hover:scale-105 group-hover:rotate-2 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Resplandor de fondo global */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-green/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none"></div>

      {/* Contenedor de posicionamiento estático (centra horizontalmente sin interferencia de Framer Motion) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col items-center cursor-pointer group"
        >
          <a
            href="#games"
            className="flex flex-col items-center text-gray-400 hover:text-brand-green transition-colors"
          >
            <span className="text-[10px] font-fredoka uppercase tracking-wider font-semibold opacity-0 group-hover:opacity-100 transition-opacity mb-2">
              {t.hero.explore}
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center -space-y-3.5"
            >
              <ChevronDown className="w-6 h-6 text-brand-green/30" />
              <ChevronDown className="w-6 h-6 text-brand-green/60" />
              <ChevronDown className="w-6 h-6 text-brand-green" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
