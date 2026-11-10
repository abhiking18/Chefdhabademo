import React from 'react';
import {
  X,
  Phone,
  MessageCircle,
  UtensilsCrossed,
  Trash2,
  Plus,
  Minus,
  Info
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { logCustomerOrder } from '../services/supabaseService';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Build WhatsApp prefilled message
  let whatsappMessage = RESTAURANT_INFO.whatsappPrefilledMessage;
  if (cart.length > 0) {
    const itemsList = cart
      .map((item) => `• ${item.name} x${item.quantity} (₹${item.price * item.quantity})`)
      .join('\n');
    whatsappMessage = `Hello New Highway Chef Dhaba, I would like to place an order for:\n\n${itemsList}\n\nEstimated Total: ₹${totalAmount}\n\nPlease confirm availability and preparation time. Thank you!`;
  }

  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="fixed inset-0 z-50 bg-[#302820]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#FAF6EE] rounded-[28px_12px_28px_12px] overflow-hidden border border-[#D8CBB6] shadow-2xl flex flex-col max-h-[90vh]"
      >
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#302820] text-[#F2EBDD] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#98543D] text-[#F2EBDD] flex items-center justify-center font-bold shadow-xs">
              <UtensilsCrossed className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold">Order From Dhaba</h3>
              <p className="text-xs text-[#D8CBB6]">Direct WhatsApp & Phone Orders</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#F2EBDD] transition-colors cursor-pointer"
            aria-label="Close order dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Policy note */}
          <div className="p-3.5 rounded-[16px] bg-[#F2EBDD] border border-[#D8CBB6] flex items-start gap-2.5 text-xs text-[#302820]/80">
            <Info className="w-4 h-4 text-[#98543D] shrink-0 mt-0.5" />
            <span>
              All dishes are cooked fresh to order on live clay tandoors and cast-iron tawas. Send your selection directly to the kitchen on WhatsApp or call for immediate takeaway or table preparation.
            </span>
          </div>

          {/* Selected Dishes Tray */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-serif text-base font-bold text-[#302820]">
                Your Order ({cart.reduce((a, b) => a + b.quantity, 0)} items)
              </h4>
              {cart.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="text-xs text-[#98543D] hover:underline cursor-pointer"
                >
                  Clear all
                </button>
              )}
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-8 px-4 bg-[#F2EBDD]/50 rounded-[16px] border border-dashed border-[#D8CBB6]">
                <p className="font-serif text-sm text-[#302820] font-bold">
                  No items in cart yet
                </p>
                <p className="text-xs text-[#302820]/70 mt-1">
                  Browse our menu and click "Add", or contact us directly on WhatsApp below.
                </p>
              </div>
            ) : (
              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 rounded-[14px] bg-[#FAF6EE] border border-[#D8CBB6] shadow-xs text-sm"
                  >
                    <div className="flex-1 min-w-0 pr-3">
                      <p className="font-serif font-bold text-[#302820] truncate">{item.name}</p>
                      <p className="text-xs text-[#98543D]">₹{item.price} each</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 bg-[#F2EBDD] rounded-full p-1 border border-[#D8CBB6]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#302820] hover:bg-[#302820] hover:text-[#F2EBDD] transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-xs font-bold text-[#302820]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#302820] hover:bg-[#302820] hover:text-[#F2EBDD] transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-[#302820]/60 hover:text-[#98543D] transition-colors cursor-pointer"
                        title="Remove dish"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Subtotal */}
                <div className="flex items-center justify-between pt-3 px-2 font-serif text-base font-bold text-[#302820]">
                  <span>Estimated Total</span>
                  <span className="text-[#98543D] text-lg font-bold">₹{totalAmount}</span>
                </div>
              </div>
            )}
          </div>

          {/* Direct Ordering Options */}
          <div className="space-y-3 pt-2">
            
            {/* 1. WhatsApp Order Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (cart.length > 0) {
                  logCustomerOrder({
                    id: `ord-${Date.now()}`,
                    customerName: 'Website Visitor',
                    phone: 'WhatsApp Order',
                    items: cart,
                    totalAmount,
                  });
                }
              }}
              className="w-full py-3 px-6 rounded-full bg-[#424735] hover:bg-[#303426] text-[#F2EBDD] font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#D8CBB6]" />
              <span>
                {cart.length > 0 ? 'Send Order on WhatsApp' : 'Order via WhatsApp'}
              </span>
            </a>

            {/* 2. Direct Call to Order Button */}
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="w-full py-3 px-6 rounded-full bg-[#302820] hover:bg-[#211A14] text-[#F2EBDD] font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md transition-all"
            >
              <Phone className="w-4 h-4 text-[#98543D]" />
              <span>Call to Order: {RESTAURANT_INFO.phone}</span>
            </a>

          </div>

          {/* Payment and Hours Reminder */}
          <div className="text-center text-xs text-[#302820]/70">
            <p>Cash Only at counter · Open till 11:30 PM</p>
            <p className="mt-0.5 text-[11px] text-[#302820]/50">NH-31 Rangia, Assam 781354</p>
          </div>

        </div>

      </div>

    </div>
  );
};
