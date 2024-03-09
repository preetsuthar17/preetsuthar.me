import SmoothScrollLink from "./SmoothLinkScroll";

export const ScrollToTopButton = () => {
  return (
    <SmoothScrollLink href="#home" className="scroll-to-top-button">
      <p>Scroll To Top</p>
    </SmoothScrollLink>
  );
};
