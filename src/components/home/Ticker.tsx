const TICKER_ITEMS = [
  "🌐 Website Development",
  "📱 App Development",
  "📊 Social Media Management",
  "🎬 Video Production & Reels",
  "🏛️ GST / ITR / PF / Udyam",
  "🚀 Brand Launch Strategy",
  "🪪 PAN Card Services",
  "🍽️ FSSAI Food Licence",
  "💰 PF Withdrawal",
];

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="overflow-hidden whitespace-nowrap bg-brand py-3" aria-hidden="true">
      <div className="animate-ticker inline-flex">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="px-4 text-sm font-semibold text-white">{item}</span>
            <span className="text-white/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
