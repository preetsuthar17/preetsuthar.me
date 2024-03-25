import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MagneticLink({ children }) {
  const magnetic = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic?.current, "x", {
      ease: "expo",
      duration: 1,
    });

    const yTo = gsap.quickTo(magnetic?.current, "y", {
      ease: "expo",
      duration: 1,
    });

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic?.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x);
      yTo(y);
    };

    const mouseLeave = (e) => {
      gsap.to(magnetic?.current, { x: 0 });
      gsap.to(magnetic?.current, { y: 0 });

      xTo(0);
      yTo(0);
    };

    magnetic.current?.addEventListener("mousemove", mouseMove);
    magnetic.current?.addEventListener("mouseleave", mouseLeave);

    return () => {
      magnetic.current?.removeEventListener("mousemove", mouseMove);
      magnetic.current?.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}
