export default function Logo({ size = 32, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
        <defs><linearGradient id="fm-logo" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#818cf8" /><stop offset="1" stopColor="#4338ca" /></linearGradient></defs>
        <rect width="32" height="32" rx="9" fill="url(#fm-logo)" />
        <path d="M10 8h4v16h-4zM14 8h10v4H14zM14 15h7v4h-7z" fill="#fff" />
        <circle cx="23.5" cy="22.5" r="2.6" fill="#2dd4bf" />
      </svg>
      <span className="font-serif text-xl lowercase">fermor</span>
    </span>
  );
}
