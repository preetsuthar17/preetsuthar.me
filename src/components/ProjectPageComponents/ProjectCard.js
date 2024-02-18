import Link from "next/link";
import { playClickSound } from "../../utils/functions/ClickAudioPlayer";

const ProjectCard = (props) => {
  return (
    <>
      <div className="project-card">
        <Link onClick={playClickSound} target="_blank" href={props.projectLink}>
          <div className="project-header">
            <span>{props.projectName}</span>
          </div>
          <div className="project-stack">
            <span>{props.projectStack}</span>
          </div>
          <p className="project-text">{props.projectAbout}</p>
        </Link>
        <Link
          className="project-link"
          onClick={playClickSound}
          target="_blank"
          href={props.projectLink}
        >
          View project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m16.288 7.208l-9.765 9.746q-.14.14-.344.13q-.204-.009-.344-.15q-.14-.14-.14-.334t.14-.335L15.58 6.5H6.788q-.212 0-.356-.144t-.144-.357t.144-.356q.144-.143.356-.143h9.693q.343 0 .575.232q.232.232.232.576V16q0 .213-.143.356t-.357.144q-.213 0-.356-.144T16.288 16z"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default ProjectCard;
