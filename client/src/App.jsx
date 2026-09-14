import { useEffect, useState, useCallback } from "react";
import Header from "./components/Header.jsx";
import FilterBar from "./components/FilterBar.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import { fetchProducts, fetchCategories } from "./api.js";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [stockFilter, setStockFilter] = useState("");
  const [newOnly, setNewOnly] = useState(false);
  const [sort, setSort] = useState("");

  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]); // [{...product, quantity}]

  useEffect(() => {
    fetchCategories()
      .then((data) => setCategories(data.categories || []))
      .catch((err) => console.warn("Could not fetch categories:", err.message));
  }, []);

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
      setError("Unable to connect to backend server. Make sure the backend is running at http://localhost:4000.");
    } finally {
      setLoading(false);
    }
  }, [category, search, stockFilter, newOnly, sort]);

  useEffect(() => {
    const timeout = setTimeout(loadProducts, 250); // debounce search
    return () => clearTimeout(timeout);
  }, [loadProducts]);

  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  }

  function increment(id) {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  }

  function decrement(id) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        search={search}
        onSearchChange={setSearch}
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        categories={categories}
        activeCategory={category}
        onSelectCategory={setCategory}
      />

      <div className="bg-white border-b border-gray-100 py-4 text-center">
        <h1 className="text-xl font-bold text-gray-800">
          {category === "all" ? "All School Bags" : `${category.charAt(0).toUpperCase() + category.slice(1)} School Bags`}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Durable, spacious backpacks built for the school run.
        </p>
      </div>

      <FilterBar
        count={products.length}
        stockFilter={stockFilter}
        onStockChange={setStockFilter}
        newOnly={newOnly}
        onNewOnlyChange={setNewOnly}
        sort={sort}
        onSortChange={setSort}
      />

      <ProductGrid
        products={products}
        loading={loading}
        error={error}
        onRetry={loadProducts}
        onAddToCart={addToCart}
      />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cart}
        onIncrement={increment}
        onDecrement={decrement}
        onRemove={removeItem}
        onOrderComplete={() => setCart([])}
      />

      <footer className="text-center text-xs text-gray-400 py-8">
        Portfolio demo project — not affiliated with any real retailer.
      </footer>
    </div>
  );
}
