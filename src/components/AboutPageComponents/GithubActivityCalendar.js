import GitHubCalendar from "react-github-calendar";
import Link from "next/link";
import { playClickSound } from "../../utils/functions/ClickAudioPlayer";

const GithubActivityCalendar = () => {
  const current_year = new Date().getFullYear();

  return (
    <div className="about-github-contribution-chart">
      <Link
        style={{
          textAlign: "center",
          fontSize: "0.8rem",
          width: "fit-content",
          textAlign: "center",
        }}
        href="https://github.com/preetsuthar17"
        onClick={playClickSound}
        className="no-decoration p-color"
        target="_blank"
      >
        <p>@preetsuthar17 on GitHub - {current_year}</p>
      </Link>
      <div className="about-github-contribution">
        <div
          className="contribute-div"
          style={{
            marginTop: "1rem",
          }}
        >
          <GitHubCalendar
            year={2024}
            colorScheme="dark"
            style={{ marginBottom: "0.6rem" }}
            username="preetsuthar17"
          />
        </div>
      </div>
      <p
        style={{
          fontSize: "0.8rem",
          marginTop: "0.2rem",
          fontStyle: "italic",
        }}
        className="p-color"
      >
        Scroll horizontally <span style={{ fontStyle: "normal" }}>❯</span>
      </p>
    </div>
  );
};

export default GithubActivityCalendar;
