import { Search, ShoppingBag } from "lucide-react";

export default function Header({
  search,
  onSearchChange,
  cartCount,
  onCartClick,
  categories = [],
  activeCategory = "all",
  onSelectCategory
}) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <button
          onClick={() => onSelectCategory && onSelectCategory("all")}
          className="flex-shrink-0 text-left focus:outline-none"
        >
          <span className="text-2xl font-extrabold italic text-brand tracking-tight">
            Bagline
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700 ml-4">
          <button
            onClick={() => onSelectCategory && onSelectCategory("all")}
            className={`transition-colors uppercase py-1 ${
              activeCategory === "all" ? "text-brand font-bold border-b-2 border-brand" : "hover:text-brand text-gray-600"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory && onSelectCategory(cat)}
              className={`transition-colors uppercase py-1 ${
                activeCategory.toLowerCase() === cat.toLowerCase()
                  ? "text-brand font-bold border-b-2 border-brand"
                  : "hover:text-brand text-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        <div className="flex-1 flex items-center max-w-md ml-auto">
          <div className="relative w-full">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              type="text"
              placeholder="Search school bags..."
              className="w-full pl-9 pr-3 py-2 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand"
            />
          </div>
        </div>

        <button
          onClick={onCartClick}
          className="relative flex-shrink-0 p-2 text-gray-700 hover:text-brand transition-colors"
          aria-label="Open cart"
        >
          <ShoppingBag size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-brand text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
