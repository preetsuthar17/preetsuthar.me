import ReviewsSection from "./ReviewsSection";

import Footer from "./footer";
import Navbar from "./navbar";
import Layout from "./Layout";
import Link from "next/link";

import { motion } from "framer-motion";

import { gsap } from "gsap";

import { useState, useEffect, useRef, useCallback } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "@#&*__-<>";
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
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
  const textRef = useRef(null);
  let fx = null;
  const birthdate = "2006-08-28";
  const contactTextRef = useRef(null);
  const showcaseTextRef = useRef(null);

  useEffect(() => {
    const showcasePara = document.querySelectorAll(".showcase-p");
    const tl = gsap.timeline();

    tl.to({}, 2.7, {});

    showcasePara.forEach((para, index) => {
      const el = para.querySelectorAll("p");
      const delay = index * 0.7;
      tl.to(el, {
        y: 0,
        duration: 0.8,
        delay: delay,
        ease: "expo.out",
      });
    });
  }, []);

  useEffect(() => {
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

  useEffect(() => {
    const contactText = showcaseTextRef.current;
    const words = contactText.innerText.split(" ");
    const wordSpans = words.map((word, index) => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      span.classList.add(`word-${index}`);
      return span;
    });

    contactText.innerHTML = "";
    wordSpans.forEach((span) => {
      contactText.appendChild(span);
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactText,
        start: "top 50%",
        scrub: false,
        end: "bottom 100%",
        anticipatePin: 10,
        markers: false,
        toggleActions: "play none none reverse",
      },
    });

    wordSpans.forEach((span, index) => {
      tl.to(span, {
        color: "#9a9a9a",
        duration: 0.2,
      });
    });
  }, []);

  useEffect(() => {
    const contactText = contactTextRef.current;
    const words = contactText.innerText.split(" ");
    const wordSpans = words.map((word, index) => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      span.classList.add(`word-${index}`);
      return span;
    });

    contactText.innerHTML = "";
    wordSpans.forEach((span) => {
      contactText.appendChild(span);
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactText,
        start: "top 50%",
        scrub: false,
        end: "bottom 100%",
        anticipatePin: 10,
        markers: false,
        toggleActions: "play none none reverse",
      },
    });

    wordSpans.forEach((span, index) => {
      tl.to(span, {
        color: "#9a9a9a",
        duration: 0.2,
      });
    });
  }, []);

  const langsRef = useRef(null);

  useEffect(() => {
    const programmingLanguages = [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJs",
      "NextJs",
      "Python",
      "GSAP",
    ];

    const langsContainer = langsRef.current;

    programmingLanguages.forEach((language, index) => {
      const span = document.createElement("span");
      span.textContent = language;
      span.classList.add("language", `showcase-lang${index + 1}`);
      langsContainer.appendChild(span);

      gsap.to(span, {
        y: -5,
        repeat: -1,
        yoyo: true,
        duration: 1,
      });
    });
  }, []);

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
            transition={{ duration: 0.3, delay: 2, ease: "circOut" }}
          >
            <Navbar />
          </motion.div>
        </motion.div>
        <main>
          <section className="showcase">
            <div className="showcase-langs p-color" ref={langsRef}></div>
            <div className="showcase-header ">
              <div className="styled-hr"></div>

              <h1 data-text="Preet." className="showcase-h1" ref={textRef}></h1>
              <div className="styled-hr"></div>
            </div>
            <div className="showcase-animated-stripe">
              <p>Front-end web developer</p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 1.6 }}
            >
              <div className="showcase-about">
                <div className="showcase-p" id="showcase-p-animated">
                  <p style={{ margin: "1rem 0" }} ref={showcaseTextRef}>
                    Hello there! 👋 I'm Preet Suthar. I'm{" "}
                    <AutomaticAge birthdate={birthdate} /> y/o Front-end web
                    developer honing his front-end skills to the perfection. I
                    can help you to create website with the most appealing
                    designs. You can hire me from about page.
                  </p>
                </div>
              </div>
              <ReviewsSection />
              <div className="showcase-contact-text">
                <p ref={contactTextRef}>
                  Come on! Don't be stranger. Let's connect
                </p>
              </div>
              <div className="showcase-contact-text-2">
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
            </motion.div>
          </section>
          <Footer />
        </main>
      </Layout>
    </motion.div>
  );
};

export default Showcase;
