import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { SignatureFood } from './components/SignatureFood';
import { InteractiveMenu } from './components/InteractiveMenu';
import { FoodExperience } from './components/FoodExperience';
import { WhyVisitUs } from './components/WhyVisitUs';
import { FoodGallery } from './components/FoodGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { OrderModal, CartItem } from './components/OrderModal';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add item to cart
  const handleAddToCart = (dish: { id: string; name: string; price: number }) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: dish.id, name: dish.name, price: dish.price, quantity: 1 }];
    });
  };

  // Update item quantity in cart
  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  // Remove single item
  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear entire cart
  const handleClearCart = () => {
    setCart([]);
  };

  // Open order modal optionally adding a specific dish
  const handleOpenOrder = (selectedDishName?: string) => {
    if (selectedDishName) {
      // Check if already in cart
      const exists = cart.some((item) => item.name === selectedDishName);
      if (!exists) {
        handleAddToCart({
          id: `quick-${Date.now()}`,
          name: selectedDishName,
          price: selectedDishName.includes('Egg') ? 170 : 240,
        });
      }
    }
    setIsOrderModalOpen(true);
  };

  const handleScrollToMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F5E9D5] text-[#34251F] font-sans selection:bg-[#D99035]/30 selection:text-[#541E29] flex flex-col relative overflow-x-hidden">
      
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onOpenOrder={() => setIsOrderModalOpen(true)}
        cartCount={cartTotalItems}
      />

      {/* 2. Hero Section */}
      <main className="flex-1">
        <Hero
          onOpenOrder={() => setIsOrderModalOpen(true)}
          onExploreMenu={handleScrollToMenu}
        />

        {/* 3. Our Story Section */}
        <OurStory />

        {/* 4. Signature Food Showcase */}
        <SignatureFood
          onAddToCart={handleAddToCart}
          onOpenOrder={handleOpenOrder}
        />

        {/* 5. Complete Interactive Menu */}
        <InteractiveMenu
          onAddToCart={handleAddToCart}
          onOpenOrder={handleOpenOrder}
        />

        {/* 6. Special Food Experience (Maroon Full-Width) */}
        <FoodExperience onOpenOrder={() => setIsOrderModalOpen(true)} />

        {/* 7. Why Visit Us (Circular Icons & Organic Shapes) */}
        <WhyVisitUs />

        {/* 8. Food Gallery (Editorial Asymmetrical Grid + Lightbox) */}
        <FoodGallery />

        {/* 9. Google Reviews Section (3.8 ★, 1,039 Reviews) */}
        <ReviewsSection />

        {/* 10. Location and Contact (Curved Map, Timings, Cash only) */}
        <LocationContact onOpenOrder={() => setIsOrderModalOpen(true)} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Ordering Modal (WhatsApp & Phone) */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* 13. Back to Top Floating Controls */}
      <BackToTop onOpenOrder={() => setIsOrderModalOpen(true)} />

    </div>
  );
}
