import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ image, title, content, numbering, projectLink }) => {
  const imageRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { y: "-20%" },
      {
        y: "1%",
        scrollTrigger: {
          trigger: imageRef.current,
          scrub: 1,
        },
      }
    );

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: cursorPosition.x,
        y: cursorPosition.y,
        scale: isHovered ? 2 : 0,
        duration: 0.3,
        transform: "translate(-50%, -50%)",
      });
    }
  }, [cursorPosition, isHovered]);

  const handleClick = () => {
    window.open(projectLink, "_blank");
  };

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        className="project-card"
      >
        <div className="project-card-image">
          <Image
            src={image}
            width={1920}
            height={1080}
            alt={title}
            loading="lazy"
            quality={100}
            ref={imageRef}
          />
        </div>
        <div className="project-card-content">
          <p className="project-card-numbering">{numbering} -</p>
          <h3 className="project-card-heading">{title}</h3>
          <p className="project-card-content">{content}</p>
          <Link
            href={projectLink}
            target="_blank"
            className="secondary-button project-card-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"
              ></path>
            </svg>{" "}
            View project
          </Link>
        </div>
      </div>
      <div
        ref={cursorRef}
        className="project-card-custom-cursor"
        style={{
          position: "fixed",
          pointerEvents: "none",
          left: 0,
          top: 0,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#ff7b00",
          zIndex: 9999,
          color: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M6.188 17.288L5.5 16.6L15.58 6.5H6.289v-1h11v11h-1V7.208z"
          />
        </svg>
      </div>
    </>
  );
};

export const Projects = React.forwardRef((props, ref) => {
  const [isAllProjects, setIsAllProjects] = useState(false);

  useEffect(() => {
    gsap.to(".projects", {
      borderRadius: "20px",
      scrollTrigger: {
        trigger: ".projects",
        start: "top 90%",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const projectCardsListStyle = {
    maskImage: `${
      isAllProjects
        ? ""
        : "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 50%, transparent 100%)"
    }`,
  };

  const handleViewAllProjects = () => {
    setIsAllProjects(!isAllProjects);
  };
  return (
    <section className="projects" id="projects">
      <div className="projects-heading">
        <h2>
          TOP PICKS <span className="orange-color">.</span>
        </h2>
      </div>
      <div className="projects-content">
        <div className="projects-cards-lists" style={projectCardsListStyle}>
          <ProjectCard
            image="https://i.imgur.com/FO5kakY.png"
            title="Snippix"
            content="Snippix allows you to convert your boring code blocks in beautiful images and let your export as PNG with so many customization options. "
            numbering="1"
            projectLink="https://snippix.netlify.app"
          />
          <ProjectCard
            image="https://i.imgur.com/38Gz1g3.png"
            title="Assistify AI"
            content="Assistify is an Artificial Intelligence which uses COHERE
                services to allows users to process documents and use top notch AI
                models to talk with documents."
            numbering="2"
            projectLink="https://assistifyai.org"
          />
          <ProjectCard
            image="https://i.imgur.com/F8uNCoz.png"
            title="Ayaan Designs"
            content="A collaborative project with Product Designer, Ayaan. I developed a website to showcase his portfolio, using modern web technologies to ensure visual appeal and robust functionality."
            numbering="3"
            projectLink="https://ayaandesigns.xyz/"
          />
          {isAllProjects && (
            <>
              <ProjectCard
                image="https://i.imgur.com/wfTWOVk.png"
                title="Nooderbot Landing Page"
                content="A freelance project to develop a landing page for Nooderbot, a comprehensive Discord bot. The new design enhanced user interaction and increased website traffic by 60%."
                numbering="4"
                projectLink="https://nooderbot.com"
              />
            </>
          )}
        </div>
      </div>
      {isAllProjects ? (
        <span
          className="primary-button view-all-projects-btn"
          onClick={handleViewAllProjects}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 20V7.825l-5.6 5.6L4 12l8-8l8 8l-1.4 1.425l-5.6-5.6V20z"
            />
          </svg>
          Collapse list{" "}
        </span>
      ) : (
        <span
          className="primary-button view-all-projects-btn"
          onClick={handleViewAllProjects}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 4v12.175l-5.6-5.6L4 12l8 8l8-8l-1.4-1.425l-5.6 5.6V4z"
            />
          </svg>
          Expand list{" "}
        </span>
      )}
    </section>
  );
});
