import { Instagram } from './social/Instagram';
import { LinkedIn } from './social/LinkedIn';
import { WhatsApp } from './social/WhatsApp';

export default function SocialLinks() {
  return (
    <div className="hidden md:flex absolute backdrop-blur-[16px] bg-[rgba(32,32,31,0.3)] top-1/2 -translate-y-1/2 flex-col items-center px-[9px] py-[33px] right-[32px] rounded-[9999px] border border-[rgba(255,255,255,0.1)] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)] z-10 gap-6 animate-[slideInRight_0.8s_ease-out_1.6s] opacity-0 [animation-fill-mode:forwards] hover:bg-[rgba(32,32,31,0.4)] transition-all duration-300">
      {/* Gradient glow effect */}
      <div className="absolute inset-0 rounded-[9999px] bg-gradient-to-b from-[rgba(233,195,73,0.1)] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <a
        aria-label="LinkedIn"
        className="w-[20px] h-[20px] transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(233,195,73,0.5)] relative group"
        href="#"
        rel="noopener noreferrer"
      >
        <div className="absolute inset-0 bg-[#e9c349] rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        <LinkedIn />
      </a>

      <a
        aria-label="Instagram"
        className="w-[18px] h-[20px] transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(233,195,73,0.5)] relative group"
        href="https://www.instagram.com/pluscargomaritime?igsh=aXdmNDJ5aXI0aHRu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="absolute inset-0 bg-[#e9c349] rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        <Instagram />
      </a>

      <a
        aria-label="WhatsApp"
        className="w-[20px] h-[20px] transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(233,195,73,0.5)] relative group"
        href="https://wa.me/34610781452"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="absolute inset-0 bg-[#e9c349] rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        <WhatsApp />
      </a>
    </div>
  );
}
