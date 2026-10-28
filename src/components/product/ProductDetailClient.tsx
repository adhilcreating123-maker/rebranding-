"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { Heart, Minus, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { Product3DViewer } from "./Product3DViewer";

export function ProductDetailClient({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();

  const handleAddToBag = () => {
    addItem(product, selectedSize, selectedColor, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="flex items-center gap-2 text-sm text-[#666666] mb-8">
        <Link href="/" className="hover:text-[#111111]">Home</Link>
        <span>/</span>
        <Link href={`/${product.category}`} className="hover:text-[#111111] capitalize">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-[#111111]">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="space-y-4">
          <div className="relative aspect-[3/4] overflow-hidden bg-[#F4F4F2]">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative w-20 h-24 overflow-hidden bg-[#F4F4F2] ${activeImage === index ? "ring-1 ring-[#111111]" : ""}`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          {product.modelImage && (
            <div className="mt-8">
              <p className="text-xs tracking-[0.2em] uppercase mb-4">Model Wearing</p>
              <div className="relative aspect-[3/4] overflow-hidden bg-[#F4F4F2]">
                <img src={product.modelImage} alt="Model wearing product" className="w-full h-full object-cover" />
              </div>
            </div>
          )}
          <div className="mt-8">
            <p className="text-xs tracking-[0.2em] uppercase mb-4">3D View</p>
            <Product3DViewer />
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
          <div>
            <h1 className="text-2xl lg:text-3xl tracking-tight">{product.name}</h1>
            <p className="mt-2 text-lg">₹{product.price.toLocaleString("en-IN")}</p>
          </div>

          <div>
            <p className="text-sm mb-3">Color</p>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border ${selectedColor === color ? "ring-1 ring-[#111111] ring-offset-2" : "border-[#E5E5E5]"}`}
                  style={{ backgroundColor: color }}
                  aria-label={`Color ${color}`}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm">Size</p>
              <button onClick={() => setShowSizeGuide(true)} className="text-sm underline hover:opacity-60">
                Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 text-sm border ${selectedSize === size ? "border-[#111111] bg-[#111111] text-white" : "border-[#E5E5E5] hover:border-[#111111]"}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm mb-3">Quantity</p>
            <div className="flex items-center border border-[#E5E5E5] w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-[#F4F4F2]">
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-6 text-sm">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-[#F4F4F2]">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleAddToBag}
              className="flex-1 px-8 py-4 bg-[#111111] text-white text-sm tracking-[0.2em] uppercase hover:bg-black transition-colors"
            >
              ADD TO BAG
            </button>
            <button
              onClick={() => toggleItem(product)}
              className="p-4 border border-[#E5E5E5] hover:border-[#111111] transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? "fill-[#111111]" : ""}`} />
            </button>
          </div>

          <div className="pt-6 border-t border-[#E5E5E5] space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Description</p>
              <p className="text-sm text-[#666666] leading-relaxed">{product.description}</p>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Fabric</p>
              <p className="text-sm text-[#666666]">{product.fabric}</p>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Fit</p>
              <p className="text-sm text-[#666666]">{product.fit}</p>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Care Instructions</p>
              <ul className="text-sm text-[#666666] space-y-1">
                {product.care.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {showSizeGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowSizeGuide(false)} />
          <div className="relative bg-white max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg">Size Guide</h3>
              <button onClick={() => setShowSizeGuide(false)}>×</button>
            </div>
            <div className="text-sm space-y-2">
              <p>XS: 32-34" Chest</p>
              <p>S: 34-36" Chest</p>
              <p>M: 36-38" Chest</p>
              <p>L: 38-40" Chest</p>
              <p>XL: 40-42" Chest</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
