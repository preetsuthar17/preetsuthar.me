export const ProjectsCard = ({ project }) => {
  return (
    <>
      <div
        onClick={() => {
          window.open(project.url, "_blank");
        }}
        className="p-4 transition-all hover:bg-zinc-950 cursor-pointer rounded-xl duration-[0.2s]"
      >
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm opacity-80">{project.description}</p>
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
        "Elevate your projects with stunning, modern components. Simply copy and paste these responsive, beautiful elements for instant awesomeness",
      url: "https://ui.hextastudio.in",
    },
  ];
  return (
    <>
      <section className="flex flex-col py-10 gap-7">
        <h2 className="px-4 text-2xl font-bold tracking-tight ">Projects</h2>
        <div className="flex flex-col gap-2">
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
      </section>
    </>
  );
};
