import { useEffect, useState, useRef } from "react";
import { supabase } from "../utils/supabaseClient";
import Link from "next/link";
import Card from "./Card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useCallback } from "react";

gsap.registerPlugin(ScrollTrigger);

const ReviewsSection = () => {
  return (
    <>
      <div style={{ marginTop: "3rem" }} className="reviews-div" id="reviews">
        <div className="reviews-header">
          <h2 className="sub-heading h2-color">
            I got some reviews from people
          </h2>
        </div>
        <div className="reviews-container">
          <>
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
        </div>
      </div>
    </>
  );
};

export default ReviewsSection;
