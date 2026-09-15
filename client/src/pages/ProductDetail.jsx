import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchProductById, fetchProducts } from "../api.js";
import {
  Star,
  ShoppingCart,
  ShieldCheck,
  Truck,
  RotateCcw,
  CheckCircle2,
  Share2,
  Plus,
  Minus,
  ArrowLeft
} from "lucide-react";
import ProductCard from "../components/ProductCard.jsx";

export default function ProductDetail({ onAddToCart, onBuyNow }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("features");
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);
    setError(null);
    setQuantity(1);

    fetchProductById(id)
      .then((data) => {
        setProduct(data);
        setSelectedImage(data.image);

        // Fetch related items from same category
        return fetchProducts({ category: data.category });
      })
      .then((res) => {
        if (res && res.products) {
          setRelatedProducts(res.products.filter((p) => p.id !== id).slice(0, 4));
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load product details.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-sm text-gray-500 flex flex-col items-center justify-center gap-3">
        <div className="w-9 h-9 border-3 border-brand border-t-transparent rounded-full animate-spin"></div>
        <p>Loading product details...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-white border border-gray-200 rounded-2xl text-center shadow-sm space-y-4">
        <p className="text-red-600 font-bold text-base">{error || "Product not found."}</p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-xs font-bold rounded-xl hover:bg-brand-dark transition-colors"
        >
          <ArrowLeft size={16} /> Back to Catalog
        </Link>
      </div>
    );
  }

  const {
    title,
    brand,
    sku,
    color,
    originalPrice,
    discountedPrice,
    discountPercent,
    badge,
    inStock,
    rating,
    reviewsCount,
    description,
    features = [],
    specs = {},
    reviews = [],
    gallery = [product.image]
  } = product;

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
  }

  function handleBuyNow() {
    handleAddToCart();
    if (onBuyNow) onBuyNow();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-gray-500 font-medium">
        <Link to="/" className="hover:text-brand transition-colors">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-brand transition-colors">Catalog</Link>
        <span>/</span>
        <Link to={`/shop?category=${product.category}`} className="hover:text-brand uppercase transition-colors">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-gray-900 truncate max-w-xs">{title}</span>
      </nav>

      {/* Main Product Details Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-gray-200">
            {discountPercent > 0 && (
              <span className="absolute top-4 left-4 z-10 bg-brand text-white text-xs font-extrabold px-2.5 py-1 rounded-md shadow-sm">
                SAVE {discountPercent}%
              </span>
            )}
            {badge && (
              <span className="absolute top-4 right-4 z-10 bg-neutral-900 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                {badge}
              </span>
            )}
            <img
              src={selectedImage || product.image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails strip */}
          {gallery && gallery.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              {gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 bg-gray-50 transition-all ${
                    selectedImage === imgUrl ? "border-brand shadow-md scale-95" : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Information & Purchase Controls */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-gray-400 uppercase tracking-wider font-bold">
              <span>{brand}</span>
              <span className="font-mono text-gray-500">SKU: {sku}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-gray-950 leading-tight">
              {title}
            </h1>

            {/* Rating Bar */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-amber-500">
                <Star size={17} fill="currentColor" strokeWidth={0} />
                <span className="text-sm font-bold text-gray-900">{rating}</span>
              </div>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-500 font-medium">{reviewsCount} Verified Ratings</span>
              <span className="text-xs text-gray-400">•</span>
              <span
                className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                  inStock ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
                }`}
              >
                {inStock ? "In Stock & Ready to Ship" : "Currently Out of Stock"}
              </span>
            </div>

            {/* Pricing Details */}
            <div className="flex items-baseline gap-3 pt-2">
              <span className="text-3xl font-black text-gray-950">
                Rs. {discountedPrice.toLocaleString()}
              </span>
              {originalPrice > discountedPrice && (
                <>
                  <span className="text-base text-gray-400 line-through">
                    Rs. {originalPrice.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                    You save Rs. {(originalPrice - discountedPrice).toLocaleString()}
                  </span>
                </>
              )}
            </div>

            {/* Description Short */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-2">
              {description}
            </p>

            {/* Color Indicator */}
            <div className="pt-2">
              <span className="text-xs text-gray-500 font-medium">Color Available:</span>
              <div className="mt-1 flex items-center gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-lg text-xs font-bold text-gray-800 border border-gray-200">
                  {color}
                </span>
              </div>
            </div>

            {/* Quantity Selector & Action Buttons */}
            {inStock ? (
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-gray-700">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden bg-gray-50">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-gray-200 text-gray-700 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-4 py-2 text-xs font-black text-gray-900 bg-white min-w-[2.5rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-200 text-gray-700 transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={handleAddToCart}
                    className="w-full py-3.5 bg-brand hover:bg-brand-dark text-white font-extrabold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-98"
                  >
                    <ShoppingCart size={17} /> Add to Cart
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="w-full py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-extrabold text-sm rounded-xl shadow-md transition-colors"
                  >
                    Buy It Now
                  </button>
                </div>

                <button
                  onClick={() => {
                    const text = `Assalam-o-Alaikum Servis Bags! I would like to order:\n\n• Product: ${title} (${sku})\n• Quantity: ${quantity}\n• Color: ${color}\n• Unit Price: Rs. ${discountedPrice.toLocaleString()}\n• Total: Rs. ${(discountedPrice * quantity).toLocaleString()}\n• Payment: Cash on Delivery\n\nPlease confirm availability and delivery!`;
                    window.open(`https://wa.me/923337285603?text=${encodeURIComponent(text)}`, "_blank");
                  }}
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <span>💬 Instant Order on WhatsApp (0333-7285603)</span>
                </button>
              </div>
            ) : (
              <div className="p-4 bg-gray-100 rounded-xl text-center text-xs font-bold text-gray-500">
                This item is currently sold out. Check back soon for our restock!
              </div>
            )}
          </div>

          {/* Value Badges Accordion / Highlights */}
          <div className="pt-6 border-t border-gray-100 grid grid-cols-2 gap-3 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <Truck size={16} className="text-brand" />
              <span>Fast 2-4 Day Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span>1-Year Quality Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw size={16} className="text-blue-600" />
              <span>7-Day Return / Exchange</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-amber-600" />
              <span>100% Genuine Servis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs: Specifications, Features, and Customer Reviews */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
        <div className="flex border-b border-gray-200 gap-6 overflow-x-auto text-sm font-bold">
          <button
            onClick={() => setActiveTab("features")}
            className={`pb-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "features" ? "border-brand text-brand" : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            Features & Highlights
          </button>
          <button
            onClick={() => setActiveTab("specs")}
            className={`pb-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "specs" ? "border-brand text-brand" : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            Technical Specifications
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "reviews" ? "border-brand text-brand" : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            Customer Reviews ({reviews.length})
          </button>
        </div>

        {/* Tab 1: Features */}
        {activeTab === "features" && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-900">Why Students Love This Backpack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <CheckCircle2 size={18} className="text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Specs */}
        {activeTab === "specs" && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-900">Dimensions & Construction</h3>
            <div className="divide-y divide-gray-100 border border-gray-200 rounded-2xl overflow-hidden max-w-xl">
              {Object.entries(specs).map(([k, v]) => (
                <div key={k} className="flex justify-between p-3.5 text-xs">
                  <span className="text-gray-500 uppercase font-semibold">{k}</span>
                  <span className="font-bold text-gray-900">{v}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Reviews */}
        {activeTab === "reviews" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-gray-900">Verified Parent & Student Feedback</h3>
                <p className="text-xs text-gray-500 mt-0.5">Average score: {rating} out of 5.0</p>
              </div>
            </div>

            <div className="space-y-4">
              {reviews.map((rev) => (
                <div key={rev.id} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-900">{rev.author}</span>
                    <span className="text-[11px] text-gray-400">{rev.date}</span>
                  </div>
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">{rev.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-3">
            <h2 className="text-xl font-extrabold text-gray-950">You Might Also Like</h2>
            <p className="text-xs text-gray-500">Similar bags in this category</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
