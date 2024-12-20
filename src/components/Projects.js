import Image from "next/image";
import { projects } from "@/data/projects";
import { OptimizedImage } from "@/components/OptimizedImage";

export const ProjectsCard = ({ project }) => {
  const Archived = () => {
    return (
      <div className="text-orange-950 dark:text-orange-300 text-center px-2 rounded-full text-[12px] bg-transparent border border-orange-950 dark:border-orange-300 font-medium">
        Archived
      </div>
    );
  };

  const Aquired = () => {
    return (
      <div className="text-green-950 dark:text-green-300 text-center px-2 rounded-full text-[12px]  bg-transparent border border-green-950 dark:border-green-300 font-medium">
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
        className="p-4 transition-all dark:hover:bg-zinc-900 hover:bg-gray-100 cursor-pointer rounded-xl duration-[0.2s] project-card hover:scale-[1.01] "
      >
        <h3 className="font-medium text-[16px] opacity-95 lowercase flex items-center gap-3">
          <OptimizedImage
            src={project.logo}
            width={25}
            height={25}
            alt={`${project.title} logo`}
            className="rounded"
            quality={75}
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
      <section className="flex flex-col">
        <div className="flex flex-col gap-5 ">
          <h2 className="px-4 text-3xl  h2  old-standard-fonts font-medium tracking-tight">
            Projects
          </h2>
          <div className="flex flex-col gap-2">
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
        </div>
      </section>
    </>
  );
};
