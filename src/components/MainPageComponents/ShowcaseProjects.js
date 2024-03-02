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
                src="https://i.imgur.com/ljZUo4R.png"
                width={1920}
                height={1080}
                alt="Werktar"
              />
            </div>
            <div className="showcase-projects-card-content">
              <p>01 —</p>
              <h2>Werktar</h2>
              <p>
                Connect with talented web creators and bring your project to
                life. Find the perfect freelance writer, editor, designer, or
                programmer for your needs. Sign up today and start
                collaborating!
              </p>
              <div className="showcase-projects-card-links">
                <Link
                  className="primary-btn-main"
                  href="https://werktar.vercel.app"
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
                src="https://i.imgur.com/ceTjZMq.png"
                width={1920}
                height={1080}
                alt="AssistifyAI"
              />
            </div>
            <div className="showcase-projects-card-content">
              <p>02 —</p>
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
                src="https://i.imgur.com/lkd1nWF.png"
                width={1920}
                height={1080}
                alt="Snippix website"
              />
            </div>
            <div className="showcase-projects-card-content">
              <p>03 —</p>
              <h2>Snippix</h2>
              <p>
                Snippix allows you to convert your boring code blocks in
                beautiful images and let your export as PNG with so many
                customization options. You can use it right now it's completely
                free, no watermark and you can share it anywhere you want to!
              </p>
              <div className="showcase-projects-card-links">
                <Link
                  className="primary-btn-main"
                  target="_blank"
                  href="https://snippix.netlify.app"
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
