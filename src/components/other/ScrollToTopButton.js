import SmoothScrollLink from "./SmoothLinkScroll";

export const ScrollToTopButton = () => {
  return (
    <SmoothScrollLink href="#home" className="scroll-to-top-button">
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11 5.825L6.4 10.4L5 9l7-7l7 7l-1.4 1.425l-4.6-4.6V13h-2zM11 18v-3h2v3zm0 4v-2h2v2z"
          />
        </svg>
      </p>
    </SmoothScrollLink>
  );
};
