import Image from "next/image";
import { projects } from "@/data/projects";

export const ProjectsCard = ({ project }) => {
  const Archived = () => {
    return (
      <div className="text-orange-500 text-center px-2 rounded-full text-[12px] bg-transparent border border-orange-500 font-medium">
        Archived
      </div>
    );
  };

  const Aquired = () => {
    return (
      <div className="text-green-500 text-center px-2 rounded-full text-[12px] font-medium bg-transparent border border-green-500 ">
        Aquired
      </div>
    );
  };

  const ProjectStatus = () => {
    if (project.status === "archived") {
      return <Archived />;
    } else if (project.status === "aquired") {
      return <Aquired />;
    } else {
      return null;
    }
  };

  return (
    <>
      <div
        onClick={() => {
          window.open(project.url, "_blank");
        }}
        className="p-4 transition-all hover:bg-gray-100 cursor-pointer rounded-xl duration-[0.2s] project-card hover:scale-[1.01] "
      >
        <h3 className="font-semibold text-[16px] opacity-95 lowercase flex items-center gap-3">
          <Image
            src={project.logo}
            width={25}
            height={25}
            alt="link"
            fetchPriority="auto"
          />
          {project.title} {<ProjectStatus />}
        </h3>
        <p className="text-[14px] opacity-80 pt-2 leading-tight lowercase">
          {project.description}
        </p>{" "}
      </div>
    </>
  );
};

export const Projects = () => {
  return (
    <>
      <section className="flex flex-col gap-10 py-7">
        <div className="flex flex-col ">
          <h2 className="px-4 text-3xl  py-7 h2  old-standard-fonts font-medium tracking-tight">
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
                status: project.status,
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};
