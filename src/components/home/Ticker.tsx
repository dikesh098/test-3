const TICKER_ITEMS = [
  "🌐 Website Development",
  "📱 App Development",
  "📣 Digital Marketing & Social Media",
  "🤖 AI Agents & Automation",
  "📈 CRM SaaS Platform",
  "🛠️ Tech Support & Managed IT",
  "🎬 Video Production & Reels",
  "🚀 Startup Launch Strategy",
];

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-line bg-surface-2 py-3" aria-hidden="true">
      <div className="animate-ticker inline-flex">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="px-4 text-sm font-semibold text-ink-2">{item}</span>
            <span className="text-brand/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
