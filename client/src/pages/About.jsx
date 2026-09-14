import { Link } from "react-router-dom";
import { ShieldCheck, Heart, Award, ArrowRight, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="space-y-16 py-8 pb-16">
      {/* Hero Banner */}
      <section className="bg-neutral-900 text-white py-16 px-4 rounded-3xl max-w-7xl mx-auto text-center space-y-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#e11d2e_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <span className="text-brand text-xs font-bold uppercase tracking-widest px-3 py-1 bg-brand/10 rounded-full border border-brand/20">
            About Servis Bags
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Crafting Backpacks That Protect Young Spines.
          </h1>
          <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
            Every school year, millions of students carry burdens far heavier than their growing bodies should support. At Servis Bags, our mission is to deliver world-class orthopedic design at accessible prices.
          </p>
        </div>
      </section>

      {/* Brand Story Grid */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">Our Heritage</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 leading-tight">
            Built Tough for Daily School Runs and Endless Adventures
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Founded with a commitment to student well-being, Servis Bags combines decades of durable manufacturing expertise with cutting-edge orthopedic research. We recognized that school bags are not just accessories—they are daily essentials that directly impact posture, spinal development, and academic comfort.
          </p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            From kindergarteners taking their first steps into classrooms to senior high-schoolers packing heavy laptops and reference texts, our products undergo rigorous stress tests to endure the daily demands of academic life.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <span className="text-2xl font-black text-brand">50,000+</span>
              <p className="text-xs font-bold text-gray-800 mt-0.5">Students Supported</p>
              <p className="text-[11px] text-gray-400">Across 40+ cities in Pakistan</p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <span className="text-2xl font-black text-emerald-600">100%</span>
              <p className="text-xs font-bold text-gray-800 mt-0.5">Spine-Safe Materials</p>
              <p className="text-[11px] text-gray-400">Non-toxic, lead-free fabrics</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80"
              alt="Backpack Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4 Pillars of Engineering */}
      <section className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">Engineering Excellence</span>
          <h2 className="text-2xl font-extrabold text-gray-950">Why Parents Trust Servis Bags</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-brand flex items-center justify-center">
              <Award size={24} />
            </div>
            <h3 className="text-sm font-bold text-gray-900">S-Curve Spine Support</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Anatomically curved straps distribute up to 35% of the bag's weight across the hips and shoulders rather than stressing the spine.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-sm font-bold text-gray-900">Weather-Shield Fabrics</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Constructed with 900D water-repellent Oxford poly and sealed zipper guards to protect books from monsoons and accidental drink spills.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Heart size={24} />
            </div>
            <h3 className="text-sm font-bold text-gray-900">High-Tensile Stitching</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Every major load point is reinforced with industrial bar-tack stitching tested to withstand over 25 kilograms of dynamic pull.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-sm font-bold text-gray-900">1-Year Official Warranty</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              We stand behind our durability promise. Any zipper, seam, or buckle failure within 12 months is replaced free of charge.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Ready to Give Your Child the Comfort They Deserve?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto">
            Explore our latest 2026 school bag collection with certified spinal support and free nationwide delivery.
          </p>
          <div className="pt-2">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand hover:bg-brand-dark text-white font-extrabold text-sm rounded-xl transition-all shadow-lg"
            >
              Explore All School Bags <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
