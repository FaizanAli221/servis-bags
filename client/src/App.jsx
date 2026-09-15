import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

// Pages
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

// Scroll to Top helper on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("servis_bags_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [toastMessage, setToastMessage] = useState(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("servis_bags_cart", JSON.stringify(cart));
    } catch (e) {
      console.warn("Could not persist cart to localStorage:", e);
    }
  }, [cart]);

  function showToast(msg) {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  }

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
    showToast(`Added "${product.title}" to cart!`);
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
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 flex flex-col selection:bg-brand selection:text-white">
        {/* Persistent Header */}
        <Header cartCount={cartCount} onCartClick={() => setCartOpen(true)} />

        {/* Global Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-5 right-5 z-50 bg-neutral-900 text-white px-4 py-3 rounded-xl shadow-2xl text-xs font-bold flex items-center gap-2 border border-neutral-700 animate-in slide-in-from-bottom-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Main Content Router */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
            <Route
              path="/product/:id"
              element={
                <ProductDetail
                  onAddToCart={addToCart}
                  onBuyNow={() => setCartOpen(true)}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home onAddToCart={addToCart} />} />
          </Routes>
        </main>

        {/* Slide-over Cart Drawer */}
        <CartDrawer
          open={cartOpen}
          onClose={() => setCartOpen(false)}
          cartItems={cart}
          onIncrement={increment}
          onDecrement={decrement}
          onRemove={removeItem}
          onOrderComplete={() => setCart([])}
        />

        {/* Professional Footer */}
        <Footer />

        {/* Persistent Floating WhatsApp Assistance Button */}
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
