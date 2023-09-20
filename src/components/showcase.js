import ReviewsSection from "./ReviewsSection";

import Footer from "./footer";
import Navbar from "./navbar";
import Layout from "./Layout";
import Link from "next/link";

import { motion } from "framer-motion";

import { gsap } from "gsap";

import { useState, useEffect, useRef, useCallback } from "react";

import { ScrollTrigger } from "gsap";
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "#*__-<>";
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, 5);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span className="showcase-h1">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const Showcase = () => {
  let fx = null;
  const birthdate = "2006-08-28";
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (textRef.current) {
      fx = new TextScramble(textRef.current);
      const phrases = ["Preet."];
      let counter = 0;

      const next = () => {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 1500);
        });
        counter = (counter + 1) % phrases.length;
      };

      next();
    }

    return () => {
      if (fx) {
        cancelAnimationFrame(fx.frameRequest);
      }
    };
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
          start: "top 100%",
          end: "center",
          scrub: true,
          toggleActions: "play none none reverse",
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.6 }}
        >
          <motion.div
            initial={{ opacity: 1, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 2, ease: "easeIn" }}
          >
            <Navbar />
          </motion.div>
        </motion.div>
        <main>
          <section className="showcase">
            <div className="showcase-header ">
              
              <div className="styled-hr"></div>

              <h1 data-text="Preet." className="showcase-h1" ref={textRef}></h1>
              <div className="styled-hr"></div>
            </div>
            <div className="showcase-stripe">
              <p
                style={{
                  color: "mediumslateblue",
                  fontWeight: '300',

                }}
              >
                "Student && Front-end web developer"
              </p>
            </div>
            <div className="scrolling_text">
              <div className="text">
                <span className="text-only-outline">front-end devloper</span>
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
            </div>
            <div className="showcase-about">
              <div className="showcase-p" id="showcase-p-animated">
                <p style={{ margin: "1rem 0" }}>
                  Hello there! 👋 I'm Preet Suthar. I'm{" "}
                  <AutomaticAge birthday={birthdate} /> y/o Front-end web
                  developer honing his front-end skills to the perfection. I can
                  help you to create website with the most <span className="color-mediumslateblue text-underline">appealing designs</span>.
                  You can hire me from about page.
                </p>
              </div>
            </div>
            <div className="styled-hr"></div>
            <ReviewsSection />

            <div
              className="showcase-contact-text"
              style={{
                flexDirection: "column",
              }}
            >
              <p>Come on! Don't be stranger. <span className="color-mediumslateblue text-underline">Let's connect</span></p>
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
