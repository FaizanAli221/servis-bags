import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid.jsx";
import { SlidersHorizontal, ArrowUpDown, RotateCcw, Search } from "lucide-react";
import { fetchProducts } from "../api.js";

const CATEGORIES = [
  { value: "all", label: "All Bags" },
  { value: "primary", label: "Primary Kids" },
  { value: "youth", label: "Youth & Senior" },
  { value: "ergonomic", label: "Spine-Guard" },
  { value: "printed", label: "Graphic Prints" }
];

const SORT_OPTIONS = [
  { value: "", label: "Featured" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "discount_desc", label: "Biggest Discount" },
  { value: "newest", label: "New Arrivals First" }
];

export default function Shop({ onAddToCart }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const urlCategory = searchParams.get("category") || "all";
  const urlSearch = searchParams.get("search") || "";

  const [category, setCategory] = useState(urlCategory);
  const [search, setSearch] = useState(urlSearch);
  const [stockFilter, setStockFilter] = useState("");
  const [newOnly, setNewOnly] = useState(false);
  const [sort, setSort] = useState("");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sync URL params when they change (e.g. clicking category in navbar)
  useEffect(() => {
    setCategory(searchParams.get("category") || "all");
    setSearch(searchParams.get("search") || "");
  }, [searchParams]);

  const loadProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchProducts({
        category: category !== "all" ? category : "",
        search,
        inStock: stockFilter,
        isNew: newOnly ? "true" : "",
        sort
      });
      setProducts(data.products || []);
    } catch (err) {
      console.error(err);
      setError("Unable to connect to backend server. Make sure the server is active.");
    } finally {
      setLoading(false);
    }
  }, [category, search, stockFilter, newOnly, sort]);

  useEffect(() => {
    const timeout = setTimeout(loadProducts, 200);
    return () => clearTimeout(timeout);
  }, [loadProducts]);

  function handleCategorySelect(catValue) {
    setCategory(catValue);
    const newParams = new URLSearchParams(searchParams);
    if (catValue === "all") {
      newParams.delete("category");
    } else {
      newParams.set("category", catValue);
    }
    setSearchParams(newParams);
  }

  function handleResetFilters() {
    setCategory("all");
    setSearch("");
    setStockFilter("");
    setNewOnly(false);
    setSort("");
    setSearchParams({});
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      {/* Page Header Title */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-950 uppercase tracking-tight">
            School Bags & Backpacks Catalog
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Browse our complete collection of orthopedic, durable student backpacks.
          </p>
        </div>

        {/* Live Search Inside Catalog */}
        <div className="relative w-full md:w-72">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search bag name, color, SKU..."
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
          />
        </div>
      </div>

      {/* Category Pills & Filters Bar */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm space-y-4">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategorySelect(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                category === cat.value
                  ? "bg-brand text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Secondary Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-3 flex-wrap text-xs">
            <span className="flex items-center gap-1 font-bold text-gray-700">
              <SlidersHorizontal size={15} /> Filters:
            </span>

            {/* Stock Selector */}
            <select
              value={stockFilter}
              onChange={(e) => setStockFilter(e.target.value)}
              className="text-xs border border-gray-300 rounded-lg px-2.5 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-brand/30"
            >
              <option value="">All Stock Status</option>
              <option value="true">In Stock Only</option>
              <option value="false">Sold Out</option>
            </select>

            {/* New Arrivals Toggle */}
            <label className="flex items-center gap-1.5 text-gray-700 cursor-pointer select-none font-medium">
              <input
                type="checkbox"
                checked={newOnly}
                onChange={(e) => setNewOnly(e.target.checked)}
                className="rounded text-brand focus:ring-brand/30"
              />
              New Arrivals Only
            </label>

            {(search || category !== "all" || stockFilter || newOnly || sort) && (
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-1 text-red-600 hover:underline font-bold"
              >
                <RotateCcw size={12} /> Reset Filters
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 ml-auto">
            <ArrowUpDown size={15} className="text-gray-400" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs border border-gray-300 rounded-lg px-3 py-1.5 bg-white font-medium focus:outline-none focus:ring-2 focus:ring-brand/30"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <span className="text-xs text-gray-400 pl-1 font-semibold">
              ({products.length} Items)
            </span>
          </div>
        </div>
      </div>

      {/* Products Grid with Error handling */}
      <ProductGrid
        products={products}
        loading={loading}
        error={error}
        onRetry={loadProducts}
        onAddToCart={onAddToCart}
      />
    </div>
  );
}
