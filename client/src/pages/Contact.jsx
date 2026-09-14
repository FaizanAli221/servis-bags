import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, HelpCircle, ChevronDown, MessageSquare } from "lucide-react";

const FAQS = [
  {
    q: "How long does nationwide delivery take in Pakistan?",
    a: "Standard shipping takes 2 to 4 working days for major cities (Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan). Other regional areas are typically delivered within 4 to 6 business days via trusted courier partners."
  },
  {
    q: "Is Cash on Delivery (COD) available?",
    a: "Yes! We offer Cash on Delivery across all serviceable postal codes in Pakistan. You only pay when your parcel is physically delivered to your doorstep."
  },
  {
    q: "What does the 1-Year Official Warranty cover?",
    a: "Our warranty covers manufacturing defects including zipper breakage, seam unraveling, shoulder strap tearing, and buckle failure under normal student usage. We provide free repair or direct bag replacement."
  },
  {
    q: "What is your return & exchange policy?",
    a: "We provide a 7-day hassle-free return and exchange window. If your child prefers a different color or size, simply contact our WhatsApp support at +92 300 1234567 and we will arrange an exchange."
  },
  {
    q: "Are the bags water-resistant?",
    a: "Yes! All Servis Bags utilize high-density 900D Oxford nylon or PVC-backed poly fabric with water-repellent coatings to keep books, laptops, and homework dry during rain."
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Page Header */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-brand">We're Here to Help</span>
        <h1 className="text-3xl font-black text-gray-950">Customer Support & FAQs</h1>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
          Have questions about bag sizing, order tracking, bulk school orders, or warranty claims? Get in touch with our support team.
        </p>
      </div>

      {/* Main Grid: Contact Channels & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-red-50 text-brand flex items-center justify-center flex-shrink-0">
              <Phone size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Phone Helpline</h3>
              <p className="text-xs text-gray-500 mt-0.5">Call our friendly support team</p>
              <a href="tel:+923001234567" className="text-sm font-bold text-brand block mt-1 hover:underline">
                +92 300 1234567
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <MessageSquare size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">WhatsApp Live Chat</h3>
              <p className="text-xs text-gray-500 mt-0.5">Fast replies within 15 minutes</p>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md inline-block mt-2 hover:bg-emerald-100 transition-colors"
              >
                Chat on WhatsApp ➔
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Email Support</h3>
              <p className="text-xs text-gray-500 mt-0.5">Official inquiries & bulk orders</p>
              <a href="mailto:support@servisbags.pk" className="text-sm font-bold text-blue-600 block mt-1 hover:underline">
                support@servisbags.pk
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Working Hours</h3>
              <p className="text-xs text-gray-600 mt-1">Monday – Saturday: 9:00 AM – 7:00 PM</p>
              <p className="text-[11px] text-gray-400">Sunday: Closed (Online orders 24/7)</p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Message Received!</h3>
              <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
                Thank you for reaching out, <span className="font-semibold text-gray-800">{formData.name}</span>. A Servis customer care representative will contact you within 24 business hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", phone: "", message: "" });
                }}
                className="px-6 py-2.5 bg-brand text-white text-xs font-bold rounded-xl hover:bg-brand-dark transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900">Send Us a Direct Message</h3>
              <p className="text-xs text-gray-500">Fill in the details below and we will get right back to you.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Asad Farooq"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand/30"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0300 1234567"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand/30"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand/30"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Your Message or Order Query *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your question, bag sizing inquiry, or order reference number..."
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand/30"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-brand hover:bg-brand-dark text-white font-extrabold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all uppercase tracking-wider"
              >
                <Send size={15} /> Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Frequently Asked Questions Accordion */}
      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">Answers to Common Questions</span>
          <h2 className="text-2xl font-black text-gray-950">Frequently Asked Questions</h2>
        </div>

        <div className="divide-y divide-gray-100 max-w-3xl mx-auto">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="py-4">
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between text-left gap-4 group"
                >
                  <span className="text-sm font-bold text-gray-900 group-hover:text-brand transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="text-xs text-gray-600 leading-relaxed pt-2.5 pr-6 animate-in fade-in">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
