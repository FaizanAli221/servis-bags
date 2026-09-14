import { Link } from "react-router-dom";
import { ShoppingCart, Star, Eye } from "lucide-react";

export default function ProductCard({ product, onAddToCart }) {
  const {
    id,
    title,
    color,
    brand,
    originalPrice,
    discountedPrice,
    discountPercent,
    badge,
    inStock,
    image,
    rating,
    reviewsCount
  } = product;

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col relative">
      {/* Product Image & Badges */}
      <Link to={`/product/${id}`} className="relative aspect-square bg-gray-50 overflow-hidden block">
        {discountPercent > 0 && (
          <span className="absolute top-2.5 left-2.5 z-10 bg-brand text-white text-[11px] font-extrabold px-2 py-0.5 rounded shadow-sm">
            -{discountPercent}%
          </span>
        )}
        {badge && (
          <span
            className={`absolute top-2.5 right-2.5 z-10 text-[11px] font-bold px-2 py-0.5 rounded shadow-sm ${
              badge === "Sold out"
                ? "bg-neutral-800 text-white"
                : badge === "Bestseller"
                ? "bg-amber-500 text-white"
                : "bg-blue-600 text-white"
            }`}
          >
            {badge}
          </span>
        )}
        <img
          src={image}
          alt={title}
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            !inStock ? "opacity-60 grayscale" : ""
          }`}
        />

        {/* Quick View Overlay Icon */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="bg-white text-gray-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye size={14} /> View Details
          </span>
        </div>
      </Link>

      {/* Product Information */}
      <div className="p-3.5 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-1 text-[11px] text-gray-400 uppercase tracking-wider font-semibold">
          <span>{brand}</span>
          <span className="capitalize">{color}</span>
        </div>

        <Link to={`/product/${id}`} className="mt-1 flex-1">
          <h3 className="text-sm font-bold text-gray-800 leading-snug line-clamp-2 hover:text-brand transition-colors">
            {title}
          </h3>
        </Link>

        {/* Rating Stars */}
        <div className="flex items-center gap-1 mt-1.5 text-amber-500">
          <Star size={13} fill="currentColor" strokeWidth={0} />
          <span className="text-xs font-bold text-gray-700">{rating}</span>
          {reviewsCount && (
            <span className="text-[11px] text-gray-400">({reviewsCount})</span>
          )}
        </div>

        {/* Price Information */}
        <div className="mt-2.5 flex items-baseline gap-2">
          <span className="text-base font-black text-gray-950">
            Rs. {discountedPrice.toLocaleString()}
          </span>
          {originalPrice > discountedPrice && (
            <span className="text-xs text-gray-400 line-through">
              Rs. {originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            onAddToCart(product);
          }}
          disabled={!inStock}
          className={`mt-3 w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${
            inStock
              ? "bg-brand text-white hover:bg-brand-dark shadow-sm active:scale-95"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          <ShoppingCart size={15} />
          {inStock ? "Add to Cart" : "Sold Out"}
        </button>
      </div>
    </div>
  );
}
