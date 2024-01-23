import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const Card = ({ heading, stars, description }) => {
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
          <h3>{heading}</h3>
          <p>{description}</p>
          <div className="stars-container">
            <FaStar className="star active"></FaStar>
            <FaStar className="star active"></FaStar>
            <FaStar className="star active"></FaStar>
            <FaStar className="star active"></FaStar>
            <FaStar className="star active"></FaStar>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
