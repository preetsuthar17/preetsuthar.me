import ReviewsSection from "./ReviewsSection";

import Footer from "./footer";
import Navbar from "./navbar";
import Layout from "./Layout";
import Link from "next/link";
import Image from "next/image";

import preet_suthar_image from "@/src/utils/images/preetsuthar.png";

import VanillaTilt from "vanilla-tilt";

import { motion } from "framer-motion";

import { gsap } from "gsap";

import { useState, useEffect, useRef, useCallback } from "react";

import { ScrollTrigger } from "gsap";
// class TextScramble {
//   constructor(el) {
//     this.el = el;
//     this.chars = "#*__-<>";
//     this.update = this.update.bind(this);
//   }

//   setText(newText) {
//     const oldText = this.el.innerText;
//     const length = Math.max(oldText.length, 5);
//     const promise = new Promise((resolve) => (this.resolve = resolve));
//     this.queue = [];
//     for (let i = 0; i < length; i++) {
//       const from = oldText[i] || "";
//       const to = newText[i] || "";
//       const start = Math.floor(Math.random() * 40);
//       const end = start + Math.floor(Math.random() * 40);
//       this.queue.push({ from, to, start, end });
//     }
//     cancelAnimationFrame(this.frameRequest);
//     this.frame = 0;
//     this.update();
//     return promise;
//   }

//   update() {
//     let output = "";
//     let complete = 0;
//     for (let i = 0, n = this.queue.length; i < n; i++) {
//       let { from, to, start, end, char } = this.queue[i];
//       if (this.frame >= end) {
//         complete++;
//         output += to;
//       } else if (this.frame >= start) {
//         if (!char || Math.random() < 0.28) {
//           char = this.randomChar();
//           this.queue[i].char = char;
//         }
//         output += `<span className="showcase-h1">${char}</span>`;
//       } else {
//         output += from;
//       }
//     }
//     this.el.innerHTML = output;
//     if (complete === this.queue.length) {
//       this.resolve();
//     } else {
//       this.frameRequest = requestAnimationFrame(this.update);
//       this.frame++;
//     }
//   }

//   randomChar() {
//     return this.chars[Math.floor(Math.random() * this.chars.length)];
//   }
// }

const Showcase = () => {
  let fx = null;
  const birthdate = "2006-08-28";
  // const textRef = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   if (textRef.current) {
  //     fx = new TextScramble(textRef.current);
  //     const phrases = ["Preet."];
  //     let counter = 0;

  //     const next = () => {
  //       fx.setText(phrases[counter]).then(() => {
  //         setTimeout(next, 1500);
  //       });
  //       counter = (counter + 1) % phrases.length;
  //     };

  //     next();
  //   }

  //   return () => {
  //     if (fx) {
  //       cancelAnimationFrame(fx.frameRequest);
  //     }
  //   };
  // }, []);

  useEffect(() => {
    const tiltContainer = document.querySelectorAll(".review-card");
    VanillaTilt.init(tiltContainer, {
      max: 8,
      speed: 200,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      transition: true,
      glare: true,
      "max-glare": 0.2,
    });
  }, []);

  useEffect(() => {
    const tiltContainer = document.querySelectorAll(
      ".showcase-header-image > img"
    );
    VanillaTilt.init(tiltContainer, {
      max: 10,
      speed: 200,
      scale: 1.01,
      easing: "ease",
      duration: 10,
      transition: true,
      glare: true,
      "max-glare": 0.2,
    });
  }, []);

  function AutomaticAge({ birthday }) {
    const calculateAge = useCallback(() => {
      const birthDate = new Date(birthday);
      const currentDate = new Date();
      const age = Math.floor(
        (currentDate - birthDate) / (365.25 * 24 * 60 * 60 * 1000)
      );
      return age;
    }, [birthday]);

    const [age, setAge] = useState(calculateAge());

    useEffect(() => {
      const interval = setInterval(() => {
        setAge(calculateAge());
      }, 24 * 60 * 60 * 1000);

      return () => clearInterval(interval);
    }, [calculateAge]);

    return <span> {age} </span>;
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const showcasePara = document.querySelectorAll(".showcase-p");

    showcasePara.forEach((para) => {
      const el = para.querySelectorAll("p");

      gsap.from(el, {
        opacity: 0,
        y: 500,
        duration: 1,
        scrollTrigger: {
          markers: true,
          trigger: para,
          markers: false,
          start: "top 30%",
          end: "center 60%",
          scrub: 2,
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  useEffect(() => {
    const showcasePara = document.querySelectorAll(".showcase-contact-text");

    showcasePara.forEach((para) => {
      const el = para.querySelectorAll("p");

      gsap.from(el, {
        opacity: 0,
        y: 500,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: para,
          markers: false,
          start: "top 100%",
          end: "center 60%",
          scrub: 3,
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  // useEffect(() => {
  //   const showcasePara = document.querySelectorAll(
  //     ".showcase-contact-text-links"
  //   );

  //   showcasePara.forEach((para) => {
  //     const el = para.querySelectorAll("p");

  //     gsap.from(el, {
  //       opacity: 0,
  //       y: 500,
  //       duration: 1,
  //       stagger: 0.1,
  //       scrollTrigger: {
  //         trigger: para,
  //         markers: false,
  //         start: "center",
  //         end: "center",
  //         scrub: true,
  //         toggleActions: "play none none reverse",
  //       },
  //     });
  //   });
  // }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Layout>
        <Navbar />
        <main>
          <section className="showcase">
            <div className="showcase-header">
              <div className="showcase-header-hero">
                {/**
                <div className="showcase-header-image">
                  <Image
                    src={preet_suthar_image}
                    alt="preet suthar"
                    width="auto"
                    height={250}
                    quality={100}
                    loading="lazy"
                  ></Image>
                </div>
 */}

                <div className="showcase-header-title">
                  <p>Namste(); I'm</p>
                  <h1>Preet Suthar.</h1>
                  <div className="styled-hr"></div>
                  <div className="showcase-header-subtitle">
                    <p className="showcase-header-about">
                      A Front-end web developer. creating beautiful websites. I
                      can help you to create website with the most{" "}
                      <span className="color-mediumslateblue ">
                        appealing designs
                      </span>
                      .
                    </p>
                  </div>
                  <div className="showcase-header-buttons">
                    <Link className="primary-btn-main" href="/about">
                      Contact me
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="scrolling_text">
              <div className="text">
                <span className="text-only-outline">front-end developer •</span>
                <span className="text-only-outline">front-end developer •</span>
                <span className="text-only-outline">front-end developer •</span>
                <span className="text-only-outline">front-end developer •</span>
                <span className="text-only-outline">front-end developer •</span>
              </div>
              <div className="text">
                <span className="text-only-outline">front-end developer •</span>
                <span className="text-only-outline">front-end developer •</span>
                <span className="text-only-outline">front-end developer •</span>
                <span className="text-only-outline">front-end developer •</span>
                <span className="text-only-outline">front-end developer •</span>
              </div>
            </div>

            <div className="showcase-go-down-arr">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ccc"
                  d="M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16V4Z"
                />
              </svg>
            </div>
            {/* <div className="scrolling_text">
              <div className="text">
                <span className="text-only-outline">front-end developer</span>
                <span className="text-only-outline">front-end devloper</span>
                <span className="text-only-outline">front-end devloper</span>
                <span className="text-only-outline">front-end devloper</span>
                <span className="text-only-outline">front-end devloper</span>
              </div>
              <div className="text">
                <span className="text-only-outline">front-end developer</span>
                <span className="text-only-outline">front-end developer</span>
                <span className="text-only-outline">front-end developer</span>
                <span className="text-only-outline">front-end developer</span>
                <span className="text-only-outline">front-end developer</span>
              </div>
            </div>
            <div className="scrolling_text" style={{
              marginTop: '1rem'
            }}>
              <div className="text">
                <span className="text-only-outline">preet suthar?</span>
                <span className="text-only-outline">preet suthar?</span>
                <span className="text-only-outline">preet suthar?</span>
                <span className="text-only-outline">preet suthar?</span>
                <span className="text-only-outline">preet suthar?</span>
              </div>
              <div className="text">
                <span className="text-only-outline">preet suthar?</span>
                <span className="text-only-outline">preet suthar?</span>
                <span className="text-only-outline">preet suthar?</span>
                <span className="text-only-outline">preet suthar?</span>
                <span className="text-only-outline">preet suthar?</span>
              </div>
            </div> */}
            {/* <div className="showcase-about">
              <div className="showcase-p" id="showcase-p-animated">
                <p style={{ margin: "1rem 0" }}>
                  Hello there! 👋 I'm Preet Suthar. I'm{" "}
                  <AutomaticAge birthday={birthdate} /> y/o Front-end web
                  developer honing his front-end skills to the perfection. I can
                  help you to create website with the most{" "}
                  <span className="color-mediumslateblue text-underline">
                    appealing designs
                  </span>
                  . You can hire me from about page.
                </p>
              </div>
            </div> */}

            <ReviewsSection />

            <div
              className="showcase-contact-text"
              style={{
                flexDirection: "column",
              }}
            >
              <p>
                Come on! Don't be stranger.{" "}
                <span className="color-mediumslateblue text-underline">
                  Let's connect
                </span>
              </p>
              <div
                className="showcase-contact-text-2 showcase-contact-text-links"
                style={{ overflow: "hidden" }}
              >
                <p>
                  <Link
                    className="twitterLink"
                    target="_blank"
                    href="https://x.com/preetsuthar17"
                  >
                    Twitter?
                  </Link>
                  <span
                    style={{
                      color: "rgba(255, 255, 255, 0.167",
                    }}
                  >
                    {" "}
                    or{" "}
                  </span>
                  <Link
                    className="githubLink"
                    target="_blank"
                    href="https://github.com/preetsuthar17"
                  >
                    GitHub?
                  </Link>
                  <span
                    style={{
                      color: "rgba(255, 255, 255, 0.167",
                    }}
                  >
                    {" "}
                    or{" "}
                  </span>
                  <Link
                    className="emailLink color-mailred"
                    target="_blank"
                    href="mailto:preetsutharxd@gmail.com"
                  >
                    Mail me?
                  </Link>
                </p>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      </Layout>
    </motion.div>
  );
};

export default Showcase;
