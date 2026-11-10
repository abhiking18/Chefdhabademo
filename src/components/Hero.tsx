import React from 'react';
import { ArrowDown, UtensilsCrossed, Star } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import heroThaliImg from '../assets/images/hero_indian_thali_spread_1794314528671.jpg';

interface HeroProps {
  onOpenOrder: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder, onExploreMenu }) => {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-14 md:pt-32 md:pb-20 bg-[#F2EBDD] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Bold Short Headline & Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Minimalist Subheading */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#98543D] mb-4">
              <span className="w-6 h-[1.5px] bg-[#98543D]" />
              <span>NEW HIGHWAY CHEF DHABA · NH-31 RANGIA</span>
            </div>

            {/* Bold, Memorable Food-Related Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight text-[#302820] leading-[1.08] mb-5 [text-wrap:balance]">
              Pure Flavours. <br />
              <span className="font-normal italic text-[#98543D]">Roadside Soul.</span>
            </h1>

            {/* Single Short Description */}
            <p className="text-base sm:text-lg text-[#302820]/80 leading-relaxed max-w-lg mb-8">
              Slow-simmered thalis, fresh clay-tandoor rotis, and peaceful open-air dining along Assam's historic highway.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                onClick={onExploreMenu}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#302820] hover:bg-[#211A14] text-[#F2EBDD] font-semibold text-xs sm:text-sm tracking-wide uppercase shadow-sm transition-all duration-200 cursor-pointer"
              >
                <span>Explore Menu</span>
                <ArrowDown className="w-4 h-4 text-[#D8CBB6] group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenOrder}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#98543D] hover:bg-[#7C422F] text-[#F2EBDD] font-semibold text-xs sm:text-sm tracking-wide uppercase shadow-sm transition-all duration-200 cursor-pointer"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#F2EBDD]" />
                <span>Contact / Order</span>
              </button>
            </div>

            {/* Understated Meta Proof */}
            <div className="pt-6 border-t border-[#D8CBB6] flex flex-wrap items-center gap-4 text-xs text-[#302820]/75">
              <div className="flex items-center gap-1.5">
                <div className="flex items-center text-[#98543D]">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#98543D] text-[#98543D]" />
                  ))}
                  <Star className="w-3.5 h-3.5 fill-[#98543D]/30 text-[#98543D]" />
                </div>
                <span className="font-serif font-bold text-[#302820] text-sm">3.8</span>
              </div>
              <span className="text-[#D8CBB6]">|</span>
              <span>1,039 Google Reviews</span>
              <span className="text-[#D8CBB6]">|</span>
              <span className="font-semibold text-[#424735]">Open Daily till 11:30 PM</span>
            </div>

          </div>

          {/* Right Column: Large Authentic Indian Food Photograph in Organic Curved Frame */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center">
            
            {/* Natural Organic Shape Frame */}
            <div className="relative z-10 w-full max-w-[500px] shadow-2xl overflow-hidden rounded-[48px_16px_48px_16px] border-4 border-[#FAF6EE] bg-[#302820] group">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src={heroThaliImg}
                  alt="Authentic Indian Grand Thali feast at New Highway Chef Dhaba"
                  className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#302820]/75 via-transparent to-transparent pointer-events-none" />

                {/* Minimal Editorial Photo Tag */}
                <div className="absolute bottom-4 left-5 right-5 text-[#F2EBDD] pointer-events-none flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#D8CBB6] block mb-0.5">
                      House Specialty
                    </span>
                    <p className="font-serif text-lg font-bold leading-tight">
                      The Grand Highway Thali
                    </p>
                  </div>
                  <span className="text-xs font-serif font-semibold text-[#FAF6EE] bg-[#302820]/80 px-3 py-1 rounded-full border border-[#D8CBB6]/30">
                    From ₹120
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Organic Curved Bottom Transition */}
      <div className="w-full overflow-hidden leading-none mt-10 md:mt-14 -mb-1 text-[#D8CBB6]/40">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 md:h-12 fill-current"
        >
          <path d="M0,0 C300,70 900,70 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};
