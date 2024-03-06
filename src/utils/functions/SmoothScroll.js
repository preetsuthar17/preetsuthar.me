import ReactLenis from "@studio-freight/react-lenis";

export const SmoothScroll = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
        SmoothScroll: true,
        smoothWheel: true,
        syncTouch: true,
        smoothTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};
