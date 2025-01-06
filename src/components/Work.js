"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import projects from "@/data/projects";

const working = [
  {
    title: "HextaUI",
    description: "Build stunning websites with less effort.",
    link: "https://hextaui.com",
  },
];

export default function work({ posts }) {
  return (
    <>
      <article className="flex justify-between flex-wrap gap-12 text-left">
        <div className="flex-1 flex flex-col items-start justify-start gap-6">
          <h2 className="font-medium opacity-80 mb-4">Working</h2>
          <ul className="flex flex-col gap-4">
            {working.map((project, index) => (
              <li
                key={index}
                className="flex flex-col items-start text-left gap-2"
              >
                <Link
                  className="flex items-start gap-1 font-medium  justify-between w-full"
                  target="_blank"
                  href={project.link}
                >
                  {project.title}
                  <FiArrowUpRight size={18} />
                </Link>
                <p className="text-sm opacity-80">{project.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start text-left gap-6">
          <h2 className="font-medium opacity-80 mb-4">Projects</h2>
          <ul className="flex flex-col gap-4">
            {projects.slice(0, 5).map((project, index) => (
              <li key={index} className="flex flex-col items-start  gap-2">
                <Link
                  className="flex items-start gap-1 font-medium  justify-between w-full"
                  target="_blank"
                  href={project.link}
                >
                  {project.title}
                  <FiArrowUpRight size={18} />
                </Link>
                <p className="text-sm opacity-80">{project.description}</p>
              </li>
            ))}
          </ul>
          <Link href="/projects" className="font-medium  text-sm underline">
            View All Projects
          </Link>
        </div>
        <div className="flex-1 flex flex-col items-start justify gap-6">
          <h2 className="font-medium opacity-80 mb-4">Writing</h2>
          <ul className="flex flex-col gap-4">
            {posts?.slice(0, 4).map((post) => (
              <li
                key={post.slug}
                className="flex flex-col items-start text-left gap-2"
              >
                <Link
                  className="flex items-start gap-1 font-medium justify-between w-full"
                  href={`/writing/${post.slug}`}
                >
                  {post.title}
                  <span>
                    <FiArrowUpRight size={18} />
                  </span>
                </Link>
                <p className="text-sm opacity-80 text-left">{post.excerpt}</p>
              </li>
            ))}
          </ul>
          <Link href="/writings" className="font-medium  text-sm underline">
            View All Posts
          </Link>
        </div>
      </article>
    </>
  );
}
