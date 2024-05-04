import CountUp from "react-countup";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export const IntroCurtains = () => {
  const curtainRef = useRef(null);

  useEffect(() => {
    gsap.to(curtainRef.current, {
      translateY: "-800px",
      borderBottomLeftRadius: "60%",
      borderBottomRightRadius: "60%",
      ease: "circ.inOut",
      delay: 3.4,
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
        <CountUp start={0} end={100} duration={3.5}>
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
              <span>%</span>
            </div>
          )}
        </CountUp>
      </div>
      <div className="z-[99999]  text-black  fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-6xl font-bold">
        <p>{currentGreeting}</p>
      </div>
    </section>
  );
};
