import Image from "next/legacy/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "swiper/css/parallax";

import SwiperCore, { Navigation, Pagination } from "swiper/core";

gsap.registerPlugin(ScrollTrigger);
SwiperCore.use([Navigation, Pagination]);

export const ProjectCard = ({ project }) => {
  const imageRef = useRef(null);
  return (
    <>
      {" "}
      <div
        onClick={() => {
          window.open(project.url, "_blank");
        }}
        className="relative flex flex-col max-w-full gap-4 m-2 overflow-hidden project-card cursor-grab"
      >
        <div className="overflow-hidden">
          <Image
            ref={imageRef}
            src={project.image}
            alt={project.name}
            width={4186}
            height={2388}
            placeholder="blur"
            blurDataURL={project.image}
            objectFit="cover"
            className=" max-w-full hover:scale-[1.03] transition-all parallax-element w-full h-auto "
            quality={100}
            loading="eager"
          />
        </div>
        <p className="text-3xl font-semibold tracking-tighter">
          {project.name}
        </p>
        <hr />
        <div className="flex justify-between text-sm">
          <p>{project.category}</p>
          <p>{project.year}</p>
        </div>
      </div>
    </>
  );
};

export const Projects = () => {
  const Projects = [
    {
      name: "HextaUI",
      url: "https://ui.hextastudio.in",
      image: "/assets/hextaui_project.webp",
      year: "2024",
      category: "Development",
    },
    {
      name: "Impenny",
      url: "https://impenny.me",
      image: "/assets/impenny_project.webp",
      year: "2023",
      category: "Development",
    },
    {
      name: "HextaStudio",
      url: "https://hextastudio.in",
      image: "/assets/hextastudio_project.webp",
      year: "2023",
      category: "Development",
    },
    {
      name: "Assistify AI",
      url: "https://assistifyai.org",
      image: "/assets/assistify_project.webp",
      year: "2023",
      category: "Development",
    },
  ];
  return (
    <>
      <section className="my-[10rem] py-[2rem] w-full mx-auto overflow-x-auto max-w-[95%]">
        <Swiper
          slidesPerView={1}
          loop={true}
          style={{
            padding: "2rem",
          }}
        >
          {Projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard
                project={{
                  name: project.name,
                  url: project.url,
                  image: project.image,
                  year: project.year,
                  category: project.category,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};
