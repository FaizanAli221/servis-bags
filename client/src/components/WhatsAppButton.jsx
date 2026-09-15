import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "923337285603";
  const defaultMessage = encodeURIComponent(
    "Hi Servis Bags! I need help with choosing a school bag."
  );

  return (
    <aside
      aria-label="Contact Customer Support via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center group pointer-events-auto"
    >
      {/* Tooltip on hover */}
      <span className="hidden md:inline-block mr-2 px-3 py-1.5 bg-neutral-900 text-white text-xs font-bold rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-neutral-700">
        Chat with us: <span className="text-emerald-400 font-mono">0333-7285603</span>
      </span>

      {/* Floating Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat on WhatsApp 03337285603"
      >
        {/* Pulse effect rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10"></span>
        <MessageCircle size={30} fill="currentColor" />
      </a>
    </aside>
  );
}
