import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ heading, subHeading, description }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      data-tilt-axis="y"
      className={`review-card${isLoading ? " loading" : ""}`}
    >
      {isLoading ? (
        <>
          <div className="heading">
            <p>Dummy name</p>
          </div>
          <div className="description">
            <p>
              Dummy description Dummy description Dummy description Dummy
              description Dummy description Dummy description Dummy description
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="review-card-headings">
            <div>
              <h2 className="highlighted">{heading}</h2>
              <p className="review-card-sub-heading">{subHeading}</p>
            </div>
            <div>
              <div className="stars-container">
                <FaStar className="star active"></FaStar>
                <FaStar className="star active"></FaStar>
                <FaStar className="star active"></FaStar>
                <FaStar className="star active"></FaStar>
                <FaStar className="star active"></FaStar>
              </div>
            </div>
          </div>
          <p>{description}</p>
        </>
      )}
    </div>
  );
};

export default ReviewCard;
