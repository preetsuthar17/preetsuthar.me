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
        className="relative flex flex-col max-w-full gap-4 m-2 overflow-hidden cursor-pointer project-card "
      >
        <div className="overflow-hidden">
          <Image
            ref={imageRef}
            src={project.image}
            width={1200000}
            height={800000}
            alt={project.name}
            loading="lazy"
            placeholder="blur"
            blurDataURL="https://placeholder.co/2000"
            objectFit="cover"
            className=" max-w-full hover:scale-[1.03] transition-all parallax-element w-full h-auto"
            quality={100}
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
      image: "https://i.imgur.com/p6fpP4F.png",
      year: "2024",
      category: "Development",
    },
    {
      name: "Impenny",
      url: "https://impenny.me",
      image: "https://i.imgur.com/KHtTwyH.png",
      year: "2023",
      category: "Development",
    },
    {
      name: "HextaStudio",
      url: "https://hextastudio.in",
      image: "https://i.imgur.com/tvJyNeV.png",
      year: "2023",
      category: "Development",
    },
    {
      name: "Vultrex",
      url: "https://beta.vultrex.dev/",
      image: "https://i.imgur.com/jhU4b85.png",
      year: "2023",
      category: "Development",
    },
    {
      name: "Assistify AI",
      url: "https://assistifyai.org",
      image: "https://i.imgur.com/5cR04Nn.png",
      year: "2023",
      category: "Development",
    },
    {
      name: "Hood.pw",
      url: "https://hood.pw",
      image: "https://i.imgur.com/1xDVnvA.png",
      year: "2023",
      category: "Development",
    },
    {
      name: "Bidme.bot",
      url: "https://bidme.bot",
      image: "https://i.imgur.com/SHAf9zX.png",
      year: "2023",
      category: "Development",
    },
  ];
  return (
    <>
      <section className="my-[10rem] py-[2rem] w-full mx-auto overflow-x-auto max-w-[90%]">
        <Swiper
          freeMode={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
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
