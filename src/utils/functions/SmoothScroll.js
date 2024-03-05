import ReactLenis from "@studio-freight/react-lenis";

export const SmoothScroll = ({ children }) => {
  return (
    <ReactLenis root options={{ duration: 3.2 }}>
      {children}
    </ReactLenis>
  );
};
