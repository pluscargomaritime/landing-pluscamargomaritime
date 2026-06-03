export default function Footer() {
  return (
    <div className="flex h-auto md:h-[130px] items-center justify-between w-full px-4 md:px-20 py-6 md:py-[32px] z-10 flex-col md:flex-row gap-6 md:gap-0 border-t border-[rgba(255,255,255,0.05)] mt-16 md:mt-0 backdrop-blur-sm bg-[rgba(19,19,19,0.5)]">
      <div className="flex flex-col items-center md:items-start animate-[fadeIn_0.8s_ease-out]">
        <p className="font-['Hanken_Grotesk'] font-medium text-[10px] md:text-[12px] text-[rgba(207,196,197,0.6)] tracking-[1px] md:tracking-[1.2px] uppercase m-0 text-center md:text-left leading-[12px] hover:text-[rgba(207,196,197,0.8)] transition-colors duration-300">
          © 2024 CARGO MARITIME GLOBAL LINES. PRECISION IN MOTION.
        </p>
      </div>

      <div className="flex gap-4 md:gap-[32px] flex-wrap justify-center md:justify-start">
        <button className="font-['Hanken_Grotesk'] font-medium text-[10px] md:text-[12px] text-[rgba(207,196,197,0.6)] tracking-[1px] md:tracking-[1.2px] uppercase hover:text-[#e9c349] transition-all duration-300 relative group">
          <span className="relative z-10">PRIVACY POLICY</span>
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#e9c349] group-hover:w-full transition-all duration-300" />
        </button>
        <button className="font-['Hanken_Grotesk'] font-medium text-[10px] md:text-[12px] text-[rgba(207,196,197,0.6)] tracking-[1px] md:tracking-[1.2px] uppercase hover:text-[#e9c349] transition-all duration-300 relative group">
          <span className="relative z-10">TERMS OF SERVICE</span>
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#e9c349] group-hover:w-full transition-all duration-300" />
        </button>
        <button className="font-['Hanken_Grotesk'] font-medium text-[10px] md:text-[12px] text-[#c6c6c6] tracking-[1px] md:tracking-[1.2px] uppercase hover:text-[#e9c349] transition-all duration-300 relative group">
          <span className="relative z-10 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
            GLOBAL FLEET STATUS
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#e9c349] group-hover:w-full transition-all duration-300" />
        </button>
      </div>
    </div>
  );
}
