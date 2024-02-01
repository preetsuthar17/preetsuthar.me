import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CustomTooltip2 from "../CustomTooltip2";
import { playClickSound } from "../../utils/functions/ClickAudioPlayer";

gsap.registerPlugin(ScrollTrigger);

const TimelineComponent = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".cd-timeline-block");
    elements.forEach((element, index) => {
      const direction = index % 2 === 0 ? -1 : 1;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom center",
          scrub: 1,
        },
      });

      tl.from(element, {
        opacity: 0,
        x: 100 * direction,
        duration: 1,
        ease: "Power1.out",
      });
    });
  }, []);

  return (
    <div className="floating-container">
      {Array.from({ length: 1 }, (_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <section id="cd-timeline" className="cd-container">
            {/* <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-picture"></div>

                <div className="cd-timeline-content">
                  <h2>Currently</h2>

                  <p>
                    Dates in this timeline might not be the most accurate,
                    But yeah, all the dates in this are somewhere around
                    the actual dates.
                  </p>
                  <ul className="content-skills">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Next.js</li>
                    <li>React.js</li>
                  </ul>
                </div>
              </div> */}

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-movie"></div>

              <div className="cd-timeline-content">
                <h2>Working at Assistify Labs</h2>
                <p>
                  As per current moment I'm working as a Freelancer and also
                  working at Assistify Labs as Front-End developer and also
                  pursuing my studies.
                </p>
                <div
                  style={{
                    margin: "1em",
                  }}
                  className="chip_component"
                >
                  <CustomTooltip2 text="more information">
                    <div className="chip_content">
                      <Link
                        href="https://www.youtube.com/watch?v=itHctPXzwnM"
                        onClick={playClickSound}
                        target="_blank"
                      >
                        Assistify AI beta release
                      </Link>
                    </div>
                  </CustomTooltip2>
                </div>
                <span className="cd-date">Present</span>
              </div>
            </div>
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-movie"></div>

              <div className="cd-timeline-content">
                <h2>Gave lecture about DB @ECT</h2>
                <p>
                  I gave my first lecture in college which went fantastic. The
                  lecture was about database systems and relation database
                  management system using MySQL.
                </p>
                <span className="cd-date">Sep 4, 2023</span>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-movie"></div>

              <div className="cd-timeline-content">
                <h2>Learned React & Its Frameworks</h2>
                <p>
                  I learned React Js and also almost finished Gatsby Js. Later I
                  heard that Next Js is lighting fast for SSR websites. I
                  started to research about it and found Interesting to I
                  started to learn Next Js via YouTube.
                </p>
                <span className="cd-date">Feb 7, 2023</span>
              </div>
            </div>

            {/* <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-picture"></div>

                <div className="cd-timeline-content">
                  <h2>React Js ⚛️</h2>
                  <p>
                    I had pretty much mastered HTML, CSS, and Javascript.
                    Later I heard about React Js so I started to learn
                    more about that. I was still learning Front-End only
                    because I knew nothing about Back-end systems.
                  </p>
                  <span className="cd-date">May 9, 2021</span>
                </div>
              </div> */}

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location"></div>

              <div className="cd-timeline-content">
                <h2>Learning @ home</h2>
                <p>
                  Fast-forward to 2021, Pretty much mastered HTML & CSS. Then I
                  heard about JavaScript. Started to Learn JavaScript via
                  YouTube
                </p>
                <span className="cd-date">Feb 14, 2021</span>
              </div>
            </div>

            {/* <div className="cd-timeline-block">
                <div className="cd-timeline-img cd-location"></div>

                <div className="cd-timeline-content">
                  <h2>It's so cool! 🤩</h2>
                  <p>
                    I found web development pretty cool and awesome. I was
                    having fun creating websites and all so I continued my
                    journey by learning HTML and CSS.
                  </p>
                  <span className="cd-date">Sep 1, 2020</span>
                </div>
              </div> */}

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-movie"></div>

              <div className="cd-timeline-content">
                <h2>Learning @ JJIS</h2>

                <p>
                  Wrote my first lines of HTML and CSS using Chrome! Fell in
                  love with web development. Started to learn more about HTML &
                  CSS.
                </p>
                <span className="cd-date">Aug 21, 2020</span>
              </div>
            </div>
          </section>
        </motion.div>
      ))}
    </div>
  );
};

export default TimelineComponent;
