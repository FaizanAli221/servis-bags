import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({ products, loading, error, onRetry, onAddToCart }) {
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-gray-500 text-sm flex flex-col items-center justify-center gap-2">
        <div className="w-8 h-8 border-2 border-brand border-t-transparent rounded-full animate-spin"></div>
        <p>Loading products from backend...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto my-12 p-6 bg-red-50 border border-red-200 rounded-lg text-center shadow-sm">
        <p className="text-red-700 font-semibold text-sm">{error}</p>
        <p className="text-xs text-red-500 mt-2">
          Make sure the backend server is running on <code className="bg-red-100 px-1 py-0.5 rounded font-mono">http://localhost:4000</code>.
        </p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="mt-4 px-4 py-2 bg-brand text-white rounded-md text-xs font-semibold hover:bg-brand-dark transition-colors shadow-sm"
          >
            Retry Connection
          </button>
        )}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-gray-400 text-sm">
        No products match your filters.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}
