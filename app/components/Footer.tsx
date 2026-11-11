'use client';

import Image from 'next/image';
import { Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import logoPerro from '@/public/brand/logo-perro.png';

interface SocialLink {
  icon: typeof Instagram;
  href: string;
  label: string;
}

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    { icon: Instagram, href: 'https://www.instagram.com/itsmegames_/', label: 'Instagram' },
  ];

  return (
    <footer className="relative border-t border-brand-green/10 bg-white/60 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo and Copyright */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 rounded-full bg-white p-1.5 flex items-center justify-center border border-brand-green/20 shadow-sm">
              <Image src={logoPerro} alt="Mascot Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-fredoka font-bold text-brand-green tracking-wide text-lg">
              ItsMeGames
            </span>
            <span className="font-satoshi text-gray-500 text-sm">© {currentYear}</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center space-x-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-brand-green transition-colors relative group"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Icon className="w-6 h-6" />
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-brand-green group-hover:w-full transition-all duration-300"></span>
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Contact Info - Chiquito */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-brand-green/10 flex flex-col items-center text-center space-y-2"
        >
          <p className="text-[10px] font-fredoka font-bold text-gray-500 tracking-wider uppercase">
            BRUNO ARESU BARELLA - <span className="text-brand-green">{t.footer.founderRole}</span>
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-satoshi text-gray-600">
            <a
              href="mailto:bruno.aresubarella@itsmegames.com"
              className="hover:text-brand-green transition-colors flex items-center gap-2"
            >
              <span className="text-brand-green font-semibold">{t.footer.emailLabel}</span>
              bruno.aresubarella@itsmegames.com
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
