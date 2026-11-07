import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2, Sparkles, Camera } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';

export const FoodGallery: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowRight') {
        setSelectedIdx((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIdx((prev) =>
          prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  const activeItem = selectedIdx !== null ? GALLERY_ITEMS[selectedIdx] : null;

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
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-[#541E29] mb-3">
            <Camera className="w-4 h-4 text-[#D99035]" />
            <span>CULINARY GALLERY</span>
            <Camera className="w-4 h-4 text-[#D99035]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#541E29] mb-4 [text-wrap:balance]">
            From Our Tandoor To Your Table
          </h2>

          <p className="text-base sm:text-lg text-[#4A362D]">
            A visual glimpse into our hearty recipes, smoky tandoor embers, and authentic culinary heritage. Click any image to view in detail.
          </p>

          <p className="mt-2 text-xs text-[#8C4A38]">
            Editable gallery showcase · Real restaurant photos can be updated in one click
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* 1. Oversized Arch Image (6 cols on md) */}
          <div className="md:col-span-6 relative">
            <div
              onClick={() => setSelectedIdx(0)}
              className="group relative cursor-pointer overflow-hidden rounded-t-[180px] rounded-b-[32px] border-4 border-[#F5E9D5] bg-[#34251F] shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={GALLERY_ITEMS[0].image}
                  alt={GALLERY_ITEMS[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Scrim Overlay & Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-[#F5E9D5]">
                <span className="text-xs uppercase font-semibold text-[#D99035] tracking-wider mb-1">
                  {GALLERY_ITEMS[0].category}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    {GALLERY_ITEMS[0].title}
                  </h3>
                  <div className="p-2 rounded-full bg-[#D99035] text-[#34251F] shadow">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Grid: 2 smaller oval + 1 tall (6 cols on md) */}
          <div className="md:col-span-6 flex flex-col gap-6 sm:gap-8">
            
            {/* Row of 2 Oval / Curved items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Item 2: Kitchen Craft (Oval frame) */}
              <div
                onClick={() => setSelectedIdx(1)}
                className="group relative cursor-pointer overflow-hidden rounded-[40px_16px_40px_16px] border-4 border-[#F5E9D5] bg-[#34251F] shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={GALLERY_ITEMS[1].image}
                    alt={GALLERY_ITEMS[1].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4 text-[#F5E9D5]">
                  <p className="font-serif text-base font-bold">{GALLERY_ITEMS[1].title}</p>
                  <p className="text-[11px] text-[#E7D5BB]">{GALLERY_ITEMS[1].category}</p>
                </div>
              </div>

              {/* Item 4: Dhaba Egg Curry (Oval frame) */}
              <div
                onClick={() => setSelectedIdx(3)}
                className="group relative cursor-pointer overflow-hidden rounded-[16px_40px_16px_40px] border-4 border-[#F5E9D5] bg-[#34251F] shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={GALLERY_ITEMS[3].image}
                    alt={GALLERY_ITEMS[3].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4 text-[#F5E9D5]">
                  <p className="font-serif text-base font-bold">{GALLERY_ITEMS[3].title}</p>
                  <p className="text-[11px] text-[#E7D5BB]">{GALLERY_ITEMS[3].category}</p>
                </div>
              </div>

            </div>

            {/* Item 5: Steaming Feast Macro (Wide Curved Banner) */}
            <div
              onClick={() => setSelectedIdx(4)}
              className="group relative cursor-pointer overflow-hidden rounded-[24px_60px_24px_24px] border-4 border-[#F5E9D5] bg-[#34251F] shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={GALLERY_ITEMS[4].image}
                  alt={GALLERY_ITEMS[4].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-between p-5 text-[#F5E9D5]">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#D99035]">
                    {GALLERY_ITEMS[4].category}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-white">
                    {GALLERY_ITEMS[4].title}
                  </h4>
                </div>
                <div className="p-2 rounded-full bg-[#D99035] text-[#34251F]">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && activeItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          
          {/* Close Button */}
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-[#541E29] text-[#F5E9D5] hover:bg-[#D99035] hover:text-[#34251F] transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((selectedIdx - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#541E29]/80 text-[#F5E9D5] hover:bg-[#D99035] hover:text-[#34251F] transition-colors focus:outline-none"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((selectedIdx + 1) % GALLERY_ITEMS.length);
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#541E29]/80 text-[#F5E9D5] hover:bg-[#D99035] hover:text-[#34251F] transition-colors focus:outline-none"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Lightbox Content Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#34251F] rounded-3xl overflow-hidden border-2 border-[#D99035]/40 shadow-2xl flex flex-col max-h-[90vh]"
          >
            <div className="relative flex-1 overflow-hidden flex items-center justify-center bg-black/40">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[68vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Bottom Caption & Controls */}
            <div className="p-6 bg-[#FAF4EB] text-[#34251F] border-t border-[#E7D5BB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#8C4A38]">
                  {activeItem.category} · Photo {selectedIdx + 1} of {GALLERY_ITEMS.length}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#541E29]">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-[#4A362D] mt-1">
                  {activeItem.caption}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs text-[#8C4A38] bg-[#E7D5BB]/50 px-3 py-1 rounded-full font-medium">
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
