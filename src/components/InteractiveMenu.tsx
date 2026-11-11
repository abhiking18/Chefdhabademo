import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, UtensilsCrossed, Sparkles } from 'lucide-react';
import { MENU_CATEGORIES, INITIAL_MENU_ITEMS, MenuItem } from '../data/restaurantData';
import { motion, AnimatePresence } from 'motion/react';
import { DietaryIcon } from './DietaryIcon';

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
    <section id="menu" className="relative py-20 sm:py-28 bg-[#F8F0E9] text-[#633C38] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8C5BE]/50 border border-[#E8C5BE] text-[#C97870] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C97870]" />
            <span>AUTHENTIC DINING MENU</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#633C38] mb-3">
            The <span className="text-[#C97870]">Dhaba</span> Menu
          </h2>

          <p className="text-sm sm:text-base text-[#8C5752]">
            Prepared fresh to order on NH-31 Rangia. Pure ingredients, traditional clay tandoors, and generous portions.
          </p>
        </div>

        {/* Search & Dietary Filters Row */}
        <div className="mb-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C5752]" />
            <input
              type="text"
              placeholder="Search thali, paneer, tandoor, duck..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-12 py-2.5 rounded-full bg-[#FFFDFC] text-[#633C38] placeholder-[#8C5752]/70 border border-[#E8C5BE] focus:border-[#C97870] focus:outline-none text-xs sm:text-sm shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#C97870] hover:underline font-bold cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Veg / Non-Veg Diet Filter Pills */}
          <div className="flex items-center self-start md:self-auto gap-1 p-1 bg-[#FFFDFC] rounded-full border border-[#E8C5BE] shadow-sm">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase transition-all cursor-pointer ${
                dietaryFilter === 'all'
                  ? 'bg-[#C97870] text-[#FFFDFC]'
                  : 'text-[#8C5752] hover:text-[#633C38]'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase transition-all cursor-pointer ${
                dietaryFilter === 'veg'
                  ? 'bg-[#25D366] text-[#FFFDFC]'
                  : 'text-[#8C5752] hover:text-[#25D366]'
              }`}
            >
              <DietaryIcon isVeg={true} className="w-3.5 h-3.5" />
              <span>Veg</span>
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase transition-all cursor-pointer ${
                dietaryFilter === 'non-veg'
                  ? 'bg-[#C97870] text-[#FFFDFC]'
                  : 'text-[#8C5752] hover:text-[#C97870]'
              }`}
            >
              <DietaryIcon isVeg={false} className="w-3.5 h-3.5" />
              <span>Non-Veg</span>
            </button>
          </div>

        </div>

        {/* Sticky Horizontal Scrollable Category Bar */}
        <div className="sticky top-16 z-30 mb-8 py-3 bg-[#F8F0E9]/95 backdrop-blur-md -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-y border-[#E8C5BE]">
          <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-none no-scrollbar flex items-center gap-2">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold uppercase transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#C97870] text-[#FFFDFC] shadow-md'
                      : 'bg-[#FFFDFC] text-[#633C38] hover:bg-[#E8C5BE]/40 border border-[#E8C5BE]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dish Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#FFFDFC] rounded-3xl border border-[#E8C5BE] shadow-sm">
            <UtensilsCrossed className="w-8 h-8 text-[#C97870] mx-auto mb-3 opacity-60" />
            <p className="text-lg text-[#633C38] font-bold">No dishes found</p>
            <p className="text-xs text-[#8C5752] mt-1 mb-4">Try searching for a different dish name or category.</p>
            <button
              onClick={() => {
                setActiveCategory('All Items');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="px-5 py-2.5 rounded-full bg-[#C97870] text-[#FFFDFC] text-xs font-bold uppercase tracking-wider cursor-pointer hover:bg-[#b5655d]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={item.id}
                  className="group p-4 sm:p-5 rounded-2xl bg-[#FFFDFC] border border-[#E8C5BE] hover:border-[#C97870] transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-start gap-2.5">
                        <div className="mt-1 shrink-0">
                          <DietaryIcon isVeg={item.isVeg} className="w-4 h-4" />
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-[#633C38] leading-snug group-hover:text-[#C97870] transition-colors">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C5752]">
                              {item.category}
                            </span>
                            {item.tag && (
                              <span className="text-[9px] uppercase font-bold tracking-wider text-[#C97870] bg-[#E8C5BE]/40 border border-[#E8C5BE] px-2 py-0.5 rounded-full">
                                {item.tag}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-right shrink-0">
                        <span className="text-lg sm:text-xl font-bold text-[#C97870] tabular-nums">
                          ₹{item.price}
                        </span>
                        {item.halfPrice && (
                          <p className="text-[10px] font-bold text-[#8C5752]">
                            Half: ₹{item.halfPrice}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Add Button & Quick Variants */}
                  <div className="pt-3 mt-3 border-t border-[#E8C5BE] flex items-center justify-between gap-2">
                    <span className="text-[11px] text-[#8C5752] font-semibold">
                      Fresh Clay Tandoor
                    </span>

                    <div className="flex items-center gap-2">
                      {item.halfPrice && (
                        <button
                          onClick={() => handleAdd(item, item.halfPrice!, 'Half')}
                          className="px-2.5 py-1 rounded-full bg-[#E8C5BE] hover:bg-[#d9b2aa] text-[#633C38] text-xs font-bold transition-colors cursor-pointer"
                        >
                          Half (₹{item.halfPrice})
                        </button>
                      )}

                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAdd(item, item.price, item.halfPrice ? 'Full' : undefined)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#C97870] hover:bg-[#b5655d] text-[#FFFDFC] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                      >
                        {addedItem === item.id || addedItem === `${item.id}-Full` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#FFFDFC]" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 text-[#FFFDFC]" />
                            <span>Add {item.halfPrice ? `(₹${item.price})` : ''}</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Bottom Order Banner */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl bg-[#FFFDFC] border border-[#E8C5BE] shadow-sm">
            <span className="text-xs sm:text-sm font-semibold text-[#633C38]">
              Ready to eat? Order ahead for swift highway pickup or cabin seating.
            </span>
            <button
              onClick={() => onOpenOrder()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C97870] hover:bg-[#b5655d] text-[#FFFDFC] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#FFFDFC]" />
              <span>Place Order via WhatsApp / Phone</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
