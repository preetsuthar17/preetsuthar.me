import Image from "next/image";
import Link from "next/link";

const ShowcaseProjects = () => {
  return (
    <>
      <hr />
      <section className="showcase-projects">
        <div className="showcase-projects-heading">
          <h2>Projects 🚀</h2>
          <Link href="/projects">Explore more</Link>
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
      </section>
      <hr />
    </>
  );
};

export default ShowcaseProjects;
