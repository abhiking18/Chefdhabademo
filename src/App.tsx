import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { OwnerWelcome } from './components/OwnerWelcome';
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
import { AdminPanel } from './components/AdminPanel';
import {
  fetchGalleryPhotos,
  fetchMenuItems,
  logCustomerOrder
} from './services/supabaseService';
import { GalleryItem, MenuItem, GALLERY_ITEMS, INITIAL_MENU_ITEMS } from './data/restaurantData';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Supabase Dynamic Data States
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(INITIAL_MENU_ITEMS);
  const [isLiveFromSupabase, setIsLiveFromSupabase] = useState(false);

  // Load from Supabase on mount
  const loadSupabaseData = useCallback(async () => {
    try {
      const [galleryRes, menuRes] = await Promise.all([
        fetchGalleryPhotos(),
        fetchMenuItems()
      ]);

      if (galleryRes.items && galleryRes.items.length > 0) {
        setGalleryItems(galleryRes.items);
      }
      if (menuRes.items && menuRes.items.length > 0) {
        setMenuItems(menuRes.items);
      }
      setIsLiveFromSupabase(galleryRes.isLive || menuRes.isLive);
    } catch (err) {
      console.warn('Using default restaurant data', err);
    }
  }, []);

  useEffect(() => {
    loadSupabaseData();
  }, [loadSupabaseData]);

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
      const exists = cart.some((item) => item.name === selectedDishName);
      if (!exists) {
        const found = menuItems.find((m) => m.name === selectedDishName);
        handleAddToCart({
          id: `quick-${Date.now()}`,
          name: selectedDishName,
          price: found ? found.price : (selectedDishName.includes('Egg') ? 110 : 200),
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
    <div className="min-h-screen bg-[#F8F0E9] text-[#633C38] font-sans selection:bg-[#C97870] selection:text-[#F8F0E9] flex flex-col relative overflow-x-hidden">
      
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

        {/* 4. Owner & Founder Personal Welcome */}
        <OwnerWelcome onOpenOrder={() => setIsOrderModalOpen(true)} />

        {/* 5. Signature Food Showcase */}
        <SignatureFood
          onAddToCart={handleAddToCart}
          onOpenOrder={handleOpenOrder}
        />

        {/* 5. Complete Interactive Menu (Dynamic from Superbase) */}
        <InteractiveMenu
          items={menuItems}
          onAddToCart={handleAddToCart}
          onOpenOrder={handleOpenOrder}
        />

        {/* 6. Special Food Experience (Maroon Full-Width) */}
        <FoodExperience onOpenOrder={() => setIsOrderModalOpen(true)} />

        {/* 7. Why Visit Us (Circular Icons & Organic Shapes) */}
        <WhyVisitUs />

        {/* 8. Food Gallery (Dynamic from Superbase + Full Lightbox) */}
        <FoodGallery items={galleryItems} />

        {/* 9. Google Reviews Section (3.8 Rating, 1,039 Reviews) */}
        <ReviewsSection />

        {/* 10. Location and Contact (Curved Map, Timings, Cash only) */}
        <LocationContact onOpenOrder={() => setIsOrderModalOpen(true)} />
      </main>

      {/* 11. Footer with Superbase Launcher */}
      <Footer onOpenAdmin={() => setIsAdminPanelOpen(true)} />

      {/* 12. Ordering Modal (WhatsApp & Phone with Supabase logging) */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* 13. Superbase Admin Studio / Photo & Details Manager */}
      <AdminPanel
        isOpen={isAdminPanelOpen}
        onClose={() => setIsAdminPanelOpen(false)}
        galleryItems={galleryItems}
        menuItems={menuItems}
        onRefreshData={loadSupabaseData}
      />

      {/* 14. Back to Top Floating Controls */}
      <BackToTop onOpenOrder={() => setIsOrderModalOpen(true)} />

    </div>
  );
}
