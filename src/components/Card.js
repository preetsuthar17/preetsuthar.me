import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";



const Card = ({ heading, stars, description }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`review-card${isLoading ? " loading" : ""}`}>
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
          <div className="stars">
            <p>dummy stars</p>
          </div>
        </>
      ) : (
        <>
          <h3>{heading}</h3>
          <p>{description}</p>
          <div className="rating">
            {[...Array(stars)].map((_, index) => (
              <FaStar key={index} className="review-card-star" />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
