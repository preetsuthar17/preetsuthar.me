import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";

const ProjectDivComponent = () => {
  const fadeInLeft = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  useEffect(() => {
    const handleMousemove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
      e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    };
    document.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("mousemove", handleMousemove);
      return () => {
        card.removeEventListener("mousemove", handleMousemove);
      };
    });
  }, []);
  return (
    <div className="project-div">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeInLeft}
        transition={{ duration: 0.5 }}
      >
        <div className="project-headers">
          <div className="project-title">
            <h1>&#47;projects</h1>
          </div>
          <div className="project-header-text">
            <p>You can view more on my github.</p>
          </div>
        </div>
      </motion.div>
      <div className="styled-hr"></div>
      <div className="project-headers">
        <div className="featured-section">
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeInLeft}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProjectCard
              projectName="preetsuthar.me"
              projectLink="https://preetsuthar.me"
              projectStack="NextJs"
              projectAbout=" This is my open-source personal portfolio website and blog website built running on next.js and react.js and using Vercel."
            />{" "}
            <ProjectCard
              projectName="Nooder Bot Website"
              projectLink="https://nooderbot.com"
              projectStack="NextJs"
              projectAbout="Nooder bot is all in one discord bot used to manage your server seamlessly. It has in built protection from scams and phishing, nooderbot.com is website for the bot built by Preet Suthar."
            />
          </motion.div>
        </div>
      </div>
      <div className="styled-hr"></div>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeInLeft}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="project-container">
          <ProjectCard
            projectName="TodoZenith"
            projectLink="https://todozenith.vercel.app/"
            projectStack="JavaScript"
            projectAbout="Simplified JavaScript CRUD to-do manager with advanced features for effortless task management. Get things done with ease!"
          />

          <ProjectCard
            projectName="Dracodemy"
            projectLink="https://Dracodemy.tech"
            projectStack="NextJs"
            projectAbout="Dracodemy is online learning website with a lot of resource to learn the most basic to advance content related to programming."
          />

          <ProjectCard
            projectName="Advance blog template"
            projectLink="https://gatsby-blog-temp.netlify.app"
            projectStack="GatsbyJs"
            projectAbout="Gatsby Blog Template - Open Source and Welcoming Contributions."
          />

          <ProjectCard
            projectName="Advance portfolio template"
            projectLink="https://gatsby-portfolio-temp.netlify.app"
            projectStack="GatsbyJs"
            projectAbout=" Portfolio Website Template - Open Source and Welcoming Contributions."
          />

          <ProjectCard
            projectName="Discord bot website template"
            projectLink="https://discord-bot-webpage-template.netlify.app/"
            projectStack="NextJs"
            projectAbout="Minimal and awesome discord bot website created with love using NextJS."
          />

          <ProjectCard
            projectName="ShadowedNight"
            projectLink="https://marketplace.visualstudio.com/items?itemName=Pritudev.shadowednight"
            projectStack="JavaScript"
            projectAbout="Embrace the mystery of the night with an elegant and immersive dark theme for a captivating coding experience."
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDivComponent;
