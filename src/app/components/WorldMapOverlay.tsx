export default function WorldMapOverlay() {
  return (
    <div
      className="absolute inset-0 flex flex-col items-start justify-center opacity-20"
      style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1280 1024\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(81.96 0 0 81.96 640 512)\\'><stop stop-color=\\'rgba(19,19,19,0)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(19,19,19,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}
    >
      <div className="h-[1024px] relative w-full" style={{ backgroundImage: "linear-gradient(24.7913deg, rgba(233, 195, 73, 0) 49.5%, rgba(233, 195, 73, 0.05) 50%, rgba(233, 195, 73, 0) 50.5%)" }} />
    </div>
  );
}
