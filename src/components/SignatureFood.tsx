import React, { useState } from 'react';
import { Plus, Check, UtensilsCrossed } from 'lucide-react';

interface SignatureFoodProps {
  onAddToCart: (dish: { id: string; name: string; price: number }) => void;
  onOpenOrder: (selectedDish?: string) => void;
}

interface SignatureItem {
  id: string;
  name: string;
  tagline: string;
  price: number;
  halfPrice?: number;
  isVeg: boolean;
  highlight: string;
  category: string;
}

export const SignatureFood: React.FC<SignatureFoodProps> = ({ onAddToCart, onOpenOrder }) => {
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const specialties: SignatureItem[] = [
    {
      id: 'th-1',
      name: 'Veg Thali',
      tagline: 'Yellow dal tadka, seasonal sabzi, tandoori roti & rice',
      price: 120,
      isVeg: true,
      highlight: 'Best Seller',
      category: 'Highway Thali'
    },
    {
      id: 'th-7',
      name: 'Paneer Thali',
      tagline: 'Rich motor paneer masala, salad, papad & tandoori roti',
      price: 250,
      isVeg: true,
      highlight: 'Veg Special',
      category: 'Highway Thali'
    },
    {
      id: 'th-4',
      name: 'Local Chicken Thali',
      tagline: 'Desi local chicken curry slow-simmered with whole spices',
      price: 300,
      isVeg: false,
      highlight: 'Desi Chicken',
      category: 'Highway Thali'
    },
    {
      id: 'dk-1',
      name: 'Duck Curry',
      tagline: 'Traditional Assam highway specialty with crushed black pepper',
      price: 460,
      halfPrice: 230,
      isVeg: false,
      highlight: 'Assam Hit',
      category: 'Local Specialty'
    },
    {
      id: 'fs-1',
      name: 'Fish Tenga',
      tagline: 'Authentic Assamese tangy fish curry with fresh lemon & herbs',
      price: 220,
      isVeg: false,
      highlight: 'River Fish',
      category: 'Local Specialty'
    },
    {
      id: 'td-1',
      name: 'Tandoori Roti & Naan',
      tagline: 'Roti (₹30) & Butter Naan (₹70) baked on live clay charcoal',
      price: 70,
      isVeg: true,
      highlight: 'Clay Tandoor',
      category: 'Tandoori'
    }
  ];

  const handleAdd = (item: SignatureItem, price: number, variantName?: string) => {
    const finalName = variantName ? `${item.name} (${variantName})` : item.name;
    const finalId = variantName ? `${item.id}-${variantName}` : item.id;
    onAddToCart({ id: finalId, name: finalName, price });
    setAddedItem(finalId);
    setTimeout(() => setAddedItem(null), 1500);
  };

  return (
    <section id="signature" className="relative py-14 sm:py-18 bg-[#F3ECE1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Clean & Tight */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C4A38] mb-2">
            <span className="w-5 h-[2px] bg-[#C9822C]" />
            <span>KITCHEN SPECIALTIES</span>
            <span className="w-5 h-[2px] bg-[#C9822C]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#4F1824] mb-2 [text-wrap:balance]">
            Highway Favorites & Thalis
          </h2>

          <p className="text-sm sm:text-base text-[#44332B]">
            Prepared fresh daily with authentic spices, generous portions, and live tandoor breads.
          </p>
        </div>

        {/* 6 Clean Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {specialties.map((item, idx) => {
            const cornerShapes = [
              'rounded-[28px_12px_28px_12px]',
              'rounded-[12px_28px_12px_28px]',
              'rounded-[24px_12px_24px_12px]'
            ];
            const cardShape = cornerShapes[idx % cornerShapes.length];

            return (
              <div
                key={item.id}
                className={`group relative bg-[#FAF6F0] ${cardShape} p-5 sm:p-6 border border-[#E5D9C8] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#4F1824] text-[#FAF6F0] px-2.5 py-0.5 rounded-full">
                      {item.highlight}
                    </span>

                    <div
                      className={`w-3.5 h-3.5 border-2 rounded-sm flex items-center justify-center ${
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
                  </div>

                  <div className="mb-1.5">
                    <span className="text-[10px] text-[#8C4A38] uppercase font-bold tracking-wider block mb-0.5">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#4F1824] group-hover:text-[#C9822C] transition-colors leading-snug">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#44332B] leading-relaxed mb-4">
                    {item.tagline}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-[#E5D9C8] flex items-center justify-between gap-2">
                  <div>
                    <span className="font-serif text-xl font-bold text-[#4F1824]">
                      ₹{item.price}
                    </span>
                    {item.halfPrice && (
                      <span className="text-[11px] text-[#8C4A38] block font-medium">
                        Half: ₹{item.halfPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {item.halfPrice && (
                      <button
                        onClick={() => handleAdd(item, item.halfPrice!, 'Half')}
                        className="px-2.5 py-1 rounded-full bg-[#E5D9C8] hover:bg-[#D6C6B0] text-[#4F1824] text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Half (₹{item.halfPrice})
                      </button>
                    )}

                    <button
                      onClick={() => handleAdd(item, item.price, item.halfPrice ? 'Full' : undefined)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#4F1824] hover:bg-[#381119] text-[#FAF6F0] text-xs font-semibold shadow-sm transition-all cursor-pointer"
                    >
                      {addedItem === item.id || addedItem === `${item.id}-Full` || addedItem === `${item.id}-Half` ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#C9822C]" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 text-[#C9822C]" />
                          <span>Add {item.halfPrice ? `(₹${item.price})` : ''}</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onOpenOrder(item.name)}
                      className="p-1.5 rounded-full border border-[#4F1824]/30 text-[#4F1824] hover:bg-[#4F1824] hover:text-[#FAF6F0] transition-colors cursor-pointer"
                      title="Quick Order"
                    >
                      <UtensilsCrossed className="w-3.5 h-3.5 text-[#C9822C]" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#menu"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#FAF6F0] text-[#4F1824] font-bold text-xs uppercase tracking-wider border border-[#E5D9C8] hover:border-[#C9822C] hover:text-[#C9822C] shadow-sm transition-all"
          >
            <span>Explore Complete 80+ Dishes Menu Below</span>
          </a>
        </div>

      </div>
    </section>
  );
};
