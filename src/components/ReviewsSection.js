import Card from "./Card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { playClickSound } from "../utils/functions/ClickAudioPlayer";

gsap.registerPlugin(ScrollTrigger);

const ReviewsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 100%",
        end: "center",
        markers: false,
        toggleActions: "play none none reverse",
      },
    });

    tl.from(containerRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.7,
    });
  }, []);

  return (
    <>
      <div style={{ marginTop: "3rem" }} className="reviews-div" id="reviews">
        <div className="reviews-container" ref={containerRef}>
          <>
            <Card
              heading="Joel"
              subHeading="Back-End Developer"
              description="The best web developer who is working with me. We both connected on discord. My guy is down to earth humble and im proud to say, he comes in as one of the best guys ive worked with. 
              Homie can spin up a ui design in seconds, test it, and its ready for the world!! Its only upwards with him! :3
              "
            ></Card>
            <Card
              heading="Soren"
              subHeading="Front-End Developer"
              description="Preet is one of the most friendliest person I know around and undoubtedly one of the most enthusiastic programmers I've seen in the tech community. I just can't rant enough about how generous and helpful he is. Love him."
            ></Card>
            <Card
              heading="Y345"
              subHeading="Full-Stack Developer"
              description="I highly recommend this guy, if you are trying to find someone to make your website,and has great customer support with a quick and reliable response time."
            ></Card>
            <Card
              heading="Mustafa"
              subHeading="Web Developer"
              description="Hey Preet! The new look of the website is soo sleek and decent, I like those small details that you made on this website, the time the dedication you have hats off to it, overall I like this new design of your portfolio :)"
            ></Card>
          </>
        </div>
      </div>
      <p className="p-color">
        Check out all{" "}
        <Link
          href="/testimonials"
          onClick={playClickSound}
          style={{
            color: "white",
            textDecoration: "none",
            backgroundColor: "rgba(255, 255, 255, 0.10)",
            padding: "0 2px",
            borderRadius: "2px",
            fontWeight: "600",
          }}
        >
          reviews
        </Link>{" "}
        or leave a{" "}
        <Link
          href="/reviews"
          onClick={playClickSound}
          style={{
            color: "white",
            textDecoration: "none",
            backgroundColor: "rgba(255, 255, 255, 0.10)",
            padding: "0 2px",
            borderRadius: "2px",
            fontWeight: "600",
          }}
        >
          review here
        </Link>
        .
      </p>
    </>
  );
};

export default ReviewsSection;
