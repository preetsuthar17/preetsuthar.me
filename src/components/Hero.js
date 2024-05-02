import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export const InfiniteScrollingTextV1 = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  const maxRotation = 8;
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      const midpoint = window.innerWidth / 2;

      const distanceFromMidpoint = Math.abs(e.clientX - midpoint);
      const rotation = (distanceFromMidpoint / midpoint) * maxRotation;

      setRotation(e.clientX > midpoint ? rotation : -rotation);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className={`following-tooltip w-fit text-nowrap flex items-center justify-center text-black font-semi-bold px-[3rem] py-[1.4rem] rounded-3xl fixed h-[2rem] bg-white  transition-opacity z-[99] duration-[0.3s] border border-black border-opacity-20 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          top: `${cursorPosition.y}px`,
          left: `${cursorPosition.x}px`,
          transform: `rotateZ(${rotation}deg) translate(-50%, -140%)`,
        }}
      >
        <p>Let's work Together 💪</p>
      </div>
      <main className="relative flex mt-[6rem] rotate-[-2deg] overflow-hidden w-vw bg-[#ff7b00]">
        <motion.div
          className="whitespace-nowrap "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            x: [-1, -1000],
            transition: {
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            },
          }}
        >
          <Link href="#contact">
            <h3 className="relative transition-all hover:opacity-90 cursor-pointer text-white text-[4rem] font-[400]  w-full grow bricolage-fonts flex items-center gap-9 justify-center max-[500px]:text-[3rem]">
              Preet Suthar <small className="text-md">✦</small> Preet Suthar{" "}
              <small className="text-md">✦</small> Preet Suthar{" "}
              <small className="text-md">✦</small> Preet Suthar{" "}
              <small className="text-md">✦</small> Preet Suthar{" "}
              <small className="text-md">✦</small> Preet Suthar{" "}
              <small className="text-md">✦</small> Preet Suthar{" "}
              <small className="text-md">✦</small> Preet Suthar{" "}
              <small className="text-md">✦</small> Preet Suthar
              <small className="text-md">✦</small> Preet Suthar{" "}
              <small className="text-md">✦</small>
            </h3>
          </Link>
        </motion.div>
      </main>
    </>
  );
};

export const Hero = () => {
  const paraRef = useRef(null);
  const para2Ref = useRef(null);

  const buttonRef = useRef(null);
  const button2Ref = useRef(null);

  useEffect(() => {
    gsap.to(para2Ref.current, {
      transform: "translateY(0) rotate(0)",
      ease: "circ.out",
    });
    gsap.to(paraRef.current, {
      transform: "translateY(0) rotate(0)",
      ease: "circ.out",
      delay: 0.2,
    });
    gsap.to(buttonRef.current, {
      transform: "translateY(0)",
      ease: "circ.out",
      delay: 0.2,
    });
    gsap.to(button2Ref.current, {
      transform: "translateY(0)",
      ease: "circ.out",
      delay: 0.2,
    });
  }, []);

  return (
    <>
      <section
        className=" pt-[9rem] hero"
        style={{
          minHeight: "calc(100dvh - 6.15rem)",
        }}
      >
        <div className="flex flex-col items-center justify-center px-10 hero-heading-container py-7 -space-y-[2rem]">
          <div className="p-4 overflow-hidden z-[9]">
            <h1
              ref={para2Ref}
              className="hero-heading poppins-fonts translate-y-[25rem] rotate-[-16deg] font-semi-bold   max-[1060px]:tracking-[-7px] tracking-[-1.2rem]    max-[680px]:tracking-[-9px]  max-[550px]:tracking-[-9px]  max-[480px]:tracking-[-7px]  opacity-90 px-[1rem]"
            >
              Freelance
            </h1>
          </div>
          <div className="overflow-hidden">
            <h2
              ref={paraRef}
              className="hero-heading2 poppins-fonts translate-y-[12rem] rotate-[-7deg]  max-[1060px]:tracking-[-6px] tracking-[-11.5px]  max-[680px]:tracking-[-4px] max-[550px]:tracking-[-4px] max-[480px]:tracking-[-4px] text-nowrap opacity-80 px-[1rem]"
            >
              Designer & Developer
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1 mx-auto overflow-hidden w-fit">
          <Link
            className="primary-button translate-y-[12rem]"
            ref={buttonRef}
            href="#"
          >
            Let's work together
          </Link>
          <Link
            className="secondary-button translate-y-[12rem]"
            ref={button2Ref}
            href="#"
          >
            Projects
          </Link>
        </div>
        <InfiniteScrollingTextV1 />
      </section>
    </>
  );
};
