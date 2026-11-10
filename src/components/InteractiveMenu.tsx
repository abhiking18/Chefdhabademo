import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, UtensilsCrossed } from 'lucide-react';
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
      const matchesCategory =
        activeCategory === 'All Items' || item.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        (item.tag && item.tag.toLowerCase().includes(query));

      const matchesDiet =
        dietaryFilter === 'all' ||
        (dietaryFilter === 'veg' && item.isVeg) ||
        (dietaryFilter === 'non-veg' && !item.isVeg);

      return matchesCategory && matchesSearch && matchesDiet;
    });
  }, [activeCategory, searchQuery, dietaryFilter, currentList]);

  const handleAdd = (item: MenuItem, price: number, variantName?: string) => {
    const finalName = variantName ? `${item.name} (${variantName})` : item.name;
    const finalId = variantName ? `${item.id}-${variantName}` : item.id;
    onAddToCart({ id: finalId, name: finalName, price });
    setAddedItem(finalId);
    setTimeout(() => setAddedItem(null), 1500);
  };

  return (
    <section id="menu" className="relative py-14 sm:py-18 bg-[#FAF6F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C4A38] mb-2">
            <span className="w-5 h-[2px] bg-[#C9822C]" />
            <span>AUTHENTIC DISHES</span>
            <span className="w-5 h-[2px] bg-[#C9822C]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#4F1824] mb-2 [text-wrap:balance]">
            Full Restaurant Menu
          </h2>

          <p className="text-sm sm:text-base text-[#44332B]">
            Thalis, local chicken & duck, freshwater fish, live tandoor and Indian curries.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C4A38]" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-12 py-2 rounded-full bg-[#F3ECE1] text-[#241814] placeholder-[#8C4A38]/70 border border-[#E5D9C8] focus:outline-none focus:ring-2 focus:ring-[#4F1824] text-xs sm:text-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#8C4A38] hover:text-[#4F1824] font-semibold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Veg / Non-Veg Toggle */}
          <div className="flex items-center gap-1 p-1 bg-[#F3ECE1] rounded-full border border-[#E5D9C8]">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                dietaryFilter === 'all'
                  ? 'bg-[#4F1824] text-[#FAF6F0] shadow-sm'
                  : 'text-[#44332B] hover:text-[#4F1824]'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                dietaryFilter === 'veg'
                  ? 'bg-[#2D6A4F] text-white shadow-sm'
                  : 'text-[#44332B] hover:text-[#2D6A4F]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#2D6A4F]" />
              <span>Veg</span>
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                dietaryFilter === 'non-veg'
                  ? 'bg-[#A82828] text-white shadow-sm'
                  : 'text-[#44332B] hover:text-[#A82828]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#A82828]" />
              <span>Non-Veg</span>
            </button>
          </div>

        </div>

        {/* Category Navigation Tabs */}
        <div className="mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#4F1824] text-[#FAF6F0] shadow-sm'
                      : 'bg-[#F3ECE1] text-[#44332B] hover:bg-[#E5D9C8] hover:text-[#4F1824] border border-[#E5D9C8]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dish Grid: Zero Dish Photos, Clean Typography & Price Tags */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 bg-[#F3ECE1] rounded-2xl border border-[#E5D9C8]">
            <UtensilsCrossed className="w-8 h-8 text-[#C9822C] mx-auto mb-2 opacity-60" />
            <p className="font-serif text-base text-[#4F1824] font-bold">No dishes found</p>
            <button
              onClick={() => {
                setActiveCategory('All Items');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="mt-3 px-4 py-1.5 rounded-full bg-[#4F1824] text-[#FAF6F0] text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#FFFFFF] rounded-2xl p-4 sm:p-5 border border-[#E5D9C8] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2.5 mb-1.5">
                    <div className="flex items-start gap-2">
                      <div
                        className={`mt-1 w-3.5 h-3.5 border-2 rounded-xs flex items-center justify-center shrink-0 ${
                          item.isVeg ? 'border-[#2D6A4F]' : 'border-[#A82828]'
                        }`}
                        title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.isVeg ? 'bg-[#2D6A4F]' : 'bg-[#A82828]'
                          }`}
                        />
                      </div>

                      <div>
                        <h3 className="font-serif text-base font-bold text-[#4F1824] leading-snug">
                          {item.name}
                        </h3>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C4A38]">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-serif text-lg font-bold text-[#C9822C] tabular-nums">
                        ₹{item.price}
                      </span>
                      {item.halfPrice && (
                        <p className="text-[10px] text-[#8C4A38] font-semibold">
                          Half: ₹{item.halfPrice}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-2.5 mt-2 border-t border-[#E5D9C8]/60 flex items-center justify-between gap-2">
                  <div>
                    {item.tag && (
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#4F1824] bg-[#F3ECE1] px-2 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {item.halfPrice && (
                      <button
                        onClick={() => handleAdd(item, item.halfPrice!, 'Half')}
                        className="px-2 py-1 rounded-full bg-[#E5D9C8] hover:bg-[#D6C6B0] text-[#4F1824] text-[11px] font-semibold transition-colors cursor-pointer"
                      >
                        Half (₹{item.halfPrice})
                      </button>
                    )}

                    <button
                      onClick={() => handleAdd(item, item.price, item.halfPrice ? 'Full' : undefined)}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#4F1824] hover:bg-[#381119] text-[#FAF6F0] text-xs font-semibold shadow-xs transition-all cursor-pointer"
                    >
                      {addedItem === item.id || addedItem === `${item.id}-Full` ? (
                        <>
                          <Check className="w-3 h-3 text-[#C9822C]" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3 text-[#C9822C]" />
                          <span>Add {item.halfPrice ? `(₹${item.price})` : ''}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Clean Order CTA Banner */}
        <div className="mt-10 text-center">
          <button
            onClick={() => onOpenOrder()}
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#4F1824] hover:bg-[#381119] text-[#FAF6F0] font-serif text-sm sm:text-base font-bold shadow-md transition-all cursor-pointer"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#C9822C]" />
            <span>Order via WhatsApp & Phone</span>
            <span className="text-xs bg-[#C9822C] text-[#241814] font-sans font-bold px-2 py-0.5 rounded-full">
              070164 07776
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
