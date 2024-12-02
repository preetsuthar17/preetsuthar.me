import Image from "next/image";

export const ProjectsCard = ({ project }) => {
  return (
    <>
      <div
        onClick={() => {
          window.open(project.url, "_blank");
        }}
        className="p-4 transition-all hover:bg-zinc-950 cursor-pointer rounded-xl duration-[0.2s] project-card hover:scale-[1.01] "
      >
        <h3 className="font-semibold text-[16px] opacity-95 lowercase flex items-center gap-3">
          <Image
            src={project.logo}
            width={20}
            height={20}
            alt="link"
            fetchPriority="auto"
          />
          {project.title}
        </h3>
        <p className="text-[14px] pt-1 opacity-80 leading-tight lowercase">
          {project.description}
        </p>{" "}
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
      logo: "/logos/hexta-studio.png",
    },
    {
      title: "HextaStudio/ui",
      description:
        "Copy and paste some Stunning & Modern components in your website.",
      url: "https://ui.hextastudio.in",
      logo: "/logos/hexta-studio.png",
    },
    {
      title: "Strippy",
      description:
        "Manage your stripe account directly from discord using Strippy",
      url: "https://strippy.in",
      logo: "/logos/strippy.png",
    },
  ];

  return (
    <>
      <section className="flex flex-col gap-10 py-7">
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
                logo: project.logo,
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};
