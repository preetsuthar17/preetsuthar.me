import { useEffect, useState, useRef } from "react";
import { supabase } from "../utils/supabaseClient";
import Link from "next/link";
import Card from "./Card";
const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
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
  return (
    <section className="reviews-div" id="reviews">
      {" "}
      <h2 className="reviews-headings">#reviews</h2>{" "}
      <p className="reviews-text">
        {" "}
        here are some awesome reviews left by awesome people!{" "}
      </p>{" "}
      {reviews.length === 0 ? (
        <p className="reviews-text">Loading...</p>
      ) : (
        <div className="reviews-container">
          {" "}
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
    </section>
  );
};
export default ReviewsSection;
