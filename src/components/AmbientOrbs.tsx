// AmbientOrbs — purely decorative fixed background lighting orbs.
// Server component: recolored to brand blue and spectrum cyan with theme-aware opacity.
export default function AmbientOrbs() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute -top-32 -left-32 w-[650px] h-[650px] bg-brand-blue/[0.08] dark:bg-brand-blue/[0.18] rounded-full blur-[130px] animate-[pulseSlow_8s_ease-in-out_infinite]" />
      <div
        className="absolute top-[28%] -right-40 w-[680px] h-[680px] bg-spectrum-cyan/[0.07] dark:bg-spectrum-cyan/[0.15] rounded-full blur-[140px] animate-[pulseSlow_8s_ease-in-out_infinite]"
        style={{ animationDelay: "3s" }}
      />
      <div className="absolute top-[65%] -left-[100px] w-[550px] h-[550px] bg-brand-blue-bright/[0.06] dark:bg-brand-blue-bright/[0.12] rounded-full blur-[140px]" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-spectrum-cyan/[0.05] dark:bg-spectrum-cyan/[0.10] rounded-full blur-[120px]" />
    </div>
  );
}
