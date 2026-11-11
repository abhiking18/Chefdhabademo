import React from 'react';
import { ArrowDown, UtensilsCrossed, Star, Clock, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { motion } from 'motion/react';
import userHeroReferenceImg from '../assets/images/user_hero_reference.jpeg';

interface HeroProps {
  onOpenOrder: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder, onExploreMenu }) => {
  return (
    <section
      id="hero"
      className="hero relative min-h-[90vh] sm:min-h-[92vh] flex flex-col justify-between pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden isolate"
    >
      {/* 1. EXACT UPLOADED REFERENCE IMAGE AS FULL-WIDTH BACKGROUND (4PX BLUR & SLOW ZOOM) */}
      <motion.div
        initial={{ scale: 1.02 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 7, ease: 'easeOut' }}
        className="hero-background absolute -inset-2 -z-20 overflow-hidden pointer-events-none"
      >
        <img
          src={userHeroReferenceImg}
          alt="New Highway Chef Dhaba illuminated signboard and entrance at night"
          className="w-full h-full object-cover object-center"
          style={{
            filter: 'blur(4px) brightness(0.82)',
            transform: 'scale(1.02)',
          }}
          loading="eager"
        />
      </motion.div>

      {/* 2. CLEAN NEUTRAL DARK OVERLAY (NO REDDISH SHADE ON BACKGROUND AS REQUESTED) */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none bg-black/40"
      />
      <div
        className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-t from-black/80 via-black/20 to-black/40"
      />
      <div
        className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-r from-black/65 via-black/30 to-transparent"
      />

      {/* 3. FOREGROUND HERO CONTENT (CLEAN, NO UNWANTED RIGHT CARD) */}
      <div className="hero-content max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto text-left">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl flex flex-col justify-center"
        >
          {/* Logo & Branding Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[#F8F0E9] text-xs font-semibold tracking-widest uppercase mb-5 self-start shadow-md">
            <img
              src="/assets/aistudio/Gemini_Generated_Image_ngrixhngrixhngri_593f6bfe.png"
              alt="New Highway Chef Dhaba Logo"
              className="w-6 h-6 object-contain"
            />
            <span>NEW HIGHWAY CHEF DHABA · NH-31 RANGIA</span>
          </div>

          {/* Animated Bold Headline */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.1 }
              }
            }}
            className="mb-8"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
              }}
              className="block font-serif text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-[#E8C5BE] mb-2 italic"
            >
              Welcome to
            </motion.span>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 25, scale: 0.97 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[4.8rem] font-extrabold tracking-tight text-white leading-[1.06] uppercase [text-wrap:balance] drop-shadow-md"
            >
              New Highway <br />
              <span className="bg-gradient-to-r from-[#F8F0E9] via-[#E8C5BE] to-[#C97870] bg-clip-text text-transparent">
                Chef Dhaba
              </span>
            </motion.h1>
          </motion.div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenOrder}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#C97870] hover:bg-[#A65A52] text-[#FFFDFC] font-semibold text-xs sm:text-sm tracking-wide uppercase shadow-xl shadow-black/30 transition-all cursor-pointer border border-white/20"
            >
              <UtensilsCrossed className="w-4 h-4 text-[#FFFDFC]" />
              <span>Order Online</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onExploreMenu}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/25 font-semibold text-xs sm:text-sm tracking-wide uppercase shadow-md transition-all cursor-pointer"
            >
              <span>Explore Menu</span>
              <ArrowDown className="w-4 h-4 text-[#E8C5BE] group-hover:translate-y-0.5 transition-transform" />
            </motion.button>
          </div>

          {/* Proof Badges */}
          <div className="pt-6 border-t border-white/20 flex flex-wrap items-center gap-4 text-xs text-white/90">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center text-[#E8C5BE]">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#E8C5BE] text-[#E8C5BE]" />
                ))}
                <Star className="w-3.5 h-3.5 fill-[#E8C5BE]/40 text-[#E8C5BE]" />
              </div>
              <span className="font-serif font-bold text-white text-sm">3.8</span>
            </div>
            <span className="text-white/40">|</span>
            <span className="font-medium text-white/90">1,039 Google Reviews</span>
            <span className="text-white/40">|</span>
            <span className="font-semibold text-[#E8C5BE] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#E8C5BE]" />
              <span>Open Daily till 11:30 PM</span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* 4. SOFT CURVED TRANSITION INTO SURROUNDING SECTIONS */}
      <div className="w-full overflow-hidden leading-none -mb-1 text-[#F8F0E9] relative z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-10 md:h-16"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32 C240,90 480,110 720,70 C960,30 1200,90 1440,40 L1440,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};
