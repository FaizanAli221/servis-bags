import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, ShoppingBag, Menu, X, Phone, ShieldCheck, Truck } from "lucide-react";

export default function Header({ cartCount, onCartClick }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  }

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      {/* Top Announcement Bar */}
      <div className="bg-neutral-900 text-neutral-200 text-xs py-2 px-4 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Truck size={14} /> FREE Nationwide Delivery on orders over Rs. 2,999
            </span>
            <span className="hidden md:inline text-neutral-500">•</span>
            <span className="hidden md:flex items-center gap-1 text-neutral-300">
              <ShieldCheck size={14} className="text-emerald-400" /> 1-Year Official Warranty
            </span>
          </div>
          <div className="flex items-center gap-4 text-neutral-300">
            <a
              href="https://wa.me/923337285603?text=Hi%20Servis%20Bags%2C%20I%20have%20an%20inquiry"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              WhatsApp: 0333 7285603
            </a>
            <span className="hidden sm:inline text-neutral-600">•</span>
            <Link to="/contact" className="hover:text-white underline transition-colors hidden sm:inline">
              Track Order / FAQs
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between gap-4">
        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1.5 -ml-1 text-gray-700 hover:text-brand focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-9 h-9 rounded-lg bg-brand flex items-center justify-center text-white font-black text-xl shadow-sm">
            S
          </div>
          <div>
            <span className="text-2xl font-black italic tracking-tight text-gray-950 uppercase">
              Servis<span className="text-brand ml-1 font-extrabold not-italic">Bags</span>
            </span>
            <span className="block text-[10px] tracking-widest text-gray-400 uppercase font-semibold -mt-1">
              Durable • Ergonomic
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-gray-700 ml-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors hover:text-brand py-1 ${
                isActive ? "text-brand border-b-2 border-brand" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `transition-colors hover:text-brand py-1 ${
                isActive ? "text-brand border-b-2 border-brand" : ""
              }`
            }
          >
            All Bags
          </NavLink>
          <NavLink
            to="/shop?category=primary"
            className="transition-colors hover:text-brand text-gray-600"
          >
            Primary Kids
          </NavLink>
          <NavLink
            to="/shop?category=youth"
            className="transition-colors hover:text-brand text-gray-600"
          >
            Youth Backpacks
          </NavLink>
          <NavLink
            to="/shop?category=ergonomic"
            className="transition-colors hover:text-brand text-gray-600"
          >
            Spine-Guard Pro
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors hover:text-brand py-1 ${
                isActive ? "text-brand border-b-2 border-brand" : ""
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-colors hover:text-brand py-1 ${
                isActive ? "text-brand border-b-2 border-brand" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Search Bar & Cart Drawer Button */}
        <div className="flex items-center gap-3 ml-auto">
          <form onSubmit={handleSearch} className="hidden sm:block relative w-48 md:w-64">
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Search school bags..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-full border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
            />
          </form>

          <button
            onClick={onCartClick}
            className="relative p-2 text-gray-700 hover:text-brand transition-colors rounded-full hover:bg-gray-100 flex items-center justify-center"
            aria-label="View Cart"
          >
            <ShoppingBag size={23} />
            {cartCount > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-brand text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-3 shadow-lg">
          <form onSubmit={handleSearch} className="relative w-full mb-3">
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Search backpacks, primary bags..."
              className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
          </form>

          <div className="flex flex-col space-y-2 text-sm font-semibold text-gray-700">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-gray-100"
            >
              Home
            </Link>
            <Link
              to="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-gray-100"
            >
              All Bags Catalog
            </Link>
            <Link
              to="/shop?category=primary"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-gray-100 text-gray-600"
            >
              Primary Kids Bags
            </Link>
            <Link
              to="/shop?category=youth"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-gray-100 text-gray-600"
            >
              High School & Youth Backpacks
            </Link>
            <Link
              to="/shop?category=ergonomic"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-gray-100 text-gray-600"
            >
              Spine-Guard Orthopedic Packs
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-gray-100"
            >
              About Servis Bags
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded hover:bg-gray-100"
            >
              Customer Support & FAQs
            </Link>

            <a
              href="https://wa.me/923337285603?text=Hi%20Servis%20Bags%2C%20I%20have%20an%20inquiry"
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors"
            >
              💬 WhatsApp Us: 0333 7285603
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
