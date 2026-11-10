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
    <section id="menu" className="relative py-16 sm:py-24 bg-[#F2EBDD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#98543D] mb-3">
            <span className="w-6 h-[1.5px] bg-[#98543D]" />
            <span>AUTHENTIC DINING MENU</span>
            <span className="w-6 h-[1.5px] bg-[#98543D]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#302820] mb-3 [text-wrap:balance]">
            The Dhaba Menu
          </h2>

          <p className="text-sm sm:text-base text-[#302820]/75">
            Prepared fresh to order on NH-31 Rangia. Real spices, traditional clay tandoors, and generous portions.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Dish Search */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#302820]/50" />
            <input
              type="text"
              placeholder="Search paneer, thali, tandoor, duck..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-12 py-2.5 rounded-full bg-[#FAF6EE] text-[#302820] placeholder-[#302820]/50 border border-[#D8CBB6] focus:outline-none focus:ring-1 focus:ring-[#98543D] text-xs sm:text-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#98543D] hover:underline font-semibold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Veg / Non-Veg Diet Filter */}
          <div className="flex items-center self-start md:self-auto gap-1 p-1 bg-[#FAF6EE] rounded-full border border-[#D8CBB6]">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                dietaryFilter === 'all'
                  ? 'bg-[#302820] text-[#F2EBDD] shadow-xs'
                  : 'text-[#302820]/80 hover:text-[#302820]'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                dietaryFilter === 'veg'
                  ? 'bg-[#424735] text-[#F2EBDD] shadow-xs'
                  : 'text-[#302820]/80 hover:text-[#424735]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#424735]" />
              <span>Veg</span>
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                dietaryFilter === 'non-veg'
                  ? 'bg-[#98543D] text-[#F2EBDD] shadow-xs'
                  : 'text-[#302820]/80 hover:text-[#98543D]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#98543D]" />
              <span>Non-Veg</span>
            </button>
          </div>

        </div>

        {/* Category Tabs */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
          <div className="flex items-center gap-2">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#302820] text-[#F2EBDD] shadow-xs'
                      : 'bg-[#FAF6EE] text-[#302820]/80 hover:bg-[#D8CBB6] hover:text-[#302820] border border-[#D8CBB6]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Professional Restaurant Menu Book (2 Columns on Desktop) */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#FAF6EE] rounded-[24px] border border-[#D8CBB6]">
            <UtensilsCrossed className="w-8 h-8 text-[#98543D] mx-auto mb-3 opacity-60" />
            <p className="font-serif text-lg text-[#302820] font-bold">No dishes found</p>
            <p className="text-xs text-[#302820]/60 mt-1 mb-4">Try searching for a different item or category.</p>
            <button
              onClick={() => {
                setActiveCategory('All Items');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="px-5 py-2 rounded-full bg-[#302820] text-[#F2EBDD] text-xs font-semibold uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group p-4 sm:p-5 rounded-[16px] bg-[#FAF6EE] border border-[#D8CBB6]/80 hover:border-[#302820]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div className="flex items-start gap-2.5">
                      <div
                        className={`mt-1.5 w-3 h-3 rounded-full shrink-0 ${
                          item.isVeg ? 'bg-[#424735]' : 'bg-[#98543D]'
                        }`}
                        title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                      />

                      <div>
                        <h3 className="font-serif text-base sm:text-lg font-bold text-[#302820] leading-snug group-hover:text-[#98543D] transition-colors">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[10px] uppercase font-bold tracking-widest text-[#302820]/60">
                            {item.category}
                          </span>
                          {item.tag && (
                            <span className="text-[9px] uppercase font-bold tracking-wider text-[#98543D] bg-[#D8CBB6]/50 px-2 py-0.5 rounded-full">
                              {item.tag}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-right shrink-0">
                      <span className="font-serif text-lg sm:text-xl font-bold text-[#302820] tabular-nums">
                        ₹{item.price}
                      </span>
                      {item.halfPrice && (
                        <p className="text-[10px] text-[#98543D] font-semibold">
                          Half: ₹{item.halfPrice}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Quick Add Controls */}
                <div className="pt-3 mt-2 border-t border-[#D8CBB6]/50 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-[#302820]/60 italic">
                    Fresh to order
                  </span>

                  <div className="flex items-center gap-1.5">
                    {item.halfPrice && (
                      <button
                        onClick={() => handleAdd(item, item.halfPrice!, 'Half')}
                        className="px-2.5 py-1 rounded-full bg-[#D8CBB6] hover:bg-[#C4B59D] text-[#302820] text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Half (₹{item.halfPrice})
                      </button>
                    )}

                    <button
                      onClick={() => handleAdd(item, item.price, item.halfPrice ? 'Full' : undefined)}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#302820] hover:bg-[#211A14] text-[#F2EBDD] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      {addedItem === item.id || addedItem === `${item.id}-Full` ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#D8CBB6]" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 text-[#D8CBB6]" />
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

        {/* Bottom Banner Order Prompt */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-5 rounded-[24px] bg-[#FAF6EE] border border-[#D8CBB6] shadow-xs">
            <span className="text-xs sm:text-sm font-serif font-bold text-[#302820]">
              Ready to eat? Order ahead or book table seating.
            </span>
            <button
              onClick={() => onOpenOrder()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#98543D] hover:bg-[#7C422F] text-[#F2EBDD] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#F2EBDD]" />
              <span>Place Order via WhatsApp / Call</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
