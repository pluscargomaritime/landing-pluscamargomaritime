import AtmosphericBackgroundLayers from './components/AtmosphericBackgroundLayers';
import WorldMapOverlay from './components/WorldMapOverlay';
import StarryOverlay from './components/StarryOverlay';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';

export default function App() {
  return (
    <div
      className="flex flex-col items-center w-full relative min-h-screen bg-[#131313]"
    >
      <div className="flex flex-col items-center justify-center flex-1 w-full pt-[70px] md:pt-[100px] pb-10 md:pb-0">
      <AtmosphericBackgroundLayers />
      <WorldMapOverlay />
      <StarryOverlay />
      <Header />
      <MainContent />
      </div>
      <Footer />
      <SocialLinks />
    </div>
  );
}
