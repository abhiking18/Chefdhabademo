import React from 'react';
import { UtensilsCrossed, Star, Clock, MessageCircle, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { motion } from 'motion/react';
import { TransparentChefMascot } from './TransparentChefMascot';

interface HeroProps {
  onOpenOrder: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder, onExploreMenu }) => {
  const whatsappUrl = `https://wa.me/91${RESTAURANT_INFO.phoneRaw}?text=${encodeURIComponent('Hello Chef Dhaba! I would like to place an order or inquire about table booking.')}`;

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center py-12 sm:py-20 overflow-hidden bg-[#0F0A08] text-[#F5EFE6]"
    >
      {/* 1. VISIBLE NIGHT SIGNBOARD BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("/assets/aistudio/WhatsApp_Image_2026-11-10_at_3.23.05_PM_35c9305f.jpeg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px) brightness(0.95) contrast(1.08)',
          transform: 'scale(1.04)',
        }}
      />

      {/* 2. RICH WARM DARK VIGNETTE GRADIENT OVERLAY */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(15, 10, 8, 0.5) 0%, rgba(15, 10, 8, 0.75) 100%)',
        }}
      />

      {/* 3. HERO CONTENT CONTAINER (STATIC 2-COLUMN DESKTOP & STACKED MOBILE LAYOUT) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* MOBILE VIEW MASCOT PLACEMENT (TOP CENTERED FOR MOBILE SCREENS <768px) */}
          <div className="block lg:hidden text-center mb-2">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto w-[150px] h-auto drop-shadow-xl pointer-events-none"
            >
              <TransparentChefMascot
                src="/assets/aistudio/Gemini_Generated_Image_480vsw480vsw480v-removebg-preview_a8b29ec1.png"
                alt="New Highway Chef Dhaba Mascot"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>

          {/* LEFT COLUMN: TITLE & ACTIONS (60% WIDTH ON DESKTOP) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Top Pill Badge */}
            <div className="mb-5 p-2 bg-[#FFF8F0] backdrop-blur-md rounded-full shadow-lg border border-[#E8C5BE] flex items-center gap-2.5 px-5 self-center lg:self-start">
              <img
                src="/assets/aistudio/Gemini_Generated_Image_ngrixhngrixhngri_593f6bfe.png"
                alt="New Highway Chef Dhaba Logo"
                className="w-7 h-7 object-contain"
              />
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#633C38]">
                NH-31 RANGIA · ASSAM
              </span>
            </div>

            {/* "WELCOME TO" IN PLUS JAKARTA SANS */}
            <p
              className="text-sm sm:text-lg font-bold uppercase tracking-[0.25em] text-[#FFF8F0] drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] mb-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              WELCOME TO
            </p>

            {/* "NEW HIGHWAY / CHEF / DHABA" STACKED HEADING IN ROYAL CINZEL / PLAYFAIR */}
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-5 leading-[1.08] uppercase"
              style={{
                fontFamily: "'Cinzel', 'Playfair Display', serif",
                filter: 'drop-shadow(0 4px 16px rgba(0, 0, 0, 0.85))',
              }}
            >
              <span className="text-[#F2B84B] block">NEW HIGHWAY</span>
              <span className="text-[#F2B84B] block">CHEF</span>
              <span className="text-[#F2B84B] block">DHABA</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-sm sm:text-lg font-medium max-w-xl mb-8 leading-relaxed text-[#F5EFE6] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Authentic Assamese & North Indian Cuisine • Thatched Cottages & Bamboo Machan • Open Daily Till 11:30 PM
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 w-full sm:w-auto">
              {/* EXPLORE MENU: TERRACOTTA ROSE (#C96A63) */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onExploreMenu}
                className="w-64 sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#C96A63] hover:bg-[#b85b54] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_6px_20px_rgba(0,0,0,0.4)] transition-all cursor-pointer border border-[#C96A63]"
              >
                <UtensilsCrossed className="w-4 h-4 text-white" />
                <span>Explore Menu</span>
              </motion.button>

              {/* WHATSAPP ORDER: WARM OLIVE-GOLD (#9E8244) */}
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-64 sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#9E8244] hover:bg-[#8c723a] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_6px_20px_rgba(0,0,0,0.4)] transition-all border border-[#9E8244]"
              >
                <MessageCircle className="w-4 h-4 text-white fill-white/20" />
                <span>WhatsApp Order</span>
              </motion.a>
            </div>

            {/* Key Info Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 p-3.5 sm:p-4 rounded-2xl bg-[#FFFDFC]/95 backdrop-blur-md border border-[#E8C5BE] shadow-lg text-xs sm:text-sm font-semibold text-[#633C38] w-full sm:w-auto">
              <div className="flex items-center gap-2">
                <div className="flex text-[#C97870]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C97870] text-[#C97870]" />
                  ))}
                </div>
                <span>3.8/5.0 (1,039+ Reviews)</span>
              </div>

              <div className="hidden sm:block w-px h-4 bg-[#E8C5BE]" />

              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C97870]" />
                <span>Open Daily: 8:00 AM – 11:30 PM</span>
              </div>

              <div className="hidden sm:block w-px h-4 bg-[#E8C5BE]" />

              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C97870]" />
                <span>NH-31 Rangia, Assam</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: PROMINENT CUTOUT CHEF MASCOT (DESKTOP 40% WIDTH) */}
          <div className="hidden lg:flex lg:w-[40%] justify-end items-end relative">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-[340px] xl:w-[390px] h-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
            >
              <TransparentChefMascot
                src="/assets/aistudio/Gemini_Generated_Image_480vsw480vsw480v-removebg-preview_a8b29ec1.png"
                alt="New Highway Chef Dhaba Mascot"
                className="w-full h-auto object-contain pointer-events-none"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
