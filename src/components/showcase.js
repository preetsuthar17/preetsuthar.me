import ReviewsSection from "./ReviewsSection";

import Footer from "./footer";
import Navbar from "./navbar";
import Layout from "./Layout";
import Link from "next/link";

import { motion } from "framer-motion";

import { gsap } from "gsap";

import { useState, useEffect, useRef, useCallback } from "react";

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

  const birthdate = "2006-08-28";

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
            <div className="showcase-header ">
              <div className="styled-hr"></div>

              {/* <h1 className="showcase-h1">preet.</h1> */}
              <h1 data-text="Preet." className="showcase-h1" ref={textRef}></h1>
              <div className="styled-hr"></div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 1.6 }}
            >
              <div className="showcase-about">
                <div className="showcase-p">
                  <p>
                    Hello! I&apos;m Preet Suthar,{" "}
                    <AutomaticAge birthdate={birthdate} /> years old self-taught
                    web developer with more than two years of experience. I can help you to create website with most appealing design.
                  </p>
                  <p>
                    Passionate about Front-End web development, soon going for
                    Full-Stack web development.
                  </p>
                  <div style={{ marginTop: "0.5rem" }}>
                    <p
                      style={{
                        color: "#ccc",
                        fontSize: "1rem",
                        cursor: "pointer",
                      }}
                    >
                      <Link
                        style={{
                          color: "#aaa",
                        }}
                        href="#reviewSection"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 16.175l3.9-3.875q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062q-.2 0-.375-.063T11.3 18.3l-4.6-4.6q-.275-.275-.288-.687T6.7 12.3q.275-.275.7-.275t.7.275l3.9 3.875Zm0-6L15.9 6.3q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062q-.2 0-.375-.062T11.3 12.3L6.7 7.7q-.275-.275-.288-.688T6.7 6.3q.275-.275.7-.275t.7.275l3.9 3.875Z"
                          />
                        </svg>
                      </Link>
                    </p>
                  </div>
                </div>

                <ReviewsSection />
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
