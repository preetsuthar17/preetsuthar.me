import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ image, title, content, numbering, projectLink }) => {
  const handleClick = () => {
    window.open(projectLink, "_blank");
  };

  return (
    <>
      <div onClick={handleClick} className="project-card">
        <div className="project-card-image">
          <Image src={image} width={1920} height={1080} alt={title} />
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
    </>
  );
};

export const Projects = React.forwardRef((props, ref) => {
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
  return (
    <section className="projects" id="projects">
      <div className="projects-heading">
        <h2>
          TOP PICKED <span className="orange-color">.</span>
        </h2>
      </div>
      <div className="projects-content">
        <div className="projects-cards-lists">
          <ProjectCard
            image="https://i.imgur.com/FO5kakY.png"
            title="Snippix"
            content="Snippix allows you to convert your boring code blocks in beautiful images and let your export as PNG with so many customization options. You can use it right now it's completely free, no watermark and you can share it anywhere you want to!"
            numbering="1"
            projectLink="https://snippix.netlify.app"
          />
          <ProjectCard
            image="https://i.imgur.com/3k0ngtQ.png"
            title="Assistify AI"
            content="Assistify AI is an Artificial Intelligence which uses COHERE
                services to allows users to process documents and use top notch
                models like COHERE and GPT4 to talk with documents."
            numbering="2"
            projectLink="https://assistifyai.org"
          />
          <ProjectCard
            image="https://i.imgur.com/t3JP8cT.png"
            title="Werktar"
            content="Connect with talented web creators and bring your project to life. Find the perfect freelance writer, editor, designer, or programmer for your needs. Sign up today and start collaborating!"
            numbering="3"
            projectLink="https://werktar.vercel.app"
          />
        </div>
      </div>
    </section>
  );
});
