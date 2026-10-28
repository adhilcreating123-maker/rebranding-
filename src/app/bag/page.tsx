"use client";

import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, X } from "lucide-react";

export default function BagPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl lg:text-3xl tracking-tight mb-8">Shopping Bag</h1>
      {items.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-lg mb-4">Your bag is empty</p>
          <Link
            href="/women"
            className="inline-flex px-8 py-4 bg-[#111111] text-white !text-white text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-4 pb-6 border-b border-[#E5E5E5]">
                <div className="w-24 h-32 flex-shrink-0 bg-[#F4F4F2] overflow-hidden">
                  <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <Link href={`/product/${item.product.slug}`} className="text-sm hover:opacity-60">
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-[#666666] mt-1">
                          Color: <span className="inline-block w-3 h-3 rounded-full ml-1" style={{ backgroundColor: item.color }} /> | Size: {item.size}
                        </p>
                      </div>
                      <button onClick={() => removeItem(item.product.id, item.size, item.color)} className="p-1 hover:opacity-60">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-[#E5E5E5]">
                      <button onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)} className="p-2 hover:bg-[#F4F4F2]">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-4 text-sm">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)} className="p-2 hover:bg-[#F4F4F2]">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="text-sm">₹{(item.product.price * item.quantity).toLocaleString("en-IN")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-1">
            <div className="border border-[#E5E5E5] p-6 sticky top-24">
              <h2 className="text-lg mb-4">Order Summary</h2>
              <div className="flex items-center justify-between py-2 text-sm">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex items-center justify-between py-2 text-sm border-t border-[#E5E5E5] mt-2">
                <span className="font-medium">Total</span>
                <span className="font-medium">₹{subtotal.toLocaleString("en-IN")}</span>
              </div>
              <button className="w-full mt-6 px-8 py-4 bg-[#111111] text-white text-sm tracking-[0.2em] uppercase hover:bg-black transition-colors">
                CHECKOUT
              </button>
              <Link href="/women" className="block text-center mt-4 text-sm underline text-[#111111] hover:opacity-60">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
