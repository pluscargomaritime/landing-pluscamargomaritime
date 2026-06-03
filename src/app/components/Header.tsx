import { useEffect, useState } from 'react';
import imgLogo from '../../assets/logo.png';

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
      } flex h-auto md:h-[117px] items-center justify-between left-0 w-full pb-4 md:pb-[25px] pt-4 md:pt-[24px] px-4 md:px-20 top-0 z-20 flex-col md:flex-row gap-4 md:gap-0`}
    >
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ease-in-out ${
          isFixed ? 'border-b border-[rgba(255,255,255,0.03)] opacity-100' : 'border-b border-transparent opacity-0'
        }`}
        aria-hidden
      />
      <div className="h-[100px] relative">
        <img alt="Cargo Maritime Global Lines" className="h-full w-auto object-contain" src={imgLogo} />
      </div>
      <div className="bg-[#c6c6c6] flex items-center justify-center px-6 md:px-[24px] py-2 md:py-[8px] rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-4px_rgba(0,0,0,0.2)]">
        <p className="font-['Hanken_Grotesk'] text-[#303030] text-[14px] md:text-[16px] tracking-[2.8px] md:tracking-[3.2px] uppercase leading-[24px] m-0">PRIORITY ACCESS</p>
      </div>
    </div>
  );
}
