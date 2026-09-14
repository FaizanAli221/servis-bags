import { SlidersHorizontal, ArrowUpDown } from "lucide-react";

const SORT_OPTIONS = [
  { value: "", label: "Featured" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "discount_desc", label: "Biggest Discount" },
  { value: "newest", label: "Newest First" }
];

const STOCK_OPTIONS = [
  { value: "", label: "All" },
  { value: "true", label: "In Stock" },
  { value: "false", label: "Sold Out" }
];

export default function FilterBar({
  count,
  stockFilter,
  onStockChange,
  newOnly,
  onNewOnlyChange,
  sort,
  onSortChange
}) {
  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center gap-3 justify-between">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="flex items-center gap-1 text-sm font-medium text-gray-600">
            <SlidersHorizontal size={16} />
            Filters
          </span>

          <select
            value={stockFilter}
            onChange={(e) => onStockChange(e.target.value)}
            className="text-sm border border-gray-300 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-brand/30"
          >
            {STOCK_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <label className="flex items-center gap-1.5 text-sm text-gray-600 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={newOnly}
              onChange={(e) => onNewOnlyChange(e.target.checked)}
              className="rounded border-gray-300 text-brand focus:ring-brand/30"
            />
            New Arrivals
          </label>

          <span className="text-sm text-gray-500">{count} Products</span>
        </div>

        <div className="flex items-center gap-2">
          <ArrowUpDown size={16} className="text-gray-500" />
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
            className="text-sm border border-gray-300 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-brand/30"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
