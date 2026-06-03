import { Instagram } from './social/Instagram';
import { LinkedIn } from './social/LinkedIn';
import { WhatsApp } from './social/WhatsApp';

export default function SocialLinks() {
  return (
    <div className="hidden md:flex absolute backdrop-blur-[12px] bg-[rgba(32,32,31,0.2)] top-1/2 -translate-y-1/2 flex-col items-center px-[9px] py-[33px] right-[32px] rounded-[9999px] border border-[rgba(255,255,255,0.1)] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)] z-10 gap-6">
      <a aria-label="LinkedIn" className="w-[20px] h-[20px] hover:opacity-70 transition-opacity" href="#" rel="noopener noreferrer">
        <LinkedIn />
      </a>

      <a aria-label="Instagram" className="w-[18px] h-[20px] hover:opacity-70 transition-opacity" href="https://www.instagram.com/pluscargomaritime?igsh=aXdmNDJ5aXI0aHRu" target="_blank" rel="noopener noreferrer">
        <Instagram />
      </a>
      
      <a aria-label="WhatsApp" className="w-[20px] h-[20px] hover:opacity-70 transition-opacity" href="https://wa.me/34610781452" target="_blank" rel="noopener noreferrer">
        <WhatsApp />
      </a>
    </div>
  );
}
