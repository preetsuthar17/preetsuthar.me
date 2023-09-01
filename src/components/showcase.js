import ReviewsSection from "./ReviewsSection";
import ShowBlogs from "./showBlogs";

import goDown from "../utils/icons/go-down.svg";

import Footer from "./footer";
import Navbar from "./navbar";
import Layout from "./Layout";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

const Showcase = () => {
  const elementRef = useRef(null);

  function AutomaticAge({ birthdate }) {
    const calculateAge = useCallback(() => {
      const birthDate = new Date(birthdate);
      const currentDate = new Date();
      const age = Math.floor(
        (currentDate - birthDate) / (365.25 * 24 * 60 * 60 * 1000)
      );
      return age;
    }, [birthdate]);

    const [age, setAge] = useState(calculateAge());

    useEffect(() => {
      const interval = setInterval(() => {
        setAge(calculateAge());
      }, 24 * 60 * 60 * 1000);

      return () => clearInterval(interval);
    }, [calculateAge]);

    return <span> {age} </span>;
  }

  const birthdate = "2006-08-28";

  return (
    <Layout>
      <Navbar />
      <main>
        <section className="showcase">
          <div className="showcase-header ">
            <div className="styled-hr"></div>

            <h1 className="showcase-h1">preet.</h1>
            <div className="styled-hr"></div>
          </div>
          <div className="showcase-about">
            <p className="showcase-p">
              Hello! I&apos;m Preet Suthar,{" "}
              <AutomaticAge birthdate={birthdate} /> years old self-taught web
              developer with more than two years of experience.
              <br />
              Passionate about Front-End web development, soon going for
              Full-Stack web development.
            </p>

            <Link href="#showcaseBlogs">
              <Image
                loading="lazy"
                className="showcase-scroll-down"
                alt="scroll-down"
                src={goDown}
              />
            </Link>

            <ShowBlogs />
            <div className="styled-hr"></div>

            <ReviewsSection />
          </div>
        </section>
        <Footer />
      </main>
    </Layout>
  );
};

export default Showcase;
