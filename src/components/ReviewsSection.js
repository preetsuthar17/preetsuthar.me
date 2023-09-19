import { useEffect, useState, useRef } from "react";
import { supabase } from "../utils/supabaseClient";
import Link from "next/link";
import Card from "./Card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
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

  // const setupScrollTrigger = () => {
  //   const cards = reviewsContainerRef.current.querySelectorAll(".review-card");

  //   cards.forEach((card, index) => {
  //     gsap.from(card, {
  //       opacity: 0,
  //       duration: 0.5,
  //       scrollTrigger: {
  //         trigger: card,
  //         start: "top center+=100",
  //         end: "center center",
  //         scrub: true,
  //       },
  //     });
  //   });
  // };
  // useEffect(() => {
  //   setupScrollTrigger();

  //   if (reviewsContainerRef.current && reviews.length > 0) {
  //     const cards =
  //       reviewsContainerRef.current.querySelectorAll(".review-card");
  //     const totalWidth = Array.from(cards).reduce(
  //       (acc, card) => acc + card.offsetWidth,
  //       0
  //     );

  //     animationRef.current = gsap.to(reviewsContainerRef.current, {
  //       x: `-=${totalWidth}`,
  //       duration: totalWidth / 100,
  //       ease: "linear",
  //       repeat: -1,
  //       paused: false,
  //       onEnter: setupScrollTrigger,
  //     });
  //   }
  // }, [reviews]);

  // const generateReviewCards = () => {
  //   return reviews.map((review) => (
  //     <Card
  //       key={review.id}
  //       heading={review.name}
  //       stars={review.rating}
  //       description={review.content}
  //       className="review-card"
  //     />
  //   ));
  // };

  // const cardArray = new Array(40).fill(null);
  // const pauseAnimation = useCallback(() => {
  //   console.log("Pausing animation");
  //   if (animationRef.current) {
  //     console.log(
  //       "Animation state before pause:",
  //       animationRef.current.paused()
  //     );
  //     animationRef.current.pause();
  //     console.log(
  //       "Animation state after pause:",
  //       animationRef.current.paused()
  //     );
  //   }
  // }, []);

  // const resumeAnimation = useCallback(() => {
  //   if (animationRef.current) {
  //     console.log("Resuming animation");
  //     animationRef.current.play();
  //   }
  // }, []);

  return (
    <>
      <div
        style={{ marginTop: "3rem" }}
        className="reviews-div"
        id="reviews"
        // onMouseEnter={pauseAnimation}
        // onMouseLeave={resumeAnimation}
      >
        <div className="reviews-container" ref={reviewsContainerRef}>
          {reviews.length === 0 ? (
            <p className="reviews-text">Loading...</p>
          ) : (
            <>
              {/* {cardArray.map((_, index) => (
                <React.Fragment key={index}>
                  {generateReviewCards()}
                </React.Fragment>
              ))} */}
              {reviews.map((review) => (
                <Card
                  key={review.id}
                  heading={review.name}
                  stars={review.rating}
                  description={review.content}
                  className="review-card"
                />
              ))}
              ;
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ReviewsSection;
