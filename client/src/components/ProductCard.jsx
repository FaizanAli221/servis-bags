import { ShoppingCart, Star } from "lucide-react";

export default function ProductCard({ product, onAddToCart }) {
  const {
    title,
    color,
    brand,
    originalPrice,
    discountedPrice,
    discountPercent,
    badge,
    inStock,
    image,
    rating
  } = product;

  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow flex flex-col">
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        {discountPercent > 0 && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
            -{discountPercent}%
          </span>
        )}
        {badge && (
          <span
            className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded ${
              badge === "Sold out"
                ? "bg-gray-800 text-white"
                : "bg-blue-600 text-white"
            }`}
          >
            {badge}
          </span>
        )}
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            !inStock ? "opacity-60 grayscale" : ""
          }`}
        />
      </div>

      <div className="p-3 flex flex-col flex-1">
        <p className="text-xs text-gray-400 uppercase tracking-wide">{brand}</p>
        <h3 className="text-sm font-medium text-gray-800 leading-snug mt-0.5">
          {title}
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">{color}</p>

        <div className="flex items-center gap-1 mt-1 text-amber-500">
          <Star size={13} fill="currentColor" strokeWidth={0} />
          <span className="text-xs text-gray-500">{rating}</span>
        </div>

        <div className="mt-2 flex items-baseline gap-2">
          {originalPrice > discountedPrice && (
            <span className="text-sm text-gray-400 line-through">
              Rs.{originalPrice.toLocaleString()}
            </span>
          )}
          <span className="text-base font-bold text-gray-900">
            Rs.{discountedPrice.toLocaleString()}
          </span>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          disabled={!inStock}
          className={`mt-3 w-full flex items-center justify-center gap-2 py-2 rounded-md text-sm font-semibold transition-colors ${
            inStock
              ? "bg-brand text-white hover:bg-brand-dark"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          <ShoppingCart size={16} />
          {inStock ? "Add to Cart" : "Sold Out"}
        </button>
      </div>
    </div>
  );
}
