import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export const ProjectsCard = ({ project }) => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [rotation, setRotation] = useState(0);
  const projectImageRef = useRef(null);
  const maxRotation = 8;

  useEffect(() => {
    gsap.to(projectImageRef.current, {
      top: mousePosition.y,
      left: mousePosition.x,
      rotate: `${rotation}deg`,
      duration: 0.4,
      ease: "ease.inOut",
    });
  }, [mousePosition]);

  useEffect(() => {
    const HandleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const midpoint = window.innerWidth / 2;
      const distanceFromMidpoint = Math.abs(e.clientX - midpoint);
      const rotation = (distanceFromMidpoint / midpoint) * maxRotation;

      setRotation(e.clientX > midpoint ? rotation : -rotation);
    };

    window.addEventListener("mousemove", HandleMouseMove);

    return () => {
      window.removeEventListener("mousemove", HandleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        onClick={() => {
          window.open(project.url, "_blank");
        }}
        className="p-4 transition-all hover:bg-zinc-950 cursor-pointer rounded-xl duration-[0.2s] project-card"
      >
        <h3 className="font-semibold text-md opacity-95">{project.title}</h3>
        <p className="text-[14px] opacity-80 leading-tight">
          {project.description}
        </p>{" "}
        <div className="project-image" ref={projectImageRef}>
          <Image
            src={project.image}
            width={1920}
            height={1080}
            alt={project.title}
          />
        </div>
      </div>
    </>
  );
};

export const FreelanceProjectsCard = ({ project }) => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [rotation, setRotation] = useState(0);
  const projectImageRef = useRef(null);
  const maxRotation = 8;

  useEffect(() => {
    gsap.to(projectImageRef.current, {
      top: mousePosition.y,
      left: mousePosition.x,
      rotate: `${rotation}deg`,
      duration: 0.4,
      ease: "ease.inOut",
    });
  }, [mousePosition]);

  useEffect(() => {
    const HandleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const midpoint = window.innerWidth / 2;
      const distanceFromMidpoint = Math.abs(e.clientX - midpoint);
      const rotation = (distanceFromMidpoint / midpoint) * maxRotation;

      setRotation(e.clientX > midpoint ? rotation : -rotation);
    };

    window.addEventListener("mousemove", HandleMouseMove);

    return () => {
      window.removeEventListener("mousemove", HandleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        onClick={() => {
          window.open(project.url, "_blank");
        }}
        className="p-4 transition-all hover:bg-zinc-950 cursor-pointer rounded-xl duration-[0.2s] project-card"
      >
        <h3 className="font-semibold text-md opacity-95">{project.title}</h3>
        <p className="flex items-center gap-[3px] text-sm opacity-80">
          view project{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z"
            />
          </svg>
        </p>
        <div className="project-image" ref={projectImageRef}>
          <Image
            src={project.image}
            width={1920}
            height={1080}
            alt={project.title}
          />
        </div>
      </div>
    </>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: "HextaStudio",
      description:
        "Web design and development agency providing top notch work in affordable pricing.",
      url: "https://hextastudio.in",
      image: "https://i.imgur.com/huZGKSH.png",
    },
    {
      title: "HextaUI",
      description:
        "Copy and paste some Stunning & Modern components in your website.",
      url: "https://ui.hextastudio.in",
      image: "https://i.imgur.com/8C8GAXi.png",
    },
  ];

  const FreelanceProjects = [
    {
      title: "Dhruvi Portfolio",
      url: "https://dhruvisuthar.pages.dev",
      image: "https://i.imgur.com/xRk1CAk.png",
    },
    {
      title: "Nooderbot website",
      url: "https://nooderbot.com",
      image: "https://i.imgur.com/rjJ1kQP.png",
    },
    {
      title: "Vultrex website",
      url: "https://beta.vultrex.dev",
      image: "https://i.imgur.com/m7p1hqz.png",
    },
    {
      title: "YADMB bot website",
      url: "https://yadmb.xyz",
      image: "https://i.imgur.com/G5U8MyH.jpeg",
    },
    {
      title: "Impenny website",
      url: "https://impenny.me",
      image: "https://i.imgur.com/F7SfgGo.png",
    },
    {
      title: "Bidme bot website",
      url: "https://bidme.bot",
      image: "https://i.imgur.com/9POvguH.png",
    },
    {
      title: "Hood E-commerce website",
      url: "https://hood.pw",
      image: "https://i.imgur.com/bv2MW17.png",
    },
  ];

  return (
    <>
      <section className="flex flex-col gap-10 py-10">
        <div className="flex flex-col ">
          <h2 className="px-4 text-2xl font-bold tracking-tight py-7 h2">
            Projects
          </h2>
          {projects.map((project, index) => (
            <ProjectsCard
              key={index}
              project={{
                title: project.title,
                description: project.description,
                url: project.url,
                image: project.image,
              }}
            />
          ))}
        </div>
        <div className="flex flex-col ">
          <h2 className="px-4 text-2xl font-bold tracking-tight py-7 h2">
            Freelance Work
          </h2>
          {FreelanceProjects.map((project, index) => (
            <FreelanceProjectsCard
              key={index}
              project={{
                title: project.title,
                description: project.description,
                url: project.url,
                image: project.image,
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};
