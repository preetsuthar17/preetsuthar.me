import { useState, useEffect } from "react";

export const IntroCurtain = () => {
  const greetings = [
    "Hello",
    "નમસ્તે",
    "CIAO",
    "こんにちは",
    "Hola",
    "안녕",
    "Bonjour",
    "Olá",
    "Hallo",
    "你好",
    "سلام",
    "Merhaba",
    "Γεια σας",
    "Shalom",
    "Salam",
    "Hej",
    "Hei",
    "Cześć",
    "Ahoj",
    "สวัสดี",
    "Xin chào",
    "Selam",
    "Jambo",
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
    <div className="intro-curtain">
      <h1>{currentGreeting}</h1>
    </div>
  );
};
