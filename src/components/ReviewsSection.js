import { useEffect, useState, useRef } from "react";
import { supabase } from "../utils/supabaseClient";
import Link from "next/link";
import Card from "./Card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useCallback } from "react";

gsap.registerPlugin(ScrollTrigger);

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const reviewsContainerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await supabase
        .from("reviews")
        .select("*")
        .eq("approved", true);
      setReviews(data);
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    const setupScrollTrigger = () => {
      const skewTargets =
        reviewsContainerRef.current.querySelectorAll(".reviews-div");

      skewTargets.forEach((card, index) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        });
      });
    };

    if (reviewsContainerRef.current && reviews.length > 0) {
      const cards =
        reviewsContainerRef.current.querySelectorAll(".review-card");
      const totalWidth = Array.from(cards).reduce(
        (acc, card) => acc + card.offsetWidth,
        0
      );

      animationRef.current = gsap.to(reviewsContainerRef.current, {
        x: `-=${totalWidth}`,
        duration: totalWidth / 100,
        ease: "linear",
        repeat: -1,
        paused: false,
        onEnter: setupScrollTrigger,
      });
    }
  }, [reviews]);

  const generateReviewCards = () => {
    return reviews.map((review) => (
      <Card
        key={review.id}
        heading={review.name}
        stars={review.rating}
        description={review.content}
        className="review-card"
      />
    ));
  };

  const cardArray = new Array(40).fill(null);

  const pauseAnimation = useCallback(() => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
  }, []);

  const resumeAnimation = useCallback(() => {
    if (animationRef.current) {
      animationRef.current.play();
    }
  }, []);

  return (
    <>
      <div
        style={{ marginTop: "3rem" }}
        className="reviews-div"
        id="reviews"
        onMouseEnter={pauseAnimation}
        onMouseLeave={resumeAnimation}
      >
        <div className="reviews-container" ref={reviewsContainerRef}>
          {reviews.length === 0 ? (
            <p className="reviews-text">Loading...</p>
          ) : (
            <>
              {cardArray.map((_, index) => (
                <React.Fragment key={index}>
                  {generateReviewCards()}
                </React.Fragment>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ReviewsSection;
