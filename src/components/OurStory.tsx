import React from 'react';
import { HeartHandshake, Flame, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="relative py-24 sm:py-32 bg-[#FAF4EB] overflow-hidden">
      
      {/* Decorative organic curved shapes in background */}
      <div
        aria-hidden="true"
        className="absolute top-10 right-0 w-[420px] h-[420px] rounded-full bg-[#E7D5BB]/50 blur-2xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-[#541E29]/5 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetrical Composition with Overlapping Arched & Circular Images (6 cols) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            
            {/* Curved Decorative Backdrop Container */}
            <div
              aria-hidden="true"
              className="absolute -top-6 -left-4 w-72 sm:w-80 h-96 rounded-[80px_24px_80px_24px] bg-[#E7D5BB]/60 -rotate-3 transition-transform duration-500 hover:rotate-0"
            />

            {/* Main Arched Food Photograph */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] shadow-xl overflow-hidden rounded-t-[180px] rounded-b-[28px] border-4 border-[#F5E9D5] bg-[#34251F]">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/src/assets/images/dish_paneer_thali_1794045107967.jpg"
                  alt="Authentic Indian meals at New Highway Chef Dhaba"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-[#541E29] text-[#F5E9D5] text-center">
                <p className="font-serif text-sm font-semibold tracking-wide">Hearty Dhaba Meals</p>
                <p className="text-[11px] text-[#E7D5BB]">Prepared fresh for highway travelers & local families</p>
              </div>
            </div>

            {/* Smaller Overlapping Circular Image (Live Kitchen Craft) */}
            <div className="absolute -bottom-8 -right-2 sm:-bottom-10 sm:right-4 z-20 w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-[#F5E9D5] bg-[#34251F] group">
              <img
                src="/src/assets/images/gallery_dhaba_kitchen_1794045111326.jpg"
                alt="Clay tandoor and live culinary craft at dhaba"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-3">
                <span className="text-[11px] font-semibold text-[#F5E9D5] tracking-wider uppercase bg-[#541E29]/80 px-2.5 py-0.5 rounded-full">
                  Live Clay Tandoor
                </span>
              </div>
            </div>

            {/* Decorative Floating Saffron Accent Pill */}
            <div className="absolute top-8 right-2 sm:right-6 z-20 bg-[#D99035] text-[#34251F] px-4 py-2 rounded-full font-bold text-xs shadow-lg uppercase tracking-wider">
              Rangia, Assam
            </div>

          </div>

          {/* Right Column: Editorial Text & Values (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-[#541E29] mb-3">
              <span className="w-5 h-[2px] bg-[#D99035]" />
              <span>OUR TRADITION & VALUES</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#541E29] leading-tight mb-6 [text-wrap:balance]">
              More Than A Meal. <br />
              <span className="text-[#34251F] font-normal italic">It's A Tradition.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#4A362D] leading-relaxed mb-6">
              At New Highway Chef Dhaba, every meal brings together the comfort of familiar Indian flavours and the joy of sharing good food.
            </p>

            <p className="text-sm sm:text-base text-[#4A362D]/90 leading-relaxed mb-8">
              Conveniently located along the vibrant highway in Rangia, Assam, our kitchen is dedicated to serving hearty portions, uncompromised warmth, and the authentic dhaba culinary spirit. Whether stopping during a long drive or gathering with family for an evening dinner, we believe in honest hospitality, sizzling tandoori breads, and comforting gravies that satisfy both hunger and soul.
            </p>

            {/* Three Editorial Principle Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-[#E7D5BB]">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-2xl bg-[#541E29]/10 text-[#541E29] flex items-center justify-center">
                  <Flame className="w-5 h-5 text-[#D99035]" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#541E29]">Tandoori Fresh</h3>
                <p className="text-xs text-[#4A362D]/80 leading-relaxed">
                  Hot rotis & naans baked straight from the clay pit.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-2xl bg-[#541E29]/10 text-[#541E29] flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5 text-[#D99035]" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#541E29]">Warm Welcome</h3>
                <p className="text-xs text-[#4A362D]/80 leading-relaxed">
                  Relaxed, friendly roadside dining for every traveler.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-2xl bg-[#541E29]/10 text-[#541E29] flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#D99035]" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#541E29]">Late Dining</h3>
                <p className="text-xs text-[#4A362D]/80 leading-relaxed">
                  Open till 11:30 PM for satisfying late-night meals.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Smooth Wavy Transition to Signature Food */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 text-[#F5E9D5]"
        >
          <path
            d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
      </div>

    </section>
  );
};
