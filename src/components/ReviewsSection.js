import { useEffect, useState, useRef } from "react";
import { supabase } from "../utils/supabaseClient";
import Link from "next/link";
import Card from "./Card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const reviewsContainerRef = useRef(null);

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
    const reviewsContainer = reviewsContainerRef.current;

    if (reviewsContainer) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: reviewsContainer,
          start: "top 20%",
          end: "top center",
          toggleActions: "play none reverse none",
          once: false,
          scrub: 1,
        },
      });

      timeline.from(reviewsContainer, {
        opacity: 0,
        x: -100,
        duration: 0.8,
      });
    }
  }, []);

  return (
    <>
      <span id="scrollToReviewSection"></span>
      <div
        ref={reviewsContainerRef}
        className="reviews-div"
        style={{
          marginTop: "12rem",
        }}
        id="reviews"
      >
        {" "}
        <h2 className="reviews-headings">reviews</h2>{" "}
        <p className="reviews-text">
          {" "}
          here are some awesome reviews left by awesome people!{" "}
        </p>{" "}
        {reviews.length === 0 ? (
          <p className="reviews-text">Loading...</p>
        ) : (
          <div className="reviews-container">
            {reviews?.map((review) => (
              <Card
                key={review.id}
                heading={review.name}
                stars={review.rating}
                description={review.content}
              />
            ))}{" "}
          </div>
        )}{" "}
        <p className="reviews-text">
          {" "}
          Mind leaving a review?{" "}
          <Link href="/reviews">
            {" "}
            <span>Review Here!</span>{" "}
          </Link>{" "}
        </p>{" "}
      </div>
    </>
  );
};

export default ReviewsSection;
