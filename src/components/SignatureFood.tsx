import React, { useState } from 'react';
import { Plus, Check, UtensilsCrossed } from 'lucide-react';
import paneerDalImg from '../assets/images/dish_paneer_dal_handi_1794314544431.jpg';
import tandoorRotiImg from '../assets/images/dish_tandoori_roti_naan_1794314562496.jpg';

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
    <section id="specialties" className="relative py-16 sm:py-24 bg-[#FAF6EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#98543D] mb-3">
            <span className="w-6 h-[1.5px] bg-[#98543D]" />
            <span>KITCHEN SPECIALTIES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#302820] leading-tight mb-4 [text-wrap:balance]">
            Crafted In Our Handis <br />
            <span className="font-normal italic text-[#424735]">& Live Clay Tandoor</span>
          </h2>

          <p className="text-base text-[#302820]/75 leading-relaxed">
            Every dish is made with fresh local ingredients, slow-simmered spices, and pure desi ghee.
          </p>
        </div>

        {/* Feature 1: Paneer & Dal Handi Split Editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          
          {/* Real Food Image in Organic Curved Frame */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[40px_16px_40px_16px] overflow-hidden border-4 border-[#FFFFFF] shadow-2xl bg-[#302820] group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={paneerDalImg}
                  alt="Rich Paneer Butter Masala and Dal Tadka Handi at New Highway Chef Dhaba"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-[#F2EBDD] pointer-events-none">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D8CBB6]">
                    Traditional Handi
                  </span>
                  <p className="font-serif text-lg font-bold">Paneer & Slow-Simmered Dal</p>
                </div>
                <span className="text-xs bg-[#98543D] px-3 py-1 rounded-full font-semibold">
                  Pure Desi Spices
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Menu List */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Item 1: Paneer Butter Masala */}
            <div className="pb-5 border-b border-[#D8CBB6]">
              <div className="flex items-baseline justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#424735]" title="Vegetarian" />
                  <h3 className="font-serif text-xl font-bold text-[#302820]">Paneer Butter Masala</h3>
                </div>
                <span className="font-serif text-lg font-bold text-[#98543D]">₹230</span>
              </div>
              <p className="text-xs text-[#302820]/70 mb-3 leading-relaxed">
                Tender malai paneer cubes simmered in a velvet tomato, butter, and cashew gravy with fresh ginger juliennes.
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleAdd('vg-15', 'Paneer Butter Masala', 230)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#302820] hover:bg-[#211A14] text-[#F2EBDD] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                >
                  {addedItem === 'vg-15' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#D8CBB6]" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5 text-[#D8CBB6]" />
                      <span>Add to Order</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onOpenOrder('Paneer Butter Masala')}
                  className="p-1.5 rounded-full border border-[#302820]/30 text-[#302820] hover:bg-[#302820] hover:text-[#F2EBDD] transition-colors cursor-pointer"
                  title="Quick Order"
                >
                  <UtensilsCrossed className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Item 2: Paneer Thali */}
            <div className="pb-5 border-b border-[#D8CBB6]">
              <div className="flex items-baseline justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#424735]" title="Vegetarian" />
                  <h3 className="font-serif text-xl font-bold text-[#302820]">Paneer Thali Special</h3>
                </div>
                <span className="font-serif text-lg font-bold text-[#98543D]">₹250</span>
              </div>
              <p className="text-xs text-[#302820]/70 mb-3 leading-relaxed">
                Complete meal with motor paneer masala, yellow dal tadka, basmati rice, hot tandoori roti, roasted papad, and fresh salad.
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleAdd('th-7', 'Paneer Thali', 250)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#302820] hover:bg-[#211A14] text-[#F2EBDD] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                >
                  {addedItem === 'th-7' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#D8CBB6]" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5 text-[#D8CBB6]" />
                      <span>Add to Order</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onOpenOrder('Paneer Thali')}
                  className="p-1.5 rounded-full border border-[#302820]/30 text-[#302820] hover:bg-[#302820] hover:text-[#F2EBDD] transition-colors cursor-pointer"
                  title="Quick Order"
                >
                  <UtensilsCrossed className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Item 3: Veg Thali */}
            <div>
              <div className="flex items-baseline justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#424735]" title="Vegetarian" />
                  <h3 className="font-serif text-xl font-bold text-[#302820]">Highway Veg Thali</h3>
                </div>
                <span className="font-serif text-lg font-bold text-[#98543D]">₹120</span>
              </div>
              <p className="text-xs text-[#302820]/70 mb-3 leading-relaxed">
                Our bestselling daily plate with seasonal mixed vegetables, yellow dal, steamed rice, and tandoori roti.
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleAdd('th-1', 'Veg Thali', 120)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#302820] hover:bg-[#211A14] text-[#F2EBDD] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                >
                  {addedItem === 'th-1' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#D8CBB6]" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5 text-[#D8CBB6]" />
                      <span>Add to Order</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onOpenOrder('Veg Thali')}
                  className="p-1.5 rounded-full border border-[#302820]/30 text-[#302820] hover:bg-[#302820] hover:text-[#F2EBDD] transition-colors cursor-pointer"
                  title="Quick Order"
                >
                  <UtensilsCrossed className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Feature 2: Clay Tandoor & Rotis Split Editorial (Inverted Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Editorial Menu List */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-between space-y-6">
            
            {/* Item 1: Tandoori Roti */}
            <div className="pb-5 border-b border-[#D8CBB6]">
              <div className="flex items-baseline justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#424735]" title="Vegetarian" />
                  <h3 className="font-serif text-xl font-bold text-[#302820]">Tandoori Roti (Plain / Butter)</h3>
                </div>
                <span className="font-serif text-lg font-bold text-[#98543D]">₹30 / ₹40</span>
              </div>
              <p className="text-xs text-[#302820]/70 mb-3 leading-relaxed">
                Hand-stretched whole wheat flatbread slapped on the walls of our red-hot clay tandoor and blistered over live embers.
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleAdd('tr-plain', 'Tandoori Roti', 30)}
                  className="px-3 py-1.5 rounded-full bg-[#D8CBB6] hover:bg-[#C4B59D] text-[#302820] text-xs font-semibold transition-colors cursor-pointer"
                >
                  Plain ₹30
                </button>
                <button
                  onClick={() => handleAdd('tr-butter', 'Tandoori Roti Butter', 40)}
                  className="px-3 py-1.5 rounded-full bg-[#302820] hover:bg-[#211A14] text-[#F2EBDD] text-xs font-semibold transition-colors cursor-pointer"
                >
                  Butter ₹40
                </button>
              </div>
            </div>

            {/* Item 2: Butter Naan & Garlic Naan */}
            <div className="pb-5 border-b border-[#D8CBB6]">
              <div className="flex items-baseline justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#424735]" title="Vegetarian" />
                  <h3 className="font-serif text-xl font-bold text-[#302820]">Butter Naan / Garlic Naan</h3>
                </div>
                <span className="font-serif text-lg font-bold text-[#98543D]">₹70 / ₹80</span>
              </div>
              <p className="text-xs text-[#302820]/70 mb-3 leading-relaxed">
                Pillowy leavened bread brushed liberally with golden desi butter or aromatic toasted garlic cloves.
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleAdd('naan-butter', 'Butter Naan', 70)}
                  className="px-3 py-1.5 rounded-full bg-[#302820] hover:bg-[#211A14] text-[#F2EBDD] text-xs font-semibold transition-colors cursor-pointer"
                >
                  Butter Naan ₹70
                </button>
                <button
                  onClick={() => handleAdd('naan-garlic', 'Garlic Naan', 80)}
                  className="px-3 py-1.5 rounded-full bg-[#D8CBB6] hover:bg-[#C4B59D] text-[#302820] text-xs font-semibold transition-colors cursor-pointer"
                >
                  Garlic Naan ₹80
                </button>
              </div>
            </div>

            {/* Item 3: Duck Curry & Local Chicken */}
            <div>
              <div className="flex items-baseline justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#98543D]" title="Non-Vegetarian" />
                  <h3 className="font-serif text-xl font-bold text-[#302820]">Duck Curry (Assam Specialty)</h3>
                </div>
                <span className="font-serif text-lg font-bold text-[#98543D]">₹230 / ₹460</span>
              </div>
              <p className="text-xs text-[#302820]/70 mb-3 leading-relaxed">
                Traditional Highway Chef dhaba recipe with hearty country duck, crushed black pepper, and whole bay leaves.
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleAdd('dk-half', 'Duck Curry (Half)', 230)}
                  className="px-3 py-1.5 rounded-full bg-[#D8CBB6] hover:bg-[#C4B59D] text-[#302820] text-xs font-semibold transition-colors cursor-pointer"
                >
                  Half ₹230
                </button>
                <button
                  onClick={() => handleAdd('dk-full', 'Duck Curry (Full)', 460)}
                  className="px-3 py-1.5 rounded-full bg-[#98543D] hover:bg-[#7C422F] text-[#F2EBDD] text-xs font-semibold transition-colors cursor-pointer"
                >
                  Full ₹460
                </button>
              </div>
            </div>

          </div>

          {/* Real Food Image in Organic Curved Frame */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-[16px_40px_16px_40px] overflow-hidden border-4 border-[#FFFFFF] shadow-2xl bg-[#302820] group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={tandoorRotiImg}
                  alt="Freshly baked blistered Indian Tandoori Rotis and Butter Naan"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-[#F2EBDD] pointer-events-none">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D8CBB6]">
                    Live Charcoal Oven
                  </span>
                  <p className="font-serif text-lg font-bold">Charred Rotis & Butter Naan</p>
                </div>
                <span className="text-xs bg-[#424735] px-3 py-1 rounded-full font-semibold">
                  From ₹30
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
