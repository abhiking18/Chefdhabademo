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
    <section id="gallery" className="relative py-16 sm:py-24 bg-[#F2EBDD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#98543D] mb-3">
            <span className="w-6 h-[1.5px] bg-[#98543D]" />
            <span>PHOTOGRAPHIC ARCHIVE</span>
            <span className="w-6 h-[1.5px] bg-[#98543D]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#302820] mb-3 [text-wrap:balance]">
            Inside New Highway Chef
          </h2>

          <p className="text-sm sm:text-base text-[#302820]/75">
            Photographs of our real dining halls, bamboo treehouse machan, garden cottages, and children's playground.
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
                  ? 'bg-[#302820] text-[#F2EBDD] shadow-xs'
                  : 'bg-[#FAF6EE] text-[#302820]/80 hover:bg-[#D8CBB6] hover:text-[#302820] border border-[#D8CBB6]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Photo Grid with Subtle Organic Curves */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {visibleItems.map((item, idx) => {
            const cornerClass =
              idx % 2 === 0
                ? 'rounded-[28px_12px_28px_12px]'
                : 'rounded-[12px_28px_12px_28px]';

            return (
              <div
                key={item.id}
                onClick={() => setSelectedIdx(idx)}
                className={`group relative cursor-pointer overflow-hidden ${cornerClass} border-2 border-[#FFFFFF] bg-[#302820] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black/20">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#302820]/85 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-semibold text-[#F2EBDD] bg-[#302820]/90 px-2.5 py-0.5 rounded-full border border-[#D8CBB6]/30">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 p-2 rounded-full bg-[#98543D] text-[#F2EBDD] shadow-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-4 bg-[#FAF6EE] text-[#302820] border-t border-[#D8CBB6]">
                  <h3 className="font-serif text-base font-bold text-[#302820] group-hover:text-[#98543D] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#302820]/70 mt-1 leading-relaxed line-clamp-1">
                    {item.caption}
                  </p>
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
          className="fixed inset-0 z-50 bg-[#302820]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-[#FAF6EE] text-[#302820] hover:bg-[#98543D] hover:text-[#F2EBDD] transition-colors cursor-pointer shadow-lg"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((selectedIdx - 1 + visibleItems.length) % visibleItems.length);
            }}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#FAF6EE] text-[#302820] hover:bg-[#98543D] hover:text-[#F2EBDD] transition-colors cursor-pointer shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((selectedIdx + 1) % visibleItems.length);
            }}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#FAF6EE] text-[#302820] hover:bg-[#98543D] hover:text-[#F2EBDD] transition-colors cursor-pointer shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#FAF6EE] rounded-[24px] overflow-hidden border border-[#D8CBB6] shadow-2xl flex flex-col max-h-[90vh]"
          >
            <div className="relative flex-1 overflow-hidden flex items-center justify-center bg-[#302820] p-4">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 bg-[#FAF6EE] text-[#302820] border-t border-[#D8CBB6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#98543D] block">
                  {activeItem.category} · {selectedIdx + 1} of {visibleItems.length}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#302820]">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-[#302820]/75 mt-0.5">{activeItem.caption}</p>
              </div>
            </div>
          </div>

        </div>
      )}

    </section>
  );
};
