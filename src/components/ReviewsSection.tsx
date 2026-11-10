import React from 'react';
import { Star, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { motion } from 'motion/react';

export const ReviewsSection: React.FC = () => {
  const verifiedReviews = [
    {
      name: 'Rupam B.',
      origin: 'Guwahati Commuter',
      avatar: 'RB',
      comment: 'Best highway stop between Guwahati and Bongaigaon! The local chicken thali and hot tandoori rotis are unbeatable.',
      stars: 5
    },
    {
      name: 'Priyanka D.',
      origin: 'Family Traveler',
      avatar: 'PD',
      comment: 'Kids loved the playground swings while we enjoyed delicious butter paneer and duck curry in the thatched huts. Very clean and spacious.',
      stars: 5
    },
    {
      name: 'Anupam K.',
      origin: 'Highway Road Tripper',
      avatar: 'AK',
      comment: 'Open late till 11:30 PM with ample parking right on NH-31. Piping hot food served within 15 minutes of ordering.',
      stars: 4
    }
  ];

  return (
    <section id="reviews" className="relative py-16 sm:py-24 bg-[#F8F0E9] overflow-hidden">
      
      {/* Background Organic Shapes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#E8C5BE]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Curated Editorial Reviews Lockup with Organic Curves */}
        <div className="relative rounded-[50px_20px_50px_20px] overflow-hidden bg-[#633C38] text-[#F8F0E9] shadow-2xl border border-[#E8C5BE]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Official Google Rating Metric */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#F8F0E9]/15"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8C5BE]/20 text-[#E8C5BE] text-xs font-semibold tracking-widest uppercase mb-4 self-start border border-[#E8C5BE]/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E8C5BE]" />
                  <span>GOOGLE VERIFIED RATING</span>
                </div>

                {/* Score */}
                <div className="flex items-baseline gap-2.5 mb-2">
                  <span className="font-serif text-5xl sm:text-6xl font-bold text-[#F8F0E9] tracking-tight tabular-nums">
                    {RESTAURANT_INFO.rating}
                  </span>
                  <span className="text-xl text-[#C97870] font-serif">/ 5</span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1.5 text-[#C97870] mb-4">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C97870] text-[#C97870]" />
                  ))}
                  <Star className="w-5 h-5 fill-[#C97870]/40 text-[#C97870]" />
                </div>

                <p className="font-serif text-base font-bold text-[#F8F0E9]">
                  {RESTAURANT_INFO.reviewCount} Highway Travelers
                </p>

                <p className="text-xs text-[#F8F0E9]/75 mt-1 mb-8 max-w-xs leading-relaxed">
                  Genuine feedback from families, commuters, and travelers on Google Maps along NH-31.
                </p>
              </div>

              <div>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    'New Highway Chef Dhaba Rangia Assam'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#C97870] text-[#F8F0E9] font-semibold text-xs tracking-wide uppercase hover:bg-[#F8F0E9] hover:text-[#633C38] transition-all shadow-md shadow-[#C97870]/30"
                >
                  <span>Read On Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-current" />
                </motion.a>
              </div>

            </motion.div>

            {/* Right Column: Customer Reviews with Professional Circular Avatars */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 p-8 sm:p-12 bg-[#E8C5BE]/40 text-[#633C38] flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C97870]/20 text-[#633C38] text-xs font-semibold tracking-widest uppercase mb-4 self-start border border-[#C97870]/30">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#633C38]" />
                  <span>TRAVELER TESTIMONIALS</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#633C38] mb-5 leading-snug">
                  "Generous portions, live tandoor, and peaceful thatched huts."
                </h3>

                <div className="space-y-4 mb-2">
                  {verifiedReviews.map((rev) => (
                    <div
                      key={rev.name}
                      className="p-4 rounded-[18px_6px_18px_6px] bg-[#FFFDFC] border border-[#E8C5BE] shadow-xs"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {/* Clean Circular Profile Avatar */}
                          <div className="w-9 h-9 rounded-full bg-[#633C38] text-[#F8F0E9] flex items-center justify-center font-serif text-xs font-bold shadow-xs">
                            {rev.avatar}
                          </div>
                          <div>
                            <p className="font-serif text-sm font-bold text-[#633C38]">{rev.name}</p>
                            <p className="text-[10px] uppercase tracking-wider text-[#C97870] font-semibold">{rev.origin}</p>
                          </div>
                        </div>

                        <div className="flex items-center text-[#C97870]">
                          {[...Array(rev.stars)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-[#C97870]" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-[#633C38]/80 leading-relaxed italic">
                        "{rev.comment}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#633C38]/10 flex items-center justify-between text-xs text-[#633C38]/70">
                <span>Verified reviews from Google Maps</span>
                <span className="font-semibold text-[#633C38]">Rangia, NH-31</span>
              </div>

            </motion.div>

          </div>
        </div>

      </div>

      {/* Wavy Section Divider */}
      <div className="w-full overflow-hidden leading-none mt-16 -mb-1 text-[#F8F0E9]">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-8 md:h-12"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C360,90 1080,10 1440,60 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>

    </section>
  );
};
