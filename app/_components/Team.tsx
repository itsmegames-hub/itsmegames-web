'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { teamMembers, type TeamMember } from '@/lib/data/team';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

function TeamCard({ member, index }: TeamCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();

  const memberTranslation = t.team.members[member.name];
  const role = memberTranslation?.role || member.role;
  const description = memberTranslation?.description || member.description;

  return (
    <div
      className="relative h-[300px] w-full max-w-[300px] perspective-1000 cursor-pointer group mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        className="w-full h-full relative preserve-3d transition-transform duration-700"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* --- CARA FRONTAL --- */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl p-[2px] bg-gradient-to-b from-brand-green/40 to-brand-tan/20"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="bg-cardbg backdrop-blur-xl p-4 rounded-2xl h-full flex flex-col items-center text-center relative overflow-hidden shadow-sm">
            <div
              className={`absolute inset-0 bg-brand-green/5 blur-[100px] transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            ></div>

            <div className="relative mb-4 rounded-full p-1 bg-gradient-to-br from-brand-green to-brand-tan mt-4 shadow-sm">
              <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-white border-4 border-white flex items-center justify-center overflow-hidden relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={112}
                  height={112}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    isHovered ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
            </div>

            <h3 className="text-lg lg:text-xl text-brand-dark font-fredoka font-bold mb-1 truncate w-full">
              {member.name}
            </h3>
            {role && (
              <p className="text-xs lg:text-sm leading-snug text-brand-green font-satoshi font-semibold">
                {role}
              </p>
            )}

            <div className="mt-auto pt-2 text-[10px] text-brand-green/80 font-fredoka font-semibold tracking-wider animate-pulse">
              {t.team.viewInfo}
            </div>
          </div>
        </div>

        {/* --- CARA TRASERA --- */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl p-[2px] bg-gradient-to-b from-brand-tan to-brand-green/40"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="bg-white border border-brand-green/10 backdrop-blur-xl p-6 rounded-2xl h-full flex flex-col items-center justify-center text-center relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green to-brand-tan"></div>
            <h3 className="text-xl text-brand-green font-fredoka font-bold mb-3">{member.name}</h3>
            <p className="text-gray-600 text-sm font-satoshi leading-relaxed">
              {'"'}
              {description}
              {'"'}
            </p>
            <div className="mt-4 text-2xl">{member.emoji}</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Team() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-fredoka font-black mb-4 text-brand-dark text-glow uppercase tracking-normal">
          {t.team.title}
        </h2>
        <p className="text-xl font-satoshi text-gray-600 max-w-2xl mx-auto">
          {t.team.subtitle}
        </p>
      </motion.div>

      {/* Todos en una sola fila en desktop; en pantallas chicas se reparten en columnas */}
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-4">
        {teamMembers.map((member, index) => (
          <TeamCard key={member.name} member={member} index={index} />
        ))}
      </div>
    </section>
  );
}
