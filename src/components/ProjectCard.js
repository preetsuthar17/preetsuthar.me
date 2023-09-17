import Link from "next/link";

const ProjectCard = (props) => {
  return (
    <>
      <div className="project-card">
        <Link target="_blank" href={props.projectLink}>
          <div className="project-header">
            <span>{props.projectName}</span>
          </div>
          <div className="project-stack">
            <span>{props.projectStack}</span>
          </div>
          <p className="project-text">{props.projectAbout}</p>
        </Link>
        <Link className="project-link" target="_blank" href={props.projectLink}>
          ⭐ Live Demo
        </Link>
      </div>
    </>
  );
};

export default ProjectCard;
