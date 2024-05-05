import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useMotionValue, animate } from "framer-motion";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const FlippingCounter = () => {
  const countValue = useMotionValue(0);

  useEffect(() => {
    const animation = animate(countValue, 105, {
      duration: 3,
      ease: [0.2, 0.8, 0.3, 1],
    });

    return animation.stop;
  }, [countValue]);

  return (
    <div className="">
      <div className="text-6xl font-bold">
        <span className="text-2xl"> {Math.floor(countValue.get())}%</span>
      </div>
    </div>
  );
};

export default FlippingCounter;
export const IntroCurtains = () => {
  const curtainRef = useRef(null);

  useGSAP(() => {
    gsap.to(curtainRef.current, {
      translateY: "-900px",
      borderBottomLeftRadius: "60%",
      borderBottomRightRadius: "60%",
      ease: "circ.inOut",
      delay: 2.3,
    });
    gsap.to(curtainRef.current, {
      opacity: 0,
      delay: 5,
    });
  }, []);

  const greetings = [
    "Hello",
    "નમસ્તે",
    "CIAO",
    "Salam",
    "こんにちは",
    "Hola",
    "안녕",
    "Bonjour",
    "Olá",
    "Hallo",
    "你好",
    "नमस्ते",
  ];

  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalDuration = 200 - index * 10;
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex =
          prevIndex + 1 === greetings.length ? prevIndex : prevIndex + 1;
        setCurrentGreeting(greetings[newIndex]);
        return newIndex;
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section
      ref={curtainRef}
      className="bg-gray-200 w-dvw h-dvh z-[9999999999999] fixed "
    >
      <div className="flex items-end h-full p-[4rem] text-3xl font-bold tracking-tighter">
        <div>
          <FlippingCounter />
        </div>
      </div>
      <div className="z-[99999]  text-black  fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-6xl font-bold">
        <p className="text-nowrap">{currentGreeting}</p>
      </div>
    </section>
  );
};
