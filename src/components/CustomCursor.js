import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [isMobile, setIsMobile] = useState(false);
  const [isPointerActive, setIsPointerActive] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkMobile);
      checkMobile();
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", checkMobile);
      }
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 9);
      cursorY.set(e.clientY - 40);
    };

    const addPointerCursor = (e) => {
      e.target.classList.add("pointerCursorActive");
      setIsPointerActive(true);
    };

    const removePointerCursor = (e) => {
      e.target.classList.remove("pointerCursorActive");
      setIsPointerActive(false);
    };

    window.addEventListener("mousemove", moveCursor);
    const pointerElements = document.querySelectorAll(".pointerCursor");
    pointerElements.forEach((el) => {
      el.addEventListener("mouseenter", addPointerCursor);
      el.addEventListener("mouseleave", removePointerCursor);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      pointerElements.forEach((el) => {
        el.removeEventListener("mouseenter", addPointerCursor);
        el.removeEventListener("mouseleave", removePointerCursor);
      });
    };
  }, [cursorX, cursorY, isMobile]);

  if (isMobile) return null;

  const cursorSize = isPointerActive ? 30 : 20;

  return (
    <motion.div
      className={`cursor ${isPointerActive ? "active" : ""}`}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        backgroundColor: "#ccc",
        mixBlendMode: "difference",
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 99999,
      }}
    />
  );
};

export default CustomCursor;
