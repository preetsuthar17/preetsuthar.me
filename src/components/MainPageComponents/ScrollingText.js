import { wrap } from "@motionone/utils";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

function ScrollingText({ children, baseVelocity = 5 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 500,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 10000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
        <span className="text-only-outline">{children}</span>
      </motion.div>
    </div>
  );
}

export default ScrollingText;
