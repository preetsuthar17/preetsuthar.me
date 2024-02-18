import Card from "../ReviewsComponents/ReviewCard";
import React from "react";
import Link from "next/link";
import { playClickSound } from "../../utils/functions/ClickAudioPlayer";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const ReviewsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  useEffect(() => {
    const tiltContainer = document.querySelectorAll(".review-card");
    VanillaTilt.init(tiltContainer, {
      max: 8,
      speed: 200,
      easing: "ease",
      transition: true,
      glare: true,
      "max-glare": 0.1,
    });
  }, []);
  const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <div style={{ marginTop: "3rem" }} className="reviews-div" id="reviews">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          transition={{ duration: 0.7 }}
        >
          <hr />
          <div className="reviews-heading">
            <h2>Happy clients.</h2>
          </div>
          <div className="reviews-container">
            <>
              {" "}
              <Card
                heading="Joel"
                subHeading="Back-End Developer"
                description="The best web developer who is working with me. We both connected on discord. My guy is down to earth humble and im proud to say, he comes in as one of the best guys ive worked with. 
              Homie can spin up a ui design in seconds, test it, and its ready for the world!! Its only upwards with him! :3
              "
              ></Card>
              <Card
                heading="Tazhys"
                subHeading="Back-End Developer"
                description="Preet was really quick to complete a commission, even though he had to go out for a couple of days. He really crunched everything into a few days, thus making him quicker than other website commissions I've had."
              ></Card>
              <Card
                heading="Soren"
                subHeading="Front-End Developer"
                description="Preet is one of the most friendliest person I know around and undoubtedly one of the most enthusiastic programmers I've seen in the tech community. I just can't rant enough about how generous and helpful he is. Love him."
              ></Card>
              <Card
                heading="Mustafa"
                subHeading="Web Developer"
                description="Hey Preet! The new look of the website is soo sleek and decent, I like those small details that you made on this website, the time the dedication you have hats off to it, overall I like this new design of your portfolio :)"
              ></Card>
            </>
          </div>
        </motion.div>
      </div>
      <p
        className="p-color"
        style={{
          fontSize: "16px",
          margin: "0 20px",
        }}
      >
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
