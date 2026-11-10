import React from 'react';
import { Flame, Trees, Utensils } from 'lucide-react';

interface FoodExperienceProps {
  onOpenOrder: () => void;
}

export const FoodExperience: React.FC<FoodExperienceProps> = ({ onOpenOrder }) => {
  return (
    <section className="relative py-14 sm:py-18 bg-[#4F1824] text-[#FAF6F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Short Punchy Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C9822C] mb-2">
              <span className="w-5 h-[2px] bg-[#C9822C]" />
              <span>OPEN-AIR EVENINGS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF6F0] leading-tight mb-3 [text-wrap:balance]">
              Dhaba Nights <br />
              <span className="italic font-normal text-[#C9822C]">Under Open Sky</span>
            </h2>

            <p className="text-sm sm:text-base text-[#E5D9C8] leading-relaxed mb-6 max-w-lg">
              Fresh air, glowing fairy lights, and live charcoal tandoor aromas in our open garden and bamboo huts.
            </p>

            {/* Experience Highlights */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#381119]/80 border border-[#C9822C]/20">
                <div className="w-8 h-8 rounded-lg bg-[#C9822C] text-[#241814] flex items-center justify-center shrink-0 font-bold shadow-sm">
                  <Flame className="w-4 h-4 text-[#241814]" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#FAF6F0]">Live Charcoal Tandoor</h3>
                  <p className="text-xs text-[#E5D9C8] mt-0.5">
                    Rotis (₹30) & Naans (₹70) baked fresh straight to your table.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#381119]/80 border border-[#C9822C]/20">
                <div className="w-8 h-8 rounded-lg bg-[#C9822C] text-[#241814] flex items-center justify-center shrink-0 font-bold shadow-sm">
                  <Trees className="w-4 h-4 text-[#241814]" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#FAF6F0]">Night Garden & Play Area</h3>
                  <p className="text-xs text-[#E5D9C8] mt-0.5">
                    Illuminated trees, playground swings for kids, and bamboo gazebos for families.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenOrder}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C9822C] text-[#241814] font-semibold text-xs sm:text-sm shadow-md hover:bg-[#E09439] transition-all cursor-pointer"
              >
                <span>Order Your Meal</span>
                <Utensils className="w-3.5 h-3.5 text-[#241814]" />
              </button>
            </div>

          </div>

          {/* Right Side: Real Night Playground Courtyard Photo */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            <div className="relative z-10 w-full max-w-[440px] rounded-[36px_16px_36px_16px] overflow-hidden border-4 border-[#C9822C]/30 shadow-xl bg-[#241814] group">
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src="/assets/aistudio/unnamed__6__d17fa9e5.jpg"
                  alt="Evening courtyard with fairy lights, slides and swings at New Highway Chef Dhaba Rangia"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-3.5 bg-[#381119] border-t border-[#C9822C]/20 flex items-center justify-between">
                <div>
                  <p className="font-serif text-sm font-bold text-[#FAF6F0]">Night Garden Courtyard</p>
                  <p className="text-[11px] text-[#E5D9C8]">Playground swings & open-air dining</p>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#C9822C] text-[#241814] text-[11px] font-bold">
                  NH-31 Rangia
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
