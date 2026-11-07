import React, { useState } from 'react';
import { Plus, Check, Edit2, Sparkles, UtensilsCrossed } from 'lucide-react';

interface SignatureFoodProps {
  onAddToCart: (dish: { id: string; name: string; price: number }) => void;
  onOpenOrder: (selectedDish?: string) => void;
}

export const SignatureFood: React.FC<SignatureFoodProps> = ({ onAddToCart, onOpenOrder }) => {
  // Allow interactive inline price editing to satisfy client demo requirements
  const [paneerPrice, setPaneerPrice] = useState<number>(240);
  const [eggPrice, setEggPrice] = useState<number>(170);
  const [isEditingPaneer, setIsEditingPaneer] = useState(false);
  const [isEditingEgg, setIsEditingEgg] = useState(false);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const handleAdd = (dish: { id: string; name: string; price: number }) => {
    onAddToCart(dish);
    setAddedItem(dish.id);
    setTimeout(() => setAddedItem(null), 1800);
  };

  return (
    <section id="signature" className="relative py-24 sm:py-32 bg-[#F5E9D5] overflow-hidden">
      
      {/* Decorative Saffron Circle Backdrop */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#E7D5BB]/30 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-[#541E29] mb-3">
            <Sparkles className="w-4 h-4 text-[#D99035]" />
            <span>FEATURED HIGHLIGHTS</span>
            <Sparkles className="w-4 h-4 text-[#D99035]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#541E29] mb-4 [text-wrap:balance]">
            Made For Your Cravings
          </h2>

          <p className="text-base sm:text-lg text-[#4A362D] max-w-2xl mx-auto">
            Inspired by the hearty recipes loved at Indian dhabas — fresh, flavorful, and generously served.
          </p>

          <p className="mt-2 text-xs text-[#8C4A38] bg-[#FAF4EB] py-1.5 px-4 rounded-full inline-block border border-[#E7D5BB]">
            Demo Note: Sample dishes & editable prices shown. Real offerings to be verified prior to launch.
          </p>
        </div>

        {/* 2-Column Asymmetrical Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          
          {/* Card 1: Paneer Thali (Organic Arched Frame 1) */}
          <div className="group relative bg-[#FAF4EB] rounded-[48px_16px_48px_16px] p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#E7D5BB] flex flex-col justify-between">
            <div>
              {/* Image with Unique Organic Curved Top Frame */}
              <div className="relative aspect-[4/3] rounded-[36px_12px_24px_12px] overflow-hidden bg-[#34251F] shadow-md mb-6">
                <img
                  src="/src/assets/images/dish_paneer_thali_1794045107967.jpg"
                  alt="Dhaba Paneer Thali"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 bg-[#541E29]/90 text-[#F5E9D5] text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                  Pure Vegetarian
                </div>

                {/* Saffron Price Highlight with Quick Inline Edit */}
                <div className="absolute bottom-4 right-4 bg-[#D99035] text-[#34251F] font-bold text-base px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  {isEditingPaneer ? (
                    <input
                      type="number"
                      value={paneerPrice}
                      onChange={(e) => setPaneerPrice(Math.max(0, Number(e.target.value)))}
                      onBlur={() => setIsEditingPaneer(false)}
                      autoFocus
                      className="w-16 bg-white text-[#34251F] px-1 rounded text-center outline-none"
                    />
                  ) : (
                    <span>₹{paneerPrice}</span>
                  )}
                  <button
                    onClick={() => setIsEditingPaneer(!isEditingPaneer)}
                    className="p-0.5 hover:text-white transition-colors"
                    title="Edit demo price"
                    aria-label="Edit demo price"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#541E29]">
                  Paneer Thali
                </h3>
                <span className="text-xs font-semibold text-[#8C4A38] uppercase tracking-wider bg-[#E7D5BB]/50 px-2.5 py-1 rounded-md">
                  Sample Plate
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#4A362D] leading-relaxed mb-6">
                A wholesome plate featuring soft cottage cheese in rich tomato-cream gravy, served alongside tempered yellow dal, freshly tossed cumin rice, tandoori rotis, crisp papad and cooling cucumber raita.
              </p>
            </div>

            {/* Actions Bottom Bar */}
            <div className="pt-6 border-t border-[#E7D5BB] flex items-center justify-between gap-4">
              <span className="text-xs text-[#8C4A38]">
                Estimated ₹{paneerPrice} · Authentic Dhaba Style
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleAdd({ id: 'sig-paneer', name: 'Special Paneer Thali', price: paneerPrice })}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#541E29] hover:bg-[#3E161E] text-[#F5E9D5] text-sm font-semibold shadow hover:shadow-md transition-all cursor-pointer"
                >
                  {addedItem === 'sig-paneer' ? (
                    <>
                      <Check className="w-4 h-4 text-[#D99035]" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 text-[#D99035]" />
                      <span>Add to Order</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onOpenOrder('Paneer Thali')}
                  className="p-2.5 rounded-full border border-[#541E29] text-[#541E29] hover:bg-[#541E29] hover:text-[#F5E9D5] transition-colors"
                  title="Quick Order via WhatsApp"
                >
                  <UtensilsCrossed className="w-4 h-4 text-[#D99035]" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Egg Curry (Organic Arched Frame 2) */}
          <div className="group relative bg-[#FAF4EB] rounded-[16px_48px_16px_48px] p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#E7D5BB] flex flex-col justify-between">
            <div>
              {/* Image with Unique Organic Curved Shape 2 */}
              <div className="relative aspect-[4/3] rounded-[12px_36px_12px_24px] overflow-hidden bg-[#34251F] shadow-md mb-6">
                <img
                  src="/src/assets/images/dish_egg_curry_1794045110715.jpg"
                  alt="Dhaba Style Egg Curry"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 bg-[#D99035] text-[#34251F] text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  Highway Classic
                </div>

                {/* Saffron Price Highlight with Quick Inline Edit */}
                <div className="absolute bottom-4 right-4 bg-[#D99035] text-[#34251F] font-bold text-base px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  {isEditingEgg ? (
                    <input
                      type="number"
                      value={eggPrice}
                      onChange={(e) => setEggPrice(Math.max(0, Number(e.target.value)))}
                      onBlur={() => setIsEditingEgg(false)}
                      autoFocus
                      className="w-16 bg-white text-[#34251F] px-1 rounded text-center outline-none"
                    />
                  ) : (
                    <span>₹{eggPrice}</span>
                  )}
                  <button
                    onClick={() => setIsEditingEgg(!isEditingEgg)}
                    className="p-0.5 hover:text-white transition-colors"
                    title="Edit demo price"
                    aria-label="Edit demo price"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#541E29]">
                  Dhaba Egg Curry
                </h3>
                <span className="text-xs font-semibold text-[#8C4A38] uppercase tracking-wider bg-[#E7D5BB]/50 px-2.5 py-1 rounded-md">
                  Sample Plate
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#4A362D] leading-relaxed mb-6">
                Simmered in a rich, deeply caramelized onion and tomato masala, garnished with fresh green coriander and julienned ginger. Perfect to pair with hot tandoori roti or steamed rice.
              </p>
            </div>

            {/* Actions Bottom Bar */}
            <div className="pt-6 border-t border-[#E7D5BB] flex items-center justify-between gap-4">
              <span className="text-xs text-[#8C4A38]">
                Estimated ₹{eggPrice} · Non-Veg Specialty
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleAdd({ id: 'sig-egg', name: 'Rustic Dhaba Egg Curry', price: eggPrice })}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#541E29] hover:bg-[#3E161E] text-[#F5E9D5] text-sm font-semibold shadow hover:shadow-md transition-all cursor-pointer"
                >
                  {addedItem === 'sig-egg' ? (
                    <>
                      <Check className="w-4 h-4 text-[#D99035]" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 text-[#D99035]" />
                      <span>Add to Order</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onOpenOrder('Dhaba Egg Curry')}
                  className="p-2.5 rounded-full border border-[#541E29] text-[#541E29] hover:bg-[#541E29] hover:text-[#F5E9D5] transition-colors"
                  title="Quick Order via WhatsApp"
                >
                  <UtensilsCrossed className="w-4 h-4 text-[#D99035]" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
