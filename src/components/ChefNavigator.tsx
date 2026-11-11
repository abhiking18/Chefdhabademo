import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface ChefNavigatorProps {
  onOpenOrder: (dishName?: string) => void;
}

export const ChefNavigator: React.FC<ChefNavigatorProps> = ({ onOpenOrder }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolling(true);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const handleClick = () => {
    const menuEl = document.querySelector('#menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenOrder();
    }
  };

  return (
    <div
      className="fixed z-50 pointer-events-none select-none right-4 sm:right-6 bottom-6 sm:top-[25vh]"
      style={{
        // Smooth vertical scroll tracking on desktop while remaining fixed in viewport
        transform: `translateY(${Math.min(scrollY * 0.05, 30)}px)`,
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -8, 0],
          rotate: isScrolling ? -2 : 0,
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          },
          rotate: {
            duration: 0.3,
            ease: 'easeOut',
          },
        }}
        whileHover={{
          scale: 1.05,
          rotate: 3,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="relative cursor-pointer pointer-events-auto group shrink-0 drop-shadow-2xl"
        title="Click to view our fresh dhaba menu & order!"
      >
        {/* Isolated Full-Body Chef Mascot (No background box/cards/text) */}
        <div className="w-[90px] sm:w-[140px] h-auto overflow-visible">
          <img
            src="/assets/aistudio/Gemini_Generated_Image_480vsw480vsw480v_645cf53c.png"
            alt="New Highway Chef Dhaba Animated Mascot"
            className="w-full h-auto object-contain transition-transform duration-300 group-hover:brightness-105"
            loading="eager"
          />
        </div>
      </motion.div>
    </div>
  );
};
