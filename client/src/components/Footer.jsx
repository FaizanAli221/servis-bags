import { Link } from "react-router-dom";
import { ShieldCheck, Truck, RotateCcw, Headphones, Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-14 pb-8 border-t border-neutral-800">
      {/* Value Proposition Bar */}
      <div className="max-w-7xl mx-auto px-4 pb-12 border-b border-neutral-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-brand flex-shrink-0">
              <Truck size={24} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Free Nationwide Shipping</h4>
              <p className="text-xs text-neutral-400 mt-0.5">On all orders over Rs. 2,999</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">1-Year Warranty</h4>
              <p className="text-xs text-neutral-400 mt-0.5">Free replacement on defects</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 flex-shrink-0">
              <RotateCcw size={24} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">7-Day Easy Returns</h4>
              <p className="text-xs text-neutral-400 mt-0.5">Hassle-free exchange policy</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-400 flex-shrink-0">
              <Headphones size={24} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Dedicated Support</h4>
              <p className="text-xs text-neutral-400 mt-0.5">Mon–Sat 9AM to 7PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white font-black text-lg">
                S
              </div>
              <span className="text-xl font-black italic tracking-tight text-white uppercase">
                Servis<span className="text-brand ml-1 font-extrabold not-italic">Bags</span>
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Pakistan's trusted student backpack brand. Engineered with certified orthopedic spine support, high-density waterproof nylon, and heavy-duty reinforced construction.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-neutral-300 pt-2">
              <a
                href="https://wa.me/923337285603?text=Hi%20Servis%20Bags%2C%20I%20have%20an%20inquiry"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors font-semibold"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                WhatsApp: 0333 7285603
              </a>
              <span className="hidden sm:inline text-neutral-600">•</span>
              <a href="tel:03337285603" className="hover:text-white flex items-center gap-1.5 transition-colors">
                <Phone size={13} className="text-brand" /> 0333-7285603
              </a>
              <span className="hidden sm:inline text-neutral-600">•</span>
              <span className="flex items-center gap-1 text-neutral-400">
                <Mail size={13} className="text-brand" /> info@servisbags.pk
              </span>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Shop Categories</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">All Bags Catalog</Link>
              </li>
              <li>
                <Link to="/shop?category=primary" className="hover:text-white transition-colors">Primary Kids Bags</Link>
              </li>
              <li>
                <Link to="/shop?category=youth" className="hover:text-white transition-colors">Youth & High School</Link>
              </li>
              <li>
                <Link to="/shop?category=ergonomic" className="hover:text-white transition-colors">Spine-Guard Orthopedic</Link>
              </li>
              <li>
                <Link to="/shop?category=printed" className="hover:text-white transition-colors">Graphic & Cartoon Packs</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Customer Service</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Order Tracking</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Shipping & Delivery Info</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Warranty & Return Claim</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">Durability & Spine Guide</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Frequently Asked Questions</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Stay Updated</h4>
            <p className="text-xs text-neutral-400 mb-3">
              Subscribe to get exclusive discounts, back-to-school bundles, and launch updates.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing to Servis Bags newsletter!"); }} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full px-3 py-2 text-xs rounded bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-brand"
              />
              <button
                type="submit"
                className="w-full py-2 bg-brand text-white text-xs font-bold rounded hover:bg-brand-dark transition-colors uppercase tracking-wider"
              >
                Join Newsletter
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <p>© {new Date().getFullYear()} Servis Bags. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <span className="hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
          <span>•</span>
          <span className="hover:text-neutral-400 cursor-pointer">Terms of Service</span>
          <span>•</span>
          <span className="hover:text-neutral-400 cursor-pointer">Payment Options (COD / Online)</span>
        </div>
      </div>
    </footer>
  );
}
