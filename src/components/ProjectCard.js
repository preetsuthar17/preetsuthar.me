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
          <abbr title="Open preview">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="#777"
                d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"
              />
            </svg>
          </abbr>
        </Link>
      </div>
    </>
  );
};

export default ProjectCard;
