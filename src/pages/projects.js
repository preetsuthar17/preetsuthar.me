import Link from "next/link";
import Head from "next/head";

import { ArrowLeft } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

import projects from "@/data/projects";

export default function projectsPage() {
  return (
    <>
      <Head>
        <title>Projects - Preet Suthar</title>
        <meta name="robots" content="all" />
        <meta name="description" content="My personal portfolio website." />
        <meta name="theme-color" content="#fffffff" />
        <meta httpEquiv="content-language" content="en" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="og:title" content="Projects - Preet Suthar" />
        <meta
          property="og:description"
          content="My personal portfolio website."
        />
        <meta property="og:url" content="https://preetsuthar.me/projects" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/Pwhm0a2.png" />
        <meta
          name="keywords"
          content="Projects - Preet Suthar, SaaS Creator, Portfolio, Blog, web development, preet, front end development, SaaS Creator"
        />
        <meta name="author" content="Projects - Preet Suthar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:title" content="Projects - Preet Suthar" />
        <meta
          name="twitter:description"
          content="My personal portfolio website."
        />{" "}
        <meta name="subject" content="web development" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Projects - Preet Suthar",
            url: "https://preetsuthar.me/projectss",
            image: "https://preetsuthar.me/website-icon.webp",
            sameAs: [
              "https://www.linkedin.com/in/preetsuthar17/",
              "https://github.com/preetsuthar17",
              "https://x.com/nott_preet",
              "https://preetsuthar.me",
              "https://discord.com/users/741549223127941170",
            ],
            jobTitle: "SaaS Creator",
          })}
        </script>
      </Head>
      <div className="flex flex-col gap-10 py-20 basics-prose [font:var(--type)]">
        <div>
          <Link
            href="/"
            className="text-muted-foreground flex items-center gap-1 text-sm underline"
          >
            <ArrowLeft size={12} /> Home
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold  mb-8">Projects</h1>
            <div className="flex flex-col gap-4">
              {projects.map((project) => (
                <article key={project.id} className="group">
                  <Link
                    href={`${project.link}`}
                    className="flex justify-between gap-4 flex-wrap"
                  >
                    <p className="font-medium  flex items-center gap-2">
                      {project.title} <ArrowUpRight size={14} />
                    </p>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
