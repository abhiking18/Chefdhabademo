import React from 'react';
import {
  X,
  Phone,
  MessageCircle,
  UtensilsCrossed,
  Trash2,
  Plus,
  Minus,
  Sparkles,
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
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#FAF4EB] rounded-[36px_16px_36px_16px] overflow-hidden border-2 border-[#D99035]/40 shadow-2xl flex flex-col max-h-[90vh]"
      >
        
        {/* Modal Header */}
        <div className="p-6 bg-[#541E29] text-[#F5E9D5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D99035] text-[#34251F] flex items-center justify-center font-bold shadow">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold">Order From Dhaba</h3>
              <p className="text-xs text-[#E7D5BB]">Direct WhatsApp & Phone Orders</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-[#F5E9D5] transition-colors"
            aria-label="Close order dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Transparent Dhaba Ordering Policy */}
          <div className="p-3.5 rounded-2xl bg-[#F5E9D5] border border-[#E7D5BB] flex items-start gap-2.5 text-xs text-[#4A362D]">
            <Info className="w-4 h-4 text-[#D99035] shrink-0 mt-0.5" />
            <span>
              We prepare hot meals fresh to order. Connect directly with our team on WhatsApp or phone for immediate confirmation and pickup or roadside dine-in.
            </span>
          </div>

          {/* Selected Dishes Tray */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-serif text-base font-bold text-[#541E29]">
                Your Selected Items ({cart.reduce((a, b) => a + b.quantity, 0)})
              </h4>
              {cart.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="text-xs text-[#8C4A38] hover:text-[#541E29] underline"
                >
                  Clear all
                </button>
              )}
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-6 px-4 bg-[#F5E9D5]/60 rounded-2xl border border-dashed border-[#E7D5BB]">
                <p className="text-sm text-[#4A362D] font-medium">
                  No items added yet.
                </p>
                <p className="text-xs text-[#8C4A38] mt-1">
                  You can explore our menu and click "Add", or order directly via WhatsApp below!
                </p>
              </div>
            ) : (
              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#E7D5BB] shadow-sm text-sm"
                  >
                    <div className="flex-1 min-w-0 pr-3">
                      <p className="font-serif font-bold text-[#541E29] truncate">{item.name}</p>
                      <p className="text-xs text-[#8C4A38]">₹{item.price} each</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 bg-[#F5E9D5] rounded-full p-1 border border-[#E7D5BB]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#541E29] hover:bg-[#541E29] hover:text-white transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-xs font-bold text-[#34251F]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#541E29] hover:bg-[#541E29] hover:text-white transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-[#8C4A38] hover:text-[#C62828] transition-colors"
                        title="Remove dish"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Subtotal */}
                <div className="flex items-center justify-between pt-3 px-2 font-serif text-base font-bold text-[#541E29]">
                  <span>Estimated Total</span>
                  <span className="text-[#D99035] text-lg">₹{totalAmount}</span>
                </div>
              </div>
            )}
          </div>

          {/* Direct Ordering Options */}
          <div className="space-y-3 pt-2">
            
            {/* 1. WhatsApp Order Button (Prefilled message) */}
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
              className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg transition-transform transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              <span>
                {cart.length > 0 ? 'Send Order on WhatsApp' : 'Order via WhatsApp'}
              </span>
            </a>

            {/* 2. Direct Call to Order Button */}
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="w-full py-3.5 px-6 rounded-full bg-[#541E29] hover:bg-[#3E161E] text-[#F5E9D5] font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg transition-transform transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 text-[#D99035]" />
              <span>Call to Order: {RESTAURANT_INFO.phone}</span>
            </a>

          </div>

          {/* Payment and Hours Reminder */}
          <div className="text-center text-xs text-[#8C4A38]">
            <p>Cash Only at counter · Open till 11:30 PM</p>
            <p className="mt-0.5 text-[11px] text-[#4A362D]/70">Rangia, Assam 781354</p>
          </div>

        </div>

      </div>

    </div>
  );
};
