import useMightyMouse from "react-hook-mighty-mouse";
import React, { useState, useEffect } from "react";
import { playRandomScream } from "../utils/functions/ClickAudioPlayer";

const EyeFollowingMouse = () => {
  const leftEyeMouse = useMightyMouse(true, "left-eye", { x: 45, y: 45 });
  const rightEyeMouse = useMightyMouse(true, "right-eye", { x: 45, y: 45 });

  const texts = ["It hurts!", "Ouch!", "Stop!", "Enough!"];

  const [isClicked, setIsClicked] = useState(false);
  const [isDebouncing, setIsDebouncing] = useState(false);

  const [mouseX, setMouseX] = useState(0);
  const [shake, setShake] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const [randomText, setRandomText] = useState(
    texts[Math.floor(Math.random() * texts.length)]
  );

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEyeClick = () => {
    if (isDebouncing) return;

    setIsDebouncing(true);
    setShake(true);
    setIsClicked(true);
    playRandomScream();

    setTimeout(() => {
      setShake(false);
      setIsClicked(false);
    }, 1000);

    setTimeout(() => {
      setIsDebouncing(false);
    }, 1000);
  };

  useEffect(() => {
    const handleMouseMove = () => {
      if (!isClicked) {
        setRandomText(texts[Math.floor(Math.random() * texts.length)]);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isClicked]);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => setMouseX(e.clientX));
    return () =>
      window.removeEventListener("mousemove", (e) => setMouseX(e.clientX));
  }, []);

  const angleLeftEye = leftEyeMouse?.selectedElement?.position?.angle || 0;
  const angleRightEye = rightEyeMouse?.selectedElement?.position?.angle || 0;

  const color = "#f8c6c6";

  const styleLeftEye = {
    transform: `rotate(${-angleLeftEye}deg)`,
    backgroundColor: shake ? color : "#f3efef",
    animation: shake ? "shake 0.1s linear 10" : "none",
  };

  const styleRightEye = {
    transform: `rotate(${-angleRightEye}deg)`,
    backgroundColor: shake ? color : "#f3efef",
    animation: shake ? "shake 0.2s linear 10" : "none",
  };

  const stylePupil = shake
    ? {
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%) scaleY(1)",
        backgroundColor: "black",
        transition: "transform 0.4s ease",
      }
    : {};

  const styleRightEyebrow = shake
    ? {
        width: "80px",
        height: "10px",
        backgroundColor: "white",
        position: "absolute",
        top: "-0.2rem",
        zIndex: "9999",
        right: 0,
        transform: "rotate(-20deg)",
        transition: "all 0.4s ease-in-out",
      }
    : {
        width: "80px",
        height: "10px",
        backgroundColor: "white",
        position: "absolute",
        top: "-1.3rem",
        right: 0,
        transform: "rotate(10deg)",
      };
  const styleLeftEyebrow = shake
    ? {
        width: "80px",
        height: "10px",
        backgroundColor: "white",
        position: "absolute",
        top: "-0.2rem",
        zIndex: "9999",
        right: 0,
        transform: "rotate(20deg)",
        transition: "all 0.4s ease-in-out",
      }
    : {
        width: "80px",
        height: "10px",
        backgroundColor: "white",
        position: "absolute",
        top: "-1.3rem",
        right: 0,
        transform: "rotate(-10deg)",
      };

  return (
    <>
      <div className="eyes-follow-tired">
        <div className="container">
          {shake ? <p className="angry-symbol">💢</p> : <></>}
          <div className="eyes">
            <div className="left-eyebrow" style={styleLeftEyebrow}></div>
            <div
              id="left-eye"
              className="eye"
              style={styleLeftEye}
              onClick={() => {
                handleEyeClick();
              }}
            >
              <div className="pupil" style={stylePupil} />
            </div>
            <div className="right-eyebrow" style={styleRightEyebrow}></div>

            <div
              id="right-eye"
              className="eye"
              style={styleRightEye}
              onClick={() => {
                handleEyeClick();
              }}
            >
              <div className="pupil" style={stylePupil} />
            </div>
          </div>
        </div>
      </div>
      {shake ? (
        <div className="ouch-text">
          <p>
            <span>{randomText}</span>
          </p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default EyeFollowingMouse;
