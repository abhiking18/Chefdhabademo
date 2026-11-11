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
    <section id="reviews" className="relative py-20 sm:py-28 bg-[#F8F0E9] text-[#633C38] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Curated Reviews Lockup */}
        <div className="relative rounded-3xl overflow-hidden bg-[#FFFDFC] text-[#633C38] shadow-md border border-[#E8C5BE]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Official Google Rating Metric */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E8C5BE] bg-[#F8F0E9]/50"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFDFC] border border-[#E8C5BE] text-[#C97870] text-xs font-bold tracking-widest uppercase mb-6">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C97870]" />
                  <span>GOOGLE VERIFIED RATING</span>
                </div>

                {/* Score */}
                <div className="flex items-baseline gap-2.5 mb-2">
                  <span className="text-5xl sm:text-6xl font-extrabold text-[#633C38] tracking-tight tabular-nums">
                    {RESTAURANT_INFO.rating}
                  </span>
                  <span className="text-xl text-[#C97870] font-bold">/ 5.0</span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1.5 text-[#C97870] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C97870] text-[#C97870]" />
                  ))}
                </div>

                <p className="text-base font-bold text-[#633C38]">
                  {RESTAURANT_INFO.reviewCount} Highway Travelers
                </p>

                <p className="text-xs text-[#8C5752] mt-1 mb-8 max-w-xs leading-relaxed">
                  Genuine feedback from families, commuters, and travelers on Google Maps along NH-31.
                </p>
              </div>

              <div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    'New Highway Chef Dhaba Rangia Assam'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#C97870] text-[#FFFDFC] font-bold text-xs tracking-wide uppercase hover:bg-[#b5655d] transition-all shadow-md"
                >
                  <span>Read On Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-current" />
                </a>
              </div>

            </motion.div>

            {/* Right Column: Customer Reviews */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 p-8 sm:p-12 bg-[#FFFDFC] text-[#633C38] flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F0E9] border border-[#E8C5BE] text-[#C97870] text-xs font-bold tracking-widest uppercase mb-4">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C97870]" />
                  <span>TRAVELER TESTIMONIALS</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#633C38] mb-6 leading-snug">
                  "Generous portions, live tandoor, and peaceful thatched huts."
                </h3>

                <div className="space-y-4 mb-2">
                  {verifiedReviews.map((rev) => (
                    <div
                      key={rev.name}
                      className="p-5 rounded-2xl bg-[#F8F0E9] border border-[#E8C5BE] hover:border-[#C97870] transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {/* Circular Avatar */}
                          <div className="w-9 h-9 rounded-full bg-[#C97870] text-[#FFFDFC] flex items-center justify-center text-xs font-bold shadow-sm">
                            {rev.avatar}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-[#633C38]">{rev.name}</p>
                            <p className="text-[10px] uppercase font-bold text-[#C97870]">{rev.origin}</p>
                          </div>
                        </div>

                        <div className="flex items-center text-[#C97870]">
                          {[...Array(rev.stars)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#C97870]" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-[#8C5752] leading-relaxed italic">
                        "{rev.comment}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E8C5BE] flex items-center justify-between text-xs text-[#8C5752] font-semibold">
                <span>Verified reviews from Google Maps</span>
                <span className="text-[#633C38]">Rangia, NH-31</span>
              </div>

            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
