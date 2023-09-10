import Link from "next/link";

const ProjectCard = (props) => {
  return (
    <>
      <div className="project-card">
        <Link target="_blank" href={props.projectLink}>
          <div className="project-header">
            <span>{props.projectName}</span>
          </div>

          <p className="project-text">{props.projectAbout}</p>
        </Link>
        <Link target="_blank" href={props.projectLink}>
          ⭐ Live Demo
        </Link>
      </div>
    </>
  );
};

export default ProjectCard;
