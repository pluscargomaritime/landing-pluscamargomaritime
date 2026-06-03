import { useEffect, useState } from 'react';
import imgLogo from '../../assets/logo.png';
import imgIconLogo from '../../assets/icon-logo.png';

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 117);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`${
        isFixed
          ? 'fixed animate-[slideDown_0.4s_ease-out] backdrop-blur-[32px] bg-[rgba(255,255,255,0.04)]'
          : 'absolute backdrop-blur-none bg-transparent'
      } flex h-auto md:h-[117px] items-center justify-between left-0 w-full pb-3 md:pb-[25px] pt-3 md:pt-[24px] px-4 md:px-20 top-0 z-20 flex-row gap-3 md:gap-0`}
    >
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ease-in-out ${
          isFixed ? 'border-b border-[rgba(255,255,255,0.03)] opacity-100' : 'border-b border-transparent opacity-0'
        }`}
        aria-hidden
      />
      <div className="h-[50px] md:h-[100px] relative flex-shrink-0">
        {/* Icon logo for mobile, full logo for desktop */}
        <img alt="Cargo Maritime Global Lines" className="md:hidden h-full w-auto object-contain" src={imgIconLogo} />
        <img alt="Cargo Maritime Global Lines" className="hidden md:block h-full w-auto object-contain" src={imgLogo} />
      </div>
      <div className="bg-[#c6c6c6] flex items-center justify-center px-3 md:px-[24px] py-1.5 md:py-[8px] rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-4px_rgba(0,0,0,0.2)] flex-shrink-0">
        <p className="font-['Hanken_Grotesk'] text-[#303030] text-[11px] md:text-[16px] tracking-[2.4px] md:tracking-[3.2px] uppercase leading-[20px] m-0">PRIORITY ACCESS</p>
      </div>
    </div>
  );
}
