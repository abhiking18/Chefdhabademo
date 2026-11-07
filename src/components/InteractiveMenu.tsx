import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, UtensilsCrossed, CheckCircle2 } from 'lucide-react';
import { MENU_CATEGORIES, INITIAL_MENU_ITEMS, MenuItem } from '../data/restaurantData';

interface InteractiveMenuProps {
  items?: MenuItem[];
  onAddToCart: (dish: { id: string; name: string; price: number }) => void;
  onOpenOrder: (dishName?: string) => void;
}

export const InteractiveMenu: React.FC<InteractiveMenuProps> = ({
  items,
  onAddToCart,
  onOpenOrder
}) => {
  const currentList = items && items.length > 0 ? items : INITIAL_MENU_ITEMS;
  const [activeCategory, setActiveCategory] = useState<string>('All Items');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [addedItem, setAddedItem] = useState<string | null>(null);

  // Filter items
  const filteredItems = useMemo(() => {
    return currentList.filter((item) => {
      // Category match
      const matchesCategory =
        activeCategory === 'All Items' || item.category === activeCategory;

      // Search match
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Dietary filter
      const matchesDiet =
        dietaryFilter === 'all' ||
        (dietaryFilter === 'veg' && item.isVeg) ||
        (dietaryFilter === 'non-veg' && !item.isVeg);

      return matchesCategory && matchesSearch && matchesDiet;
    });
  }, [activeCategory, searchQuery, dietaryFilter]);

  const handleAdd = (item: MenuItem, price: number, variantName?: string) => {
    const finalName = variantName ? `${item.name} (${variantName})` : item.name;
    const finalId = variantName ? `${item.id}-${variantName}` : item.id;
    onAddToCart({ id: finalId, name: finalName, price });
    setAddedItem(finalId);
    setTimeout(() => setAddedItem(null), 1500);
  };

  return (
    <section id="menu" className="relative py-24 sm:py-32 bg-[#FAF4EB] overflow-hidden">
      
      {/* Background Curved Accent Lines */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#E7D5BB]/40 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#D99035]/10 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-[#541E29] mb-3">
            <span className="w-6 h-[2px] bg-[#D99035]" />
            <span>AUTHENTIC HIGHWAY SELECTIONS</span>
            <span className="w-6 h-[2px] bg-[#D99035]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#541E29] mb-4 [text-wrap:balance]">
            Explore Our Menu
          </h2>

          <p className="text-base sm:text-lg text-[#4A362D]">
            Freshly prepared dishes with verified pricing directly from the kitchen of New Highway Chef Dhaba.
          </p>

          {/* Verified Menu Badge */}
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#2E7D32] bg-[#E8F5E9] px-4 py-2 rounded-full border border-[#C8E6C9] font-medium shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
            <span>Complete Menu & Official Prices (Rangia, Assam)</span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C4A38]" />
            <input
              type="text"
              placeholder="Search thali, tandoor, duck, fish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-14 py-2.5 rounded-full bg-[#F5E9D5] text-[#34251F] placeholder-[#8C4A38]/70 border border-[#E7D5BB] focus:outline-none focus:ring-2 focus:ring-[#541E29] text-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#8C4A38] hover:text-[#541E29] font-semibold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Veg / Non-Veg Segmented Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F5E9D5] rounded-full border border-[#E7D5BB] self-center md:self-auto">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                dietaryFilter === 'all'
                  ? 'bg-[#541E29] text-[#F5E9D5] shadow-sm'
                  : 'text-[#4A362D] hover:text-[#541E29]'
              }`}
            >
              All Types
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                dietaryFilter === 'veg'
                  ? 'bg-[#2E7D32] text-white shadow-sm'
                  : 'text-[#4A362D] hover:text-[#2E7D32]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#2E7D32] inline-block" />
              <span>Veg Only</span>
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                dietaryFilter === 'non-veg'
                  ? 'bg-[#C62828] text-white shadow-sm'
                  : 'text-[#4A362D] hover:text-[#C62828]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#C62828] inline-block" />
              <span>Non-Veg</span>
            </button>
          </div>

        </div>

        {/* Category Navigation Tabs (Maroon tabs with smooth active states) */}
        <div className="relative mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none no-scrollbar">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#541E29] text-[#F5E9D5] shadow-md transform -translate-y-0.5'
                      : 'bg-[#F5E9D5] text-[#4A362D] hover:bg-[#E7D5BB] hover:text-[#541E29] border border-[#E7D5BB]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dish Grid with Organic Curved Containers & Visual Rhythm */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#F5E9D5] rounded-3xl border border-[#E7D5BB]">
            <UtensilsCrossed className="w-12 h-12 text-[#D99035] mx-auto mb-3 opacity-60" />
            <p className="font-serif text-lg text-[#541E29] font-bold">No dishes found matching "{searchQuery}"</p>
            <p className="text-sm text-[#4A362D] mt-1">Try resetting filters to explore our full menu</p>
            <button
              onClick={() => {
                setActiveCategory('All Items');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-[#541E29] text-[#F5E9D5] text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const cardRadius = isEven
                ? 'rounded-[32px_16px_32px_16px]'
                : 'rounded-[16px_32px_16px_32px]';

              return (
                <div
                  key={item.id}
                  className={`group bg-[#FAF4EB] ${cardRadius} p-6 border border-[#E7D5BB] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1`}
                >
                  <div>
                    {/* Optional Dish Image */}
                    {item.image && (
                      <div className="relative aspect-[16/10] rounded-[24px_12px_24px_12px] overflow-hidden mb-5 bg-[#34251F]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 right-3 bg-[#D99035] text-[#34251F] text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                          ₹{item.price}
                        </div>
                      </div>
                    )}

                    {/* Header Row: Veg/Non-Veg Icon + Name + Tag */}
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <div className="flex items-start gap-2.5">
                        {/* Indian Veg / Non-Veg Standard Icon */}
                        <div
                          className={`mt-1 w-4 h-4 border-2 rounded-sm flex items-center justify-center shrink-0 ${
                            item.isVeg ? 'border-[#2E7D32]' : 'border-[#C62828]'
                          }`}
                          title={item.isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              item.isVeg ? 'bg-[#2E7D32]' : 'bg-[#C62828]'
                            }`}
                          />
                        </div>

                        <div>
                          <h3 className="font-serif text-lg font-bold text-[#541E29] group-hover:text-[#D99035] transition-colors leading-snug">
                            {item.name}
                          </h3>
                          <span className="text-[11px] text-[#8C4A38] uppercase tracking-wider font-semibold">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      {/* Saffron Price Highlight */}
                      {!item.image && (
                        <div className="text-right shrink-0">
                          <span className="font-serif text-xl font-bold text-[#D99035] tabular-nums">
                            ₹{item.price}
                          </span>
                          {item.halfPrice && (
                            <p className="text-[11px] text-[#8C4A38] font-medium">
                              Half: ₹{item.halfPrice}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#4A362D] leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Bottom Meta & Actions */}
                  <div className="pt-4 border-t border-[#E7D5BB]/70 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5">
                      {item.tag ? (
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#541E29] bg-[#E7D5BB]/60 px-2 py-0.5 rounded-full">
                          {item.tag}
                        </span>
                      ) : (
                        <span className="text-[11px] text-[#2E7D32] font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-[#2E7D32]" />
                          <span>Official Menu</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Half portion button if available */}
                      {item.halfPrice && (
                        <button
                          onClick={() => handleAdd(item, item.halfPrice!, 'Half')}
                          className="px-2.5 py-1.5 rounded-full bg-[#E7D5BB] hover:bg-[#D4BE9F] text-[#541E29] text-xs font-semibold transition-colors cursor-pointer"
                          title="Add Half Portion"
                        >
                          Half (₹{item.halfPrice})
                        </button>
                      )}

                      {/* Full portion button */}
                      <button
                        onClick={() => handleAdd(item, item.price, item.halfPrice ? 'Full' : undefined)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#541E29] hover:bg-[#3E161E] text-[#F5E9D5] text-xs font-semibold shadow-sm hover:shadow transition-all cursor-pointer"
                      >
                        {addedItem === item.id || addedItem === `${item.id}-Full` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#D99035]" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 text-[#D99035]" />
                            <span>Add {item.halfPrice ? `(₹${item.price})` : ''}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Prominent "Order Your Favourite Food" CTA Banner */}
        <div className="mt-16 text-center">
          <div className="relative inline-block p-1 rounded-full bg-gradient-to-r from-[#541E29] via-[#D99035] to-[#541E29] shadow-xl">
            <button
              onClick={() => onOpenOrder()}
              className="px-8 sm:px-10 py-4 rounded-full bg-[#541E29] text-[#F5E9D5] font-serif text-base sm:text-lg font-bold tracking-wide hover:bg-[#3E161E] transition-all flex items-center gap-3 cursor-pointer"
            >
              <UtensilsCrossed className="w-5 h-5 text-[#D99035]" />
              <span>Order Your Favourite Food</span>
              <span className="text-xs bg-[#D99035] text-[#34251F] font-sans font-bold px-2.5 py-1 rounded-full">
                WhatsApp & Call
              </span>
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};
