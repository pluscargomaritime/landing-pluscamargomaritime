import { useEffect, useState } from 'react';
import imgImage2 from '../../assets/background.png';

export default function AtmosphericBackgroundLayers() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-start justify-center overflow-clip">
      <div
        className="h-[1015px] md:h-[1015px] relative w-full transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0001})`,
        }}
      >
        <img
          alt="Atmospheric background"
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage2}
        />
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#131313]/40 pointer-events-none" />
      </div>
    </div>
  );
}
