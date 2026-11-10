import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';
import { motion, AnimatePresence } from 'motion/react';

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
    <section id="gallery" className="relative py-16 sm:py-24 bg-[#E8C5BE]/40 overflow-hidden">
      
      {/* Background Organic Highlights */}
      <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-[#C97870]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C97870] text-[#F8F0E9] text-xs font-semibold tracking-widest uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F8F0E9]" />
            <span>PHOTOGRAPHIC ARCHIVE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#633C38] mb-3 [text-wrap:balance]">
            Inside New Highway Chef
          </h2>

          <p className="text-sm sm:text-base text-[#633C38]/80">
            Photographs of our real dining halls, bamboo machan treehouse, garden cottages, and playground swings.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveFilter(tab);
                setSelectedIdx(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all cursor-pointer ${
                activeFilter === tab
                  ? 'bg-[#C97870] text-[#F8F0E9] shadow-md shadow-[#C97870]/20'
                  : 'bg-[#FFFDFC] text-[#633C38]/80 hover:bg-[#E8C5BE]/30 hover:text-[#C97870] border border-[#E8C5BE]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Curvy Photo Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          <AnimatePresence>
            {visibleItems.map((item, idx) => {
              const cornerClass =
                idx % 2 === 0
                  ? 'rounded-[32px_12px_32px_12px]'
                  : 'rounded-[12px_32px_12px_32px]';

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`group relative cursor-pointer overflow-hidden ${cornerClass} border-2 border-[#FFFDFC] bg-[#633C38] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/20">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#633C38]/85 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-semibold text-[#F8F0E9] bg-[#633C38]/90 px-3 py-0.5 rounded-full border border-[#E8C5BE]/40 shadow-xs">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 p-2 rounded-full bg-[#C97870] text-[#F8F0E9] shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5 text-[#F8F0E9]" />
                    </div>
                  </div>

                  <div className="p-4 bg-[#FFFDFC] text-[#633C38] border-t border-[#E8C5BE]">
                    <h3 className="font-serif text-base font-bold text-[#633C38] group-hover:text-[#C97870] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#633C38]/70 mt-1 leading-relaxed line-clamp-1">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && activeItem && (
        <div
          onClick={() => setSelectedIdx(null)}
          className="fixed inset-0 z-50 bg-[#633C38]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-[#F8F0E9] text-[#633C38] hover:bg-[#C97870] hover:text-[#F8F0E9] transition-colors cursor-pointer shadow-lg"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((selectedIdx - 1 + visibleItems.length) % visibleItems.length);
            }}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#F8F0E9] text-[#633C38] hover:bg-[#C97870] hover:text-[#F8F0E9] transition-colors cursor-pointer shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((selectedIdx + 1) % visibleItems.length);
            }}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#F8F0E9] text-[#633C38] hover:bg-[#C97870] hover:text-[#F8F0E9] transition-colors cursor-pointer shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#FFFDFC] rounded-[32px_12px_32px_12px] overflow-hidden border border-[#E8C5BE] shadow-2xl flex flex-col max-h-[90vh]"
          >
            <div className="relative flex-1 overflow-hidden flex items-center justify-center bg-[#633C38] p-4">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 bg-[#FFFDFC] text-[#633C38] border-t border-[#E8C5BE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C97870] block">
                  {activeItem.category} · {selectedIdx + 1} of {visibleItems.length}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#633C38]">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-[#633C38]/75 mt-0.5">{activeItem.caption}</p>
              </div>
            </div>
          </div>

        </div>
      )}

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
            d="M0,40 C320,100 720,0 1080,60 C1260,90 1380,40 1440,20 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>

    </section>
  );
};
