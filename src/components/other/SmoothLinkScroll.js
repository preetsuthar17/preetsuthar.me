import { useEffect, useRef, forwardRef } from "react";
import Link from "next/link";

const SmoothScrollLink = forwardRef(
  ({ href, children, className, dataLink }, ref) => {
    const linkRef = useRef(null);

    useEffect(() => {
      const link = linkRef.current;
      if (link) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const id = href.slice(1);
          const target = document.getElementById(id);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        });
      }
    }, [href]);

    return (
      <Link
        href={href}
        ref={ref || linkRef}
        className={className}
        style={{
          cursor: "pointer",
        }}
        data-link={dataLink}
      >
        {children}
      </Link>
    );
  }
);

export default SmoothScrollLink;
