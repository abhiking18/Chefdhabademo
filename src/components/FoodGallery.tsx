import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2, Camera, CheckCircle2, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';

export const FoodGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All Photos');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const filterTabs = [
    'All Photos',
    'Restaurant Ambience',
    'Outdoor Dining',
    'Interior & Cabins',
    'Signature Foods',
    'Kitchen Craft'
  ];

  const visibleItems = useMemo(() => {
    if (activeFilter === 'All Photos') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowRight') {
        setSelectedIdx((prev) => (prev !== null ? (prev + 1) % visibleItems.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIdx((prev) =>
          prev !== null ? (prev - 1 + visibleItems.length) % visibleItems.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, visibleItems]);

  const activeItem = selectedIdx !== null ? visibleItems[selectedIdx] : null;

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#FAF4EB] overflow-hidden">
      
      {/* Decorative Background Discs */}
      <div
        aria-hidden="true"
        className="absolute top-20 left-10 w-80 h-80 rounded-full bg-[#E7D5BB]/50 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#D99035]/10 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-[#541E29] mb-3">
            <Camera className="w-4 h-4 text-[#D99035]" />
            <span>REAL RESTAURANT PHOTOGRAPHY & CULINARY CRAFT</span>
            <Camera className="w-4 h-4 text-[#D99035]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#541E29] mb-4 [text-wrap:balance]">
            Experience New Highway Chef Dhaba
          </h2>

          <p className="text-base sm:text-lg text-[#4A362D]">
            Explore our authentic highway premises in Rangia — traditional thatched cabins, two-story bamboo machan, welcoming indoor hall, and delicious food.
          </p>

          <div className="mt-3 inline-flex items-center gap-2 text-xs text-[#2E7D32] bg-[#E8F5E9] px-4 py-1.5 rounded-full border border-[#C8E6C9] font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
            <span>Authentic photographs of the restaurant premises & culinary creations</span>
          </div>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveFilter(tab);
                setSelectedIdx(null);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === tab
                  ? 'bg-[#541E29] text-[#F5E9D5] shadow-md transform -translate-y-0.5'
                  : 'bg-[#F5E9D5] text-[#4A362D] hover:bg-[#E7D5BB] hover:text-[#541E29] border border-[#E7D5BB]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Curved Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {visibleItems.map((item, idx) => {
            // Apply unique organic corner curvatures across cards
            const cornerStyles = [
              'rounded-[40px_16px_40px_16px]',
              'rounded-t-[180px] rounded-b-[24px]',
              'rounded-[16px_40px_16px_40px]',
              'rounded-[24px_50px_24px_24px]',
              'rounded-[40px_20px_40px_20px]',
              'rounded-[20px_40px_20px_40px]'
            ];
            const currentCorner = cornerStyles[idx % cornerStyles.length];

            return (
              <div
                key={item.id}
                onClick={() => setSelectedIdx(idx)}
                className={`group relative cursor-pointer overflow-hidden ${currentCorner} border-4 border-[#F5E9D5] bg-[#34251F] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}
              >
                {/* Photo Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black/30">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#F5E9D5] bg-[#541E29]/90 backdrop-blur-md px-3 py-1 rounded-full shadow">
                      {item.category}
                    </span>

                    {item.isRealPhoto ? (
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#34251F] bg-[#D99035] px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-[#34251F]" />
                        <span>Rangia Dhaba</span>
                      </span>
                    ) : (
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#F5E9D5] bg-[#3E161E]/90 px-2.5 py-1 rounded-full shadow">
                        Menu Food
                      </span>
                    )}
                  </div>

                  {/* Hover Magnify Button */}
                  <div className="absolute bottom-4 right-4 p-2.5 rounded-full bg-[#D99035] text-[#34251F] shadow-lg transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Details Footer */}
                <div className="p-5 bg-[#FAF4EB] text-[#34251F] border-t border-[#E7D5BB]">
                  <h3 className="font-serif text-lg font-bold text-[#541E29] group-hover:text-[#D99035] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4A362D] mt-1.5 leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-[#E7D5BB]/60 flex items-center justify-between text-[11px] text-[#8C4A38]">
                    <span>Click to view in detail</span>
                    <span className="font-bold">Photo {idx + 1}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && activeItem && (
        <div
          onClick={() => setSelectedIdx(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-[#541E29] text-[#F5E9D5] hover:bg-[#D99035] hover:text-[#34251F] transition-colors focus:outline-none focus:ring-2 focus:ring-white shadow-xl"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((selectedIdx - 1 + visibleItems.length) % visibleItems.length);
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-[#541E29]/80 text-[#F5E9D5] hover:bg-[#D99035] hover:text-[#34251F] transition-colors focus:outline-none shadow-xl"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((selectedIdx + 1) % visibleItems.length);
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-[#541E29]/80 text-[#F5E9D5] hover:bg-[#D99035] hover:text-[#34251F] transition-colors focus:outline-none shadow-xl"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Lightbox Content Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#34251F] rounded-3xl overflow-hidden border-2 border-[#D99035]/40 shadow-2xl flex flex-col max-h-[92vh]"
          >
            {/* Image Frame */}
            <div className="relative flex-1 overflow-hidden flex items-center justify-center bg-black/60 p-2 sm:p-4">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[66vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Bottom Caption & Controls */}
            <div className="p-6 bg-[#FAF4EB] text-[#34251F] border-t border-[#E7D5BB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#8C4A38]">
                    {activeItem.category} · Photo {selectedIdx + 1} of {visibleItems.length}
                  </span>
                  {activeItem.isRealPhoto && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#D99035] text-[#34251F]">
                      Verified Restaurant Photo
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#541E29]">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-[#4A362D] mt-1.5 leading-relaxed">
                  {activeItem.caption}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
                <span className="text-xs text-[#8C4A38] bg-[#E7D5BB]/60 px-3.5 py-1.5 rounded-full font-medium">
                  Use ← → keys to browse
                </span>
              </div>
            </div>
          </div>

        </div>
      )}

    </section>
  );
};
