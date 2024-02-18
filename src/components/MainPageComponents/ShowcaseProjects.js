import Image from "next/image";
import Link from "next/link";

const ShowcaseProjects = () => {
  return (
    <>
      <hr />
      <section className="showcase-projects">
        <div className="showcase-projects-heading">
          <h2>Projects 🚀</h2>
        </div>
        <div className="showcase-projects-cards">
          <div className="showcase-projects-card">
            <div className="showcase-projects-card-image">
              <Image
                src="https://i.imgur.com/ceTjZMq.png"
                width={1920}
                height={1080}
                alt="AssistifyAI"
              />
            </div>
            <div className="showcase-projects-card-content">
              <p>01 —</p>
              <h2>AssistifyAI</h2>
              <p>
                Assistify AI is an Artificial Intelligence which uses COHERE
                services to allows users to process documents and use top notch
                models like COHERE and GPT4 to talk with documents
              </p>
              <div className="showcase-projects-card-links">
                <Link
                  className="primary-btn-main"
                  href="https://assistifyai.org"
                  target="_blank"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
          <div className="showcase-projects-card">
            <div className="showcase-projects-card-image">
              <Image
                src="https://i.imgur.com/hz5bJ67.png"
                width={1920}
                height={1080}
                alt="Nooderbot website"
              />
            </div>
            <div className="showcase-projects-card-content">
              <p>02 —</p>
              <h2>Nooderbot</h2>
              <p>
                Nooder bot is all in one discord bot used to manage your server
                seamlessly. It has in built protection from scams and phishing,
                nooderbot.com is website for the bot built by Preet Suthar.
              </p>
              <div className="showcase-projects-card-links">
                <Link
                  className="primary-btn-main"
                  target="_blank"
                  href="https://nooderbot.com"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="/projects"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            color: "white",
            textDecoration: "none",
            background: "#cccccc10",
            padding: "4px",
            borderRadius: "2px",
            fontSize: "13px",
          }}
        >
          Explore more projects{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 256 256"
            class="ml-1.5"
          >
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
          </svg>
        </Link>
      </section>
      <hr />
    </>
  );
};

export default ShowcaseProjects;
