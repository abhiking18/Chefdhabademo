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
    <section id="menu" className="relative py-16 sm:py-24 bg-[#F8F0E9] overflow-hidden">
      
      {/* Background Organic Shapes */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#E8C5BE]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[#C97870]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C97870]/15 text-[#C97870] text-xs font-semibold tracking-widest uppercase mb-3 border border-[#E8C5BE]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AUTHENTIC DINING MENU</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#633C38] mb-3 [text-wrap:balance]">
            The Dhaba Menu
          </h2>

          <p className="text-sm sm:text-base text-[#633C38]/75">
            Prepared fresh to order on NH-31 Rangia. Pure ingredients, traditional clay tandoors, and generous portions.
          </p>
        </div>

        {/* Filter & Search Controls Bar */}
        <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Dish Search */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#633C38]/50" />
            <input
              type="text"
              placeholder="Search thali, paneer, tandoor, duck..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-12 py-2.5 rounded-full bg-[#FFFDFC] text-[#633C38] placeholder-[#633C38]/50 border border-[#E8C5BE] focus:outline-none focus:ring-2 focus:ring-[#C97870] text-xs sm:text-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#C97870] hover:underline font-semibold cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Veg / Non-Veg Diet Filter with Exact Logos */}
          <div className="flex items-center self-start md:self-auto gap-1 p-1 bg-[#FFFDFC] rounded-full border border-[#E8C5BE]">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                dietaryFilter === 'all'
                  ? 'bg-[#C97870] text-[#F8F0E9] shadow-xs'
                  : 'text-[#633C38]/70 hover:text-[#633C38]'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                dietaryFilter === 'veg'
                  ? 'bg-[#C97870] text-[#F8F0E9] shadow-xs'
                  : 'text-[#633C38]/70 hover:text-[#C97870]'
              }`}
            >
              <DietaryIcon isVeg={true} className="w-3.5 h-3.5" />
              <span>Veg</span>
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                dietaryFilter === 'non-veg'
                  ? 'bg-[#633C38] text-[#F8F0E9] shadow-xs'
                  : 'text-[#633C38]/70 hover:text-[#633C38]'
              }`}
            >
              <DietaryIcon isVeg={false} className="w-3.5 h-3.5" />
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
                      ? 'bg-[#C97870] text-[#F8F0E9] shadow-md shadow-[#C97870]/25 border border-[#C97870]'
                      : 'bg-[#FFFDFC] text-[#633C38]/80 hover:bg-[#E8C5BE]/30 hover:text-[#633C38] border border-[#E8C5BE]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Menu Grid with Organic Curved Cards */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#FFFDFC] rounded-[32px] border border-[#E8C5BE]">
            <UtensilsCrossed className="w-8 h-8 text-[#C97870] mx-auto mb-3 opacity-60" />
            <p className="font-serif text-lg text-[#633C38] font-bold">No dishes found</p>
            <p className="text-xs text-[#633C38]/60 mt-1 mb-4">Try searching for a different dish name or category.</p>
            <button
              onClick={() => {
                setActiveCategory('All Items');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="px-5 py-2.5 rounded-full bg-[#C97870] text-[#F8F0E9] text-xs font-semibold uppercase tracking-wider cursor-pointer hover:bg-[#B5675F]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5"
          >
            <AnimatePresence>
              {filteredItems.map((item, idx) => {
                const cornerClass =
                  idx % 2 === 0
                    ? 'rounded-[22px_8px_22px_8px]'
                    : 'rounded-[8px_22px_8px_22px]';

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    key={item.id}
                    className={`group p-4 sm:p-5 ${cornerClass} bg-[#FFFDFC] border border-[#E8C5BE] hover:border-[#C97870]/60 hover:shadow-md transition-all duration-200 flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-1.5">
                        <div className="flex items-start gap-2.5">
                          <div className="mt-1 shrink-0">
                            <DietaryIcon isVeg={item.isVeg} className="w-4 h-4" />
                          </div>

                          <div>
                            <h3 className="font-serif text-base sm:text-lg font-bold text-[#633C38] leading-snug group-hover:text-[#C97870] transition-colors">
                              {item.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-[10px] uppercase font-bold tracking-widest text-[#633C38]/60">
                                {item.category}
                              </span>
                              {item.tag && (
                                <span className="text-[9px] uppercase font-bold tracking-wider text-[#C97870] bg-[#E8C5BE]/40 px-2 py-0.5 rounded-full">
                                  {item.tag}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="text-right shrink-0">
                          <span className="font-serif text-lg sm:text-xl font-bold text-[#633C38] tabular-nums">
                            ₹{item.price}
                          </span>
                          {item.halfPrice && (
                            <p className="text-[10px] text-[#C97870] font-semibold">
                              Half: ₹{item.halfPrice}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Quick Add Controls */}
                    <div className="pt-3 mt-2 border-t border-[#633C38]/10 flex items-center justify-between gap-2">
                      <span className="text-[11px] text-[#633C38]/60 italic">
                        Fresh to order
                      </span>

                      <div className="flex items-center gap-1.5">
                        {item.halfPrice && (
                          <button
                            onClick={() => handleAdd(item, item.halfPrice!, 'Half')}
                            className="px-2.5 py-1 rounded-full bg-[#E8C5BE]/30 hover:bg-[#E8C5BE]/50 text-[#633C38] text-xs font-semibold transition-colors cursor-pointer"
                          >
                            Half (₹{item.halfPrice})
                          </button>
                        )}

                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleAdd(item, item.price, item.halfPrice ? 'Full' : undefined)}
                          className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#C97870] hover:bg-[#B5675F] text-[#F8F0E9] text-xs font-semibold uppercase tracking-wider shadow-xs transition-all cursor-pointer border border-[#C97870]"
                        >
                          {addedItem === item.id || addedItem === `${item.id}-Full` ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#F8F0E9]" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5 text-[#F8F0E9]" />
                              <span>Add {item.halfPrice ? `(₹${item.price})` : ''}</span>
                            </>
                          )}
                        </motion.button>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Bottom Banner Order Prompt */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-5 rounded-[28px_10px_28px_10px] bg-[#FFFDFC] border border-[#E8C5BE] shadow-sm">
            <span className="text-xs sm:text-sm font-serif font-bold text-[#633C38]">
              Ready to eat? Order ahead for swift highway pickup or cabin seating.
            </span>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenOrder()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C97870] hover:bg-[#B5675F] text-[#F8F0E9] text-xs font-semibold uppercase tracking-wider shadow-md transition-all cursor-pointer border border-[#C97870]"
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#F8F0E9]" />
              <span>Place Order via WhatsApp / Phone</span>
            </motion.button>
          </div>
        </div>

      </div>

      {/* Wavy Section Divider */}
      <div className="w-full overflow-hidden leading-none mt-16 -mb-1 text-[#633C38]">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-8 md:h-12"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 C360,90 1080,10 1440,70 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>

    </section>
  );
};
