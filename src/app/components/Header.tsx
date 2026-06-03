import { useEffect, useState } from 'react';
import imgIconLogo from '../../assets/icon-logo.png';

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsFixed(false); // setIsFixed(scrolled > 117);

      // Calculate scroll progress for effects
      const maxScroll = 500;
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNewsletter = () => {
    const newsletterSection = document.getElementById('newsletter-section');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Focus en el input después del scroll
      setTimeout(() => {
        const emailInput = document.getElementById('email-input');
        if (emailInput) {
          emailInput.focus();
        }
      }, 800);
    }
  };

  return (
    <div
      className={`${
        isFixed
          ? 'fixed animate-[slideDown_0.4s_ease-out] backdrop-blur-[32px] bg-[rgba(255,255,255,0.04)] shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
          : 'absolute backdrop-blur-none bg-transparent'
      } flex h-auto md:h-[117px] items-center justify-between left-0 w-full pb-3 md:pb-[25px] pt-3 md:pt-[24px] px-4 md:px-20 top-0 z-20 flex-row gap-3 md:gap-0 transition-all duration-300`}
      style={{
        backdropFilter: isFixed ? 'blur(32px) saturate(180%)' : 'none',
      }}
    >
      {/* Gradient border effect */}
      <div
        className={`absolute inset-0 pointer-events-none transition-all duration-500 ease-in-out ${
          isFixed ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(to right, rgba(233,195,73,0.1), rgba(233,195,73,0), rgba(233,195,73,0.1))',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
        aria-hidden
      />

      <div className="h-[40px] md:h-[60px] relative flex-shrink-0 animate-[slideInRight_0.6s_ease-out]">
        <img
          alt="Cargo Maritime Global Lines"
          className="h-full w-auto object-contain transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(233,195,73,0.4)]"
          src={imgIconLogo}
        />
      </div>

      <button
        onClick={scrollToNewsletter}
        className="bg-gradient-to-br from-[#d4d4d4] to-[#c6c6c6] flex items-center justify-center gap-2 px-3 md:px-[24px] py-1.5 md:py-[8px] rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-4px_rgba(0,0,0,0.2)] flex-shrink-0 transition-all duration-300 hover:shadow-[0px_15px_25px_-5px_rgba(0,0,0,0.3),0px_8px_10px_-6px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 relative overflow-hidden group animate-[slideInRight_0.6s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]"
        aria-label="Get priority access to launch"
      >
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <p className="font-['Hanken_Grotesk'] text-[#303030] text-[11px] md:text-[16px] tracking-[2.4px] md:tracking-[3.2px] uppercase leading-[20px] m-0 relative z-10">PRIORITY ACCESS</p>
        {/* Arrow icon - solo visible en desktop */}
        <svg className="hidden md:block w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="#303030" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>
  );
}
