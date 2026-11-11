import React, { useState } from 'react';
import { Plus, Check, UtensilsCrossed, Sparkles, Flame } from 'lucide-react';
import { motion } from 'motion/react';
import { DietaryIcon } from './DietaryIcon';

interface SignatureFoodProps {
  onAddToCart: (dish: { id: string; name: string; price: number }) => void;
  onOpenOrder: (selectedDish?: string) => void;
}

export const SignatureFood: React.FC<SignatureFoodProps> = ({ onAddToCart, onOpenOrder }) => {
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const handleAdd = (id: string, name: string, price: number) => {
    onAddToCart({ id, name, price });
    setAddedItem(id);
    setTimeout(() => setAddedItem(null), 1500);
  };

  return (
    <section id="specialties" className="relative py-20 sm:py-28 bg-[#F8F0E9] text-[#633C38] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8C5BE]/50 border border-[#E8C5BE] text-[#C97870] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C97870]" />
            <span>KITCHEN SPECIALTIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#633C38] leading-tight mb-4">
            Cooked In Cast-Iron Handis <br />
            <span className="text-[#C97870]">& Charcoal Tandoor</span>
          </h2>

          <p className="text-base text-[#8C5752] font-medium leading-relaxed">
            Every dish is made with fresh local ingredients, freshly pounded spices, and rich desi ghee.
          </p>
        </div>

        {/* 2-Column Specialties Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Column 1: Traditional Handi & Thali Specialties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between space-y-6 p-6 sm:p-8 rounded-3xl bg-[#FFFDFC] border border-[#E8C5BE] shadow-md"
          >
            <div className="pb-4 border-b border-[#E8C5BE] flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#C97870] block mb-1">
                  Traditional Handi & Thalis
                </span>
                <h3 className="text-2xl font-bold text-[#633C38]">
                  Paneer & Slow-Simmered Meals
                </h3>
              </div>
              <span className="text-xs bg-[#E8C5BE]/50 text-[#633C38] px-3.5 py-1 rounded-full font-bold border border-[#E8C5BE]">
                Pure Desi Spices
              </span>
            </div>

            <div className="space-y-5 flex-1 flex flex-col justify-between">
              {/* Item 1: Paneer Butter Masala */}
              <div className="p-5 rounded-2xl bg-[#F8F0E9] border border-[#E8C5BE] hover:border-[#C97870] transition-all">
                <div className="flex items-baseline justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <DietaryIcon isVeg={true} className="w-4 h-4" />
                    <h4 className="text-lg font-bold text-[#633C38]">Paneer Butter Masala</h4>
                  </div>
                  <span className="text-lg font-bold text-[#C97870]">₹230</span>
                </div>
                <p className="text-xs text-[#8C5752] mb-3 leading-relaxed">
                  Tender malai paneer simmered in velvet tomato, cashew and butter gravy with fresh ginger juliennes.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleAdd('vg-15', 'Paneer Butter Masala', 230)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C97870] hover:bg-[#b5655d] text-[#FFFDFC] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                  >
                    {addedItem === 'vg-15' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#FFFDFC]" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5 text-[#FFFDFC]" />
                        <span>Add Dish</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onOpenOrder('Paneer Butter Masala')}
                    className="p-2 rounded-full border border-[#E8C5BE] text-[#8C5752] hover:text-[#633C38] hover:bg-[#FFFDFC] transition-colors cursor-pointer"
                    title="Quick Order"
                  >
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Item 2: Paneer Thali */}
              <div className="p-5 rounded-2xl bg-[#F8F0E9] border border-[#E8C5BE] hover:border-[#C97870] transition-all">
                <div className="flex items-baseline justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <DietaryIcon isVeg={true} className="w-4 h-4" />
                    <h4 className="text-lg font-bold text-[#633C38]">Paneer Thali Special</h4>
                  </div>
                  <span className="text-lg font-bold text-[#C97870]">₹250</span>
                </div>
                <p className="text-xs text-[#8C5752] mb-3 leading-relaxed">
                  Full royal thali: rich motor paneer, yellow dal tadka, aromatic rice, tandoori roti, papad & salad.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleAdd('th-7', 'Paneer Thali', 250)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C97870] hover:bg-[#b5655d] text-[#FFFDFC] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                  >
                    {addedItem === 'th-7' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#FFFDFC]" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5 text-[#FFFDFC]" />
                        <span>Add Dish</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onOpenOrder('Paneer Thali')}
                    className="p-2 rounded-full border border-[#E8C5BE] text-[#8C5752] hover:text-[#633C38] hover:bg-[#FFFDFC] transition-colors cursor-pointer"
                    title="Quick Order"
                  >
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Item 3: Veg Thali */}
              <div className="p-5 rounded-2xl bg-[#F8F0E9] border border-[#E8C5BE] hover:border-[#C97870] transition-all">
                <div className="flex items-baseline justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <DietaryIcon isVeg={true} className="w-4 h-4" />
                    <h4 className="text-lg font-bold text-[#633C38]">Highway Veg Thali</h4>
                  </div>
                  <span className="text-lg font-bold text-[#C97870]">₹120</span>
                </div>
                <p className="text-xs text-[#8C5752] mb-3 leading-relaxed">
                  Daily bestseller with seasonal mixed vegetables, yellow dal, steamed rice, and fresh tandoori roti.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleAdd('th-1', 'Veg Thali', 120)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C97870] hover:bg-[#b5655d] text-[#FFFDFC] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                  >
                    {addedItem === 'th-1' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#FFFDFC]" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5 text-[#FFFDFC]" />
                        <span>Add Dish</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onOpenOrder('Veg Thali')}
                    className="p-2 rounded-full border border-[#E8C5BE] text-[#8C5752] hover:text-[#633C38] hover:bg-[#FFFDFC] transition-colors cursor-pointer"
                    title="Quick Order"
                  >
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Clay Tandoor & Assamese Specialties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between space-y-6 p-6 sm:p-8 rounded-3xl bg-[#FFFDFC] border border-[#E8C5BE] shadow-md"
          >
            <div className="pb-4 border-b border-[#E8C5BE] flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#C97870] block mb-1">
                  Live Charcoal Oven
                </span>
                <h3 className="text-2xl font-bold text-[#633C38]">
                  Charred Rotis & Local Classics
                </h3>
              </div>
              <span className="inline-flex items-center gap-1 text-xs bg-[#C97870] text-[#FFFDFC] px-3.5 py-1 rounded-full font-bold">
                <Flame className="w-3 h-3 text-[#FFFDFC]" />
                <span>From ₹30</span>
              </span>
            </div>

            <div className="space-y-5 flex-1 flex flex-col justify-between">
              {/* Item 1: Tandoori Roti */}
              <div className="p-5 rounded-2xl bg-[#F8F0E9] border border-[#E8C5BE] hover:border-[#C97870] transition-all">
                <div className="flex items-baseline justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <DietaryIcon isVeg={true} className="w-4 h-4" />
                    <h4 className="text-lg font-bold text-[#633C38]">Tandoori Roti (Plain / Butter)</h4>
                  </div>
                  <span className="text-lg font-bold text-[#C97870]">₹30 / ₹40</span>
                </div>
                <p className="text-xs text-[#8C5752] mb-3 leading-relaxed">
                  Hand-stretched whole wheat flatbread slapped on the walls of our red-hot clay tandoor over live embers.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleAdd('tr-plain', 'Tandoori Roti', 30)}
                    className="px-3.5 py-1.5 rounded-full bg-[#E8C5BE] hover:bg-[#d9b2aa] text-[#633C38] text-xs font-bold transition-colors cursor-pointer"
                  >
                    Plain ₹30
                  </button>
                  <button
                    onClick={() => handleAdd('tr-butter', 'Tandoori Roti Butter', 40)}
                    className="px-3.5 py-1.5 rounded-full bg-[#C97870] hover:bg-[#b5655d] text-[#FFFDFC] text-xs font-bold transition-colors cursor-pointer shadow-sm"
                  >
                    Butter ₹40
                  </button>
                </div>
              </div>

              {/* Item 2: Butter Naan & Garlic Naan */}
              <div className="p-5 rounded-2xl bg-[#F8F0E9] border border-[#E8C5BE] hover:border-[#C97870] transition-all">
                <div className="flex items-baseline justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <DietaryIcon isVeg={true} className="w-4 h-4" />
                    <h4 className="text-lg font-bold text-[#633C38]">Butter Naan / Garlic Naan</h4>
                  </div>
                  <span className="text-lg font-bold text-[#C97870]">₹70 / ₹80</span>
                </div>
                <p className="text-xs text-[#8C5752] mb-3 leading-relaxed">
                  Pillowy leavened bread brushed liberally with golden desi ghee or aromatic toasted garlic cloves.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleAdd('naan-butter', 'Butter Naan', 70)}
                    className="px-3.5 py-1.5 rounded-full bg-[#C97870] hover:bg-[#b5655d] text-[#FFFDFC] text-xs font-bold transition-colors cursor-pointer shadow-sm"
                  >
                    Butter Naan ₹70
                  </button>
                  <button
                    onClick={() => handleAdd('naan-garlic', 'Garlic Naan', 80)}
                    className="px-3.5 py-1.5 rounded-full bg-[#E8C5BE] hover:bg-[#d9b2aa] text-[#633C38] text-xs font-bold transition-colors cursor-pointer"
                  >
                    Garlic Naan ₹80
                  </button>
                </div>
              </div>

              {/* Item 3: Duck Curry */}
              <div className="p-5 rounded-2xl bg-[#F8F0E9] border border-[#E8C5BE] hover:border-[#C97870] transition-all">
                <div className="flex items-baseline justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <DietaryIcon isVeg={false} className="w-4 h-4" />
                    <h4 className="text-lg font-bold text-[#633C38]">Duck Curry (Assam Specialty)</h4>
                  </div>
                  <span className="text-lg font-bold text-[#C97870]">₹230 / ₹460</span>
                </div>
                <p className="text-xs text-[#8C5752] mb-3 leading-relaxed">
                  Traditional Highway Chef dhaba recipe with country duck, crushed black pepper, and whole bay leaves.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleAdd('dk-half', 'Duck Curry (Half)', 230)}
                    className="px-3.5 py-1.5 rounded-full bg-[#E8C5BE] hover:bg-[#d9b2aa] text-[#633C38] text-xs font-bold transition-colors cursor-pointer"
                  >
                    Half ₹230
                  </button>
                  <button
                    onClick={() => handleAdd('dk-full', 'Duck Curry (Full)', 460)}
                    className="px-3.5 py-1.5 rounded-full bg-[#C97870] hover:bg-[#b5655d] text-[#FFFDFC] text-xs font-bold transition-colors cursor-pointer shadow-sm"
                  >
                    Full ₹460
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
