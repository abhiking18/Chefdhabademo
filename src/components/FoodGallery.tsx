import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';

interface FoodGalleryProps {
  items?: GalleryItem[];
}

export const FoodGallery: React.FC<FoodGalleryProps> = ({ items }) => {
  const currentList = items && items.length > 0 ? items : GALLERY_ITEMS;
  const [activeFilter, setActiveFilter] = useState<string>('All Photos');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const filterTabs = [
    'All Photos',
    'Cabins & Machan',
    'Kids Playground',
    'Dining Halls',
    'Restaurant Exterior'
  ];

  const visibleItems = useMemo(() => {
    if (activeFilter === 'All Photos') return currentList;
    return currentList.filter((item) => item.category === activeFilter);
  }, [activeFilter, currentList]);

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
    <section id="gallery" className="relative py-14 sm:py-18 bg-[#FAF6F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C4A38] mb-2">
            <span className="w-5 h-[2px] bg-[#C9822C]" />
            <span>REAL PHOTOGRAPHY</span>
            <span className="w-5 h-[2px] bg-[#C9822C]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#4F1824] mb-2 [text-wrap:balance]">
            Experience Our Dhaba
          </h2>

          <p className="text-sm sm:text-base text-[#44332B]">
            Thatched cabins, two-story bamboo machan, kids' playground swings, and dining halls.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveFilter(tab);
                setSelectedIdx(null);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === tab
                  ? 'bg-[#4F1824] text-[#FAF6F0] shadow-sm'
                  : 'bg-[#F3ECE1] text-[#44332B] hover:bg-[#E5D9C8] hover:text-[#4F1824] border border-[#E5D9C8]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {visibleItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedIdx(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-[#FFFFFF] bg-[#241814] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black/30">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-[#FAF6F0] bg-[#4F1824]/90 px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 p-2 rounded-full bg-[#C9822C] text-[#241814] shadow opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-3.5 bg-[#FAF6F0] text-[#241814] border-t border-[#E5D9C8]">
                <h3 className="font-serif text-base font-bold text-[#4F1824] group-hover:text-[#C9822C] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#44332B] mt-0.5 leading-relaxed line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && activeItem && (
        <div
          onClick={() => setSelectedIdx(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
        >
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-[#4F1824] text-[#FAF6F0] hover:bg-[#C9822C] hover:text-[#241814] transition-colors cursor-pointer shadow-lg"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((selectedIdx - 1 + visibleItems.length) % visibleItems.length);
            }}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-[#4F1824]/80 text-[#FAF6F0] hover:bg-[#C9822C] hover:text-[#241814] transition-colors cursor-pointer shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((selectedIdx + 1) % visibleItems.length);
            }}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-[#4F1824]/80 text-[#FAF6F0] hover:bg-[#C9822C] hover:text-[#241814] transition-colors cursor-pointer shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-[#241814] rounded-2xl overflow-hidden border border-[#C9822C]/40 shadow-2xl flex flex-col max-h-[90vh]"
          >
            <div className="relative flex-1 overflow-hidden flex items-center justify-center bg-black/70 p-2 sm:p-4">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 bg-[#FAF6F0] text-[#241814] border-t border-[#E5D9C8] flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C4A38] block">
                  {activeItem.category} · {selectedIdx + 1} of {visibleItems.length}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#4F1824]">
                  {activeItem.title}
                </h3>
              </div>
            </div>
          </div>

        </div>
      )}

    </section>
  );
};
