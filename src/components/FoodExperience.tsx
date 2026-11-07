import React from 'react';
import { Sparkles, Utensils, Award, ChefHat } from 'lucide-react';

interface FoodExperienceProps {
  onOpenOrder: () => void;
}

export const FoodExperience: React.FC<FoodExperienceProps> = ({ onOpenOrder }) => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#541E29] text-[#F5E9D5] overflow-hidden">
      
      {/* Decorative Organic Shapes & Saffron Rings */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -right-28 w-96 h-96 rounded-full bg-[#D99035]/15 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-[#3E161E] pointer-events-none"
      />
      
      {/* Floating Decorative Gold Circle Outline */}
      <div
        aria-hidden="true"
        className="absolute top-10 left-1/3 w-64 h-64 rounded-full border border-[#D99035]/30 pointer-events-none hidden md:block"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Editorial Typography & Dhaba Experience Pillars (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-[#D99035] mb-4">
              <Sparkles className="w-4 h-4 text-[#D99035]" />
              <span>THE SENSORY DHABA JOURNEY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5E9D5] leading-[1.12] mb-6 [text-wrap:balance]">
              Every Plate <br />
              <span className="italic font-normal text-[#D99035]">Has A Story</span>
            </h2>

            <p className="text-base sm:text-lg text-[#E7D5BB] leading-relaxed mb-8 max-w-xl">
              From the crackle of freshly ignited charcoal in our clay tandoor to the rich, slow-simmered aromas of roasted coriander and whole cloves, our cooking celebrates the unhurried spirit of genuine Indian roadside culture.
            </p>

            {/* Three Experience Highlights */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#3E161E]/60 border border-[#D99035]/20 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-[#D99035] text-[#34251F] flex items-center justify-center shrink-0 font-bold shadow-md">
                  <ChefHat className="w-5 h-5 text-[#34251F]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#F5E9D5]">Hand-Ground Masalas</h3>
                  <p className="text-xs text-[#E7D5BB]/90 leading-relaxed mt-0.5">
                    Spices dry-roasted and pounded in-house to release deep, earthy highway aroma.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#3E161E]/60 border border-[#D99035]/20 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-[#D99035] text-[#34251F] flex items-center justify-center shrink-0 font-bold shadow-md">
                  <Utensils className="w-5 h-5 text-[#34251F]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#F5E9D5]">Simmered for Hours</h3>
                  <p className="text-xs text-[#E7D5BB]/90 leading-relaxed mt-0.5">
                    Dals and rustic curries gently reduced on slow embers for rich, velvety body.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenOrder}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#D99035] text-[#34251F] font-semibold text-base shadow-lg hover:bg-[#F1A348] transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Taste The Tradition</span>
                <span className="w-2 h-2 rounded-full bg-[#34251F]" />
              </button>
            </div>

          </div>

          {/* Right Side: Oversized Curved Image Frame with Steaming Feast Macro Shot (6 cols) */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Oversized Curved Organic Frame with Soft Parallax Shadow */}
            <div className="relative z-10 w-full max-w-[480px] rounded-[60px_20px_60px_20px] overflow-hidden border-[6px] border-[#D99035]/40 shadow-2xl bg-[#34251F] group">
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src="/src/assets/images/experience_thali_macro_1794045110742.jpg"
                  alt="Steaming butter naan dipped into rich dhaba gravy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-5 bg-[#3E161E] border-t border-[#D99035]/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-serif text-lg font-bold text-[#F5E9D5]">Tandoor & Gravy Harmony</p>
                    <p className="text-xs text-[#E7D5BB]">Charred butter naan paired with slow-cooked gravies</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#D99035] text-[#34251F] text-xs font-bold">
                    Rangia
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Saffron Accent Disc */}
            <div
              aria-hidden="true"
              className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#D99035]/80 blur-xl pointer-events-none"
            />

            {/* Floating Editorial Quote Tag */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:left-4 z-20 bg-[#F5E9D5] text-[#541E29] p-4 rounded-2xl shadow-2xl border border-[#E7D5BB] max-w-[240px]">
              <p className="font-serif italic text-xs leading-snug">
                "Real highway food isn't fast food — it's patient, hearty and full of soul."
              </p>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
