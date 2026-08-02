export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="animate-aurora absolute -top-[30%] -left-[15%] h-[70vh] w-[70vh] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, #7C3AED66, transparent 70%)" }}
      />
      <div
        className="animate-aurora absolute top-[10%] right-[-10%] h-[60vh] w-[60vh] rounded-full blur-[130px]"
        style={{
          background: "radial-gradient(circle, #38BDF855, transparent 70%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="animate-aurora absolute bottom-[-25%] left-[25%] h-[65vh] w-[65vh] rounded-full blur-[140px]"
        style={{
          background: "radial-gradient(circle, #A855F74d, transparent 70%)",
          animationDelay: "-12s",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 0%, #000 30%, transparent 75%)",
        }}
      />
    </div>
  );
}
