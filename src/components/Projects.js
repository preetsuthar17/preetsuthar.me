import Image from "next/legacy/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Splide, SplideSlide } from "@splidejs/react-splide";

gsap.registerPlugin(ScrollTrigger);

export const ProjectCard = ({ project }) => {
  return (
    <>
      {" "}
      <div
        onClick={() => {
          window.open(project.url, "_blank");
        }}
        className="relative flex flex-col max-w-full gap-4 overflow-hidden project-card cursor-grab"
      >
        <div className="overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            width={4186}
            height={2388}
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
      <section
        className="mt-[10rem] pt-[2rem] w-full mx-auto max-w-[95%]"
        id="projects"
      >
        <div className="relative border border-t-0 border-l-0 border-r-0">
          <h2 className="text-5xl pb-[5rem]">Featured Work</h2>
          <div className="absolute bottom-[7.5px] left-2">
            <span className="absolute w-[1px] h-4 rotate-90 bg-black"></span>
            <span className="absolute w-[1px] h-4  bg-black"></span>
          </div>
          <div className="absolute bottom-[7.5px] right-2">
            <span className="absolute w-[1px] h-4 rotate-90 bg-black"></span>
            <span className="absolute w-[1px] h-4  bg-black"></span>
          </div>
        </div>
        <div className="py-[6rem]">
          <Splide
            style={{
              cursor: "grab",
            }}
            options={{
              type: "loop",
              focus: 1,
              autoplay: true,
              interval: 5000,
              drag: "free",
              pagination: false,
              arrows: false,
              autoScroll: true,
              pauseOnFocus: true,
              gap: "2rem",
            }}
          >
            {Projects.map((project, index) => (
              <SplideSlide key={index}>
                <ProjectCard
                  project={{
                    name: project.name,
                    url: project.url,
                    image: project.image,
                    year: project.year,
                    category: project.category,
                  }}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
    </>
  );
};
