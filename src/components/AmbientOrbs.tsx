// AmbientOrbs — purely decorative fixed background lighting orbs.
// Server component: no interactivity needed.
export default function AmbientOrbs() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute -top-32 -left-32 w-[650px] h-[650px] bg-emerald-400/[0.12] rounded-full blur-[130px] animate-[pulseSlow_8s_ease-in-out_infinite]" />
      <div
        className="absolute top-[28%] -right-40 w-[680px] h-[680px] bg-amber-400/10 rounded-full blur-[140px] animate-[pulseSlow_8s_ease-in-out_infinite]"
        style={{ animationDelay: "3s" }}
      />
      <div className="absolute top-[65%] -left-[100px] w-[550px] h-[550px] bg-emerald-500/[0.08] rounded-full blur-[140px]" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-500/[0.08] rounded-full blur-[120px]" />
    </div>
  );
}
