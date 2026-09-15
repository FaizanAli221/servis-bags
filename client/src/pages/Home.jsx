import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles, Truck, CheckCircle, Star, Award, HeartHandshake } from "lucide-react";
import ProductCard from "../components/ProductCard.jsx";
import { fetchProducts } from "../api.js";

export default function Home({ onAddToCart }) {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts({ sort: "price_desc" })
      .then((data) => {
        setFeaturedProducts(data.products.slice(0, 4));
      })
      .catch((err) => console.error("Error loading featured products:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e11d2e_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/20 border border-brand/40 text-brand text-xs font-bold tracking-wide uppercase">
              <Sparkles size={14} /> Back to School 2026 Collection
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              Bags Built For <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
                School Champions.
              </span>
            </h1>

            <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Protect your child's posture with our certified Spine-Guard orthopedic support, ultra-tough waterproof nylon, and spacious multi-compartment layouts.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/shop"
                className="px-7 py-3.5 bg-brand hover:bg-brand-dark text-white text-sm font-bold rounded-xl shadow-lg shadow-brand/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Shop School Bags <ArrowRight size={17} />
              </Link>
              <Link
                to="/shop?category=ergonomic"
                className="px-6 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-sm font-bold rounded-xl border border-neutral-700 transition-colors"
              >
                Spine-Guard Series
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800 max-w-md mx-auto lg:mx-0 text-left">
              <div>
                <p className="text-xl sm:text-2xl font-black text-white">50k+</p>
                <p className="text-xs text-neutral-400 mt-0.5">Students Equipped</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-amber-400">4.9 ★</p>
                <p className="text-xs text-neutral-400 mt-0.5">Parent Rating</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-emerald-400">1 Year</p>
                <p className="text-xs text-neutral-400 mt-0.5">Free Warranty</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-neutral-800 shadow-2xl relative bg-neutral-900 group">
                <img
                  src="/images/spine_guard_navy.jpg"
                  alt="Servis ACE Spine-Guard Backpack"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/85 backdrop-blur-md p-3.5 rounded-xl border border-neutral-800 flex items-center justify-between text-left">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand font-bold">Featured Flagship</span>
                    <p className="text-xs font-bold text-white">ACE Spine-Guard 30L Pro</p>
                    <p className="text-xs text-neutral-400">Rs. 3,399 <span className="line-through text-[10px]">Rs. 4,499</span></p>
                  </div>
                  <Link
                    to="/product/SB-001"
                    className="px-3 py-1.5 bg-brand text-white text-xs font-bold rounded-lg hover:bg-brand-dark transition-colors"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Badges Bar */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-2xl border border-gray-200/80 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-red-50 text-brand flex items-center justify-center flex-shrink-0">
              <Award size={22} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900">Certified Ergonomics</h4>
              <p className="text-[11px] text-gray-500">Orthopedic back support</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900">1-Year Warranty</h4>
              <p className="text-[11px] text-gray-500">Free replacement guarantee</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
              <Truck size={22} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900">Nationwide Shipping</h4>
              <p className="text-[11px] text-gray-500">Free over Rs. 2,999</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
              <HeartHandshake size={22} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900">Cash on Delivery</h4>
              <p className="text-[11px] text-gray-500">Pay upon parcel arrival</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop By Category Cards */}
      <section className="max-w-7xl mx-auto px-4 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-gray-200 pb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand">Browse Collections</span>
            <h2 className="text-2xl font-extrabold text-gray-950">Shop By School Grade</h2>
          </div>
          <Link to="/shop" className="text-xs font-bold text-brand hover:underline flex items-center gap-1">
            View Full Catalog <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Primary Kids */}
          <Link
            to="/shop?category=primary"
            className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-900 border border-gray-200 shadow-sm block"
          >
            <img
              src="/images/butterfly_bag.jpg"
              alt="Primary Kids School Bags"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Ages 5 – 10</span>
              <h3 className="text-lg font-bold text-white leading-tight">Primary School Bags</h3>
              <p className="text-xs text-neutral-300 mt-1">Lightweight, playful prints, non-toxic</p>
            </div>
          </Link>

          {/* Card 2: Youth & High School */}
          <Link
            to="/shop?category=youth"
            className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-900 border border-gray-200 shadow-sm block"
          >
            <img
              src="/images/youth_explorer_black.jpg"
              alt="Youth Backpacks"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
              <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Ages 11 – 18+</span>
              <h3 className="text-lg font-bold text-white leading-tight">Youth & Senior Packs</h3>
              <p className="text-xs text-neutral-300 mt-1">Laptop compartment, tech organizer</p>
            </div>
          </Link>

          {/* Card 3: Spine-Guard Ergonomic */}
          <Link
            to="/shop?category=ergonomic"
            className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-900 border border-gray-200 shadow-sm block"
          >
            <img
              src="/images/spine_guard_navy.jpg"
              alt="Ergonomic Orthopedic Bags"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Orthopedic</span>
              <h3 className="text-lg font-bold text-white leading-tight">Spine-Guard Series</h3>
              <p className="text-xs text-neutral-300 mt-1">Reduces pressure on spine by 35%</p>
            </div>
          </Link>

          {/* Card 4: Graphic Prints */}
          <Link
            to="/shop?category=printed"
            className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-900 border border-gray-200 shadow-sm block"
          >
            <img
              src="/images/robot_bag.jpg"
              alt="Graphic Prints"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
              <span className="text-rose-400 text-xs font-bold uppercase tracking-wider">Characters & 3D</span>
              <h3 className="text-lg font-bold text-white leading-tight">Graphic & 3D Prints</h3>
              <p className="text-xs text-neutral-300 mt-1">Robots, butterflies, monster trucks</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured / Bestsellers Section */}
      <section className="max-w-7xl mx-auto px-4 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-gray-200 pb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand">Parent Favorites</span>
            <h2 className="text-2xl font-extrabold text-gray-950">Trending & Best Sellers</h2>
          </div>
          <Link to="/shop" className="text-xs font-bold text-brand hover:underline flex items-center gap-1">
            See All Products ({featuredProducts.length}+) <ArrowRight size={14} />
          </Link>
        </div>

        {loading ? (
          <div className="py-12 text-center text-sm text-gray-400">Loading trending bags...</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
            ))}
          </div>
        )}
      </section>

      {/* Promotional Mid-Page Banner */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-red-600 to-rose-700 rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-4 max-w-xl text-center md:text-left z-10">
            <span className="bg-white/20 text-white text-xs uppercase font-extrabold px-3 py-1 rounded-full">
              Limited Time Back-to-School Offer
            </span>
            <h3 className="text-2xl sm:text-4xl font-black leading-tight">
              Get Up to 28% Off + Free Delivery
            </h3>
            <p className="text-sm text-red-100 leading-relaxed">
              Equip your children with certified orthopedic backpacks that will last the entire school year and beyond.
            </p>
            <div className="pt-2">
              <Link
                to="/shop"
                className="inline-block px-7 py-3 bg-white text-brand hover:bg-neutral-100 font-extrabold text-sm rounded-xl shadow-md transition-colors"
              >
                Claim Discount Now
              </Link>
            </div>
          </div>
          <div className="relative z-10 w-44 h-44 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl flex-shrink-0">
            <img
              src="/images/teddy_bear_bag.jpg"
              alt="Promo bag"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Parent Reviews & Testimonials */}
      <section className="max-w-7xl mx-auto px-4 space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">Real Experiences</span>
          <h2 className="text-2xl font-extrabold text-gray-950">Trusted by Over 50,000 Families</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
              "My 8th-grade son has to carry over 6 heavy books and copies daily. The Servis ACE Spine-Guard bag completely stopped his shoulder complaints. Highly recommended!"
            </p>
            <div className="pt-2 border-t border-gray-100">
              <p className="text-xs font-bold text-gray-900">Dr. Ayesha Tariq</p>
              <p className="text-[11px] text-gray-400">Lahore • Verified Parent</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
              "Bought the Butterfly print bag for my daughter in Grade 2. Even after rain walks, her books stayed 100% dry. Quality of zippers and stitching is superb."
            </p>
            <div className="pt-2 border-t border-gray-100">
              <p className="text-xs font-bold text-gray-900">Kamran Baig</p>
              <p className="text-[11px] text-gray-400">Islamabad • Verified Buyer</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
              "Delivery arrived in Karachi within 2 days with Cash on Delivery. Bag feels just as sturdy as imported brands that cost 3x more."
            </p>
            <div className="pt-2 border-t border-gray-100">
              <p className="text-xs font-bold text-gray-900">Naveed Akhtar</p>
              <p className="text-[11px] text-gray-400">Karachi • Verified Customer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
