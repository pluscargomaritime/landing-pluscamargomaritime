import { useState } from 'react';
import svgPaths from '../../assets/svgPaths';

export default function MainContent() {
  const [email, setEmail] = useState('');

  return (
    <div className="flex flex-col items-center w-full max-w-[896px] px-4 md:px-20 relative z-10">
      <div className="flex flex-col items-center max-w-[768px] pb-6 md:pb-[24px] w-full">
        <div className="flex flex-col font-['Noto_Serif'] font-semibold text-[#e5e2e1] text-[28px] md:text-[48px] text-center leading-tight md:leading-[57.6px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          <p className="m-0">Connecting Global Trade</p>
          <p className="m-0">Through Intelligent Maritime</p>
          <p className="m-0">Solutions</p>
        </div>
      </div>

      <div className="relative w-full max-w-[736px] mb-8 md:mb-0">
        <div className="flex flex-col font-['Hanken_Grotesk'] text-[#cfc4c5] text-[16px] md:text-[18px] text-center leading-relaxed md:leading-[28.8px]">
          <p className="m-0">We are building a new digital experience to present our international maritime and</p>
          <p className="m-0">trading operations.</p>
        </div>
      </div>

      <div className="bg-[#e9c349] flex items-center justify-center px-8 md:px-[40px] py-3 md:py-[12px] rounded-[9999px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] my-8 md:my-2">
        <p className="font-['Hanken_Grotesk'] font-semibold text-[#3c2f00] text-[12px] md:text-[14px] tracking-[3.6px] md:tracking-[4.2px] uppercase leading-[14px] m-0">COMING SOON</p>
      </div>

      <div className="flex flex-col items-start w-full max-w-[448px] pt-12 md:pt-[64px]">
        <div className="flex items-end w-full border-b border-[#988e90] pb-[9px] relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Register for priority launch access"
            className="flex-1 bg-transparent font-['Hanken_Grotesk'] text-[#cfc4c5] text-[14px] md:text-[16px] outline-none placeholder:text-[#cfc4c5] pb-[10px] pt-[9px] px-[12px]"
          />
          <button
            className="h-[32px] w-[16px] flex-shrink-0"
            aria-label="Submit"
          >
            <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 32">
              <path d={svgPaths.p1e720300} fill="#E9C349" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
