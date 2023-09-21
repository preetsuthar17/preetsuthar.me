import Card from "./Card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ReviewsSection = () => {
  const headerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const reviewsHeader = document.querySelectorAll(".reviews-header");

    gsap.utils.toArray(".reviews-container").forEach((container) => {
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      });
    });

    reviewsHeader.forEach((card, index) => {
      gsap.to(card, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
    });
  });

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

    tl.from(headerRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
    });

    tl.from(containerRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <>
      <div style={{ marginTop: "3rem" }} className="reviews-div" id="reviews">
        <div className="reviews-header" ref={headerRef}>
          <h2
            className="sub-heading h2-color"
            style={{
              margin: "3rem",
              fontWeight: "900",
            }}
          >
            I got some{" "}
            <span className="color-mediumslateblue text-underline">
              reviews
            </span>{" "}
            from people...
          </h2>
        </div>
        <div className="reviews-container" ref={containerRef}>
          <>
            <Card heading="Ishita" description="Such a hardworking developer! Great work and dedication!! Lots of love <3"></Card>
            <Card
              heading="Soren"
              description="Preet is one of the most friendliest person I know around and undoubtedly one of the most enthusiastic programmers I've seen in the tech community. I just can't rant enough about how generous and helpful he is. Love him."
            ></Card>
            <Card
              heading="Y345"
              description="I highly recommend this guy, if you are trying to find someone to make your website,and has great customer support with a quick and reliable response time."
            ></Card>
            <Card
              heading="Mustafa"
              description="Hey Bud the website looks clean and amazing , simple and fantastic i like the design and its looking good , Don't have much words for it .. . Keep going and reach your goals 👍"
            ></Card>
          </>
          <p className="p-color">
            You can leave a{" "}
            <Link
              href="/reviews"
              style={{
                color: "white",
                textDecoration: "none",
                backgroundColor: "rgba(255, 255, 255, 0.10)",
                padding: "0 2px",
                borderRadius: "2px",
              }}
            >
              review here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ReviewsSection;
