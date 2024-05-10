export const ProjectsCard = ({ project }) => {
  return (
    <>
      <div
        onClick={() => {
          window.open(project.url, "_blank");
        }}
        className="p-4 transition-all hover:bg-zinc-950 cursor-pointer rounded-xl duration-[0.2s]"
      >
        <h3 className="font-semibold text-md opacity-95">{project.title}</h3>
        <p className="text-[14px] opacity-80 leading-tight">
          {project.description}
        </p>
      </div>
    </>
  );
};

export const FreelanceProjectsCard = ({ project }) => {
  return (
    <>
      <div
        onClick={() => {
          window.open(project.url, "_blank");
        }}
        className="p-4 transition-all hover:bg-zinc-950 cursor-pointer rounded-xl duration-[0.2s]"
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
    },
    {
      title: "HextaUI",
      description:
        "Copy and paste some Stunning & Modern components in your website.",
      url: "https://ui.hextastudio.in",
    },
  ];

  const FreelanceProjects = [
    {
      title: "Nooderbot website",
      url: "https://nooderbot.com",
    },
    {
      title: "Vultrex website",
      url: "https://beta.vultrex.dev",
    },
    {
      title: "YADMB bot website",
      url: "https://yadmb.xyz",
    },
    {
      title: "Impenny website",
      url: "https://impenny.me",
    },
    {
      title: "Bidme bot website",
      url: "https://bidme.bot",
    },
    {
      title: "Hood Ecommerce website",
      url: "https://hood.pw",
    },
  ];

  return (
    <>
      <section className="flex flex-col gap-10 py-10">
        <div className="flex flex-col gap-2">
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
              }}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2">
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
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};
