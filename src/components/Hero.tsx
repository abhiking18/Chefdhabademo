import React from 'react';
import { Star, ArrowDown, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenOrder: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder, onExploreMenu }) => {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-[#FAF6F0] via-[#FAF6F0] to-[#F3ECE1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clean Editorial Typography */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C4A38] mb-3">
              <span className="w-5 h-[2px] bg-[#C9822C]" />
              <span>NH-31 · RANGIA, ASSAM</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#4F1824] leading-[1.1] mb-4 [text-wrap:balance]">
              Good Food. <br />
              <span className="text-[#241814] font-normal italic">The Dhaba Way.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#44332B] leading-relaxed max-w-lg mb-6">
              Hearty Indian thalis, fresh clay tandoor breads, open-air thatched huts & genuine roadside hospitality.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-7">
              <button
                onClick={onExploreMenu}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4F1824] hover:bg-[#381119] text-[#FAF6F0] font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>View Menu</span>
                <ArrowDown className="w-4 h-4 text-[#C9822C] group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenOrder}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#4F1824] text-[#4F1824] hover:bg-[#4F1824] hover:text-[#FAF6F0] font-semibold text-sm transition-all duration-200 cursor-pointer"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#C9822C]" />
                <span>Order Online</span>
              </button>
            </div>

            {/* Clean Rating Proof (No Emojis, No Filler) */}
            <div className="pt-5 border-t border-[#E5D9C8] flex items-center gap-4 text-xs sm:text-sm text-[#44332B]">
              <div className="flex items-center gap-1.5">
                <div className="flex items-center text-[#C9822C]">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9822C] text-[#C9822C]" />
                  ))}
                  <Star className="w-4 h-4 fill-[#C9822C]/40 text-[#C9822C]" />
                </div>
                <span className="font-bold text-[#4F1824] text-base">{RESTAURANT_INFO.rating}</span>
              </div>
              <span className="text-[#8C4A38]">·</span>
              <span className="text-[#44332B] font-medium">{RESTAURANT_INFO.reviewCount} Reviews on Google</span>
              <span className="text-[#8C4A38]">·</span>
              <span className="text-[#2D6A4F] font-semibold">Open Daily till 11:30 PM</span>
            </div>

          </div>

          {/* Right Column: Clean Arched Photograph Frame (Real Dining Hall) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center">
            
            {/* Elegant Arched Frame */}
            <div className="relative z-10 w-full max-w-[400px] sm:max-w-[440px] shadow-xl overflow-hidden rounded-t-[200px] rounded-b-[32px] border-4 border-[#FFFFFF] bg-[#241814]">
              <div className="relative aspect-[4/5] overflow-hidden group">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_3.23.01_PM_d59002d0.jpeg"
                  alt="Dining hall at New Highway Chef Dhaba Rangia"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241814]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-5 right-5 text-[#FAF6F0] pointer-events-none">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-[#C9822C] text-[#241814] px-2.5 py-0.5 rounded-full mb-1">
                    Main Dining Hall
                  </span>
                  <p className="font-serif text-lg font-bold">New Highway Chef Dhaba</p>
                  <p className="text-xs text-[#E5D9C8]">Rangia Highway, NH-31, Assam</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
