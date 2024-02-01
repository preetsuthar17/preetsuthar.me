import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { FaStar } from "react-icons/fa";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!name || !content || rating === 0) {
      setIsDialogOpen(true);
      return;
    }

    try {
      await supabase
        .from("reviews")
        .upsert([{ name, content, rating, approved: false }]);
      alert(
        "Your review has been submitted for approval. Thank you!\n(Reviews require approval from owner to avoid spams.)"
      );
      setName("");
      setContent("");
      setRating(0);
    } catch (error) {
      console.error("Error submitting review:", error.message);
    }
  };

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <>
      <section className="review-form-div">
        <div>
          <h2 className="review-form-heading">review.</h2>
          <p className="review-form-text">
            Your reviews will be appreciated a lot!{" "}
          </p>
        </div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Your Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Your Review*"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <div className="rating">
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <FaStar
                  key={ratingValue}
                  className={`star ${ratingValue <= rating ? "active" : ""}`}
                  onClick={() => handleRatingClick(ratingValue)}
                />
              );
            })}
          </div>
          <button className="primary-btn-green" type="submit">
            Submit
          </button>
        </form>

        {isDialogOpen && (
          <div className="dialog-backdrop">
            <div className="dialog-box">
              <p>⚠️ Please fill the required details! </p>
              <button
                className="primary-btn-red"
                onClick={() => setIsDialogOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ReviewForm;
