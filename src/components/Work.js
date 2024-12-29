"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "ContraFast",
    description: "Create & Sign Contracts 10x Faster.",
    link: "https://contrafast.in",
  },
  {
    title: "FlixFolio",
    description: "Create a Portfolio Without Writing Code.",
    link: "https://github.com",
  },
  {
    title: "NextLaunch",
    description: "Launch Your SaaS Faster Than Ever.",
    link: "https://nextlaunch.hextastudio.in",
  },
  {
    title: "HextaStudio",
    description: "Web design and development agency.",
    link: "https://hextastudio.in",
  },
  {
    title: "Roastt",
    description: "Get your website's hero section redesigned.",
    link: "https://roastt.hextastudio.in",
  },
  {
    title: "HextaStudio/ui",
    description: "Copy and paste Modern components.",
    link: "https://ui.hextastudio.in",
  },
];

const working = [
  {
    title: "IndieHub",
    description:
      "The Only Hub made for Indie Hackers. All the resources you need to build and grow your next project",
    link: "https://indiehub.hextastudio.in",
  },
];

export default function work({ posts }) {
  return (
    <>
      <article className="flex justify-between flex-wrap gap-6 text-left">
        <div className="flex-1 flex flex-col items-start justify-start gap-8">
          <h2 className="font-medium opacity-80 mb-4">Working</h2>
          <ul className="flex flex-col gap-4">
            {working.map((project, index) => (
              <li key={index} className="flex flex-col">
                <Link
                  className="flex items-center gap-1 font-medium font-inter"
                  target="_blank"
                  href={project.link}
                >
                  {project.title}
                  <FiArrowUpRight size={18} />
                </Link>
                <p className="text-sm opacity-80 mt-1">{project.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-8">
          <h2 className="font-medium opacity-80 mb-4">Projects</h2>
          <ul className="flex flex-col gap-4">
            {projects.slice(0, 5).map((project, index) => (
              <li key={index} className="flex flex-col">
                <Link
                  className="flex items-center gap-1 font-medium font-inter"
                  target="_blank"
                  href={project.link}
                >
                  {project.title}
                  <FiArrowUpRight size={18} />
                </Link>
                <p className="text-sm opacity-80 mt-1">{project.description}</p>
              </li>
            ))}
          </ul>
          <Link href="/writing" className="font-medium font-sans underline">
            View All Projects
          </Link>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-8">
          <h2 className="font-medium opacity-80">Writing</h2>
          <ul className="flex flex-col gap-4">
            {posts?.slice(0, 5).map((post) => (
              <li key={post.slug}>
                <Link
                  className="flex items-center gap-1 font-medium font-inter"
                  href={`/writing/${post.slug}`}
                >
                  {post.title}{" "}
                  <span>
                    <FiArrowUpRight size={18} />
                  </span>
                </Link>
                <p className="text-sm opacity-80 mt-1">{post.excerpt}</p>
              </li>
            ))}
          </ul>
          <Link href="/writings" className="font-medium font-sans underline">
            View All Posts
          </Link>
        </div>
      </article>
    </>
  );
}
