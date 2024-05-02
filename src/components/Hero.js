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
        className={`following-tooltip w-fit text-nowrap flex items-center justify-center text-black font-bold px-[3rem] py-[1.4rem] rounded-3xl fixed h-[2rem] bg-white  transition-opacity z-[99] duration-[0.3s] border border-black border-opacity-20 ${
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
      <main className="relative flex mt-[6rem] rotate-[-2deg] overflow-hidden w-vw bg-[#f66a0e]">
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
            <span className="relative transition-all hover:opacity-90 cursor-pointer text-white text-[4rem] font-[400]  w-full grow bricolage-fonts flex items-center gap-9 justify-center max-[500px]:text-[3rem]">
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
            </span>
          </Link>
        </motion.div>
      </main>
    </>
  );
};

export const Hero = () => {
  const paraRef = useRef(null);
  const para2Ref = useRef(null);

  useEffect(() => {
    gsap.to(para2Ref.current, {
      transform: "translateX(0) rotate(0)",
      ease: "circ.out",
    });
    gsap.to(paraRef.current, {
      transform: "translateX(0) rotate(0)",
      ease: "circ.out",
      delay: 0.2,
    });
  }, []);

  return (
    <>
      <section
        className=" pt-[3rem] "
        style={{
          minHeight: "calc(100dvh - 6.15rem)",
        }}
      >
        <div className="flex flex-col px-10 leading-[10rem] max-[1060px]:leading-[7rem] py-7 justify-center items-center  max-[680px]:leading-[5rem] max-[556px]:leading-[3.2rem] ">
          <div className="p-4 overflow-hidden">
            <p
              ref={para2Ref}
              className="translate-y-[12rem] rotate-[-16deg] font-semi-bold text-[15.39rem] max-[1060px]:text-[9rem] max-[1060px]:tracking-[-7px] tracking-[-1.2rem]   max-[680px]:text-[7.6rem] max-[680px]:tracking-[-9px] max-[556px]:text-[6.6rem] max-[550px]:tracking-[-9px] max-[480px]:text-[5.3rem] max-[480px]:tracking-[-7px]  opacity-90"
            >
              Freelance
            </p>
          </div>
          <div className="overflow-hidden">
            <p
              ref={paraRef}
              className="translate-y-[12rem] rotate-[-7deg] text-[7.2rem] max-[1060px]:text-[4.4rem] max-[1060px]:tracking-[-6px] tracking-[-11.5px]  max-[680px]:text-[3.4rem] max-[680px]:tracking-[-4px] max-[556px]:text-[2.93rem] max-[550px]:tracking-[-4px] max-[480px]:text-[2.5rem] max-[480px]:tracking-[-4px] text-nowrap opacity-80"
            >
              Designer & Developer
            </p>
          </div>
        </div>
        <InfiniteScrollingTextV1 />
      </section>
    </>
  );
};
