import Image from "next/legacy/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useState, useEffect, useRef, use } from "react";

gsap.registerPlugin(ScrollTrigger);

export const ProjectCard = ({ project }) => {
  const imageRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (cursorRef?.current) {
      gsap.to(cursorRef?.current, {
        x: cursorPosition.x,
        y: cursorPosition.y,
        scale: isHovered ? 2 : 0,
        duration: 0.3,
        transform: "translate(-50%, -50%)",
      });
    }
  }, [cursorPosition, isHovered]);

  return (
    <>
      {" "}
      <div
        onClick={() => {
          window.open(project.url, "_blank");
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="project-card flex max-w-[30rem] w-full flex-col gap-4 grow m-2 relative overflow-hidden cursor-pointer"
      >
        <div
          ref={cursorRef}
          className="project-card-custom-cursor"
          style={{
            position: "fixed",
            pointerEvents: "none",
            left: 0,
            top: 0,
            width: "50px",
            height: "50px",
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

        <div className="overflow-hidden ">
          <Image
            ref={imageRef}
            src={project.image}
            width={13000}
            height={13000}
            alt={project.name}
            loading="lazy"
            placeholder="blur"
            blurDataURL="https://placeholder.co/2000"
            objectFit="cover"
            className="h-auto max-w-full hover:scale-[1.03] transition-all"
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
      name: "Impenny",
      url: "https://impenny.me",
      image: "https://i.imgur.com/KHtTwyH.png",
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
      <section className="my-[10rem] py-[2rem] max-w-[80rem]  w-full mx-auto ">
        <div className="flex flex-wrap justify-center flex-grow gap-20 ">
          {Projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={{
                name: project.name,
                url: project.url,
                image: project.image,
                year: project.year,
                category: project.category,
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};
