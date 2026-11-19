/* eslint-disable @next/next/no-img-element */
export default function Logo({ size = "md", showAcademy = true }) {
  const img = size === "lg" ? "h-9" : "h-7 sm:h-8";
  const text = size === "lg" ? "text-[1.6rem]" : "text-[1.3rem] sm:text-[1.5rem]";
  return (
    <span className="flex items-center gap-3 sm:gap-4">
      <img src="/logo.png" alt="" width="107" height="37" className={`${img} w-auto`} />
      <span className={`font-display font-semibold tracking-[-0.02em] text-navy ${text}`}>
        EspaFrane{showAcademy && <span className="text-rust">Academy</span>}
      </span>
    </span>
  );
}
