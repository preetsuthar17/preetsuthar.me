import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [cursorType, setCursorType] = useState("default");
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the device is a mobile device
    const isMobileDevice = window.matchMedia("(max-width: 767px)").matches;
    setIsMobile(isMobileDevice);

    let animation;

    const handleMouseMove = (e) => {
      const { clientX, clientY, target } = e;

      if (!isMouseMoving) {
        setIsMouseMoving(true);
      }

      cancelAnimationFrame(animation);

      animation = requestAnimationFrame(() => {
        setPosition({
          x: clientX,
          y: clientY,
        });

        const cursor = window.getComputedStyle(target).cursor;
        setCursorType(cursor);

        setIsPointer(cursor === "pointer");

        if (
          Math.abs(position.x - clientX) < 0.1 &&
          Math.abs(position.y - clientY) < 0.1
        ) {
          setIsMouseMoving(false);
        }
      });
    };

    const handleMouseStop = () => {
      if (!isMouseMoving) {
        cancelAnimationFrame(animation);

        animation = requestAnimationFrame(() => {
          setPosition({
            x: position.x + 0.2 * (0 - position.x),
            y: position.y + 0.2 * (0 - position.y),
          });
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseStop);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseStop);
      cancelAnimationFrame(animation);
    };
  }, [position, isMouseMoving]);

  if (isMobile) {
    return null;
  }

  const cursorStyles = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: `translate(-50%, -50%) scale(${isPointer ? 2.2 : 0.4})`,
    transformOrigin: "50% 50%",
    mixBlendMode: isPointer ? "difference" : "normal",
    transition: "transform 0.2s ease-out",
  };

  return (
    <div id="custom-cursor" className={`custom_cursor`} style={cursorStyles} />
  );
};

export default CustomCursor;
