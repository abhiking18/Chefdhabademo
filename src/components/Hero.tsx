import React from 'react';
import { Star, ArrowDown, UtensilsCrossed, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenOrder: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder, onExploreMenu }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F5E9D5] via-[#FAF4EB] to-[#F5E9D5]"
    >
      {/* Decorative Organic Background Curves */}
      <div
        aria-hidden="true"
        className="absolute top-12 -left-24 w-96 h-96 rounded-full bg-[#E7D5BB]/40 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-20 w-[480px] h-[480px] rounded-full bg-[#D99035]/15 blur-3xl pointer-events-none"
      />
      
      {/* Large Decorative Saffron Ring Outline */}
      <div
        aria-hidden="true"
        className="absolute -top-10 right-1/4 w-[500px] h-[500px] rounded-full border border-[#D99035]/25 pointer-events-none hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[680px]">
          
          {/* Left Column: Text & Editorial Content (7 cols on lg) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left">
            
            {/* Small uppercase label without pill badge clutter */}
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-[#541E29] mb-4">
              <span className="w-6 h-[2px] bg-[#D99035]" />
              <span>{RESTAURANT_INFO.sublabel}</span>
            </div>

            {/* Main Editorial Serif Heading with balanced wrapping */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-[#541E29] leading-[1.08] mb-6 [text-wrap:balance]">
              Good Food. <br />
              <span className="text-[#34251F] font-normal italic">The Dhaba Way.</span>
            </h1>

            {/* Editorial Description */}
            <p className="text-base sm:text-lg md:text-xl text-[#4A362D] font-normal leading-relaxed max-w-xl mb-9">
              Bringing people together over delicious food, hearty meals and the warmth of authentic Indian hospitality on the highway in Rangia.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExploreMenu}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#541E29] hover:bg-[#3E161E] text-[#F5E9D5] font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Our Menu</span>
                <ArrowDown className="w-4 h-4 text-[#D99035] group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenOrder}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#541E29] text-[#541E29] hover:bg-[#541E29] hover:text-[#F5E9D5] font-semibold text-sm sm:text-base transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#D99035]" />
                <span>Order Now</span>
              </button>
            </div>

            {/* Adjacency Proof: Real Google Reviews & Key DHABA Highlights */}
            <div className="pt-6 border-t border-[#E7D5BB] flex flex-wrap items-center gap-6 text-sm text-[#4A362D]">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center text-[#D99035]">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D99035] text-[#D99035]" />
                  ))}
                  <Star className="w-4 h-4 fill-[#D99035]/60 text-[#D99035]" />
                </div>
                <div className="flex items-baseline gap-1.5 font-medium">
                  <span className="font-bold text-[#541E29] text-base">{RESTAURANT_INFO.rating}</span>
                  <span className="text-xs text-[#4A362D]/80">· {RESTAURANT_INFO.reviewCount} Google Reviews</span>
                </div>
              </div>

              <a
                href="#gallery"
                className="inline-flex items-center gap-2 text-xs text-[#541E29] font-bold hover:text-[#D99035] transition-colors bg-[#FAF4EB] py-1.5 px-3 rounded-full border border-[#E7D5BB] shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                <span>See Real Dhaba Premises & Thatched Cabins →</span>
              </a>
            </div>

          </div>

          {/* Right Column: Oversized Curved Arch Frame with Food Photography (6 cols on lg) */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end items-center">
            
            {/* Large Decorative Saffron Circle Partially Behind the Image */}
            <div
              aria-hidden="true"
              className="absolute -top-6 -right-6 sm:-top-10 sm:-right-8 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-[#D99035] opacity-85 shadow-2xl transition-transform duration-700 hover:scale-105"
            />

            {/* Secondary warm maroon curved backdrop disc */}
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -left-6 sm:-bottom-12 sm:-left-8 w-44 h-44 sm:w-60 sm:h-60 rounded-full bg-[#541E29] opacity-90 shadow-xl"
            />

            {/* Oversized Arch-Shaped Food Image Frame */}
            <div className="relative z-10 w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[490px] shadow-2xl overflow-hidden rounded-t-[220px] rounded-b-[40px] border-[6px] border-[#F5E9D5] bg-[#34251F]">
              <div className="relative aspect-[3/4] overflow-hidden group">
                <img
                  src="/src/assets/images/hero_indian_thali_1794045107833.jpg"
                  alt="Authentic traditional Indian royal thali spread at New Highway Chef Dhaba"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle Gradient Scrim at Bottom of Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#34251F]/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-6 right-6 text-[#F5E9D5] pointer-events-none">
                  <p className="font-serif text-lg font-bold tracking-wide">Signature Grand Thali</p>
                  <p className="text-xs text-[#E7D5BB]">Authentic brass spread · Slow-simmered perfection</p>
                </div>
              </div>
            </div>

            {/* Floating Circular Rating Badge */}
            <div className="absolute -bottom-4 left-4 sm:-bottom-6 sm:left-6 z-20 bg-[#F5E9D5] text-[#541E29] px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl shadow-xl border border-[#E7D5BB] flex items-center gap-3 backdrop-blur-md">
              <div className="w-10 h-10 rounded-full bg-[#541E29] text-[#D99035] flex items-center justify-center font-bold text-sm shadow-inner">
                3.8★
              </div>
              <div>
                <p className="text-xs uppercase font-bold tracking-wider text-[#541E29]">
                  {RESTAURANT_INFO.reviewCount} Reviews
                </p>
                <p className="text-[11px] text-[#4A362D]/80">Google Verified Rating</p>
              </div>
            </div>

            {/* Subtle Decorative Circular Rotating Stamp: MADE FOR FOOD LOVERS */}
            <div className="absolute -top-6 -left-4 sm:-top-8 sm:-left-8 z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FAF4EB] border-2 border-[#D99035] shadow-lg flex items-center justify-center text-[#541E29] select-none pointer-events-none">
              <div className="relative w-full h-full flex items-center justify-center animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                    fill="none"
                  />
                  <text className="text-[9px] font-bold tracking-[2px] uppercase fill-[#541E29]">
                    <textPath href="#circlePath" startOffset="0%">
                      · MADE FOR FOOD LOVERS · DHABA TASTE
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="absolute flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#D99035]" />
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Smooth Wavy Section Boundary into Our Story */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-20 text-[#FAF4EB] preserve-3d"
        >
          <path
            d="M0,32 C280,75 520,5 820,45 C1120,85 1320,20 1440,32 L1440,80 L0,80 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};
