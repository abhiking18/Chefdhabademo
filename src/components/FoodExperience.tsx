import React from 'react';
import { Flame, Trees, Utensils } from 'lucide-react';

interface FoodExperienceProps {
  onOpenOrder: () => void;
}

export const FoodExperience: React.FC<FoodExperienceProps> = ({ onOpenOrder }) => {
  return (
    <section id="experience" className="relative py-20 sm:py-28 bg-[#424735] text-[#F2EBDD] overflow-hidden">
      
      {/* Subtle organic curved backdrop top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Editorial Highway Atmosphere */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D8CBB6] mb-3">
              <span className="w-6 h-[1.5px] bg-[#D8CBB6]" />
              <span>THE EVENING ATMOSPHERE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F2EBDD] leading-tight mb-4 [text-wrap:balance]">
              Highway Nights <br />
              <span className="italic font-normal text-[#D8CBB6]">Under Open Sky</span>
            </h2>

            <p className="text-base text-[#F2EBDD]/80 leading-relaxed mb-8 max-w-lg">
              As darkness settles along NH-31, the dhaba grounds come alive with warm hanging lantern light, the sound of sizzling cast-iron tawas, and children laughing on the courtyard swings.
            </p>

            {/* Two Key Ground Highlights (Minimalist) */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-[16px] bg-[#303426]/60 border border-[#D8CBB6]/20">
                <Flame className="w-5 h-5 text-[#98543D] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-base font-bold text-[#F2EBDD]">Clay Oven Embers</h3>
                  <p className="text-xs text-[#D8CBB6] mt-0.5 leading-relaxed">
                    Charcoal embers stay glowing into late night, churning out piping hot tandoori rotis (₹30) and butter naan (₹70).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-[16px] bg-[#303426]/60 border border-[#D8CBB6]/20">
                <Trees className="w-5 h-5 text-[#D8CBB6] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-base font-bold text-[#F2EBDD]">Kids' Swings & Bamboo Huts</h3>
                  <p className="text-xs text-[#D8CBB6] mt-0.5 leading-relaxed">
                    Spacious illuminated lawn with outdoor playground swings where families relax over hot chai and dinner.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenOrder}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#98543D] hover:bg-[#7C422F] text-[#F2EBDD] font-semibold text-xs sm:text-sm tracking-wide uppercase transition-all shadow-md cursor-pointer"
              >
                <span>Order For Dinner</span>
                <Utensils className="w-4 h-4 text-[#F2EBDD]" />
              </button>
            </div>

          </div>

          {/* Right Side: Real Night Playground Courtyard Photo */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            <div className="relative z-10 w-full max-w-[480px] rounded-[36px_16px_36px_16px] overflow-hidden border-4 border-[#D8CBB6]/30 shadow-2xl bg-[#302820] group">
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src="/assets/aistudio/unnamed__6__d17fa9e5.jpg"
                  alt="Evening courtyard with fairy lights, slides and swings at New Highway Chef Dhaba Rangia"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-4 bg-[#303426] border-t border-[#D8CBB6]/20 flex items-center justify-between">
                <div>
                  <p className="font-serif text-base font-bold text-[#F2EBDD]">Night Courtyard & Swings</p>
                  <p className="text-xs text-[#D8CBB6]">Safe play area for children & shaded huts</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#98543D] text-[#F2EBDD] text-xs font-semibold">
                  Rangia, NH-31
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
