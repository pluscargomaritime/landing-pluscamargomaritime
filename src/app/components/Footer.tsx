export default function Footer() {
  return (
    <div className="absolute bottom-0 flex h-auto md:h-[130px] items-center justify-between left-0 right-0 px-4 md:px-20 py-6 md:py-[32px] z-10 flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-col items-center md:items-start">
        <p className="font-['Hanken_Grotesk'] font-medium text-[10px] md:text-[12px] text-[rgba(207,196,197,0.6)] tracking-[1px] md:tracking-[1.2px] uppercase m-0 text-center md:text-left leading-[12px]">© 2024 CARGO MARITIME GLOBAL LINES. PRECISION IN MOTION.</p>
      </div>

      <div className="flex gap-4 md:gap-[32px] flex-wrap justify-center md:justify-start">
        <button className="font-['Hanken_Grotesk'] font-medium text-[10px] md:text-[12px] text-[rgba(207,196,197,0.6)] tracking-[1px] md:tracking-[1.2px] uppercase hover:text-[#c6c6c6] transition-colors">
          PRIVACY POLICY
        </button>
        <button className="font-['Hanken_Grotesk'] font-medium text-[10px] md:text-[12px] text-[rgba(207,196,197,0.6)] tracking-[1px] md:tracking-[1.2px] uppercase hover:text-[#c6c6c6] transition-colors">
          TERMS OF SERVICE
        </button>
        <button className="font-['Hanken_Grotesk'] font-medium text-[10px] md:text-[12px] text-[#c6c6c6] tracking-[1px] md:tracking-[1.2px] uppercase hover:text-white transition-colors">
          GLOBAL FLEET STATUS
        </button>
      </div>
    </div>
  );
}
