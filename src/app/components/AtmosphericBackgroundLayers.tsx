import imgImage2 from '../../assets/background.png';

export default function AtmosphericBackgroundLayers() {
  return (
    <div className="absolute inset-0 flex flex-col items-start justify-center overflow-clip">
      <div className="h-[1015px] md:h-[1015px] relative w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}
