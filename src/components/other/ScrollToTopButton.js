import { Link as ScrollLink } from "react-scroll";

export const ScrollToTopButton = () => {
  return (
    <ScrollLink
      to="home"
      style={{
        cursor: "pointer",
      }}
      spy={true}
      smooth={true}
      offset={-70}
      duration={600}
      className="scroll-to-top-button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M11 20V7.825l-5.6 5.6L4 12l8-8l8 8l-1.4 1.425l-5.6-5.6V20z"
        />
      </svg>
    </ScrollLink>
  );
};
