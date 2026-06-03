import { useEffect } from 'react';
import AtmosphericBackgroundLayers from './components/AtmosphericBackgroundLayers';
import WorldMapOverlay from './components/WorldMapOverlay';
import StarryOverlay from './components/StarryOverlay';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import CustomCursor from './components/CustomCursor';
import FloatingParticles from './components/FloatingParticles';

export default function App() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full relative min-h-screen bg-[#131313] overflow-x-hidden">
      {/* Custom cursor - hidden on mobile */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Main content wrapper */}
      <div className="flex flex-col items-center justify-center flex-1 w-full pt-[70px] md:pt-[100px] pb-10 md:pb-0 relative">
        <AtmosphericBackgroundLayers />
        <WorldMapOverlay />
        <StarryOverlay />
        <FloatingParticles />
        <Header />
        <MainContent />
      </div>

      <Footer />
      <SocialLinks />

      {/* Scroll indicator */}
      {/* <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10 animate-[fadeIn_1s_ease-out_2s] opacity-0 [animation-fill-mode:forwards] md:hidden">
        <div className="flex flex-col items-center gap-2 opacity-60">
          <div className="w-6 h-10 border-2 border-[#e9c349] rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-2 bg-[#e9c349] rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div> */}
    </div>
  );
}
