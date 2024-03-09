import { useEffect, useRef } from "react";
import Link from "next/link";

const SmoothScrollLink = ({ href, children, className }) => {
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
      ref={linkRef}
      className={className}
      style={{
        cursor: "pointer",
      }}
    >
      {children}
    </Link>
  );
};

export default SmoothScrollLink;
