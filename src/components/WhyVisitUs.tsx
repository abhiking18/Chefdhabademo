import React from 'react';
import { Trees, Users, UtensilsCrossed, Sparkles } from 'lucide-react';

export const WhyVisitUs: React.FC = () => {
  const features = [
    {
      num: '01',
      title: 'Outdoor Seating',
      subtitle: 'Open-Air Highway Dining',
      description: 'Enjoy a relaxed dining experience in fresh open-air surroundings. Perfect for travelers taking a scenic breather along the Assam highway.',
      icon: Trees,
      bgShape: 'rounded-[40px_16px_40px_16px]',
      badgeColor: 'bg-[#541E29] text-[#F5E9D5]',
    },
    {
      num: '02',
      title: 'Family Friendly',
      subtitle: 'Comfort For All Generations',
      description: 'A welcoming place for family dining, with comfortable spacious seating and thoughtful kids’ menu selections suited for every age.',
      icon: Users,
      bgShape: 'rounded-[16px_40px_16px_40px]',
      badgeColor: 'bg-[#D99035] text-[#34251F]',
    },
    {
      num: '03',
      title: 'Hearty Indian Food',
      subtitle: 'Generous & Soulful Portions',
      description: 'Discover satisfying Indian meals and familiar flavours. Prepared with fresh local ingredients, genuine spices, and the timeless warmth of dhaba hospitality.',
      icon: UtensilsCrossed,
      bgShape: 'rounded-[32px_32px_16px_32px]',
      badgeColor: 'bg-[#3E161E] text-[#F5E9D5]',
    },
  ];

  return (
    <section id="why-visit" className="relative py-24 sm:py-32 bg-[#F5E9D5] overflow-hidden">
      
      {/* Decorative Oval Background Discs */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-[#E7D5BB]/60 blur-2xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -top-12 -left-12 w-96 h-96 rounded-full bg-[#D99035]/10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-[#541E29] mb-3">
            <Sparkles className="w-4 h-4 text-[#D99035]" />
            <span>THE DHABA EXPERIENCE</span>
            <Sparkles className="w-4 h-4 text-[#D99035]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#541E29] mb-4 [text-wrap:balance]">
            Why Travelers & Families Choose Us
          </h2>

          <p className="text-base sm:text-lg text-[#4A362D]">
            Crafted for unforgettable comfort, fresh flavors, and relaxed roadside memories in Rangia.
          </p>
        </div>

        {/* Three Distinct Premium Blocks with Circular Icon Containers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.num}
                className={`group relative bg-[#FAF4EB] ${feature.bgShape} p-8 sm:p-9 border border-[#E7D5BB] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}
              >
                <div>
                  {/* Top Row: Circular Icon Container + Editorial Number */}
                  <div className="flex items-center justify-between mb-8">
                    {/* Elegant Circular Icon Container */}
                    <div className="w-16 h-16 rounded-full bg-[#F5E9D5] border-2 border-[#D99035]/40 flex items-center justify-center text-[#541E29] shadow-inner group-hover:scale-110 group-hover:bg-[#541E29] group-hover:text-[#F5E9D5] transition-all duration-300">
                      <Icon className="w-7 h-7 text-[#D99035] group-hover:text-[#F5E9D5] transition-colors" />
                    </div>

                    {/* Editorial Number Badge */}
                    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider font-mono ${feature.badgeColor} shadow-sm`}>
                      {feature.num}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <p className="text-xs uppercase tracking-widest font-bold text-[#8C4A38] mb-1">
                    {feature.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-[#541E29] group-hover:text-[#D99035] transition-colors mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#4A362D] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Decorative Touch */}
                <div className="pt-6 mt-6 border-t border-[#E7D5BB]/60 flex items-center justify-between">
                  <span className="text-[11px] text-[#8C4A38] font-medium">Authentic Indian Flavours</span>
                  <div className="w-2 h-2 rounded-full bg-[#D99035]" />
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
