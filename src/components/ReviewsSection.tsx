import React from 'react';
import { Star, MessageSquareQuote, ExternalLink, ShieldCheck, ThumbsUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-[#F5E9D5] overflow-hidden">
      
      {/* Curved Background Layers */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full bg-[#E7D5BB]/50 blur-3xl pointer-events-none"
      />
      
      {/* Decorative Large Saffron Arch Behind Content */}
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#D99035]/15 blur-2xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Curved Banner Lockup (Ivory & Maroon Dual Section) */}
        <div className="relative rounded-[60px_24px_60px_24px] overflow-hidden bg-gradient-to-br from-[#541E29] to-[#3E161E] text-[#F5E9D5] shadow-2xl border-4 border-[#E7D5BB]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Side: Real Metrics & Google Rating (5 cols on lg) */}
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-center text-center lg:items-start lg:text-left border-b lg:border-b-0 lg:border-r border-[#D99035]/25">
              
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D99035] mb-4">
                <ShieldCheck className="w-4 h-4 text-[#D99035]" />
                <span>OFFICIAL GOOGLE DATA</span>
              </div>

              {/* Big 3.8 / 5 Rating Display with Animated Stars */}
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-serif text-6xl sm:text-7xl font-bold text-[#F5E9D5] tracking-tight tabular-nums">
                  {RESTAURANT_INFO.rating}
                </span>
                <span className="text-2xl text-[#E7D5BB]/70 font-serif">/ 5</span>
              </div>

              {/* Animated Gold Stars */}
              <div className="flex items-center gap-1.5 text-[#D99035] mb-4">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-[#D99035] text-[#D99035] transition-transform duration-300 hover:scale-125"
                  />
                ))}
                <Star className="w-6 h-6 fill-[#D99035]/60 text-[#D99035]" />
              </div>

              <p className="font-serif text-lg font-bold text-[#F5E9D5]">
                {RESTAURANT_INFO.reviewCount} Verified Reviews
              </p>

              <p className="text-xs text-[#E7D5BB]/80 mt-1 mb-8 max-w-xs">
                Real customer ratings gathered from visitors, highway travelers and Rangia residents on Google Maps.
              </p>

              {/* Verified External Google Listing Link */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  'New Highway Chef Dhaba Rangia Assam'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D99035] text-[#34251F] font-semibold text-xs sm:text-sm hover:bg-[#F1A348] transition-all shadow-md transform hover:-translate-y-0.5"
              >
                <span>View Google Reviews</span>
                <ExternalLink className="w-4 h-4" />
              </a>

            </div>

            {/* Right Side: Editorial Context & Genuine Visitor Highlights (7 cols on lg) */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 bg-[#FAF4EB] text-[#34251F] flex flex-col justify-center h-full">
              
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C4A38] mb-3">
                <MessageSquareQuote className="w-4 h-4 text-[#D99035]" />
                <span>CUSTOMER REPUTATION</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#541E29] mb-4 leading-snug">
                Trusted by travelers across the Northeast highway.
              </h3>

              <p className="text-sm sm:text-base text-[#4A362D] leading-relaxed mb-6">
                With over one thousand ratings on Google, New Highway Chef Dhaba has established itself as an essential culinary rest stop in Rangia. Patrons regularly highlight the generous portions, hot tandoori breads baked fresh to order, and relaxing open-air family atmosphere.
              </p>

              {/* Key Feedback Highlights (Strict adherence to not inventing fictional review quotes) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-[#F5E9D5] border border-[#E7D5BB]">
                  <div className="flex items-center gap-2 text-[#541E29] font-bold text-sm mb-1">
                    <ThumbsUp className="w-4 h-4 text-[#D99035]" />
                    <span>Popular for Thalis</span>
                  </div>
                  <p className="text-xs text-[#4A362D]">
                    Frequently noted for fulfilling paneer, egg, and special vegetarian thali combinations.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F5E9D5] border border-[#E7D5BB]">
                  <div className="flex items-center gap-2 text-[#541E29] font-bold text-sm mb-1">
                    <ThumbsUp className="w-4 h-4 text-[#D99035]" />
                    <span>Late-Night Roadside Stop</span>
                  </div>
                  <p className="text-xs text-[#4A362D]">
                    Convenient highway stop open until 11:30 PM for dinner, tea, and quick meal refills.
                  </p>
                </div>
              </div>

              {/* Honest Demo Notice */}
              <div className="p-3.5 rounded-xl bg-[#E7D5BB]/50 border border-[#E7D5BB] text-[11px] text-[#8C4A38] leading-relaxed">
                <strong>Client Demo Notice:</strong> As per design standards, specific customer quotations will be linked directly to official Google Business Profile reviews once the designated listing URL is verified by restaurant management.
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
